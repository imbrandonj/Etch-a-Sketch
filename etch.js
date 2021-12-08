const gridContainer = document.querySelector('.gridContainer');

for (numberOfGrids = 1; numberOfGrids <= 384; numberOfGrids++) {
const gridBox = document.createElement('div');
gridBox.classList.add('gridBox');
// gridBox.style.backgroundColor = 'aliceBlue';
gridContainer.appendChild(gridBox);
}

