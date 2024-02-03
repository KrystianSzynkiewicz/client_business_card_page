const menuSection = document.querySelector('.menu-section ');

// console.log(menuSection);

function startScreenCheker () {

    window.addEventListener("load", function(e) {
        if(this.window.innerWidth<991) {
            // console.log("Portrait mode! TEST!!!!")
            // how-work-bg-2
            menuSection.style.backgroundImage = "url('../images/howWork/how-work-bg-2.webp')";
        } else {
            // console.log("landscape mode! TEST!!!!!")
            // how-work-bg-1
            menuSection.style.backgroundImage = "url('../images/howWork/how-work-bg-1.webp')";
        }

    })

}

startScreenCheker();



// POPUPS

const buttonPopup1 = document.getElementById('buttonPopup-1');
const buttonPopup2 = document.getElementById('buttonPopup-2');
const rodoButton = document.getElementById('rodoButton');
const rodoButton2 = document.getElementById('rodoButton2');

const popup1 = document.getElementById('popup1');
const popup2 = document.getElementById('popup2');
const rodoPopup = document.getElementById('rodoPopup');

const exit = document.querySelector('.exit');

let popupVAR;

function fadeUp () {
  popupVAR.classList.add('fade__up');
  setTimeout(()=>{
    popupVAR.classList.remove('fade__up');
  },1000);
};

function fadeDown () {
  popupVAR.classList.add('fade__down');
  setTimeout(()=>{
    popupVAR.classList.remove('fade__down');
  },1000);
  exit.classList.add('fade__down');
  setTimeout(()=>{
    exit.classList.remove('fade__down');
  },1000);
};

function turnOn () {
  fadeUp(popupVAR);
  popupVAR.classList.remove('deactive');
  exit.classList.remove('deactive');
};

function turnOff () {
  exit.addEventListener('click', ()=>{
    fadeDown(popupVAR);
    setTimeout(()=>{
      popupVAR.classList.add('deactive');
      
      exit.classList.add('deactive');
    },1000)
  });
};

function popups () {
  
  buttonPopup1.addEventListener('click', ()=>{
    popupVAR = popup1;
    turnOn(popupVAR);
    turnOff(popupVAR);    
  });
  buttonPopup2.addEventListener('click', ()=>{
    popupVAR = popup2;
    turnOn(popupVAR);
    turnOff(popupVAR);    
  });
  rodoButton.addEventListener('click', ()=>{
    popupVAR = rodoPopup;
    turnOn(popupVAR);
    turnOff(popupVAR);    
  });
  rodoButton2.addEventListener('click', ()=>{
    popupVAR = rodoPopup;
    turnOn(popupVAR);
    turnOff(popupVAR);    
  });
};
popups();


// RODO CHECKBOX
const Checker = document.getElementById('rodoCheck');

function fooChecker() {
  let checkBox = document.getElementById("myCheck");
  let text = document.getElementById("text");
  if (checkBox.checked == true){
    text.style.display = "none";
  } else {
    text.style.display = "block";
  }
}

Checker.addEventListener('click', fooChecker);



//COOKIES//

const cookieButton = document.getElementById('cookieButton');
const cookieInfo = document.getElementById('cookieInfo');



cookieButton.addEventListener('click', ()=>{
  cookieInfo.classList.add('deactive');
})