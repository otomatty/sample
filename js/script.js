//ハンバーガーメニュー
$(function () {
  $(".h-btn").click(function () {
    $(this).toggleClass("active");
    $(".menu").toggleClass("active");
  });
  $("#menu a").click(function () {
    $(".active").removeClass("active");
  });
});

//スライド
var swiper = new Swiper(".my-swiper", {
  loop: true,
  effect: "fade",
  autoplay: {
    delay: 2500,
  },
});

//スムーススクロール
var menuHeight = $("#menu").outerHeight(); //pcメニューの高さ
var hBtnHeight = $(".h-btn").outerHeight(); //h-memuの高さ
var windowWidth = $(window).width(); //画面の横幅
$('a[href^="#"]').click(function () {
  // aタグの#がついているものをクリックした時
  var href = $(this).attr("href"); //hrefの中の値を取得
  var target = $(href);
  if (windowWidth >= 750) {
    //画面幅が750px以上の時(pc)
    var position = target.offset().top - menuHeight; //スクロールの高さを取得
    $("body, html").animate({ scrollTop: position }, 500);
  } else {
    //画面幅が750px以下の時(sp)
    var position = target.offset().top - hBtnHeight; //スクロールの高さを取得
    $("body, html").animate({ scrollTop: position }, 500);
  }
});
