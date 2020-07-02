
$(document).ready(function() {
    $(".dropdown-trigger").dropdown();
    $('.sidenav').sidenav();
    $('.tooltipped').tooltip();
    $('select').formSelect();
    searchableSelectfieldInit();    
    $('.tap-target').tapTarget();
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

function searchableSelectfieldInit(){

    document.querySelectorAll('select[searchable]').forEach(elem => {
        const select = elem.M_FormSelect;
        const options = select.dropdownOptions.querySelectorAll('li:not(.optgroup)');

        const placeholderText = select.el.getAttribute('searchable');
        const searchBox = document.createElement('div');
        searchBox.style.padding = '6px 16px 0 16px';
        searchBox.innerHTML = `
            <input type="text" placeholder="${placeholderText}">
            </input>`
        select.dropdownOptions.prepend(searchBox);
        
        function filterOptions(event) {
            const searchText = event.target.value.toLowerCase();
            
            options.forEach(option => {
                const value = option.textContent.toLowerCase();
                const display = value.indexOf(searchText) === -1 ? 'none' : 'block';
                option.style.display = display;
            });

            select.dropdown.recalculateDimensions();
        }

        function focusSearchBox() {
            searchBox.firstElementChild.focus({
                preventScroll: true
            });
        }

        select.dropdown.options.autoFocus = false;

        if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
            select.input.addEventListener('click', focusSearchBox);
            options.forEach(option => {
                option.addEventListener('click', focusSearchBox);
            });
        }
        searchBox.addEventListener('keyup', filterOptions);
    });
}



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