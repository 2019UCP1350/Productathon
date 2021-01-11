const SpeakOut = (text) => {
    var myTimeout;
    function myTimer() {
        window.speechSynthesis.pause();
        window.speechSynthesis.resume();
        myTimeout = setTimeout(myTimer, 10000);
    }
        window.speechSynthesis.cancel();
        myTimeout = setTimeout(myTimer, 10000);
        var toSpeak = text;
        var utt = new SpeechSynthesisUtterance(toSpeak);
        utt.voiceURI = 'native';
        utt.rate = 0.75;
        utt.volume=1;
        utt.lang = "hi";
        utt.onend =  function() { clearTimeout(myTimeout); }
        window.speechSynthesis.speak(utt);
  }

  export default SpeakOut;