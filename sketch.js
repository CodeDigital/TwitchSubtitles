p5.disableFriendlyErrors = true;

var foo; // speech recognition object (will prompt for mic access)
var timer = new Date();

function preload(){

}

function setup() {
  var rn = new Date();
  if(((rn.getTime() - timer.getTime()) / 1000) >= 10){
    print('reloading');
    location.reload();
    timer = new Date();
  }

  noCanvas();
  var lang = navigator.language || 'en-US';

  function showResult(){
    var test = document.getElementById("stt");
    var txt = test.innerHTML;
    //txt = foo.resultString + "<br>" + txt;
    txt = foo.resultString;
    test.innerHTML = txt;
    //createP(foo.resultString);
    print(foo.resultString); // log the result
  }

  foo = new p5.SpeechRec(lang,showResult);
var continuous = true; // boolean to set whether the speech recognition engine will give results continuously (true) or just once (false = default). bind callback function to trigger when speech is recognized
var interim = true;
foo.start(continuous, interim); // start listening
}

function draw() {

}
