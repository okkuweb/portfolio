// REQUIRES
const smoothScroll = require("smooth-scroll");


// HEADER SIZE CONTROL
// Store the header element to a variable
const header = document.getElementById("header__large")

// Make the header larger if viewport is on top of the page
// and make it smaller when scrolling down the page
setInterval(function() {
    if(window.scrollY <= 5){
        header.id = "header__large";
    } else if(window.scrollY > 5) {
        header.id = "header__small";
    }
}, 200);


// SMOOTH SCROLL TO ANCHOR POINTS
smoothScroll.init({
    offset: 90
});
