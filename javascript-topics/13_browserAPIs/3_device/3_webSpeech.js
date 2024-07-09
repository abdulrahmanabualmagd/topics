// For Speech Recognition

const recognition = new webkitSpeechRecognition() || new SpeechRecognition();
// Create a new instance of SpeechRecognition object

recognition.lang = 'en-US';
// Set the language for recognition. Default is the user's locale if not set.

recognition.interimResults = false;
// Set to true to enable interim results. If true, the recognition service will return results while still processing.

recognition.maxAlternatives = 1;
// Specifies the maximum number of alternative transcripts that the recognizer should return.

recognition.onstart = function() {
    console.log('Speech recognition started');
};
// Event handler for when speech recognition starts

recognition.onerror = function(event) {
    console.error('Speech recognition error occurred: ' + event.error);
};
// Event handler for when an error occurs during speech recognition

recognition.onresult = function(event) {
    const transcript = event.results[0][0].transcript;
    console.log('Recognition result: ' + transcript);
};
// Event handler for when speech is recognized. Results contain an array of SpeechRecognitionResult objects.

recognition.onend = function() {
    console.log('Speech recognition ended');
};
// Event handler for when speech recognition ends

// For Speech Synthesis

const speech = new SpeechSynthesisUtterance();
// Create a new instance of SpeechSynthesisUtterance object

speech.lang = 'en-US';
// Set the language for synthesis. Default is the user's locale if not set.

speech.volume = 1;
// Sets the volume for the utterance. Values range from 0 (silent) to 1 (maximum volume).

speech.rate = 1;
// Sets the speed at which the utterance is spoken. Values range from 0.1 (slowest) to 10 (fastest).

speech.pitch = 1;
// Sets the pitch at which the utterance is spoken. Values range from 0 (lowest pitch) to 2 (highest pitch).

speech.text = 'Hello, world!';
// Sets the text that will be spoken.

speech.onstart = function() {
    console.log('Speech synthesis started');
};
// Event handler for when speech synthesis starts

speech.onend = function() {
    console.log('Speech synthesis ended');
};
// Event handler for when speech synthesis ends

speech.onerror = function(event) {
    console.error('Speech synthesis error occurred: ' + event.error);
};
// Event handler for when an error occurs during speech synthesis

// Other methods:
// - speechSynthesis.cancel(): Clears the utterance queue and cancels any currently ongoing utterances.
// - speechSynthesis.pause(): Pauses the currently speaking utterance.
// - speechSynthesis.resume(): Resumes the currently paused utterance.
// - speechSynthesis.getVoices(): Returns an array of SpeechSynthesisVoice objects representing the available voices.

// Note: This code assumes that the Web Speech API is supported by the browser and that necessary fallbacks are in place for unsupported features.
