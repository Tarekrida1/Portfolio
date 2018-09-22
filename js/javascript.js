/*
myText = document.getElementById('pp').getAttribute('data-text'),
    i = 0;
function myInfo() {
    'use strict';
    var tybeWriter = setInterval(function () {
        document.getElementById('pp').textContent += myText[i];
        i++;
        if (i > myText.length - 1) {
            clearInterval(tybeWriter);
        }
    }, 50);
};
*/
var typed3 = new Typed('#typed3', {
    strings: ['', 'UX Developer', 'Front End Developer','Photographer'],
    typeSpeed: 20,
    backSpeed: 10,
    loop: true,
    backDelay: 2000,
    startDelay: 1000,
    
  });