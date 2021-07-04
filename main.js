//ロード時にクラス追加
const header1 = document.getElementById('H-IMG1');
const header2 = document.getElementById('H-IMG2');
const header3 = document.getElementById('H-IMG3');

const navlink0 = doqument.getElementById('nav0');
const navlink1 = doqument.getElementById('nav1');
const navlink2 = doqument.getElementById('nav2');
const navlink3 = doqument.getElementById('nav3');

window.onload = function(){
    header1.classList.add('H-IMG-toggle1');
    header2.classList.add('H-IMG-toggle2');
    header3.classList.add('H-IMG-toggle3');
    navlink0.classList.add('nav-link0');
    navlink1.classList.add('nav-link1');
    navlink2.classList.add('nav-link2');
    navlink3.classList.add('nav-link3');
}
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