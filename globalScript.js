var imgArray = ['FoggiestMountainEver.jpeg', 'FoggyBeachGreyscale.jpeg', 'NightSkyBlueAndGrey.jpeg', 'SunsetOnTheDock.jpeg'];
var overlay = document.getElementById("overlayDiv");
var heroDiv = document.getElementById('heroDiv');
var imgString = 'url(./img/';
var imgStringEnd = ')';
var rndNum;

function setHeroImg(){
    rndNum = Math.floor(Math.random() * 4);
    heroDiv.style.backgroundImage = imgString + imgArray[rndNum] + imgStringEnd;
}

function removeOverlay() {
    // debugger;
    overlay.style.opacity = '0';
    setTimeout(function () {
        overlay.style.zIndex = '-10';
        overlay.style.width = '10px';
        overlay.style.height = '10px';
    } , 400);
    
}
setHeroImg();
setTimeout(removeOverlay, 800);
// setInterval(setHeroImg, 5000);
