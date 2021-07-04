//ロード時にクラス追加
const navlink0 = document.getElementById('nav0');
const navlink1 = document.getElementById('nav1');
const navlink2 = document.getElementById('nav2');
const navlink3 = document.getElementById('nav3');

$(window).on('load', function (){
  setTimeout(function(){
		navlink0.classList.add('nav-link');
    navlink1.classList.add('nav-link');
    navlink2.classList.add('nav-link');
    navlink3.classList.add('nav-link');
	},1600);
});

//トップに戻るたびにimgにクラスを付与
$(window).on('load scroll', function() {
  if($(window).scrollTop() > 700) {
    $('.title').removeClass('visible');
    $('#H-IMG1').removeClass('H-IMG-toggle1');
    $('#H-IMG2').removeClass('H-IMG-toggle2');
    $('#H-IMG3').removeClass('H-IMG-toggle3');
  } else {
    $('.title').addClass('visible');
    $('#H-IMG1').addClass('H-IMG-toggle1');
    $('#H-IMG2').addClass('H-IMG-toggle2');
    $('#H-IMG3').addClass('H-IMG-toggle3');
  }
});

//リンククリック時スクロール
$(function(){
    $('a[href^="#"]').click(function(){
      let speed = 500;
      let href= $(this).attr("href");
      let target = $(href == "#" || href == "" ? 'html' : href);
      let position = target.offset().top;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
    });
});
//topボタンクリック時トップにスクロール
$(window).scroll(function () {
    if($(window).scrollTop() > 5) {
      $('#go-top').addClass('visible-gotop');
    } else {
      $('#go-top').removeClass('visible-gotop');
    }
});
//スクロールして画面に表示された時クラスを追加
$(window).on('load scroll', function() {
    add_class_in_scrolling( $('#0') );
    add_class_in_scrolling( $('#1') );
    add_class_in_scrolling( $('#2') );
    add_class_in_scrolling( $('#3') );
});

function add_class_in_scrolling(target) {
    var winScroll = $(window).scrollTop();//スクロールの上下位置を取得
    var winHeight = $(window).height();//ウィンドウの高さを取得
    var scrollPos = winScroll + winHeight;//上記の合計（スクロールポジション）
 
    if(target.offset().top < scrollPos) {//classをつけたい要素の上下位置がスクロールポジションより小さい場合＝ウィンドウ内に表示された場合
        target.addClass('is-show');
    }
}