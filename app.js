'use strict';

const className = document.body.className
;
const switcher = document.querySelector('.btn');
switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    if(className = document.body.className) {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }
});
