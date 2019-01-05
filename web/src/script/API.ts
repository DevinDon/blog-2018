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
class API {

  private offline: Offline;

  constructor(
    private server: string = '/v1'
  ) {
    this.offline = {
      articles: [
        {
          id: 16,
          title: '小孩的世界里没有小事',
          author: '王悦微',
          summary: '虫子再小也要分好坏，小孩的世界里没有小事。',
          text: '编者注：这是一名小学老师的教学日志、教学随笔以及她的学生的一篇作文。*教学日志9月12日中午被几个二年级的学生请去做法官，到教室一看，两个男生倒在地上，一个揪着另一个的耳朵，另一个抱着对方的腿，气得面红耳赤。我花了半小时来审案子，原来教室里飞进了一只小虫，一个关窗去夹，想夹死它；另一个认为这是好虫子，不该夹死，就打起来了。虫子再小也要分好坏，小孩的世界里没有小事。9月23日念一年级的时候，有天诗人宇自告奋勇要上台给大家讲个他创编的故事。他说的是章鱼男孩在上学路上遇到章鱼女孩的事，“然后，他们开始握手，他们握了一次又一次，一次又一次，握到上学块迟到了也没握完”，他说，“因为他们是章鱼啊，哈哈哈”。说着，他自己在台上大笑了起来。10月10日 下课时候，小科神秘地冲琪琪笑着，说：“我发现有个成语很适合你！”琪琪用她一贯的大嗓门问道：“是什么？快说！”小科笑嘻嘻地说：“泼妇盛名！”说完转身就逃。*教学随笔给你一颗糖豆我有时觉得我的学生们很像寓言《朝三暮四》里的那几只猴子，需要不断地用栗子来挑起他们的兴致，而且，栗子还得经常变换，不能是同一种栗子。中午在办公室找到了一罐很特别的糖豆，于是就揣在口袋里，打算去逗逗班上的那群小猴子。我说，如果课堂上可以做到安静看书，我将发给他一颗糖豆作为奖励。于是，班级里鸦雀无声，他们都在静静地看书，连几个皮猴子也坐住了。我满意地笑了，然后挑了几个皮猴子上来领糖果。他们欢天喜地地上来，一人挑了一颗自己喜欢的糖果，飞快地丢进嘴巴里，其他学生露出眼馋的神情。这时，有个学生叫道：“怎么这糖有股药的味道啊？”问得好，此话正合我意嘛。我严肃地说：“其实，刚才我给你们的糖果，是有魔力的，它会自动检测出懒人，如果吃了糖果却不认真学习，那么他的脸上就会长出很多青春痘！”台下顿时发出一阵惊呼：“惨了，不会吧？”小孩真是幼稚，都上三年级了，居然也这么好骗。我得意地瞄了瞄他们：“不信？那你们试试看好了。”他们马上规规矩矩地坐好，一个个发奋看书写字画画起来。*小学生作文广告推销作者/仇婷（四年级） 大家好，这里是我们学校的热点推销站，请大家注意收看最新广告。第一款为大家推销的产品，她非常优秀，有两条胳膊两条腿，二十个手指头一个没少，另外还附加长长的头发。那她有什么用呢？欺负男生最管用啦！140cm以下10元一次，150 cm—140 cm15元一次，160 cm以上25元一次，体育老师免谈。她的原则是：先付钱后做事，但不能保证避免光收钱不干事的可能。如果想让她做一些有难度的事情，也是可以的，比如，抽马桶、试卷签名、打架、抓人，样样精通啊。不用说，这也是要收费的，5元一次，8元两次，还可以办理贵宾卡，一律打八折！万一有人忘带东西了，找她去吧，什么三角尺啦，铅笔啦，橡皮啦，样样俱全，免费借，弄坏的话，一赔十哦！这就是今天的热点推销产品，很不错吧？也许你们已经猜到她是谁了。对了，再告诉你们一件事：本广告纯属忽悠！',
          html: `<p class="fr-pspace-a0">编者注：这是一名小学老师的教学日志、教学随笔以及她的学生的一篇作文。</p><p class="fr-pspace-a0"><br></p><p class="fr-pspace-a0"><strong>*教学日志</strong></p><p class="fr-pspace-a0">9月12日</p><p class="fr-pspace-a0">中午被几个二年级的学生请去做法官，到教室一看，两个男生倒在地上，一个揪着另一个的耳朵，另一个抱着对方的腿，气得面红耳赤。我花了半小时来审案子，原来教室里飞进了一只小虫，一个关窗去夹，想夹死它；另一个认为这是好虫子，不该夹死，就打起来了。虫子再小也要分好坏，小孩的世界里没有小事。</p><p class="fr-pspace-a0">9月23日</p><p class="fr-pspace-a0">念一年级的时候，有天诗人宇自告奋勇要上台给大家讲个他创编的故事。他说的是章鱼男孩在上学路上遇到章鱼女孩的事，“然后，他们开始握手，他们握了一次又一次，一次又一次，握到上学块迟到了也没握完”，他说，“因为他们是章鱼啊，哈哈哈”。说着，他自己在台上大笑了起来。</p><p class="fr-pspace-a0">10月10日&nbsp;</p><p class="fr-pspace-a0">下课时候，小科神秘地冲琪琪笑着，说：“我发现有个成语很适合你！”琪琪用她一贯的大嗓门问道：“是什么？快说！”小科笑嘻嘻地说：“泼妇盛名！”说完转身就逃。</p><p class="fr-pspace-a0"><br></p><p class="fr-pspace-a0"><strong>*教学随笔</strong></p><p class="fr-pspace-a0"><strong>给你一颗糖豆</strong></p><p class="fr-pspace-a0">我有时觉得我的学生们很像寓言《朝三暮四》里的那几只猴子，需要不断地用栗子来挑起他们的兴致，而且，栗子还得经常变换，不能是同一种栗子。</p><p class="fr-pspace-a0">中午在办公室找到了一罐很特别的糖豆，于是就揣在口袋里，打算去逗逗班上的那群小猴子。</p><p class="fr-pspace-a0">我说，如果课堂上可以做到安静看书，我将发给他一颗糖豆作为奖励。于是，班级里鸦雀无声，他们都在静静地看书，连几个皮猴子也坐住了。</p><p class="fr-pspace-a0">我满意地笑了，然后挑了几个皮猴子上来领糖果。他们欢天喜地地上来，一人挑了一颗自己喜欢的糖果，飞快地丢进嘴巴里，其他学生露出眼馋的神情。</p><p class="fr-pspace-a0">这时，有个学生叫道：“怎么这糖有股药的味道啊？”</p><p class="fr-pspace-a0">问得好，此话正合我意嘛。</p><p class="fr-pspace-a0">我严肃地说：“其实，刚才我给你们的糖果，是有魔力的，它会自动检测出懒人，如果吃了糖果却不认真学习，那么他的脸上就会长出很多青春痘！”</p><p class="fr-pspace-a0">台下顿时发出一阵惊呼：“惨了，不会吧？”</p><p class="fr-pspace-a0">小孩真是幼稚，都上三年级了，居然也这么好骗。我得意地瞄了瞄他们：“不信？那你们试试看好了。”</p><p class="fr-pspace-a0">他们马上规规矩矩地坐好，一个个发奋看书写字画画起来。</p><p class="fr-pspace-a0"><br></p><p class="fr-pspace-a0"><strong>*小学生作文</strong></p><p class="fr-pspace-a0"><strong>广告推销</strong></p><p class="fr-pspace-a0">作者/仇婷（四年级）&nbsp;</p><p class="fr-pspace-a0">大家好，这里是我们学校的热点推销站，请大家注意收看最新广告。</p><p class="fr-pspace-a0">第一款为大家推销的产品，她非常优秀，有两条胳膊两条腿，二十个手指头一个没少，另外还附加长长的头发。</p><p class="fr-pspace-a0">那她有什么用呢？欺负男生最管用啦！140cm以下10元一次，150 cm—140 cm15元一次，160 cm以上25元一次，体育老师免谈。她的原则是：先付钱后做事，但不能保证避免光收钱不干事的可能。</p><p class="fr-pspace-a0">如果想让她做一些有难度的事情，也是可以的，比如，抽马桶、试卷签名、打架、抓人，样样精通啊。不用说，这也是要收费的，5元一次，8元两次，还可以办理贵宾卡，一律打八折！</p><p class="fr-pspace-a0">万一有人忘带东西了，找她去吧，什么三角尺啦，铅笔啦，橡皮啦，样样俱全，免费借，弄坏的话，一赔十哦！</p><p>这就是今天的热点推销产品，很不错吧？也许你们已经猜到她是谁了。对了，再告诉你们一件事：本广告纯属忽悠！</p>`,
          date: Date.now()
        }
      ], images: [

      ], mottos: [
        {
          id: 1,
          author: '',
          text: '大道虽简, 知易行难.'
        }
      ], songs: [

      ]
    };
    // this.getArticles().then(v => this.offline.articles = v);
    // this.getImages().then(v => this.offline.images = v);
    this.getMottos({ amount: 10 }).then(v => v.length ? this.offline.mottos = v : console.log(v, this.offline.mottos));
    // this.getSongs().then(v => this.offline.songs = v);
  }

