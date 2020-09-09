var slider=document.getElementById("slider")
var sliderCount=document.querySelectorAll(".slider-item")
var currentWidth=slider.offsetWidth*sliderCount.length
slider.querySelector(".slider-middle").style.width=currentWidth+"px"

const prev=document.querySelector(".prev")
const next=document.querySelector(".next")
let currentSlide=0;

next.onclick=function(){
currentSlide=(currentSlide+1+sliderCount.length)%sliderCount.length
slider.querySelector(".slider-middle").style.left=-(slider.offsetWidth*currentSlide)+"px"
}

prev.onclick=function(){
currentSlide=(currentSlide-1+sliderCount.length)%sliderCount.length
slider.querySelector(".slider-middle").style.left=-(slider.offsetWidth*currentSlide)+"px"
}

