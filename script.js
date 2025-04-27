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


// 🎯 When Continue button clicked
nextBtn.addEventListener('click', startScene2);

function startScene2() {
  // Fade out Scene 1
  document.querySelector('.story-container').style.display = 'none';
  document.querySelector('.start-container').style.display = 'none';
  document.getElementById('sparkle-canvas').style.display = 'none';
  document.querySelectorAll('.dragon').forEach(dragon => dragon.style.display = 'none');

  // Show Scene 2
  document.getElementById('scene2').style.display = 'block';

  // Start Owl animation
  const owl = document.getElementById('owl');
  setTimeout(() => {
    owl.style.transform = 'translate(-50%, -50%) scale(2)';
  }, 200); // Start growing after short time

  // After Owl grows, fade Owl away
  setTimeout(() => {
    owl.style.opacity = 0;
  }, 3500); // Fade after 3.5 seconds

  // After Owl faded, show Letter + Birthday Text + Gryffindor Stamp
  setTimeout(() => {
    document.getElementById('letter').style.display = 'block';
    document.getElementById('gryffindor-logo').style.display = 'block';
    document.getElementById('birthday-text').style.display = 'block';
  }, 5500); // After Owl gone
}

