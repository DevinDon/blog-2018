import { BaseEntity } from 'typeorm';
export declare class Image extends BaseEntity {
    id: number;
    link: string;
    image: any;
    text: string;
    date: number;
}
