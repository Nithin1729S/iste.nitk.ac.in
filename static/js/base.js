
$(document).ready(function() {
    $(".dropdown-trigger").dropdown();
    $('.sidenav').sidenav();
    $('.tooltipped').tooltip();
    $('select').formSelect();
    $( "#progress" ).slideToggle('slow');
    $('.fixed-action-btn').floatingActionButton();
    
 });
 $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
});

 $('body').on('touchstart', function() {});

 $('#alert_close').click(function(){
    $( "#alert_box" ).fadeOut( "slow", function() {});
});


////////////////////////////////////////////////////////////
//
// USED IN APPLICANT_DEETS.HTML
//
////////////////////////////////////////////////////////////
$("#show_about").click(function(){
    $( "#details_form" ).slideToggle('slow');
    $( "#about_sigs" ).slideToggle('slow');
})

$("#show_form").click(function(){
    $( "#details_form" ).slideToggle('slow');
    $( "#about_sigs" ).slideToggle('slow');
})
////////////////////////////////////////////////////////////
//
// USED IN PROJECT_LIST.HTML
//
////////////////////////////////////////////////////////////
$('.projects_show').click(function(){
	$('.projects_show').slideToggle('slow')
	$("#projects"+this.id).slideToggle('slow')
})
$('.projects_back').click(function(){
	$('.projects_show').slideToggle('slow')
	$("#projects"+this.id).slideToggle('slow')
})

////////////////////////////////////////////////////////////
//
// USED FOR ALL PAGE HEADINGS
//
////////////////////////////////////////////////////////////
;(function($, win) {
    $.fn.inViewport = function(cb) {
      return this.each(function(i,el) {
        function visPx(){
          var elH = $(el).outerHeight(),
              H = $(win).height(),
              r = el.getBoundingClientRect(), t=r.top, b=r.bottom;
          return cb.call(el, Math.max(0, t>0? Math.min(elH, H-t) : (b<H?b:H)));  
        }
        visPx();
        $(win).on("resize scroll", visPx);
      });
    };
  }(jQuery, window));
  
  $("h3 span").inViewport(function(px){
    $(this).toggleClass("animateLine", !!px);
  });

function set_message_colour(message_type){
    //Integer value for messages.ERROR, 20 for messages.INFO
    if(message_type == 40){
        $('#messages_card').addClass('red')
    }
    else{
        $('#messages_card').addClass('green')
    }
}