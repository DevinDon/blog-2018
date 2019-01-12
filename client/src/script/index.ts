/// <reference path="./API.ts" />
/// <reference path="./APP.ts" />
/// <reference path="./Dialog.ts" />
/// <reference path="./Player.ts" />
/// <reference path="./StarrySky.ts" />

function toggleArticle() {
  const $art = $('#article-home');
  if ($art.hasClass('busy')) {
    return false;
  }
  $art.addClass('busy');
  if ($art.hasClass('show')) {
    // 隐藏
    anime({
      targets: $art[0],
      duration: 1500,
      height: [475.81, 0],
      opacity: [1, 0],
      easing: 'easeInOutCirc',
      complete: () => $art.removeClass('show').removeClass('busy')
    });
  } else {
    // 展开
    anime({
      targets: $art[0],
      duration: 1500,
      height: [0, 475.81],
      opacity: [0, 1],
      easing: 'easeInOutCirc',
      complete: () => $art.addClass('show').removeClass('busy')
    });
  }
}

let app: APP;
let able: boolean = true;

window.onload = () => {
  app = new APP();
  $('#content-about>div.where>div:nth-child(1)').click(e => {
    app.dialog.generate(`Meow~ Here is my GitHub~<br>我住在 GitHub 这里.`, 'warning');
  });
  $('#content-about>div.where>div:nth-child(2)').click(e => {
    app.dialog.generate(`You found my email address!<br>给我发一封邮件试试呀.`, 'info');
  });
  $('#content-about>div.where>div:nth-child(3)').click(e => {
    app.dialog.generate(`Ah, is this not a 404 website?<br>你可能到不了这里.`, 'error');
  });
  $('#content-about>div.where>div:nth-child(4)').click(e => {
    app.dialog.generate(`That is myself!<br>点开看看在线例子, 好像没什么不一样.`, 'info');
  });
};
