
const container = document.querySelector('#container');
container.addEventListener('mouseenter', startTrail, true);

generateGrid(container, 16)

function startTrail(e) {
    if(e.target.className === 'box') {
        e.target.style.backgroundColor = `rgb(${getRandomValue()}, ${getRandomValue()}, ${getRandomValue()})`;
        e.target.style.opacity = parseFloat(window.getComputedStyle(e.target).opacity) - 0.1;
    }
}

function getRandomValue() {
    return Math.floor(Math.random() * 256);
}


function generateGrid(container, squaresAtSide) {
    const gridLength = parseInt(window.getComputedStyle(document.documentElement).getPropertyValue('--grid-length'));

    document.documentElement.style.setProperty('--square-length', `${gridLength / squaresAtSide}px`);
    document.documentElement.style.setProperty('--squares-in-grid', squaresAtSide.toString());

    for(let y = 0; y < squaresAtSide; y++) {
        for(let x = 0; x < squaresAtSide; x++) {
            const box = document.createElement('div');
            box.classList.add('box');

            // box.setAttribute('data-x', x.toString());
            // box.setAttribute('data-y', y.toString());

            container.appendChild(box);
        }
    }
}


const btn = document.querySelector('#reset');
btn.addEventListener('click', (e)=>{
    squaresAtSide = prompt('Number of squares per side of Grid?')
    container.textContent = ''
    generateGrid(container, squaresAtSide)
});