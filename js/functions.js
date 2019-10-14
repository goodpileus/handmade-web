
window.onload = function() {
  console.log('Loaded :-)');

  // document.querySelector(".loading").style.opacity = "0";
  // loading.classList.toggle("show-loading");

};

// $('.window-btn').click(function (e) {
//     e.preventDefault();                   // prevent default anchor behavior
//     var goTo = this.getAttribute("href"); // store anchor href
//
//     // do something while timeOut ticks ...
//     document.getElementById("loading").style.opacity = "1";
//
//     setTimeout(function(){
//          window.location = goTo;
//     }, 1000);                             // time in ms
// });


// ACCORDION
//--------------------------------------------
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {

    // toggles active class on accordion
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

var windowBtn = document.getElementsByClassName('window-btn');
var windowRoom = document.querySelector('.window-room');
var loading = document.querySelector(".loading");
var main = document.querySelector(".main-wrap");
var html = document.querySelector("html");
var j;

function openWindow() {
  main.classList.toggle("cancel-pointer");


  //if window is not open, load fade-in first
  if (loading.classList.contains('loaded')) {
    loading.classList.toggle("loaded");

    setTimeout(function(){
      windowRoom.classList.toggle("close-window");
      html.classList.toggle("stop-scrolling");

    }, 3000);
  } else {
    //if winodw is open, load fade-in second
    windowRoom.classList.toggle("close-window");

    setTimeout(function(){
      loading.classList.toggle("loaded");
      html.classList.toggle("stop-scrolling");

    }, 3000);

  }
}

for (j = 0; j < windowBtn.length; j++) {
  windowBtn[j].addEventListener('click', openWindow);
}

// windowBtn.addEventListener('click', openWindow);
