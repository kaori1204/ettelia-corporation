$(function () {
  $('#js-hamburger-btn, .navigation__link').on('click', function () {
    $('.navigation').slideToggle(800);
    $('.hamburger-btn').toggleClass('hamburger-btn--open');
    $('#js-overlay').toggleClass('overlay--active');

    // ハンバーガーメニューが開いている時はスクロールを無効にする
    if ($('.hamburger-btn').hasClass('hamburger-btn--open')) {
      $('body').addClass('no-scroll');
    } else {
      $('body').removeClass('no-scroll');
    }
  });

  // オーバーレイをクリックしたときにメニューを閉じる
  $('#overlay').on('click', function () {
    $('.navigation').slideToggle(800);
    $('.hamburger-btn').removeClass('hamburger-btn--open');
    $(this).removeClass('overlay--active');
    $('body').removeClass('no-scroll');
  });
});