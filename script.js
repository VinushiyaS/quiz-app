document.getElementById('cancelBtn').addEventListener('click', function() {
    console.log('Cancel button clicked');
  });

document.getElementById('htmlbtn').addEventListener('click', function() {
    console.log('HTML button clicked');
  });

document.getElementById('cssbtn').addEventListener('click', function() {
    console.log('CSS button clicked');
  });
document.getElementById('javascriptbtn').addEventListener('click', function() {
    console.log('JavaScript button clicked');
  });
// Countdown timer variables
let timer;
let timeLeft = 20;

// Function to start the countdown
function startTimer() {
  timer = setInterval(updateTimer, 1000);
}

// Function to update the timer display
function updateTimer() {
  const minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;

  // Format seconds with leading zero if needed
  seconds = seconds < 10 ? '0' + seconds : seconds;

  // Update timer display
  document.getElementById('timer').textContent = `${minutes}:${seconds}`;

  // Update circle progress
  const circle = document.getElementById('timerCircle');
  const circumference = circle.getAttribute('r') * 2 * Math.PI;
  const percent = (20 - timeLeft) / 20;
  circle.style.strokeDasharray = `${circumference}px`;
  circle.style.strokeDashoffset = `${circumference * (1 - percent)}px`;

  // Check if countdown is complete
  if (timeLeft === 0) {
    clearInterval(timer);
    alert('Timer expired!');
  } else {
    timeLeft--;
  }
}

// Start the timer when the page loads
document.addEventListener('DOMContentLoaded', startTimer);
