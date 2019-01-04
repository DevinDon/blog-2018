import { BaseEntity } from 'typeorm';
export declare class Motto extends BaseEntity {
    id: number;
    author: string;
    text: string;
}
