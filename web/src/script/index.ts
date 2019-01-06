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
      targets: $art.get(0),
      duration: 1500,
      height: [475.81, 0],
      opacity: [1, 0],
      easing: 'easeInOutCirc',
      complete: () => $art.removeClass('show').removeClass('busy')
    });
  } else {
    // 展开
    anime({
      targets: $art.get(0),
      duration: 1500,
      height: [0, 475.81],
      opacity: [0, 1],
      easing: 'easeInOutCirc',
      complete: () => $art.addClass('show').removeClass('busy')
    });
  }
}
