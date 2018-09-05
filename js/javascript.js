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
myInfo();