window.onload = function() {

// variable that will control box width
var xWidth = 0;

// variable that will control box opacity
var opacityValue = 0;

// detect which box is being pointed at; 1 for yellow, 2 for aqua
var arrowOnBox = 0;

// assign the boxes based on id

// the action control boxes
var yellowBox = document.getElementById("leftBox");
var aquaBox = document.getElementById("rightBox");

// the red box
var box1 = document.getElementById("redBox");

// the teal box
var box2 = document.getElementById("tealBox");

// set initial width and opacity values
box1.style.width = "0px";
box2.style.width = "0px";
box2.style.left = '175px';
box2.style.top = '-150px';
box2.style.opacity = 1;

/////// INITIAL/NORMALIZED POSITIONS ////////
function backBox1ToPosition(){
    opacityValue = 0;
    xWidth = 0;
    box1.style.width = "0px";
    box1.style.opacity = 0;   
}

function backBox2ToPosition(){
    opacityValue = 0;
    xWidth = 0;
    box2.style.width = "0px";
    box2.style.opacity = 0;   
}


///////// EXPAND ANIMATION /////////
function expandBox()
{
    if (xWidth<=175) {
        xWidth=xWidth+1; 
    }
    
// to change opacity (fade in)    
    if (opacityValue<=1) {
       opacityValue=opacityValue+0.003;
    }
    
//// no fade in    
//opacityValue = 0.6;

// update width and opacity values 
    if (arrowOnBox == 1) {
box1.style.width = xWidth+'px';     
box1.style.opacity = opacityValue;
    }
    if (arrowOnBox == 2) {
box2.style.width = xWidth+'px';     
box2.style.opacity = opacityValue; 
    }
}


///////// COMPRESS ANIMATION /////////

function compressBox()
{
   if (xWidth>=0) {
        xWidth=xWidth-1; 
        }
    
// to change opacity (fade out)    
    if (opacityValue>=1) {
  opacityValue=opacityValue-0.2;
  }
    
//// no fade out    
//opacityValue = 0.6;
    
    if (arrowOnBox == 3) {
        box1.style.width = xWidth+'px';     
        box1.style.opacity = opacityValue;
    }
    if (arrowOnBox == 4) {
        box2.style.width = xWidth+'px';     
        box2.style.opacity = opacityValue;   
    }
}

function slideBoxIn()
{    
animate1 = setInterval(function(){expandBox()},5);    
}

function slideBoxOut()
{
animate2 = setInterval(function(){compressBox()},5);
}


function stopExpandAnimation()
{    
clearTimeout(animate1);  
}

function stopCompressAnimation()
{    
clearTimeout(animate2);
opacityValue=0;
}

///////////// TEXT INSTRUCTIONS /////////////

// text instruction on yellow box, change "in" to "out" on mousehover
function changeMessage()
{
    if (arrowOnBox == 1) {
var str1 = document.getElementById("instructionForRed").innerHTML; 
var res1 = str1.replace(/in/g,"out");
document.getElementById("instructionForRed").innerHTML=res1;
    }
    
       if (arrowOnBox == 2) {
var str2 = document.getElementById("instructionForTeal").innerHTML; 
var res2 = str2.replace(/in/g,"out");
document.getElementById("instructionForTeal").innerHTML=res2;
    }
}

function restoreMessage()
{
    if (arrowOnBox == 3) {
var str3 = document.getElementById("instructionForRed").innerHTML; 
var res3 = str3.replace(/out/g,"in");
document.getElementById("instructionForRed").innerHTML=res3;    
    }
    
    if (arrowOnBox == 4) {
var str4 = document.getElementById("instructionForTeal").innerHTML; 
var res4 = str4.replace(/out/g,"in");
document.getElementById("instructionForTeal").innerHTML=res4;    
    }
}

/////// END OF TEXT INSTRUCTIONS /////////


/////// MOUSE HOVER/OUT CODES ///////////

// actions when mouse hovers over yellow box
// slideBoxIn slides red box to the right
// changeMessage changes "in" to "out"
yellowBox.onmouseover=function(){
    backBox2ToPosition();
    arrowOnBox = 1;
    stopCompressAnimation();
    slideBoxIn();
    changeMessage();    
};

// action when mouse is out of yellow box
yellowBox.onmouseout=function(){
    arrowOnBox = 3;
    slideBoxOut();
    restoreMessage();
    stopExpandAnimation();
}

// actions when mouse hovers over aqua box
// slideBoxIn slides teal box to the right
// changeMessage changes "in" to "out"
aquaBox.onmouseover=function(){
    backBox1ToPosition();
    arrowOnBox = 2;
    stopCompressAnimation();
    slideBoxIn();
    changeMessage();
};

// action when mouse is out of aqua box
aquaBox.onmouseout=function(){
    arrowOnBox = 4;
    slideBoxOut();
    restoreMessage();
    stopExpandAnimation();
}

};