$('#navigation a').on('click', function(e) {
    e.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000);
  });
  
  
  $('.toggler, .nav-content a:not(#dropdown-link)').on('click', function(){
    $('.toggler').toggleClass('change');
    $('.nav-content').slideToggle();
    $('#dropdown-menu').slideUp();
    $('.menu-overlay').toggle();
  });
  
  $('.nav-content .dropdown').on('click', function(){
    $('#dropdown-menu').slideToggle();
  });
  
  $('.menu-overlay').on('click', function(){
    $('.toggler').removeClass('change');
    $('.nav-content').slideUp();
    $('#dropdown-menu').slideUp();
    $('.menu-overlay').hide();
  });
  
  $("#contact input, #contact textarea").on('focusout', function(){
  
    var text_val = $(this).val();
    if (text_val === "") {
      $(this).removeClass('has-value');
    } else {
      $(this).addClass('has-value');
    }
  
  });


// My jQuery fucntions
$(document).ready(function(){

    // scroll to next section if clicked
    /*
    $('.S1').click(() => {
      $('html, body').animate({
            scrollTop: $('.S2').offset().top
      }, 1000);
     });
    $('.S2').click(() => {
        $('html, body').animate({
              scrollTop: $('.S3').offset().top
        }, 1000);
    });
    $('.S3').click(() => {
        $('html, body').animate({
              scrollTop: $('.S4').offset().top
        }, 1000);
    });
    
    $('.S4').click(() => {
        $('html, body').animate({
              scrollTop: $('#contact').offset().top
        }, 1000);
    });
    
    $('.S5').click(() => {
      $('html, body').animate({
            scrollTop: $('.S1').offset().top
      }, 1000);
  });
  */

});