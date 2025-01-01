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
    let newColor = getRandomColor();
    document.body.style.backgroundColor = newColor;
    // colorDisplay.style.backgroundColor = newColor;
    colorDisplay.textContent = newColor;
    colorDisplay.style.fontSize = '2rem';
    colorDisplay.style.display = 'flex';
    colorDisplay.style.justifyContent = 'center';
    colorDisplay.style.alignItems = 'center';
    colorDisplay.style.height = '100vh';
    colorDisplay.style.margin = '0';
  }
}

document.getElementById('change-color')?.addEventListener('click', setColor);

window.addEventListener('load', setColor);