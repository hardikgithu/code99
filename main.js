var SpeechRecognition = window.webkitSpeechRecognition;
var Recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML="";
    Recognition.start();
}
Recognition.onresult = function(event)
{
    console.log(event);
    Content = event.results[0][0].transcript;
    console.log(Content);
    document.getElementById('textbox').innerHTML=Content;
}
function speak(){

    var synth = window.speechSynthesis;

    speak_data = "Hello User your selfie will be taken in 5 seconds";

    var utterthis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterthis);

  
}
function take_snapshot()
{
    Webcam.snap(function(data_uri){
        if(img_id=="selfie1"){}
   document.getElementById("result").innerHTML = '<img id="selfie_1" src="'+data_uri+'">';
    });
    if(img_id=="selfie2"){}
    document.getElementById("result").innerHTML = '<img id="selfie_2" src="'+data_uri+'">';
    
    if(img_id=="selfie3"){}
    document.getElementById("result").innerHTML = '<img id="selfie_3" src="'+data_uri+'">';
     };
     setTimeout(function()
     {
        img_id = "selfie1";
        take_snapshot();
        speak_data = "Taking your next selfie in 10 seconds";
        var utterthis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterthis);
     }, 5000);
        
     
