window.addEventListener('DOMContentLoaded', () => {
  const section = document.querySelector('.cherry-blossom');

  if (!section) return; 

  const createPetal = () => {
    const petalEl = document.createElement('span');
    petalEl.className = 'petal';

    const minSize = 6;
    const maxSize = 15;
    const size = Math.random() * (maxSize - minSize) + minSize;

    petalEl.style.width = size + 'px';
    petalEl.style.height = size + 'px';
    petalEl.style.left = Math.random() * window.innerWidth + 'px';

    section.appendChild(petalEl);

    setTimeout(() => {
      petalEl.remove();
    }, 10000);
  };

  setInterval(createPetal, 300);
});