// Function to start the countdown
function startCountdown() {
    var seconds = 10;
    var countdownElement = document.getElementById('countdown');
    var buttonContainer = document.getElementById('buttonContainer');

    function updateCountdown() {
        countdownElement.innerHTML = 'Wait for .. ' + seconds; // Updated line
        seconds--;

        if (seconds < 0) {
            // Display the button and stop the countdown
            countdownElement.style.display = 'none';
            buttonContainer.style.display = 'block';
            clearInterval(countdownInterval);
        }
    }

    // Initial call to set the initial countdown value
    updateCountdown();

    // Update the countdown every second
    var countdownInterval = setInterval(updateCountdown, 1000);
}

// Start the countdown when the page loads
window.onload = startCountdown;
