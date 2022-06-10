
/* var button1 = document.querySelector("#button-1");
var ad1 = document.getElementById("ad1")
button1.addEventListener("click",myFunc1);

var button2 = document.querySelector("#button-2");
var ad2 = document.getElementById("ad2")
button2.addEventListener("click",myFunc2);
    
function myFunc1(){
    ad1.setAttribute("src",ad1.dataset.src)
    button1.classList.add("displayNone")
} 
function myFunc2(){
    ad2.setAttribute("src",ad2.dataset.src)
    button2.classList.add("displayNone")
}  */
/*
задача: при клик на бутон с id="button-i"  да се сетва атрибут на елемент с id= "ad-i" и към бутона да се прибавя класс "displayNone"
задача: при клик на бутон n от всички  да се сетва атрибут на елемент n и към бутона да се прибавя класс "displayNone"
*/


/* var buttons = document.querySelectorAll(".button")
var ads = document.querySelectorAll(".ad")
for (const button of buttons) {
    console.log(button)
    button.addEventListener("click",function(){
        button.classList.add("displayNone");

    } )
} */
var buttons = document.querySelectorAll(".button")
var ads = document.querySelectorAll(".ad")
var replayBtns = document.querySelectorAll(".btn-replay")

for(let i=0; i<buttons.length ; i++){

    let button = buttons[i]
    let ad = ads[i]
    let replayBtn = replayBtns[i]

    console.log(replayBtn)

    button.addEventListener("click",function(){
    button.classList.add("displayNone");
    replayBtn.classList.add("opacityOne");
    ad.setAttribute("src",ad.dataset.src)
} )

    

    replayBtn.addEventListener("click",function(event){
        ad.setAttribute("src",ad.dataset.src)   
        button.classList.add("displayNone");
        } )
}
