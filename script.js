// --- Scene 1 variables ---
const storyText = document.getElementById('story-text');
const nextBtn = document.getElementById('next-btn');
const calendar = document.getElementById('calendar');
const shammaImg = document.getElementById('shamma-img');
const shammaName = document.getElementById('shamma-name');

// --- Scene 2 variables ---
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

// --- Function to show story lines ---
function showNextLine() {
  if (currentLine < storyLines.length) {
    // Fade out current text first
    storyText.style.opacity = 0;
    shammaName.style.opacity = 0; // Always fade out Shamma too

    setTimeout(() => {
      // Always set new small story line text
      storyText.textContent = storyLines[currentLine];
      storyText.style.opacity = 1; // Fade it back in

      // 📅 Show calendar at April 28
      if (storyLines[currentLine].includes("April 28th")) {
        calendar.style.display = 'block';
        shammaImg.style.display = 'none';
        shammaName.style.display = 'none';
      }

      // 📜 At Whispers
      if (storyLines[currentLine].includes("Whispers traveled across the halls of Hogwarts")) {
        calendar.style.display = 'none';
        shammaImg.style.display = 'block';
        shammaName.style.display = 'none';
      }

      // ✨ At celebration, also show glowing Shamma
      /* if (storyLines[currentLine].includes("A celebration was brewing")) {
        shammaName.style.display = 'block'; // Show big Shamma
        setTimeout(() => {
          shammaName.style.opacity = 1; // Fade in smoothly
        }, 200);
      }*/
      // ✨ At celebration, also show glowing Shamma
      if (storyLines[currentLine].includes("A celebration was brewing")) {
        storyText.textContent = storyLines[currentLine]; // Small story text
        storyText.style.opacity = 1; // Fade in small text
      
        setTimeout(() => {
          shammaName.style.display = 'block';
          setTimeout(() => {
            shammaName.style.opacity = 1; // After delay, fade in Shamma smoothly
          }, 200); // Fade in after showing
        }, 800); // 🕰️ Small delay before showing Shamma
      }


      currentLine++;
      setTimeout(showNextLine, 3500);

    }, 1000); // Wait 1s for fade out
  } else {
    nextBtn.style.display = 'inline-block';
  }
}

// 🎯 Scene 2 (Owl + Letter + Text Line by Line)
nextBtn.addEventListener('click', startScene2);

function startScene2() {
  // Hide Scene 1
  document.querySelector('.story-container').style.display = 'none';
  document.querySelector('.start-container').style.display = 'none';
  document.getElementById('sparkle-canvas').style.display = 'none';
  document.querySelectorAll('.dragon').forEach(dragon => dragon.style.display = 'none');

  // Show Scene 2
  document.getElementById('scene2').style.display = 'block';

  // Start Owl grow
  setTimeout(() => {
    owl.style.transform = 'translate(-50%, -50%) scale(2.5)';
  }, 200);

  // Fade Owl
  setTimeout(() => {
    owl.style.opacity = 0;
  }, 3500);

  // Show Letter after Owl gone
  setTimeout(() => {
    letter.style.display = 'block';
    gryffindorLogo.style.display = 'block';
  }, 5000);

  // Start showing Birthday Text line by line
  setTimeout(() => {
    showBirthdayLines();
  }, 5500);
}

// 🎯 Lines to appear one by one
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

    document.getElementById('birthday-text').appendChild(newLine);

    setTimeout(() => {
      newLine.style.opacity = 1;
    }, 100);

    birthdayLineIndex++;
    setTimeout(showBirthdayLines, 2000); // Show next line after 2s
  }
}

