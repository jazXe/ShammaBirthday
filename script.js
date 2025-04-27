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
    storyText.style.opacity = 0;
    shammaName.style.opacity = 0;

    setTimeout(() => {
      storyText.textContent = storyLines[currentLine];
      storyText.style.opacity = 1;

      if (storyLines[currentLine].includes("April 28th")) {
        calendar.style.display = 'block';
        shammaImg.style.display = 'none';
        shammaName.style.display = 'none';
      }

      if (storyLines[currentLine].includes("Whispers traveled across the halls of Hogwarts")) {
        calendar.style.display = 'none';
        shammaImg.style.display = 'block';
        shammaName.style.display = 'none';
      }

      if (storyLines[currentLine].includes("A celebration was brewing")) {
        shammaName.style.display = 'block';
        setTimeout(() => {
          shammaName.style.opacity = 1;
        }, 200);
      }

      currentLine++;
      setTimeout(showNextLine, 3500);
    }, 1000);
  } else {
    nextBtn.style.display = 'inline-block';
  }
}
