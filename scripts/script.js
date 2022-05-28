
var button1 = document.querySelector("#button-1");
var ad1 = document.getElementById("ad1")
button1.addEventListener("click",myFunc);
    
function myFunc(){
    ad1.setAttribute("src",ad1.dataset.src)
    button1.classList.add("opacityZero")
} 