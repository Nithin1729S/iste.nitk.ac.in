//For the purpose of stringifying MM/DD/YYYY date format
var monthSpan = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//Format YYYY-MM-DD into string
function dateSpan(dates) {
  var date = dates.slice(0,10)
  var month = date.split('-')[1];
  month = monthSpan[month - 1];
  var day = date.split('-')[2];
  if (day.charAt(0) == '0') {
    day = day.charAt(1);
  }
  var year = date.split('-')[0];

  //Spit it out!
  return "Time : " + dates.slice(11,16) + "<br>" + month + " " + day + ", " + year;
}

//Main function. Draw your circles.
function makeCircles(names, isDone) 
{
  for( i = 0; i < names.length; i++)
  {
    names[i]=names[i].slice(10);
  }


  //Draw the first circle
  $("#line").append('<div class="circle last" id="circle0" style="left: ' + 0 + '%;"><div class="popupSpan hide-on-med-and-down center">' + names[0]  + '</div></div>');
    
  //Variable for line length
  var line_len = 1.0/(names.length - 1.0)

  //Loop through middle circles
  for (i = 1; i < names.length - 1; i++) 
  {
    //Variable to decide postion for the circle
    var relativeInt = i * line_len;

    //Draw the date circle
    $("#line").append('<div class="circle last" id="circle' + i + '" style="left: ' + relativeInt * 100 + '%;"><div class="popupSpan hide-on-med-and-down center">' + names[i] + '</div></div>');
  }

  //Draw the last date circle
  $("#line").append('<div class="circle last" id="circle' + i + '" style="left: ' + 99 + '%;"><div class="popupSpan hide-on-med-and-down center">' + names[names.length - 1] + '</div></div>'); 
    
    
  
    //$("#timelinePhones").append(rounds_var);

    //Looping and setting the correct circles active and the next round message also active
  for( i = 0; i < names.length; i++)
  {
    if (isDone[i].localeCompare("False") == 0 || isDone[i].localeCompare("false") == 0){
      $("#timelinePhones").append('<div class="flow-text indigo-text text-darken-4 center">Next Round : <br>' + names[i] + '</div>');
      break;
    }
    //Setting all rounds passed as active and displaying which round
    $("#circle"+i).addClass("active");
  }
  
}

  
/*
$(".circle").mouseenter(function() {
  $(this).addClass("hover");
});

$(".circle").mouseleave(function() {
  $(this).removeClass("hover");
});

$(".circle").click(function() {
  var spanNum = $(this).attr("id");
  selectDate(spanNum);
});

function selectDate(selector) {
  $selector = "#" + selector;
  $spanSelector = $selector.replace("circle", "span");
  var current = $selector.replace("circle", "");
  
  $(".active").removeClass("active");
  $($selector).addClass("active");
  
  if ($($spanSelector).hasClass("right")) {
    $(".center").removeClass("center").addClass("left")
    $($spanSelector).addClass("center");
    $($spanSelector).removeClass("right")
  } else if ($($spanSelector).hasClass("left")) {
    $(".center").removeClass("center").addClass("right");
    $($spanSelector).addClass("center");
    $($spanSelector).removeClass("left");
  }; 
};
*/
console.log()