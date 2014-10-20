window.onload = function() {
    // ADD THE CODE HERE

// define the image box
var imgBox = document.getElementById("thePhoto");
imgBox.style.width = '200px';     
imgBox.style.opacity = 1;
// variable that will control box width
var imgWidth = '100px';

// variable that will control box opacity
//var opacityValue = 0.5;   


///////// ENLARGE IMAGE ANIMATION /////////
function enlargeBox()
{
    //if (imgWidth<=350) {
     //   imgWidth=imgWidth+1; 
    //}
    
// to change opacity (fade in)    
    //if (opacityValue<=1) {
    //   opacityValue=opacityValue+0.003;
    //}
    
//// no fade in    
//opacityValue = 0.6;

// update width and opacity values 

imgBox.style.width = '200px';     
imgBox.style.opacity = 1;
 
}

///////// NORMALIZE IMAGE ANIMATION /////////
function normalizeBox()
{	
    //if (imgWidth>=500) {
    //    imgWidth=imgWidth-1; 
    //}
    
// to change opacity (fade in)    
    //if (opacityValue>=1) {
    //   opacityValue=opacityValue-0.003;
    //}

// update width and opacity values 

imgBox.style.width = '100px';     
imgBox.style.opacity = 0.5;
 
}
/////// MOUSE HOVER/OUT CODES ///////////

// actions when mouse hovers over yellow box
// slideBoxIn slides red box to the right
// changeMessage changes "in" to "out"
imgBox.onmouseover=function(){
    enlargeBox();   
};

// action when mouse is out of yellow box
imgBox.onmouseout=function(){
    normalizeBox()
}


};