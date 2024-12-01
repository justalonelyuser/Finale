function streams(){
    var procced1=confirm("You are about to be redirected to main Streams");
    if(procced1){
        window.open("streams.html", "_self");
    }
    else{

    }
}
var i = 0;
function timer() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 190);
    function frame() {
      if (width >= 190) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}