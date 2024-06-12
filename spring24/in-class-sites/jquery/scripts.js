$(".dark-btn").click(
  function(){
    $(".box").toggleClass("dark");
    $("body").toggleClass("dark");
  }
);

$(".spin-btn").click(
  function(){
    $(".box").toggleClass("spin");
  }
);

$(".reveal-btn").click(
  function(){
    // $(".chair").addClass("reveal");
    $(".chair").css("display", "block");
    // $(".reveal-btn").css("display", "none");
    $(".reveal-btn").hide();
  }
);

$( function() {
  $( ".draggable" ).draggable({ 
    containment: ".container"
  });
} );
