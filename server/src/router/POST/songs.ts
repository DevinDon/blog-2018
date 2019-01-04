import { Middleware } from 'koa';
import { getOffset } from '../config';
import Song from '../../entity/song.entity';
import { Resp } from '../../type';

interface REQContent {
  amount?: number;
}

type RESPContent = Partial<Song>[];

/** POST: Song[]. */
export const songs: Middleware = async (c, next) => {
  const req: REQContent = {
    amount: c.request.body.amount
  };
  const results: RESPContent = await Song
    .createQueryBuilder()
    .offset(getOffset(await Song.count(), req.amount || 6))
    .limit(req.amount || 6)
    .getMany();
  const data: RESPContent = [];
  for (const result of results) {
    data.push({
      id: result.id,
      title: result.title,
      artist: result.artist,
      album: result.album,
      time: result.time
    });
  }
  (c.body as Resp<RESPContent>) = {
    id: Date.now(),
    status: Boolean(results.length),
    content: data
  };
  await next();
};

export default songs;
