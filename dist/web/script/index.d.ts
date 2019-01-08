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
    private dialog;
    private server;
    private offline;
    constructor(dialog: Dialog, server?: string);
    /** 获取一篇随即文章. */
    getRandomArticle(): Article;
    /** 获取一张随机图片. */
    getRandomImage(): Image;
    /** 获取一句随机座右铭. */
    getRandomMotto(): Motto;
    /** 获取一首随机歌曲. */
    getRandomSong(): Song;
    private catchAPIError;
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
interface APPError {
    code: number;
    message?: string;
}
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
    /** 错误: 不支持本地访问. */
    static ERRORNOTSUPPORTLOCAL: number;
    /** API 服务. */
    private api;
    /** 对话框管理. */
    dialog: Dialog;
    /** 星空背景. */
    starrysky: StarrySky;
    /** 播放器. */
    player: Player;
    /** 页面内容. */
    private content;
    /** 页面标题. */
    private page;
    /** 当前页面. */
    private currectPage;
    private prefix;
    /**
     * 生成一个单页应用管理器.
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
    active(page: Title, param?: string[]): Promise<boolean | undefined>;
}
/** 对话框相关. */
declare class Dialog {
    /** 编号. */
    private no;
    /** 对话框区域. */
    private area;
    constructor();
    /** 设置网页暗色遮罩层. */
    toggleFull(): this;
    /** 向页面中添加一个自定义弹框. */
    add(target: JQuery<HTMLElement>): JQuery<HTMLElement>;
    clear(): this;
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
interface Params {
    target?: string;
    filter?: boolean;
    loop?: boolean;
    report?: string;
}
interface SongData {
    state: string;
    song: any;
    currentTime: number;
    duration: number;
    songs: any[];
    index: number;
    params: any;
}
interface PlayerVersion {
    build: string;
    version: string;
}
declare type EventList = 'play' | 'pause' | 'ended' | 'timeupdate' | 'waiting' | 'error';
declare type EventFunction = (e: any) => any;
declare class QMplayer {
    /** 当前播放属性. */
    state: string;
    /** 获取或设置音频中的当前播放位置（单位秒），设置功能只对web播放有效. */
    currentTime: number;
    /** 获取资源时长（单位秒），未加载到时返回 NaN. */
    duration: number;
    /** 获取当前播放歌曲信息. */
    data: SongData;
    /** 获取或设置循环播放开关. */
    loop: boolean;
    /** 获取或设置播放方式. */
    target: number;
    /** 获取或设置WEB播放听歌流水上报标识. */
    report: string;
    /** 获取组件版本号. */
    version: PlayerVersion;
    constructor(params?: Params);
    play(songs: string | number | (string | number)[]): any;
    pause(): any;
    toggle(play?: boolean): any;
    playPrev(): any;
    playNext(): any;
    on(event: EventList, listener: (e: any) => any): any;
    off(event: EventList, listener: (e: any) => any): any;
}
/**
 * 基于 QMPlayer 内核的网页播放器.
 * 暂时没有考虑复用问题, 如果内联样式和资源的话, 看起来就很像 Angular 的 Component 了.
 */
declare class Player {
    private dialog;
    private player;
    private $player;
    private $title;
    private $artist;
    private $albumname;
    private $albumimage;
    private $previous;
    private $toggle;
    private $next;
    constructor(dialog: Dialog);
    private init;
    toggle(song?: Song): void;
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
declare function toggleArticle(): false | undefined;
declare let app: APP;
declare let able: boolean;
