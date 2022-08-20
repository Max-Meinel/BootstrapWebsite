jQuery(document).ready(function($) {
    var alterClass = function() {
      var ww = document.body.clientWidth;
      if (ww < 600) {
        $('.row g-2').removeClass('row g-2');
      } else if (ww >= 601) {
        $('.row g-2').addClass('row g-2');
      };
    };
    $(window).resize(function(){
      alterClass();
    });
    //Fire it when the page first loads:
    alterClass();
  });