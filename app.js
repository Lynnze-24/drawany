const canvas = document.getElementById('drawing-canvas');
const canvasCon = document.querySelector('.drawing-container');
const plus= document.querySelector('.plus');
const minus= document.querySelector('.minus');
const strokeColor = document.querySelector('.stroke-color')
const thickness= document.querySelector('.thickness')
const clear = document.querySelector('.clear')

canvas.width = canvasCon.getBoundingClientRect().width;
canvas.height = canvasCon.getBoundingClientRect().height;




const ctx = canvas.getContext("2d");

window.addEventListener('resize',()=>{
  ctx.canvas.width = canvasCon.getBoundingClientRect().width;
  ctx.canvas.height = canvasCon.getBoundingClientRect().height;
 
})

let x = undefined;
let y = undefined;
let size = parseInt(thickness.innerHTML);
let color= "black";
let isPressed = false;

canvas.addEventListener('mousedown',function(e){
  isPressed=true;
    x = e.offsetX;
    y=e.offsetY;
    
   
});
canvas.addEventListener('mouseup',function(e){
 isPressed =false;
   x= undefined;
y= undefined;

})
canvas.addEventListener('mousemove',function(e){
 
  if(isPressed ){
    let x1=e.offsetX;
  let y1=e.offsetY;
  drawCircle(x1,y1);
  drawLine(x,y,x1,y1);
  
  x = x1;
  y=y1;
  }
  
 
  
})

canvas.addEventListener('touchstart',function(e){
  isPressed=true;
    x = e.touches[0].clientX;
    y=e.touches[0].clientY;
    
    
});
canvas.addEventListener('touchend',function(e){
 isPressed =false;
   x= undefined;
y= undefined;

})
canvas.addEventListener('touchmove',function(e){
 
  if(isPressed ){
    let x1=e.touches[0].clientX;
  let y1=e.touches[0].clientY;
  drawCircle(x1,y1);
  drawCircle(x,y);
  drawLine(x,y,x1,y1);
  
  x = x1;
  y=y1;
  }
  
 
  
})


function drawLine(x1,y1,x2,y2){
  ctx.beginPath();
  ctx.moveTo(x1,y1);
  ctx.lineTo(x2,y2);
  ctx.strokeStyle = color;
  ctx.lineWidth= size * 2;
  ctx.stroke();
}

function drawCircle(x1,y1){
  ctx.beginPath();
 ctx.arc(x1,y1,size,0,Math.PI*2);
  ctx.fillStyle = color;
  ctx.fill();
}

plus.addEventListener('click',function(){
  if(thickness.innerText!="20"){
    size = parseInt(thickness.innerText) + 1;
   thickness.innerText = size;
    
  }
  
})

minus.addEventListener('click',function(){
  if(thickness.innerText!="1"){
    size = parseInt(thickness.innerText) - 1;
    thickness.innerText = size;
  }
})


strokeColor.addEventListener('change',function(){
  color =  strokeColor.value;
})


clear.addEventListener('click',function(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
})