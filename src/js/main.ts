const header = document.getElementById("header__large")

setInterval(function() {
    if(window.scrollY <= 5){
        header.id = "header__large";
    } else if(window.scrollY > 5) {
        header.id = "header__small";
    }
}, 200);
