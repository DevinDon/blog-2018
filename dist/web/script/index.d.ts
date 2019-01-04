/** 响应内容. */
interface Resp<T = string> {
    /** 数据包编号. */
    id: number;
    /** 业务逻辑标识, 非 HTTP 响应码. */
    status: boolean;
    /** 响应主体. */
    content: T;
}
/** 座右铭. */
interface Motto {
    id: number;
    author: string;
    text: string;
}
/** 文章. */
interface Article {
    /** 编号. */
    id: number;
    /** 标题. */
    title: string;
    /** 作者. */
    author: string;
    /** 日期, date.getTime(). */
    date: number;
    /** 摘要. */
    summary: string;
    /** 正文. */
    text: string;
    /** HTML 文档. */
    html: string;
}
/** 图片数据.  */
interface Image {
    id: number;
    link: string;
    image: string;
    text: string;
    date: number;
}
/** 音乐数据. */
interface Song {
    id: number;
    title: string;
    artist: string;
    link: string;
    song: any;
    album: string;
    time: number;
}
/** 离线资源. */
interface Offline {
    articles: Article[];
    images: Image[];
    mottos: Motto[];
    songs: Song[];
}
/** API 相关. */
declare class API {
    private server;
    private offline;
    constructor(server?: string);
    /** 获取一篇随即文章. */
    getRandomArticle(): Article;
    /** 获取一张随机图片. */
    getRandomImage(): Image;
    /** 获取一句随机座右铭. */
    getRandomMotto(): Motto;
    /** 获取一首随机歌曲. */
    getRandomSong(): Song;
    /**
     * 获取最近的若干篇文章.
     * @param options 条件, 若为空则获取最近的 5 篇文章.
     */
    getArticles(options?: Partial<Article>): Promise<Article[]>;
    /**
     * 获取最近的若干篇文章.
     * @param options 条件, 若为空则获取最近的 5 篇文章.
     */
    getImages(options?: Partial<Image>): Promise<Image[]>;
    /**
     * Async 获取座右铭.
     */
    getMottos(options?: any): Promise<Motto[]>;
    /**
     * 获取最近的若干首音乐.
     * @param options 条件, 若为空则获取最近的 5 首音乐.
     */
    getSongs(options?: Partial<Song>): Promise<Song[]>;
}
/** 标题类型 */
declare type Title = 'home' | 'article' | 'image' | 'song' | 'about' | 'blog';
/** 对应中文名称. */
declare type Name = '首页' | '文字' | '时刻' | '声音' | '关于' | '窗台';
interface PageElement {
    name: Name;
    nav: HTMLLinkElement;
    section: HTMLElement;
}
interface Content {
    home: PageElement;
    article: PageElement;
    image: PageElement;
    song: PageElement;
    about: PageElement;
    blog: PageElement;
    [index: string]: PageElement;
}
interface Page {
    /** 页面标题元素. */
    title: HTMLElement;
    /** 座右铭. */
    motto: HTMLElement;
    /** 工具箱. */
    toolbox: HTMLElement;
}
/** 应用核心, 用于页面控制. */
declare class APP {
    /** API 服务. */
    private api;
    /** 对话框管理. */
    dialog: Dialog;
    /** 星空背景. */
    starrysky: StarrySky;
    /** 页面内容. */
    private content;
    /** 页面标题. */
    private page;
    /** 当前页面. */
    private currectPage;
    /**
     * 生成一个单页应用管理器.
     * @param page 初始页面, 默认为首页.
     */
    constructor();
    /** 滚动. */
    static scrollTo(end?: XYZ, position?: XYZ): void;
    /** 定时器任务. */
    private init;
    /** 进入动画. */
    private welcome;
    /** 定时切换座右铭. */
    private changeMotto;
    /** 监听本地路由. */
    private listeningLocalRoute;
    /** 设置当前页面内容. */
    setCards(page?: Title): Promise<void>;
    setPlayer(song: Song): Promise<void>;
    /**
     * 生成文章卡片.
     * @param articles 文章内容.
     */
    private generateArticleCards;
    /**
     * 生成图片卡片.
     * @param images 图片内容.
     */
    private generateImageCards;
    /**
     * 生成歌曲卡片.
     * @param songs 歌曲内容.
     */
    private generateSongCards;
    refresh(): void;
    /**
     * 切换到指定页面.
     * @param page 指定页面.
     */
    active(page: Title, param?: string[]): Promise<false | undefined>;
}
/** 对话框相关. */
declare class Dialog {
    /** 编号. */
    private no;
    /** 对话框区域. */
    private area;
    constructor();
    toggleFull(): void;
    add(target: JQuery<HTMLElement>): void;
    clear(): void;
    /**
     * 在页面上生成一个对话框.
     * @param text 对话框文本.
     * @param type 对话框类型.
     */
    generate(html: string, type?: 'info' | 'warning' | 'error'): HTMLDivElement;
    /**
     * 从页面中移除指定的 dialog.
     * @param id dialog ID.
     */
    remove(id: string): HTMLElement | undefined;
}
/** 立体坐标, Z 轴保留. */
interface XYZ {
    x: number;
    y: number;
    z: number;
}
/** 星星属性. */
interface Star {
    /** 位置, 以左上角为定位点. */
    position: XYZ;
    /** 尺寸, 以位置为左上角向其他方向拓展. */
    size: XYZ;
    /** 移动速度及方向, 每个方向独立计算, 单位: 像素每帧 (pixel per frame) */
    speed: XYZ;
    /** 颜色, HEX 表示. */
    color: string;
}
/** 星空. */
declare class StarrySky {
    /** 画布元素. */
    private canvas;
    /** 渲染上下文. */
    private context;
    /** 星星数组. */
    private stars;
    /** Animation handle. */
    private handle;
    /** 鼠标位置. */
    private cursor;
    /** 创建一个星空画布, 并绘制上星星. */
    constructor(canvasID: string);
    /** 初始化. */
    private init;
    /**
     * 绘制某个星星.
     * @param v 星星.
     * @returns 移动后的星星.
     */
    private drawStar;
    /** 绘制背景. */
    private generateBackground;
    /**
     * 生成一个星星.
     * @returns 返回生成的星星.
     */
    private randomStar;
    /**
     * 生成指定数量的随机星星.
     * @param amount 生成数量, 默认为 50.
     * @returns 生成的星星数组.
     */
    private randomStars;
    /**
     * 重绘整个星空.
     * @param time 时间.
     * @returns Animation handle.
     */
    private redraw;
    /** 开始绘制星空. */
    start(): void;
    /** 暂停绘制星空. */
    stop(): void;
}
