/**
 * Created by litong on 2017/5/11.
 */
(function (doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';

  var recalc = function () {
    var width = docEl.clientWidth;

    if (width > 640) {
      width = 640 ;
    }
    if (width < 320) {
      width = 320 ;
    }

    docEl.style.fontSize = 20 * (width / 750) + 'px';     //1080 是设计图的宽度
  };
  recalc();
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
})(document, window);
