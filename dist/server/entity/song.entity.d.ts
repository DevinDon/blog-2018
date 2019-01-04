import { BaseEntity } from 'typeorm';
export declare class Song extends BaseEntity {
    id: number;
    title: string;
    artist: string;
    album: string;
    time: number;
}
export default Song;
