const carousel = document.querySelector('.carousel');
const carouselInner = carousel.querySelector('.carousel-inner');
const carouselItems = carousel.querySelectorAll('.carousel-item');
const totalItems = carouselItems.length;
let currentIndex = 0;

function showItem(index) {
  if (index < 0) {
    index = totalItems - 1;
  } else if (index >= totalItems) {
    index = 0;
  }

  const itemWidth = carouselItems[0].offsetWidth;
  const translateX = -1 * index * itemWidth;

  carouselInner.style.transform = `translateX(${translateX}px)`;
  currentIndex = index;

  updateBullets(index);
}

function showNextItem() {
  showItem(currentIndex + 1);
}

function showPreviousItem() {
  showItem(currentIndex - 1);
}

function updateBullets(index) {
  const bullets = carousel.querySelectorAll('.bullet');
  bullets.forEach((bullet, i) => {
    bullet.classList.toggle('active', i === index);
  });
}

carousel.querySelector('.next-btn').addEventListener('click', showNextItem);
carousel.querySelector('.prev-btn').addEventListener('click', showPreviousItem);

carousel.querySelectorAll('.bullet').forEach((bullet, index) => {
  bullet.addEventListener('click', () => {
    showItem(index);
  });
});

// Initialisation du carousel
showItem(currentIndex);