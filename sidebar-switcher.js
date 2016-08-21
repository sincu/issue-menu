( function( $ ) {
  $('a.hide-sidebar-toggle').click(function() {
    if (!$('.sidebar').hasClass('hide')) {
      $('.sidebar').addClass('hide');
    } else {
      $('.sidebar').removeClass('hide');
    };
  });
  $('.nav-activate').click(function(e) {
    $('body').toggleClass('active')
  });
}) ( jQuery );
