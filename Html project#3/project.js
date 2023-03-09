//Box movement*
var x=100, y=150;
function pos(dx,dy){
if(!document.getElementById) return;
x +=30 * dx;
y +=30 * dy;
obj = document.getElementById("square");
obj.style.top=y + "px";
obj.style.left=x + "px";
}
//Hiding Box*
function hideSquare(){
if(!document.getElementById) return;
obj=document.getElementById("square");
obj.style.display="none";
}
//Showing Box*
function showSquare(){
    if(!document.getElementById) return;
    obj=document.getElementById("square");
    obj.style.display="block";
    }
    //Line animation*
    function animate({duration, draw, timing}) {

        let start = performance.now();
      
        requestAnimationFrame(function animate(time) {
          let timeFraction = (time - start) / duration;
          if (timeFraction > 1) timeFraction = 1;
      
          let progress = timing(timeFraction)
      
          draw(progress);
      
          if (timeFraction < 1) {
            requestAnimationFrame(animate);
          }
      
        });
    }
//Initialize the Counter and the Array
var numbernames = 0;
var names = new Array();
function sortNames() {
//Get the name from the text area
thename = document.theform.newname.value;
//Add the name to the array
names[numbernames] = thename;
//Incrementing the counter
numbernames++;
//sorting the array
names.sort();
document.theform.sorted.value=names.join("\n")
}
//Initialize the Counter and the Array
var numbernames = 0;
var names = new Array();
function sortNames() {
//Get the name from the text area
thename = document.theform.newname.value;
//Add the name to the array
names[numbernames] = thename;
//Incrementing the counter
numbernames++;
//sorting the array
names.sort();
document.theform.sorted.value=names.join("\n")
}