import Crawler, { DOM } from './Crawler';
import Song from '../entity/song.entity';
export declare class SongCrawler extends Crawler {
    constructor();
    protected fetch(url: string): Promise<DOM>;
    protected parse(data: DOM): Promise<Partial<Song>[]>;
    protected save(data: Partial<Song>[]): Promise<boolean>;
}
export default SongCrawler;
