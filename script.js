function startScene2() {
  document.querySelector('.story-container').style.display = 'none';
  document.querySelectorAll('.dragon').forEach(dragon => dragon.style.display = 'none');
  
  // 📢 Keep Sparkles, only hide story and dragons
  scene2.style.display = 'flex';

  setTimeout(() => {
    owl.style.transform = 'translate(-50%, -50%) scale(15)'; // 📢 GROW 15 times!!
  }, 200);

  setTimeout(() => {
    owl.style.opacity = 0; // fade out owl
  }, 3500);

  setTimeout(() => {
    birthdayMessage.style.display = 'block';
    birthdayMessage.style.opacity = 1; // show birthday message
  }, 5500);
}
