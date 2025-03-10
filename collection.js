var input=document.querySelector("#inn");
var products=document.querySelectorAll(".one")
var error=document.getElementById("not");
 
 console.log(input)
 console.log(products)
 console.log(error)

input.addEventListener("keyup",function(){
    for(let i=0;i<products.length;i++){
        var first=products[i].querySelector("h3").textContent.toUpperCase();
        var search=first.indexOf(input.value.toUpperCase());
          if(search==""||search>=0){
            products[i].style.display="block";
          
           
        }

        else{
            products[i].style.display="none"; 
           
           
        }
    }
})