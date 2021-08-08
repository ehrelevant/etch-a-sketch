
const container = document.querySelector('#container');
for(let y = 0; y < 16; y++) {
    for(let x = 0; x < 16; x++) {
        const box = document.createElement('div');
        box.classList.add('box')
        container.appendChild(box);
        console.log(x);
    }
}