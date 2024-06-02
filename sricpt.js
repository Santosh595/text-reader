function readText(){
    let text = document.getElementById("text-area").value;
    let speech = new SpeechSynthesisUtterance(text);
    const voices = speechSynthesis.getVoices();
    speech.voice= voices[0];
    speechSynthesis.speak(speech);
}