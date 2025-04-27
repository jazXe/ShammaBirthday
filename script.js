const storyText = document.getElementById('story-text');
const nextBtn = document.getElementById('next-btn');
const calendar = document.getElementById('calendar');

const storyLines = [
  "Once upon a time...",
  "In a hidden corner of the wizarding world...",
  "There lived a brave soul destined for greatness...",
  "On a fateful day, April 28th...",
  "The skies were alive with the flight of dragons...",
  "Whispers traveled across the halls of Hogwarts...",
  "A celebration was brewing for a young witch named Shamma."
];

let currentLine = 0;

function showNextLine() {
  if (currentLine < storyLines.length) {
    storyText.style.opacity = 0;
    setTimeout(() => {
      storyText.textContent = storyLines[currentLine];
      storyText.style.opacity = 1;

      // Show calendar when it's April 28th
      if (storyLines[currentLine].includes("April 28th")) {
        calendar.style.display = 'block';
      }

      currentLine++;
      setTimeout(showNextLine, 3500); // every 3.5 seconds
    }, 1000);
  } else {
    nextBtn.style.display = 'inline-block'; // Show Continue button
  }
}

// Start story
showNextLine();
