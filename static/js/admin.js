
function r(f){/in/.test(document.readyState)?setTimeout('r('+f+')',9):f()}

function read_only_checkboxes(){
    al=document.getElementById('result_list');
    trs=al.getElementsByTagName('tr');
    i=0;
    for(i=1;i<trs.length;i+=1) { //get all rows in table
       getType = trs[i].getElementsByClassName('field-process_button')[0].innerHTML;
       if (getType.includes('False')){
           trs[i].getElementsByClassName('action-select')[0].disabled= true;
       }
    }
  }
  
r(function() {
    read_only_checkboxes();
});