export declare class ImageCrawler {
    constructor();
    private getHTML;
    private get;
    private parse;
    private save;
    run(id?: number): Promise<void>;
    test(id?: number): Promise<void>;
}
export default ImageCrawler;
