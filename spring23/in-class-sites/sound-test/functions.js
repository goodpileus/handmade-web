// $('#music-btn').click(function() {
//   $("#my-sound").get(0).play;
//   // var audio = $("#my-sound");
//   // if (audio.paused == false) {
//   //     audio.pause();
//   //     alert('music paused');
//   // } else {
//   //     audio.play();
//   //     alert('music playing');
//   // }
// });

var audioElement = document.getElementById("my-sound");
function togglePlay() {
    if (audioElement.paused) {
        audioElement.play();
    }
    else {
        audioElement.pause();
    }
};