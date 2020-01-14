// Image switcher code

let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/driven.jpeg') {
    myImage.setAttribute ('src','images/treatise.jpeg');
  } else {
    myImage.setAttribute ('src','images/driven.jpeg');
  }
}

// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Damn it ' + myName + " pay attention man.";
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML =  'Damn it ' + storedName + " pay attention man.";
}

myButton.onclick = function() {
  setUserName();
}