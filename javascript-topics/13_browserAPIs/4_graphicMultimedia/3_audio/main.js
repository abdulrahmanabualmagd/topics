// Create an audio context
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

function playSound() {
    // Create an oscillator node
    const oscillator = audioContext.createOscillator();

    // Connect the oscillator to the audio context's destination (speakers)
    oscillator.connect(audioContext.destination);

    // Set oscillator properties
    oscillator.type = 'sine'; // Sine wave
    oscillator.frequency.setValueAtTime(440, audioContext.currentTime); // 440 Hz (A4)

    // Start the oscillator
    oscillator.start();

    // Stop the oscillator after 1 second
    setTimeout(() => {
        oscillator.stop();
    }, 1000);
}