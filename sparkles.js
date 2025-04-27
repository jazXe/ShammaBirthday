const canvas = document.getElementById('sparkle-canvas');
const ctx = canvas.getContext('2d');

let stars = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function createStars(count) {
  stars = [];
  for (let i = 0; i < count; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 1,
      speed: Math.random() * 0.5 + 0.2
    });
  }
}

createStars(100);

function drawStars() {
  ctx.fillStyle = '#4D3548'; // Fill background purple
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#EEEEEE'; // White sparkles
  for (let star of stars) {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function moveStars() {
  for (let star of stars) {
    star.y += star.speed;
    if (star.y > canvas.height) {
      star.y = 0;
      star.x = Math.random() * canvas.width;
    }
  }
}

function animate() {
  drawStars();
  moveStars();
  requestAnimationFrame(animate);
}

animate();
