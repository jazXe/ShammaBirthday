// --- Scene 1 Variables ---
const storyText = document.getElementById('story-text');
const nextBtn = document.getElementById('next-btn');
const calendar = document.getElementById('calendar');
const shammaImg = document.getElementById('shamma-img');
const shammaName = document.getElementById('shamma-name');

// --- Scene 2 Variables ---
const owl = document.getElementById('owl');
const letter = document.getElementById('letter');
const birthdayText = document.getElementById('birthday-text');
const gryffindorLogo = document.getElementById('gryffindor-logo');

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

// Show storylines
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
        setTimeout(() => {
          shammaName.style.display = 'block';
          setTimeout(() => {
            shammaName.style.opacity = 1;
          }, 200);
        }, 800);
      }

      currentLine++;
      setTimeout(showNextLine, 3500);
    }, 1000);
  } else {
    nextBtn.style.display = 'inline-block';
  }
}

// --- Scene 2 (Owl + Letter + Birthday Text) ---
nextBtn.addEventListener('click', startScene2);

function startScene2() {
  document.querySelector('.story-container').style.display = 'none';
  document.querySelector('.start-container').style.display = 'none';
  document.getElementById('sparkle-canvas').style.display = 'none';
  document.querySelectorAll('.dragon').forEach(dragon => dragon.style.display = 'none');
  document.getElementById('scene2').style.display = 'block';

  // Owl appear + grow
  setTimeout(() => {
    owl.style.transform = 'translate(-50%, -50%) scale(3.2)';
  }, 200);

  // Owl fades away
  setTimeout(() => {
    owl.style.opacity = 0;
  }, 3500);

  // Letter appears
  setTimeout(() => {
    letter.style.display = 'block';
  }, 5000);

  // Start Birthday text
  setTimeout(() => {
    showBirthdayLines();
  }, 5500);
}

// Birthday lines one by one
const birthdayLines = [
  "Hogwarts and Gryffindor",
  "send their warmest wishes to you!",
  "Happy Birthday Lovely Shamma",
  "and may your magic grow stronger every year!"
];

let birthdayLineIndex = 0;

function showBirthdayLines() {
  if (birthdayLineIndex < birthdayLines.length) {
    const newLine = document.createElement('div');
    newLine.textContent = birthdayLines[birthdayLineIndex];
    newLine.style.opacity = 0;
    newLine.style.transition = "opacity 2s ease";
    newLine.style.marginTop = "10px";

    birthdayText.appendChild(newLine);

    setTimeout(() => {
      newLine.style.opacity = 1;
    }, 100);

    birthdayLineIndex++;
    setTimeout(showBirthdayLines, 2000);
  }
}
