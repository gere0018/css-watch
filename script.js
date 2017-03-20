'use strict';
const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
var now;
var seconds;
var minutes;
var hours;

function moveSeconds () {
  now = new Date();
  seconds = now.getSeconds();
  minutes = now.getMinutes();
  hours = now.getHours();
  console.log(seconds + ", " + minutes + ", " + hours);
  //I used template litteral from ES6 to get the value. To transform the seconds to degrees
  //each 60s==360deg so 360/60=6 that's why i multiplied by 6. We add 90 because we added 90 to
  //make all the hands vertical in css.
	secondHand.style.webkitTransform = `rotate(${(seconds*360/60) + 90}deg)`;

  //if we create a setinterval for minutes, the hands won't be in sync, so adding logic here
  minuteHand.style.webkitTransform = `rotate(${(minutes*360/60) + 90}deg)`;
  //1hour = 60 minutes = 3600s regle de 3: 12h----> 360deg
                                          //hours---->???
  hourHand.style.webkitTransform = `rotate(${(hours*360/12) + 90}deg)`;

};

setInterval(moveSeconds, 1000);
