
$(window).scroll(check_position);
$(document).ready(check_position);
function check_position() {
    var hT = $('#counter').offset().top,
        hH = $('#counter').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT+hH-wH)){
        count();
    }
}
function count(){
    $('.year').countTo({
        from: 0,
        to: year,
        speed: 1000,
        refreshInterval: 50,
        onComplete: function(value) {
            console.debug(this);
        }
    });
    $('.project').countTo({
        from: 0,
        to: project,
        speed: 1000,
        refreshInterval: 50,
        onComplete: function(value) {
            console.debug(this);
        }
    });
    $('.member').countTo({
        from: 0,
        to: member,
        speed: 1000,
        refreshInterval: 50,
        onComplete: function(value) {
            console.debug(this);
        }
    });
}