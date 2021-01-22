(function (window) {

  var fireWork = function () {
    return;
  };

  fireWork.prototype.init = function () {
    // Inject firework image
    var snowball = document.createElement("img");
    snowball.setAttribute("src", "./media/images/firework.gif");
    snowball.setAttribute("width", "50px");
    snowball.setAttribute("height", "50px");
    snowball.setAttribute("style", "display: none; position: absolute");
    snowball.addEventListener("contextmenu", function (e) {
      e.preventDefault();
      return false;
    });
    document.body.appendChild(snowball);

    // Inject firework audio
    var audio = document.createElement("audio");
    var audioSource = document.createElement("source");
    audioSource.setAttribute("src", "./media/sounds/firework.mp3");
    audioSource.setAttribute("type", "audio/ogg");
    audio.appendChild(audioSource);
    document.body.appendChild(audio);

    // Listen to event user click mouse
    window.addEventListener("mouseup", function (event) {
      var x = event.pageX;
      var y = event.pageY;
      snowball.style.position = "absolute";
      snowball.style.left = x - 20 + "px";
      snowball.style.top = y - 20 + "px";
      snowball.style.display = "block";
      audio.pause();
      audio.currentTime = 0;
      audio.play();
      setTimeout(function () {
        snowball.style.display = "none";
      }, 400);
    });
  };

  window.fireWork = new fireWork();
  window.fireWork.init();

})(window);