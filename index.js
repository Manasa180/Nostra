// offer top: 
var remove=document.getElementById("offer__remove")
remove.addEventListener("click",function(){
event.target.parentElement.style.display="none";
})

// side navbar
var side=document.getElementById("side")
var sremove=document.getElementById("side__remove");
document.getElementById("img").addEventListener("click",function(){
   side.zIndex="10001" 
side.style.left="0%";
})
sremove.addEventListener("click",function(){
side.style.left="-50%"
})
//slider 
var sliderleftbutton = document.getElementById("slider-left-activate")
var sliderrightbutton =document.getElementById("slider-right-activate")
var sliderimage= document.querySelector(".slider-image-container")
var slidermargin=0

console.log(sliderleftbutton)

sliderrightbutton.addEventListener("click",

function(){
    slidermargin=slidermargin+100

    if(slidermargin>200)
    {
        slidermargin=0
        sliderimage.style.marginLeft=0;
    }
    else{
        sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    
   

}
)

sliderleftbutton.addEventListener("click",

function(){

    if(slidermargin==0)
    {
       
        slidermargin=200
        sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    else{

        slidermargin=slidermargin-100
    sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    
    
}
)
//Activate like button
var images = document.querySelectorAll(".wanted__like");
console.log(images);
images.forEach((btn) => {  
    btn.addEventListener("click", function(e) {
        if (e.target.src.includes("images/8.png")) {
            console.log("jkjk");
            e.target.src = "images/likee.jpg";
        } else {
            e.target.src = "images/8.png";  
        }
    });
});


