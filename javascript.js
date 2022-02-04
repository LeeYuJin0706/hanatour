let index = 1;
let moveCheck = true;
const sliderBox = document.querySelector('.slider-box');
const slideContents = document.querySelectorAll('.slide');
const sliderLength = slideContents.length;

let copyFirst = sliderBox.firstElementChild.cloneNode(true);
let copylast = sliderBox.lastElementChild.cloneNode(true);

sliderBox.appendChild(copyFirst);
sliderBox.insertBefore(copylast, sliderBox.firstElementChild);

sliderBox.style.width = 100 * (sliderLength+2) + "vw";
sliderBox.style.transform = "translateX(-" + 100*(index) + "vw)";


function slideToLeft(){
    console.log("왼쪽")
    if(moveCheck){
        moveCheck = false;
        
        index--;
        moveSlide(1000);
        
        setTimeout(function(){
            if(index===0){
                index=sliderLength;
                moveSlide(0);
            }
            moveCheck=true;
            moveSlide(0)
        }, 1000);
    }
}

function slideToRight(){
    console.log("오른쪽")
    if(moveCheck){
        moveCheck=false;
        
        index++;
        moveSlide(1000);
        
        setTimeout(function(){
            if(index===sliderLength+1){
                index=1;
                moveSlide(0);
            }
            
            moveCheck=true;
            moveSlide(0)
        }, 1000);
    }
}
function moveSlide(time){
    sliderBox.style.transition = time +'ms';
    sliderBox.style.transform = "translateX(-" + 100*(index) +"vw)";
}

const tapList = document.querySelectorAll('.page');
const tapButton = document.querySelectorAll('.tap-menu ul li');

for(let i = 0; i < tapButton.length; i++){
    tapButton[i].addEventListener('click', function(e){
        e.preventDefault();
        for(let j = 0; j < tapList.length; j++){
            tapList[j].classList.remove('active');
        }
        tapList[i].classList.add('active');
    })
}