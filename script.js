const card = document.querySelector('.card');
const cardContent = card.querySelector('.card-content');

card.addEventListener('mousemove', (e) => {
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left; 
  const y = e.clientY - rect.top;  

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  // Calculate rotation values (max 15 deg)
  const rotateX = ((y - centerY) / centerY) * 15;
  const rotateY = ((x - centerX) / centerX) * -15;

  cardContent.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

card.addEventListener('mouseleave', () => {
  // Reset rotation
  cardContent.style.transform = 'rotateX(0deg) rotateY(0deg)';
});
