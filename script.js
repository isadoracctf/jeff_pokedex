function checkCode() {
  const inputCode = document.getElementById('codeInput').value;
  if (inputCode === 'ISA-JEFF-120625') {
    document.getElementById('authBox').classList.add('hidden');
    document.getElementById('content').classList.remove('hidden');
  } else {
    alert('Código incorreto!');
  }
}

let index = 0;
const images = document.querySelectorAll('.carousel img');

function showImage() {
  images.forEach(img => img.classList.remove('active'));
  images[index].classList.add('active');
}

function prevImage() {
  index = (index - 1 + images.length) % images.length;
  showImage();
}

function nextImage() {
  index = (index + 1) % images.length;
  showImage();
}

function flipImage(img) {
  if (img.classList.contains('flipped')) {
    img.src = img.getAttribute('data-original');
    img.classList.remove('flipped');
  } else {
    img.setAttribute('data-original', img.src);
    img.src = 'imagens/verso.png';
    img.classList.add('flipped');
  }
}

// Swipe support for mobile
let startX = 0;
const carousel = document.getElementById('carousel');

carousel.addEventListener('touchstart', e => {
  startX = e.touches[0].clientX;
});

carousel.addEventListener('touchend', e => {
  const endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) nextImage();
  else if (endX - startX > 50) prevImage();
});