  /** 获取一篇随即文章. */
  public getRandomArticle(): Article {
    return this.offline.articles[Math.floor(Math.random() * this.offline.articles.length)];
  }

  /** 获取一张随机图片. */
  public getRandomImage(): Image {
    return this.offline.images[Math.floor(Math.random() * this.offline.images.length)];
  }

  /** 获取一句随机座右铭. */
  public getRandomMotto(): Motto {
    return this.offline.mottos[Math.floor(Math.random() * this.offline.mottos.length)];
  }

  /** 获取一首随机歌曲. */
  public getRandomSong(): Song {
    return this.offline.songs[Math.floor(Math.random() * this.offline.songs.length)];
  }

  /**
   * 获取最近的若干篇文章.
   * @param options 条件, 若为空则获取最近的 5 篇文章.
   */
  public async getArticles(options?: Partial<Article>): Promise<Article[]> {
    return axios
      .post<Resp<Article[]>>(`${this.server}/articles`, { params: options })
      .then(v => v.data.content)
      .catch(r => [
        this.getRandomArticle(),
        this.getRandomArticle(),
        this.getRandomArticle(),
        this.getRandomArticle(),
        this.getRandomArticle(),
        this.getRandomArticle()
      ]);
  }

  /**
   * 获取最近的若干篇文章.
   * @param options 条件, 若为空则获取最近的 5 篇文章.
   */
  public async getImages(options?: Partial<Image>): Promise<Image[]> {
    return axios
      .post<Resp<Image[]>>(`${this.server}/images`, { params: options })
      .then(v => v.data.content)
      .catch(r => [
        this.getRandomImage(),
        this.getRandomImage(),
        this.getRandomImage(),
        this.getRandomImage(),
        this.getRandomImage(),
        this.getRandomImage()
      ]);
  }

  /**
   * Async 获取座右铭.
   */
  public async getMottos(options?: any): Promise<Motto[]> {
    return axios
      .post<Resp<Motto[]>>(`${this.server}/mottos`, { param: options })
      .then(v => v.data.content)
      .catch(r => [
        this.getRandomMotto(),
        this.getRandomMotto(),
        this.getRandomMotto(),
        this.getRandomMotto(),
        this.getRandomMotto(),
        this.getRandomMotto()
      ]);
  }

  /**
   * 获取最近的若干首音乐.
   * @param options 条件, 若为空则获取最近的 5 首音乐.
   */
  public async getSongs(options?: Partial<Song>): Promise<Song[]> {
    return axios
      .post<Resp<Song[]>>(`${this.server}/songs`, { params: options })
      .then(v => v.data.content)
      .catch(r => [
        this.getRandomSong(),
        this.getRandomSong(),
        this.getRandomSong(),
        this.getRandomSong(),
        this.getRandomSong(),
        this.getRandomSong()
      ]);
  }

}
