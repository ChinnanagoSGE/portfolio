// PhotoSwipe
initPhotoSwipeFromDOM('.js-my-gallery');

$(function () {

  //Awardのリンクを有効化
  //スライド（Swiper）内に記載のリンクを有効にするため下記の記述が必要
  $(".award-url").on("click", "a", function (e) {
    e.stopPropagation();
  });

  $(".award-image").on("click", "img", function (e) {
    e.stopPropagation();
  });
  
  //Worksのリンクを有効化
  //スライド（Swiper）内に記載のリンクを有効にするため下記の記述が必要
  $(".works-url").on("click", "a", function (e) {
    e.stopPropagation();
  });

  $(".works-image").on("click", "img", function (e) {
    e.stopPropagation();
  });


  //ページトップへもどる
  $('#js-page-top').on('click', function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300);
    return false;
  });


  //固定ヘッダー
  $(window).scroll(function () {
    if ($(window).scrollTop() >= offset.top) {
      $nav.addClass('fixed');
      $("body").css("margin-top", navHeight);
    } else {
      $nav.removeClass('fixed');
      $("body").css("margin-top", "0");
    }
  });


  //ページ内スクロール
  var $nav = $(".gnav");
  var offset = $nav.offset();
  var navHeight = $nav.outerHeight();

  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - navHeight;
    $("html, body").animate(
      {
        scrollTop: position,
      },
      300,
      "swing"
    );
    return false;
  });


  //ロード画面
  $(function() {
    setTimeout(function(){
      //ロード画面をフェードイン
      $('.load p').fadeIn(500);

      //スクロール禁止
      document.addEventListener('touchmove', noScroll, { passive: false });
      document.addEventListener('mousewheel', noScroll, { passive: false });
    },100); //0.1秒後に実行

    setTimeout(function(){
      //ロード画面をフェードアウト
      $('.load').fadeOut(100);

      //スクロール禁止を解除
      document.removeEventListener('touchmove', noScroll, { passive: false });
      document.removeEventListener('mousewheel', noScroll, { passive: false });
    },2000); //3秒後に実行
  });

  setTimeout(function(){
    turn($(".logo-name"), 80);
    turn($(".logo-title"), 100);
  },2000);//3秒後にロゴを1文字ずつ表示

  //1文字ずつ表示する関数
  function turn(container, speed) { 
    // テキストの間にスペースを入れる
    var content = $(container).html();
    var text = $.trim(content);
    var newHtml = "";

    // スペースで区切ったテキストを、テキストの数だけspanで囲む
    text.split("").forEach(function(v) {
      newHtml += '<span>' + v + '</span>';
    });

    // spanで囲んだテキスト群をHTMLに戻す
    $(container).html(newHtml);

    // 1文字ずつ表示
    var txtNum = 0;
    setInterval(function() {
      $(container).find('span').eq(txtNum).css({opacity: 1});
      txtNum++
    }, speed);
  }

  // スクロールを禁止する関数
  function noScroll(event) {
    event.preventDefault();
  }

  
  //ABOUTの画像のアニメーション
  ScrollReveal().reveal('.about-image', { 
    duration: 1200, 
    scale: 0.1,
    reset: true
  });

  //SKILLの画像のアニメーション
  ScrollReveal().reveal('.skill-image', { 
    duration: 1300, 
    origin: 'left', 
    distance: '50px',
    reset: true   
  });

});
