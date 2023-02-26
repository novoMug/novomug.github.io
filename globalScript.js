
// document.body.scrollTop = 0;
// document.documentElement.scrollTop = 0;


var overlay = document.getElementById("overlayDiv");

// overlay.style.transform = 'translatey(' + document.documentElement.scrollTop.toString() + ')';

function removeOverlay() {
    // debugger;
    overlay.style.opacity = '0';
    setTimeout(function () {
        overlay.style.zIndex = '-10';
        overlay.style.width = '10px';
        overlay.style.height = '10px';
    } , 400);
    
}

setTimeout(removeOverlay, 800);

// document.body.style.scrollBehavior = 'smooth';
// document.documentElement.style.scrollBehavior = 'smooth';