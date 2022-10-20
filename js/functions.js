window.onload = function() {
  console.log('Loaded :-)');
};

// LOADS GLOBAL NAV
$(function(){
  $("#nav").load("/nav.html");
  $("body").addClass("active");
  $(".skybox").addClass("active");

  setTimeout(function() {
    var href = window.location.pathname;
    $('#nav').find('a[href="' + href + '"]').addClass('active');
    $("*").removeClass("no-transition");
  }, 300);
});


// CALENDAR SELECTION
$(function() {
  $('#weeks').change(function(){
    $('.week').hide();
    $('#' + $(this).val()).show();
  }).change();
});

$(".cal-nav button").click(function() {
    $("#weeks :selected")[this.id]().prop("selected", true).change();
});

// SCREENSAVER
Cookies.set('dayTime', true);

var elem = document.getElementById("timer"), timeout, startTimer = function timer() {
    timeout = setTimeout(timer, 20000)
    $('.sun').addClass( "saving" );
    $('.moon').addClass( "saving" );
    $('html').addClass( "saving" );
    $('.icon-day').addClass( "saving" );
    $('.icon-night').addClass( "saving" );
}
function resetTimer() {
    // here you reset the timer...
    clearTimeout(timeout);
    startTimer();
    $('.sun').removeClass( "saving night-time" );
    $('.moon').removeClass( "saving night-time" );
    $('html').removeClass( "saving night-time" );
    $('.icon-day').removeClass( "saving night-time" );
    $('.icon-night').removeClass( "saving night-time" );
}

function dayTime() {
  console.log('day');
  document.addEventListener("mousemove", resetTimer);
  document.addEventListener("keypress", resetTimer);
  resetTimer();

  Cookies.set('night', false);

  Cookies.set('dayTime', true);
};

function nightTime() {
  console.log('night');

  clearTimeout(timeout);
  $('.sun').addClass( "saving night-time");
  $('.moon').addClass( "saving night-time" );
  $('html').addClass( "saving night-time");

  $('.icon-day').addClass( "saving night-time");
  $('.icon-night').addClass( "saving night-time");

  document.removeEventListener("mousemove", resetTimer);
  document.removeEventListener("keypress", resetTimer);

  Cookies.set('dayTime', false);

  Cookies.set('night', true);
};

// if(Cookies.get('night') == 'true') {
//   nightTime();

//   setTimeout(function() {
//     var href = window.location.pathname;
//     $('.icon-day').addClass( "saving night-time");
//     $('.icon-night').addClass( "saving night-time");
//   }, 150);

// } else if(Cookies.get('dayTime') == 'true'){
//   dayTime();
// }

if(Cookies.get('rays') == 'true') {
  $('.sun div').css( "transition", '0s');
  $('.sun div').addClass( "active");
}

function rays() {
  $('.sun div').toggleClass( "active");
  $('.sun div').css( "transition", '1s');

  if(Cookies.get('rays') == 'true') {
    Cookies.set('rays', false);
    console.log('rays off');
  } else {
    Cookies.set('rays', true);
    console.log('rays');
  }
};
