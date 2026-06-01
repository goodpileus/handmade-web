$(".dark-btn").click(
    function(){
        $(".box").toggleClass("dark");
        $(".container").toggleClass("dark");
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
        // $(".chair").css("display", "block");
        $(".chair").show();
        $(".reveal-btn").hide();
    }
);

// document.querySelector(".box").classList.toggle("dark");

$(".draggable").draggable({
    containment: ".container",
    scroll: false,
    snap: true
});