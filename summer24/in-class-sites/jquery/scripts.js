$(".dark-btn").click(
  function(){
    $(".box").toggleClass("dark");
    $("body").toggleClass("dark");
    $(".dark-btn").toggleClass("engaged");
  }
);

$(".glow-btn").click(
  function(){
    $(".box").toggleClass("glow");
    $(".glow-btn").toggleClass("engaged");
  }
);

$(".spin-btn").click(
  function(){
    $(".box").toggleClass("spin");
    $(".spin-btn").toggleClass("engaged");
  }
);

$(".reveal-btn").click(
  function(){
    $(".chair").addClass("reveal");

    // $(".reveal-btn").addClass("hide");
    // $(".reveal-btn").css("display", "none");
    $(".reveal-btn").hide();
  }
);

$( ".draggable" ).draggable();
