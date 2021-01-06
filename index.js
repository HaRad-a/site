///////////////////////topスクロール/////////////////////////////////
const PageTopBtn = document.getElementById('js-scroll-top');

PageTopBtn.addEventListener('click', () =>{
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

////////////////////////メインスライド///////////////////////////////
//https://note.com/ichikun_/n/nc36c9b339330
(function(){
  var interval =4000; // 切り替わりの間隔（ミリ秒）
  var fade_speed = 1500;// フェード処理の早さ（ミリ秒）
  $("#fade-img-box img").hide();//一度全部消して
  $("#fade-img-box img:first").addClass("active").show();//最初のimgにactiveクラスをつけて.show()で表示
  //この段階では.fade-img-boxの中の最初のimgにactiveクラスが付いてdisplay:block;の状態。それ以外はdisplay:none;

  //この後setInterval()メソッドの第一引数にわたす関数
  var changeImage = function(){
      var $active = $("#fade-img-box img.active");
      //$active.next("img")があったら$next変数に$active.next("img")を代入し、なかったら$next変数に$(".fade-img-box img:first")を代入
      var $next = $active.next("img").length?$active.next("img"):$("#fade-img-box img:first");
  
      //１、activeが付いてる画像を.fadeOut()で消し .removeClass()でactiveクラスをはずす
      $active.fadeOut(fade_speed).removeClass("active");
      //２、activeが付いてる画像の次の画像(※)を.fadeIn()で表示し、.addClass()でactiveクラスを付ける
      $next.fadeIn(fade_speed).addClass("active");//※次の画像がなかったら、一番最初の画像を表示（三項演算子の部分）
  }
  
  //1〜2を繰り返す
  //setInterval()メソッドは、一定の遅延間隔(第二引数のinterval)を置いて第一引数の関数やコードスニペットを繰り返し呼び出すもの
  setInterval(changeImage,interval);
  }());



  // (function(){
  //   var interval =4000;
  //   var fade_speed = 1500;
  //   $(".sp-fade-img-box img").hide();
  //   $(".sp-fade-img-box img:first").addClass("active").show();
  
  //   var changeImage = function(){
  //       var $active = $(".sp-fade-img-box img.active");
  //       var $next = $active.next("img").length?$active.next("img"):$(".sp-fade-img-box img:first");
    
  //       $active.fadeOut(fade_speed).removeClass("active");
  //       $next.fadeIn(fade_speed).addClass("active");
  //   }
    
  //   setInterval(changeImage,interval);
  //   }());

///////////////////////////ハンバーガー//////////////////////////////
//https://tech-dig.jp/hamburger-global-nav/
//body class=”nav-open”の時に、グローバルナビが出てくるように実装したい
function toggleNav() {
  var body = document.body;
  var hamburger = document.getElementById('js-hamburger');
  var blackBg = document.getElementById('js-black-bg');

  //addEventListenerはイベントに合わせて実行させる関数を登録するためのメソッド
  //ハンバーガーがクリックされると、nav-openクラスがbodyに付与される
  hamburger.addEventListener('click', function() {
    body.classList.toggle('nav-open');
  });
  //再度クリックするとnav-openクラスが削除される（要素.classList.toggle）
  blackBg.addEventListener('click', function() {
    body.classList.remove('nav-open');
  });
}
//呼び出し
toggleNav();///////////////////////topスクロール/////////////////////////////////
const PageTopBtn = document.getElementById('js-scroll-top');

PageTopBtn.addEventListener('click', () =>{
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

////////////////////////メインスライド///////////////////////////////
//https://note.com/ichikun_/n/nc36c9b339330
(function(){
  var interval =4000; // 切り替わりの間隔（ミリ秒）
  var fade_speed = 1500;// フェード処理の早さ（ミリ秒）
  $("#fade-img-box img").hide();//一度全部消して
  $("#fade-img-box img:first").addClass("active").show();//最初のimgにactiveクラスをつけて.show()で表示
  //この段階では.fade-img-boxの中の最初のimgにactiveクラスが付いてdisplay:block;の状態。それ以外はdisplay:none;

  //この後setInterval()メソッドの第一引数にわたす関数
  var changeImage = function(){
      var $active = $("#fade-img-box img.active");
      //$active.next("img")があったら$next変数に$active.next("img")を代入し、なかったら$next変数に$(".fade-img-box img:first")を代入
      var $next = $active.next("img").length?$active.next("img"):$("#fade-img-box img:first");
  
      //１、activeが付いてる画像を.fadeOut()で消し .removeClass()でactiveクラスをはずす
      $active.fadeOut(fade_speed).removeClass("active");
      //２、activeが付いてる画像の次の画像(※)を.fadeIn()で表示し、.addClass()でactiveクラスを付ける
      $next.fadeIn(fade_speed).addClass("active");//※次の画像がなかったら、一番最初の画像を表示（三項演算子の部分）
  }
  
  //1〜2を繰り返す
  //setInterval()メソッドは、一定の遅延間隔(第二引数のinterval)を置いて第一引数の関数やコードスニペットを繰り返し呼び出すもの
  setInterval(changeImage,interval);
  }());



  // (function(){
  //   var interval =4000;
  //   var fade_speed = 1500;
  //   $(".sp-fade-img-box img").hide();
  //   $(".sp-fade-img-box img:first").addClass("active").show();
  
  //   var changeImage = function(){
  //       var $active = $(".sp-fade-img-box img.active");
  //       var $next = $active.next("img").length?$active.next("img"):$(".sp-fade-img-box img:first");
    
  //       $active.fadeOut(fade_speed).removeClass("active");
  //       $next.fadeIn(fade_speed).addClass("active");
  //   }
    
  //   setInterval(changeImage,interval);
  //   }());

///////////////////////////ハンバーガー//////////////////////////////
//https://tech-dig.jp/hamburger-global-nav/
//body class=”nav-open”の時に、グローバルナビが出てくるように実装したい
function toggleNav() {
  var body = document.body;
  var hamburger = document.getElementById('js-hamburger');
  var blackBg = document.getElementById('js-black-bg');

  //addEventListenerはイベントに合わせて実行させる関数を登録するためのメソッド
  //ハンバーガーがクリックされると、nav-openクラスがbodyに付与される
  hamburger.addEventListener('click', function() {
    body.classList.toggle('nav-open');
  });
  //再度クリックするとnav-openクラスが削除される（要素.classList.toggle）
  blackBg.addEventListener('click', function() {
    body.classList.remove('nav-open');
  });
}
//呼び出し
toggleNav();
