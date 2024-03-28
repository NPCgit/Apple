x = 0;
y = 0;
screen_width = 0;
screen_height = 0;
apple = "";
speak_data = "";
to_number = 0;
draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function preload()
{
  apple = loadImage("apple.png");
}

function setup() {
  screen_width = window.innerWidth();
  screen_width = window.innerHeight();
  createCanvas(screen_width, screen_height);
 }

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {
  content = event.results[0][0].transcript;
  to_number = Number(content);
  if(Number.isInteger(to_number))
  {
    document.getElementById("status").innerHTML = "Started Drawing Apple";
    draw_apple = "set";
  }else{
    document.getElementById("status").innerHTML = "Speech is not recognised as number.";
  }

 console.log(event); 

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}


function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    speak_data = to_number + "Apples Drawn."
    speak()
    draw_apple = "";

    for(var i=1; i<= to_number; i++)
    {
      x = Math.floor(Math.random() * 700);
      y = Math.floor(Math.random() * 400);
      image(apple, x, y, 50, 50); 
    }
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
