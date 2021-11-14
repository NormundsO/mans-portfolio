
var header = document.getElementById("Navlinks");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}


var x=5;
var y=10.10;
var z=true;
var w="test";
var a=['a','b',200]
var es={Vards: 'Normunds'}

console.log(x,y,z,w,a,es.Vards)

