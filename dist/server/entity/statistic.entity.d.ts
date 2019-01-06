import { BaseEntity } from 'typeorm';
export declare class Statistic extends BaseEntity {
    id: number;
    who: string;
    when: number;
    where: string;
    what: string;
}
export default Statistic;
