const storyText = document.getElementById('story-text');
const calendar = document.getElementById('calendar');
const shammaImg = document.getElementById('shamma-img');
const shammaName = document.getElementById('shamma-name');
const scene2 = document.getElementById('scene2');
const owl = document.getElementById('owl');
const birthdayMessage = document.getElementById('birthday-message');

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
    setTimeout(startScene2, 2000);
  }
}

function startScene2() {
  document.querySelector('.story-container').style.display = 'none';
  document.querySelectorAll('.dragon').forEach(dragon => dragon.style.display = 'none');
  
  scene2.style.display = 'flex';

  setTimeout(() => {
    owl.style.transform = 'translate(-50%, -50%) scale(15)'; // GROW owl 15x
  }, 200);

  setTimeout(() => {
    owl.style.opacity = 0;
  }, 3500);

  setTimeout(() => {
    birthdayMessage.style.display = 'block';
    birthdayMessage.style.opacity = 1;
  }, 5500);
}
