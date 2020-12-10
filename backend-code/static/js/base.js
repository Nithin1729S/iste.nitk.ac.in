
$(document).ready(function() {
    $(".dropdown-trigger").dropdown();
    $('.sidenav').sidenav();
    $('.collapsible').collapsible();
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

//Enable touch interaction (mobile)
$('body').on('touchstart', function() {});

//Close message (used for errors) box
$('#alert_close').click(function(){
    $( "#alert_box" ).slideToggle('slow');
});

//Set message box colour based on message type
function setMessageColour(messageType){
    $( "#alert_box" ).slideToggle('slow');
    //Integer value for messages.ERROR, 20 for messages.INFO
    if(messageType == 40){
        
        $('#messages_card').addClass('red')
    }
    else{
        $('#messages_card').addClass('green')
    }
}

//Used to make select fields searchable
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

//Function used to check if an element is in view
function elementInViewport(elements){
    for(element of elements){
        var bounding = element.getBoundingClientRect()
        if (bounding.top >= 0 && bounding.left >= 0 && bounding.right <= 
            (window.innerWidth || document.documentElement.clientWidth) 
            && bounding.bottom <= 
            (window.innerHeight || document.documentElement.clientHeight)) {
            return element
        } 
    }
    return false;
}

//Trigger elementInViewport on window scroll
$(window).scroll(function(){
    elements = document.getElementsByTagName('h3');
    spans = []
    for(element of elements){
        spans.push(element.getElementsByTagName('span')[0]);
    }
    var visible = elementInViewport(spans);
    if(visible){
        if(!$(visible).hasClass("viewed")){
            $(visible).toggleClass("animateLine");
        }
        $(visible).addClass("viewed")        
    }
})
