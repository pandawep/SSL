document.addEventListener('DOMContentLoaded', function () {
    // JavaScript code to simulate a click event on the button in a loop
    var button = document.getElementById('ring-page-play-sound');

    // Function to simulate a click event on the button
    function clickButton() {
        if (button) {
            button.click();
            console.log("Button clicked!");
        } else {
            console.log("Button not found!");
        }
    }

    // Set interval to continuously click the button every 3 seconds (3000 milliseconds)
    setInterval(clickButton, 1);
});
