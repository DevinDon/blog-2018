"use strict";
/** API 相关. */
class API {
    constructor(server = '/blog/api/v1') {
        this.server = server;
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
            ], images: [], mottos: [
                {
                    id: 1,
                    author: '',
                    text: '大道虽简, 知易行难.'
                }
            ], songs: []
        };
        // this.getArticles().then(v => this.offline.articles = v);
        // this.getImages().then(v => this.offline.images = v);
        this.getMottos({ amount: 10 }).then(v => v ? this.offline.mottos = v : console.log(v, this.offline.mottos));
        // this.getSongs().then(v => this.offline.songs = v);
    }
    /** 获取一篇随即文章. */
    getRandomArticle() {
        return this.offline.articles[Math.floor(Math.random() * this.offline.articles.length)];
    }
    /** 获取一张随机图片. */
    getRandomImage() {
        return this.offline.images[Math.floor(Math.random() * this.offline.images.length)];
    }
    /** 获取一句随机座右铭. */
    getRandomMotto() {
        return this.offline.mottos[Math.floor(Math.random() * this.offline.mottos.length)];
    }
    /** 获取一首随机歌曲. */
    getRandomSong() {
        return this.offline.songs[Math.floor(Math.random() * this.offline.songs.length)];
    }
    /**
     * 获取最近的若干篇文章.
     * @param options 条件, 若为空则获取最近的 5 篇文章.
     */
    async getArticles(options) {
        return axios
            .post(`${this.server}/articles`, { params: options })
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
    async getImages(options) {
        return axios
            .post(`${this.server}/images`, { params: options })
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
    async getMottos(options) {
        return axios
            .post(`${this.server}/mottos`, { param: options })
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
    async getSongs(options) {
        return axios
            .post(`${this.server}/songs`, { params: options })
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
/** 应用核心, 用于页面控制. */
class APP {
    /**
     * 生成一个单页应用管理器.
     * @param page 初始页面, 默认为首页.
     */
    constructor() {
        /** 当前页面. */
        this.currectPage = 'blog';
        this.api = new API();
        this.dialog = new Dialog();
        this.starrysky = new StarrySky('background');
        this.content = {
            home: {
                name: '首页',
                nav: document.getElementById('link-home'),
                section: document.getElementById('content-home')
            },
            article: {
                name: '文字',
                nav: document.getElementById('link-article'),
                section: document.getElementById('content-article')
            },
            image: {
                name: '时刻',
                nav: document.getElementById('link-image'),
                section: document.getElementById('content-image')
            },
            song: {
                name: '声音',
                nav: document.getElementById('link-song'),
                section: document.getElementById('content-song')
            },
            about: {
                name: '关于',
                nav: document.getElementById('link-about'),
                section: document.getElementById('content-about')
            },
            blog: {
                name: '窗台',
                nav: document.getElementById('notexist'),
                section: document.getElementById('notexist')
            }
        };
        this.page = {
            title: document.getElementById('page-title'),
            motto: document.getElementById('header-motto'),
            toolbox: document.getElementById('toolbox')
        };
        this.init();
    }
    /** 滚动. */
    static scrollTo(end = {
        x: 0,
        y: 0,
        z: 0
    }, position = {
        x: pageXOffset,
        y: pageYOffset,
        z: 0
    }) {
        anime({
            targets: position,
            x: end.x,
            y: end.y,
            z: end.z,
            duration: 1000,
            easing: 'easeInOutSine',
            run: () => scrollTo(position.x, position.y)
        });
    }
    /** 定时器任务. */
    async init() {
        await this.welcome();
        this.changeMotto();
        this.listeningLocalRoute();
    }
    /** 进入动画. */
    async welcome() {
        return anime({
            targets: 'html',
            opacity: [0, 1],
            translateY: ['-10rem', 0],
            duration: 1500,
            easing: 'easeInOutSine',
            complete: () => $('html').removeAttr('style')
        }).finished;
    }
    /** 定时切换座右铭. */
    async changeMotto() {
        anime.timeline({
            complete: this.changeMotto.bind(this)
        }).add({
            targets: this.page.motto,
            opacity: 0,
            duration: 1000,
            easing: 'easeInOutSine',
            complete: () => this.page.motto.innerText = this.api.getRandomMotto().text
        }).add({
            targets: this.page.motto,
            opacity: 1,
            duration: 1000,
            easing: 'easeInOutSine',
            offset: '+=1000'
        }).add({
            targets: this.page.motto,
            duration: 7000
        });
    }
    /** 监听本地路由. */
    listeningLocalRoute() {
        const url = location.pathname.slice(1);
        // 当前页面刷新, 或从站外链接进入, 重新导航至本页
        if (url) {
            const page = url.split('/').filter(v => v)[0];
            const param = url.split('/').filter(v => v).slice(1);
            this.active(page, param);
        }
        else {
            // 否则导航至首页
            this.active('home');
        }
        // 为所有的本地路由链接添加监听事件
        document
            .querySelectorAll('a[data-router]')
            .forEach(element => {
            const path = element.getAttribute('data-router');
            const page = (path && path.split('/').filter(v => v)[0]) || 'home';
            const param = path && path.split('/').filter(v => v).slice(1) || [];
            element.onclick = () => this.active(page, param);
        });
        window.onpopstate = (e) => {
            if (e.state) {
                this.active(e.state.page || 'home', e.state.param);
            }
            else {
                this.active('home');
            }
        };
    }
    /** 设置当前页面内容. */
    async setCards(page) {
        // 首先回到顶部
        APP.scrollTo({ x: 0, y: 0, z: 0 });
        /** 当前页面. */
        page = location.pathname.split('/').filter(v => v)[0];
        /** 设置当前页面 ID. */
        const id = `#content-${page}`;
        /** 获取 content. */
        const $content = $(id);
        /** 当前页面的 Loading 元素. */
        const $loading = $content.find('.loading');
        // 加载时服务器资源时的动画
        anime
            .timeline()
            .add({
            targets: `${id}>.card:not(.init)`,
            opacity: [1, 0],
            duration: 500,
            easing: 'easeInOutSine',
            complete: () => $content.children(':not(.init)').remove() // 移除所有其他元素
        })
            .add({
            targets: $loading.get(0),
            begin: () => $loading.removeClass('hide'),
            opacity: [0, 1],
            duration: 500,
            easing: 'easeInOutSine'
        });
        /** 资源. */
        let resource;
        /** card. */
        let $cards = [];
        switch (page) {
            case 'article':
                resource = await this.api.getArticles();
                $cards = await this.generateArticleCards(resource);
                break;
            case 'image':
                resource = await this.api.getImages();
                $cards = await this.generateImageCards(resource);
                break;
            case 'song':
                resource = await this.api.getSongs();
                $cards = await this.generateSongCards(resource);
                this.setPlayer(resource[0]);
                break;
            default:
                resource = [];
                $cards = [];
                break;
        }
        // 隐藏 loading
        await anime({
            targets: $loading.get(0),
            opacity: [1, 0],
            duration: 500,
            easing: 'easeInOutSine',
            complete: () => $loading.addClass('hide')
        }).finished;
        // 将生成的 card 载入页面中
        $content.append($cards);
        // 显示 card
        anime({
            targets: `${id}>.card:not(.init)`,
            opacity: [0, 1],
            duration: 500,
            easing: 'easeInOutSine'
        });
    }
    async setPlayer(song) {
        const $player = $('#content-song>.player');
        if (song) {
            $player.find('.text>.title').text(song.title);
            $player.find('.text>.artist').text(song.artist);
            $player.find('.text>.album').text(song.album);
            $player.attr('data-mid', song.id);
        }
    }
    /**
     * 生成文章卡片.
     * @param articles 文章内容.
     */
    async generateArticleCards(articles) {
        const $cards = [];
        for (const article of articles) {
            const $card = $('<div class="card"></div>');
            const $title = $(`<h2 class="title">${article.title}</h2>`);
            const $author = $(`<h3 class="author">作者 / ${article.author}</h3>`);
            const $hrup = $('<hr class="up">');
            const $summary = $(`<p class="summary">${article.summary}</p>`);
            const $text = $(`<article class="text hide">${article.html}</article>`);
            const $hrdown = $('<hr class="down">');
            const $copyright = $(`<p class="copyright"><a href="http://wufazhuce.com/article/${article.id}">ONE 一个 版权所有</a></p>`);
            $card.click(async (e) => {
                if ($text.get(0).contains(e.target)) {
                    return false;
                }
                const text = $card.find('article');
                if (text.hasClass('hide')) { // 如果未展开文章, 隐藏其他卡片, 展开当前文章
                    text.removeClass('hide');
                    anime({
                        targets: text.get(0),
                        opacity: [0, 1],
                        height: [0, '100vh'],
                        duration: 500,
                        easing: 'easeInOutSine',
                        complete: () => text.css('height', 'fit-content')
                    });
                    APP.scrollTo({ x: 0, y: $card.get(0).offsetTop, z: 0 });
                }
                else { // 如果当前文章已展开, 则收起文章并显示其他卡片
                    anime({
                        targets: text.get(0),
                        begin: () => text.css('height', text.css('height')),
                        opacity: [1, 0],
                        height: 0,
                        duration: 500,
                        easing: 'easeInOutSine',
                        complete: () => text.addClass('hide')
                    });
                    APP.scrollTo({ x: 0, y: $card.get(0).offsetTop, z: 0 });
                }
            });
            $card.append($title, $author, $hrup, $summary, $text, $hrdown, $copyright);
            $cards.push($card);
        }
        return $cards;
    }
    /**
     * 生成图片卡片.
     * @param images 图片内容.
     */
    async generateImageCards(images) {
        const $cards = [];
        let index = -1;
        for (const image of images) {
            index++;
            const $card = $(`<div class="card${(index % 4 === 0 || index % 4 === 3) ? ' large' : ' small'}"></div>`);
            const $date = $(`<h2 class="date">${new Date(Number(image.date)).toLocaleDateString()}</h2>`);
            const $hrup = $('<hr class="up">');
            const $img = $(`<img src="data:image/png;base64,${image.image}" alt="${image.text}">`);
            const $text = $(`<p class="text">${image.text}</p>`);
            const $hrdown = $('<hr class="down">');
            const $copyright = $(`<p class="copyright"><a href="http://wufazhuce.com/one/${image.id}">ONE 一个 版权所有</a></p>`);
            $card.append($date, $hrup, $img, $text, $hrdown, $copyright);
            const card = $card.clone().addClass('dialog');
            $card.click(() => {
                // 全屏暗色背景层
                this.dialog.toggleFull();
                this.dialog.add(card);
                anime({
                    targets: card.get(0),
                    opacity: [0, 1],
                    duration: 500,
                    easing: 'easeInOutSine'
                });
            });
            $cards.push($card);
        }
        return $cards;
    }
    /**
     * 生成歌曲卡片.
     * @param songs 歌曲内容.
     */
    async generateSongCards(songs) {
        const $table = $('<table class="card"></table>');
        const $thead = $(`
    <thead>
        <tr>
          <td class="title">歌曲</td>
          <td class="artist">作者</td>
          <td class="album">专辑</td>
          <td class="time">时长</td>
          <td class="control">播放</td>
        </tr>
      </thead>
    `);
        const $tbody = $('<tbody></tbody>');
        const $tfoot = $('<tfoot></tfoot>');
        for (const song of songs) {
            const $tr = $(`
      <tr>
          <td class="title">${song.title}</td>
          <td class="artist">${song.artist}</td>
          <td class="album">${song.album}</td>
          <td class="time">${song.time}</td>
          <td class="control" onclick="Song.play(${song.id})">播放</td>
        </tr>
      `);
            $tbody.append($tr);
        }
        $table.append($thead, $tbody, $tfoot);
        return [$table];
    }
    refresh() {
        this.setCards();
    }
    /**
     * 切换到指定页面.
     * @param page 指定页面.
     */
    async active(page, param = []) {
        // 如果要切换的页面是当前页面, 取消执行
        if (page === this.currectPage) {
            return false;
        }
        // 否则执行切换
        /** 先前标签页. */
        const previous = this.content[this.currectPage];
        /** 目标标签页. */
        const currect = this.content[this.currectPage = page];
        // 重置标题
        document.title = `窗台 - ${currect.name}`;
        // 切换地址栏
        history.pushState({ time: Date.now(), page, param }, document.title, `${page}${param.length ? '/' + param.join('/') : ''}`);
        // 首次加载数据
        if ((page === 'article' || page === 'image' || page === 'song') && !$(`#content-${page}`).hasClass('init')) {
            $(`#content-${page}`).addClass('init');
            this.setCards();
        }
        // 切换标题
        anime.timeline()
            .add({
            targets: this.page.title,
            opacity: 0,
            translateY: '-10vh',
            duration: 500,
            easing: 'easeInOutSine',
            complete: () => this.page.title.innerHTML = `<a>${currect.name}</a>`
        }).add({
            targets: this.page.title,
            opacity: 1,
            translateY: 0,
            offset: '+=300',
            duration: 500,
            easing: 'easeInOutSine'
        });
        // 切换标签状态
        previous.nav.classList.remove('active');
        currect.nav.classList.add('active');
        // 隐藏先前页面内容
        await anime({
            targets: previous.section,
            translateX: [0, '10vw'],
            opacity: 0,
            duration: 500,
            easing: 'easeInOutSine'
        }).finished;
        previous.section.style.display = 'none';
        // 显示目的页面内容
        currect.section.style.display = 'flex';
        await anime({
            targets: currect.section,
            translateX: ['-10vw', 0],
            opacity: 1,
            delay: 300,
            duration: 500,
            easing: 'easeInOutSine'
        });
        this.page.toolbox.setAttribute('class', page);
    }
}
/** 对话框相关. */
class Dialog {
    constructor() {
        /** 编号. */
        this.no = 0;
        this.area = document.getElementById('dialog-area');
    }
    toggleFull() {
        this.area.classList.contains('full')
            ? this.area.classList.remove('full')
            : this.area.classList.add('full');
    }
    add(target) {
        $(this.area).append(target);
        target.click(async () => {
            await anime({
                targets: target.get(0),
                opacity: [1, 0],
                duration: 500,
                easing: 'easeInOutSine'
            }).finished;
            this.clear();
            this.toggleFull();
        });
    }
    clear() {
        $(this.area).children().remove();
    }
    /**
     * 在页面上生成一个对话框.
     * @param text 对话框文本.
     * @param type 对话框类型.
     */
    generate(html, type = 'info') {
        const n = ++this.no;
        const dialog = document.createElement('div');
        // 设置 ID
        dialog.id = `dialog-${n}`;
        // 添加样式
        dialog.classList.add('dialog', type);
        // 设置内容
        dialog.innerHTML = html;
        // 添加至页面中
        this.area.append(dialog);
        // 动画进入及退出, 并从页面中移除
        anime.timeline({
            direction: 'direction',
            complete: () => this.remove(`dialog-${n}`)
        }).add({
            targets: `#dialog-${n}`,
            translateX: ['20rem', 0],
            opacity: [0, 1],
            duration: 1000
        }).add({
            targets: `#dialog-${n}`,
            translateX: [0, '20rem'],
            opacity: [1, 0],
            duration: 1000,
            offset: '+=4000',
            easing: 'easeInExpo'
        });
        return dialog;
    }
    /**
     * 从页面中移除指定的 dialog.
     * @param id dialog ID.
     */
    remove(id) {
        const removed = document.getElementById(id);
        if (removed) {
            this.area.removeChild(removed);
            return removed;
        }
        else {
            return undefined;
        }
    }
}
/** 星空. */
class StarrySky {
    /** 创建一个星空画布, 并绘制上星星. */
    constructor(canvasID) {
        /** 星星数组. */
        this.stars = [];
        /** Animation handle. */
        this.handle = 0;
        /** 鼠标位置. */
        this.cursor = { x: 0, y: 0, z: 0 };
        try {
            this.canvas = document.getElementById(canvasID);
            this.context = this.canvas.getContext('2d');
        }
        catch (err) {
            alert(`未找到 ID 为 ${canvasID} 的画布, 绘制失败.`);
            throw err;
        }
        this.init();
    }
    /** 初始化. */
    init() {
        this.stars = this.randomStars();
        this.canvas.width = innerWidth;
        this.canvas.height = innerHeight;
        this.generateBackground();
        // 窗口尺寸改变时重绘画布
        window.onresize = () => {
            this.canvas.width = innerWidth;
            this.canvas.height = innerHeight;
            this.generateBackground();
        };
        // 实时获取鼠标坐标
        window.onmousemove = e => {
            this.cursor.x = e.clientX;
            this.cursor.y = e.clientY;
        };
        // 点击按钮后在当前位置生成一个星星, 并移除最早的星星
        window.onclick = e => {
            this.stars.shift();
            this.stars.push(this.randomStar({ x: e.clientX, y: e.clientY, z: 0 }));
        };
        this.start();
    }
    /**
     * 绘制某个星星.
     * @param v 星星.
     * @returns 移动后的星星.
     */
    drawStar(v) {
        this.context.fillStyle = v.color;
        this.context.fillRect(v.position.x, v.position.y, v.size.x, v.size.y);
        /** 星星与鼠标的距离. */
        const distance = Math.round(Math.abs(v.position.x - this.cursor.x) + Math.abs(v.position.y - this.cursor.y));
        // 绘制星星与鼠标的连线
        if (distance < 256) {
            // 距离越远, 颜色越淡
            this.context.strokeStyle = `#000000${0xff - distance < 0x10 ? '0' : ''}${(0xff - distance).toString(16)}`;
            this.context.lineWidth = 3;
            this.context.beginPath();
            this.context.moveTo(v.position.x, v.position.y);
            this.context.lineTo(this.cursor.x, this.cursor.y);
            this.context.closePath();
            this.context.stroke();
        }
        // 碰撞检测, 到边缘时自动弹回
        (v.position.x + v.speed.x > innerWidth || v.position.x + v.speed.x < 0)
            ? v.speed.x = -v.speed.x
            : v.position.x += v.speed.x;
        (v.position.y + v.speed.y > innerHeight || v.position.y + v.speed.y < 0)
            ? v.speed.y = -v.speed.y
            : v.position.y += v.speed.y;
        return v;
    }
    /** 绘制背景. */
    generateBackground() {
        this.context.fillStyle = '#fdfdfd';
        this.context.fillRect(0, 0, innerWidth, innerHeight);
    }
    /**
     * 生成一个星星.
     * @returns 返回生成的星星.
     */
    randomStar(position) {
        const size = Math.ceil(Math.random() * 4) + 3;
        return {
            position: position || {
                x: Math.random() * innerWidth,
                y: Math.random() * innerHeight,
                z: 0
            },
            size: {
                x: size,
                y: size,
                z: 0
            },
            speed: {
                x: (Math.random() * 0.75 + 0.25) * (Math.random() > 0.5 ? -1 : 1),
                y: (Math.random() * 0.75 + 0.25) * (Math.random() > 0.5 ? -1 : 1),
                z: 0
            },
            color: `#363636${Number(Math.floor(Math.random() * 0x7f) + 0x3f).toString(16)}`
        };
    }
    /**
     * 生成指定数量的随机星星.
     * @param amount 生成数量, 默认为 50.
     * @returns 生成的星星数组.
     */
    randomStars(amount = 50) {
        const result = [];
        for (let j = amount; j > 0; j--) {
            result.push(this.randomStar());
        }
        return result;
    }
    /**
     * 重绘整个星空.
     * @param time 时间.
     * @returns Animation handle.
     */
    redraw(time) {
        // 清除画布
        this.context.clearRect(0, 0, innerWidth, innerHeight);
        // 重绘背景
        this.generateBackground();
        // 处理星星轨迹
        this.stars = this.stars.map(this.drawStar.bind(this));
        // Animation handle
        this.handle = requestAnimationFrame(this.redraw.bind(this));
    }
    /** 开始绘制星空. */
    start() {
        this.handle = requestAnimationFrame(this.redraw.bind(this));
    }
    /** 暂停绘制星空. */
    stop() {
        window.cancelAnimationFrame(this.handle);
    }
}
/// <reference path="./API.ts" />
/// <reference path="./APP.ts" />
/// <reference path="./Dialog.ts" />
/// <reference path="./StarrySky.ts" />
