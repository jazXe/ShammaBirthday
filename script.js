const storyText = document.getElementById('story-text');
const nextBtn = document.getElementById('next-btn');
const calendar = document.getElementById('calendar');
const shammaImg = document.getElementById('shamma-img');
const shammaName = document.getElementById('shamma-name');

const storyLines = [
  "Once upon a time...",
  "In a hidden corner of the wizarding world...",
  "There lived a brave soul destined for greatness...",
  "On a fateful day, April 28th...",
  "The skies were alive with the flight of dragons...",
  "Whispers traveled across the halls of Hogwarts...",
  "A celebration was brewing for a young witch named..."
];

let currentLine = 0;

function showNextLine() {
  if (currentLine < storyLines.length) {
    // Fade out current text first
    storyText.style.opacity = 0;
    shammaName.style.opacity = 0; // Hide big Shamma if visible

    setTimeout(() => {
      // Special actions depending on the text

      // 📅 Show calendar at April 28
      if (storyLines[currentLine].includes("April 28th")) {
        calendar.style.display = 'block';
        shammaImg.style.display = 'none'; 
        shammaName.style.display = 'none';
      }

      // 📜 Switch to Shamma image
      if (storyLines[currentLine].includes("Whispers traveled across the halls of Hogwarts")) {
        calendar.style.display = 'none';
        shammaImg.style.display = 'block';
        shammaName.style.display = 'none';
      }

      // ✨ Big Shamma glowing name appears
      if (storyLines[currentLine].includes("A celebration was brewing")) {
        storyText.textContent = ""; // Clear normal small text
        shammaName.style.display = 'block';
        setTimeout(() => {
          shammaName.style.opacity = 1; // Fade in big Shamma smoothly
        }, 100);
      } else {
        // Normal story text
        storyText.textContent = storyLines[currentLine];
        storyText.style.opacity = 1; // Fade in normal text
      }

      currentLine++;
      setTimeout(showNextLine, 3500);

    }, 1000); // wait 1s during fade out
  } else {
    nextBtn.style.display = 'inline-block';
  }
}
