$(".dark-btn").click(function(){
  $("body").toggleClass('dark');
  $(".box").toggleClass('dark');
});

$(".glow-btn").click(function(){
  $(".box").toggleClass('glow');
});

$(".spin-btn").click(function(){
  $(".box").toggleClass('spin');
});

$(".reveal-btn").click(function(){
  $(".chair").css('opacity', '1');
  $(".reveal-btn").hide();
});

$( ".draggable" ).draggable();