
window.onload = function() {
  console.log('Loaded :-)');

  document.querySelector(".main-wrap").style.opacity = "1";
  newBg();
};



function newBg() {
  var randomColor = '#'+ ('474747' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);

  $('.main-wrap').css({
    'background' : randomColor,
  });
}

var interval = setInterval(timer, 15000);

function timer() {
  newBg();
}

// $( ".more-btn" ).click(function() {
//   $(".more").toggleClass("show");
//   // $(".more").css( "height", "100%" );
//   $(".more-btn").toggleClass("less");
// });



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

// var morebtn = document.querySelector(".more-btn");

$( ".more-btn" ).click(function() {
  // toggles active class on accordion
  this.classList.toggle("less");
  var more = this.nextElementSibling;
  if (more.style.maxHeight) {
    more.style.maxHeight = null;
  } else {
    more.style.maxHeight = more.scrollHeight + "px";
  }
});

jQuery(function($) {
    // changed .hover to .each
    $('.flower').each(function() {
        var a = Math.random() * 120 - 110;
        $(this).css('transform', 'rotate(' + a + 'deg)');
    });
});

// var windowBtn = document.getElementsByClassName('window-btn');
// var windowRoom = document.querySelector('.window-room');
// var loading = document.querySelector(".loading");
// var main = document.querySelector(".main-wrap");
// var html = document.querySelector("html");
// var j;

// function openWindow() {
//   main.classList.toggle("cancel-pointer");
//
//
//   //if window is not open, load fade-in first
//   if (loading.classList.contains('loaded')) {
//     loading.classList.toggle("loaded");
//
//     setTimeout(function(){
//       windowRoom.classList.toggle("close-window");
//       html.classList.toggle("stop-scrolling");
//
//     }, 3000);
//   } else {
//     //if window is open, load fade-in second
//     windowRoom.classList.toggle("close-window");
//
//     setTimeout(function(){
//       loading.classList.toggle("loaded");
//       html.classList.toggle("stop-scrolling");
//
//     }, 3000);
//
//   }
// }

// for (j = 0; j < windowBtn.length; j++) {
//   windowBtn[j].addEventListener('click', openWindow);
// }

// windowBtn.addEventListener('click', openWindow);
