# Blog

2018 - 2019 年 Web 课程设计, 前后端代码.

---

# 访问在线样例 **(推荐)**

在线样例: [https://demo.don.red/blog](https://demo.don.red/blog)

---

# 使用 Docker 启动服务器

1. 安装 Docker

[Docker for Windows](https://hub.docker.com/editions/community/docker-ce-desktop-windows)

[Docker for MAC](https://hub.docker.com/editions/community/docker-ce-desktop-mac)

[Docker for Linux](https://docs.docker.com/install/)

2. 启动服务器

***Warning:** Docker for Windows 存在已知的 Volumn 数据卷路径问题. 如果需要在 Windows 中运行, 请自行将 docker-compose.yml 文件中的挂载路径替换为绝对路径.*

```bash
cd dist
docker-compose up --build
```

3. 访问网站

在浏览器中打开 [http://localhost](http://localhost) 即可访问.

---

# 使用 NodeJS 启动服务器

1. 安装 NodeJS

前往 [NodeJS(CN)](http://nodejs.cn/download/) 选择适合当前系统的版本.

2. 安装依赖包

```bash
cd dist
npm i
```

3. 启动服务器

```bash
npm start
```

4. 访问网站

在浏览器中打开 [http://localhost:8080](http://localhost:8080) 即可访问.
