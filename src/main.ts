function getRandomColor(): string {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setColor(): void {
  const colorDisplay = document.getElementById('color-display');
  if (colorDisplay) {
    colorDisplay.style.backgroundColor = getRandomColor();
  }
}

document.getElementById('change-color')?.addEventListener('click', setColor);

// Установим начальный цвет при загрузке страницы
window.addEventListener('load', setColor);