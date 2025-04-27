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
      if (storyLines[currentLine].includes("A celebration was brewing")) {
        shammaName.style.display = 'block'; // Show big Shamma
        setTimeout(() => {
          shammaName.style.opacity = 1; // Fade in smoothly
        }, 200);
      }

      currentLine++;
      setTimeout(showNextLine, 3500);

    }, 1000); // Wait 1s for fade out
  } else {
    nextBtn.style.display = 'inline-block';
  }
}

// --- 🎯 Scene 2 (Owl + Letter) ---
// When Continue button clicked
nextBtn.addEventListener('click', startScene2);

function startScene2() {
  // Fade out Scene 1 elements
  document.querySelector('.story-container').style.display = 'none';
  document.querySelector('.start-container').style.display = 'none';
  document.getElementById('sparkle-canvas').style.display = 'none';
  document.querySelectorAll('.dragon').forEach(dragon => dragon.style.display = 'none');

  // Show Scene 2 container
  document.getElementById('scene2').style.display = 'block';

  // Start Owl growing animation
  setTimeout(() => {
    owl.style.transform = 'translate(-50%, -50%) scale(2)';
  }, 200); // Start zoom after short time

  // Fade out Owl after growing
  setTimeout(() => {
    owl.style.opacity = 0;
  }, 3500); // After 3.5s

  // After Owl faded, show Letter + Birthday Text + Gryffindor Logo
  setTimeout(() => {
    letter.style.display = 'block';
    birthdayText.style.display = 'block';
    gryffindorLogo.style.display = 'block';
  }, 5500); // After Owl disappears
}
