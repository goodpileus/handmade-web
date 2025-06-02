function newBg() {

  var colors = [
    '#f1f3b8', 
    '#f3f776', 
    '#f7bb76', 
    '#ffbea0', 
    '#c7f1ea',
    '#c7d2f1',
    '#e0c7f1',
    '#c7f1c9',

  ];

  var randomColor = colors[Math.floor(Math.random() * colors.length)];

  $('body').css({
    'color' : randomColor,
  });

  $('.window').css({
    'background' : randomColor,
  });

}

var interval = setInterval(timer, 10000);

function timer() {
  newBg();
}



$.fn.checkStuck = function (className) {
  $(this).each(function() {
      var t = $(this); //preselect
      t.toggleClass(className, (parseInt(t.css('top'), 10) === t[0].getBoundingClientRect().top));
  });
}

$(document).on('scroll', function() { $('.grid').checkStuck('stuck'); });