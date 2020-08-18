window.onload = function() {
  console.log('Loaded :-)');

  document.querySelector(".main-wrap").style.opacity = "1";
  cycleColors();
};


var colors = ['#a89794', '#915840', '#4d6c4b', '#585883', '#a68068', '#816e8e', '#a6a55a'];

function cycleColors(){
  color = colors.shift();
  colors.push(color);

  $('.main-wrap').css({
    'background' : color,
  });;
}


var interval = setInterval(timer, 6000);

function timer() {
  cycleColors();
}
