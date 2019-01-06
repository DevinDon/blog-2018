export interface InterfaceArticle {
    id: number;
    title: string;
    author: string;
    date: number;
    summary: string;
    text: string;
    html: string;
}
export interface Req<T = string> {
    id: number;
    key: string;
    content: T;
}
export interface Resp<T = string> {
    id: number;
    status: boolean;
    content: T;
}
export interface LocalConfig {
    static: string;
}
