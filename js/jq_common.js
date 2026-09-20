$('#header-include').load("html/header.html", function(){
  $('header button.menu').click(function(){
    $('#slide-menu').addClass('slide-in');
    $('#slide-menu').prop('inert', false);
    $('main').prop('inert', true);
    $('footer').prop('inert', true);
  });
  $('#slide-menu .close-btn').click(function(){
    $('#slide-menu').removeClass('slide-in');
    $('#slide-menu').prop('inert', true);
    $('main').prop('inert', false);
    $('footer').prop('inert', false);
  });
  $('#slide-menu .slide-inner .slide-nav ul.depth1>li>.menu-item button').click(function(){
    $(this).parent().parent().toggleClass('drop-down');
    if($(this).parent().parent().hasClass('drop-down')){
      $(this).parent().parent().find('ul.depth2').stop().slideDown(300);
    }else{
      $(this).parent().parent().find('ul.depth2').stop().slideUp(300);
    }
  });
});
$('#footer-include').load('html/footer.html', function(){});