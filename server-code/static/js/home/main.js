//Trigger elementInViewport(refer base.js) on window scroll
$(window).scroll(function(){
    element = document.getElementById('counter');
    var visible = elementInViewport([element]);
    if(visible){
        if(!$(visible).hasClass("viewed")){
            count();
        }
        $(visible).addClass("viewed")        
    }
})

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