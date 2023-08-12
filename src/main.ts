import './style.css'

const randomGlyphs = '@#$%&>)_}]!NEAT';
const textWrapper: HTMLElement = document.querySelector('h1[data-text-effect]')!;
const reloadButton: HTMLElement = document.querySelector('button[data-reload]')!;
const copy = textWrapper.dataset.copy || '';
let iteration = 0;

const finalClasses = {
  0: 'green',
  [`${copy.length - 1}`]: 'purple',
};

const interval = setInterval(() => {
  textWrapper.innerHTML = '';

  for (let index = 0; index < copy.length; index++) {
    const span = document.createElement('span');
    if (index < iteration) {
      span.textContent = copy[index]
      span.classList.add(finalClasses[index] || 'white');
    } else {
      span.textContent = randomGlyphs[Math.floor(Math.random() * randomGlyphs.length)];
      span.classList.add('random');
    }

    textWrapper.appendChild(span);
  }

  if (iteration >= copy.length) clearInterval(interval);

  iteration += 1 / 2;
}, 110);

reloadButton.addEventListener('click', () => {
  window.location.reload();
});

