import { BaseEntity } from 'typeorm';
export declare class Article extends BaseEntity {
    id: number;
    title: string;
    author: string;
    date: number;
    summary: string;
    text: string;
    html: string;
}
