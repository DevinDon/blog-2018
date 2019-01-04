export interface DOM<T = string> {
    id: number;
    url: string;
    doc: Document;
}
export declare class Crawler<T = any> {
    constructor();
    protected fetch(url: string): Promise<DOM>;
    protected parse(data: DOM): Promise<Partial<T>>;
    protected save(data: Partial<T>): Promise<boolean>;
    run(url: string): Promise<boolean>;
}
export default Crawler;
