var recognizing;
var recognition = new webkitSpeechRecognition();
recognition.continuous = true;
reset();
recognition.onend = reset();

recognition.onerror = function(event) {
    console.log(event.error);
};

recognition.onresult = function (event) {
    var text = "";
    clearCanvas();
    for (var i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
            text = event.results[i][0].transcript;
        }
    }
    console.log(text);
    writeToCanvas(text);
}

function reset() {
    recognizing = false;
    button.innerHTML = "Click to Speak";
}

function toggleStartStop() {
    if (recognizing) {
        recognition.stop();
        reset();
    } else {
        recognition.start();
        recognizing = true;
        button.innerHTML = "Click to Stop";
    }
}
