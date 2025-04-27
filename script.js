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

    setTimeout(() => {
      storyText.textContent = storyLines[currentLine];
      storyText.style.opacity = 1;

      // 📅 Special action: show calendar at April 28
      if (storyLines[currentLine].includes("April 28th")) {
        calendar.style.display = 'block';
        shammaImg.style.display = 'none';  // Make sure shamma.png is hidden still
        shammaName.style.display = 'none';
      }

      // 📜 Special action: REMOVE calendar and SHOW shamma.png at Whispers
      if (storyLines[currentLine].includes("Whispers traveled across the halls of Hogwarts")) {
        calendar.style.display = 'none'; // ❌ Hide calendar immediately
        shammaImg.style.display = 'block'; // ✅ Show shamma.png
        shammaName.style.display = 'none'; // Big Shamma text still hidden
      }

      // ✨ Special action: SHOW big glowing Shamma text
      if (storyLines[currentLine].includes("A celebration was brewing")) {
        shammaName.style.display = 'block'; // ✅ Show big "Shamma" text glowing
      }

      currentLine++;
      setTimeout(showNextLine, 3500);
    }, 1000);

  } else {
    nextBtn.style.display = 'inline-block';
  }
}
