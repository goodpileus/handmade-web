$(".dark-btn").click(
  function(){
    $(".square").toggleClass("dark");
    $("body").toggleClass("dark");
  }
);

$(".spin-btn").click(
  function(){
    $(".square").toggleClass("spin");
  }
);

$(".reveal-btn").click(
  function(){
    $(".chair").addClass("reveal");
    $(".reveal-btn").hide();
  }
);

$( ".draggable" ).draggable({
  containment: ".container",
  snap: true
});
