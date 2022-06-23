var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {
  recognition.start();
}

recognition.onresult = function (event) {
  console.log(event);

  var content = event.results[0][0].transcript;

  if (content == "take my selfie") {
    speak();
  }

  document.getElementById("textbox").innerHTML = content;
  console.log(content);
};

function speak() {
  var synth = window.speechSynthesis;

  var speak_data = "taking your selfie in 5 secends";

  var utterThis = new SpeechSynthesisUtterance(speak_data);

  synth.speak(utterThis);
  Webcam.attach(camera);

  setTimeout(function () {
    snapshot();
    save();
  }, 5000);
}

Webcam.set({ width: 360, height: 250, image_format: "png", png_quality: 90 });
camera = document.getElementById("camera");

function snapshot() {
  Webcam.snap(function (data_uri) {
    document.getElementById("display_selfie").innerHTML =
      '<img id="selfie" src = ' + data_uri + ">";
  });
}

function save() {
  link = document.getElementById("link");
  image = document.getElementById("selfie").src;
  link.href = image;
  link.click();
}
