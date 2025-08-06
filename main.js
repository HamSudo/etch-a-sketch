function askForDimensions() {
    const min = 1;
    const max = 100;

    let dim;
    do {
        dim = prompt((`Enter the dimension for the new squared grid between ${min} and ${max}:`));
        dim = Number(dim);
    } while (isNaN(dim) || dim < min || dim > max)
    container.innerHTML = '';
    generateGrid(dim);
}

function generateGrid (dimension = 16) {
    for (let i = 0; i < dimension**2; i++) {
        const square = document.createElement("div");
        // square.setAttribute("class", "squared");
        square.setAttribute("data-opacity", '0');
        square.style.width = `${960/dimension}px`;
        square.style.height = `${960/dimension}px`;
        square.addEventListener("mouseover", (e) => {
            const opacity = increaseOpacity(e);
            e.target.style.background = `rgba(${getRandomRGB()}, ${opacity})`;

        })
        container.appendChild(square);
    }

}

function getRandomRGB () {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `${r}, ${g}, ${b}`;
}

function increaseOpacity (e) {
    let currentOpacity = parseFloat(e.target.dataset.opacity);
    currentOpacity = Math.min(currentOpacity + 0.1, 1);
    e.target.dataset.opacity = currentOpacity.toString();
    return currentOpacity;
}

const container = document.querySelector("#container");
generateGrid();
const btn = document.createElement("button");
btn.textContent = "Generate new grid";
btn.addEventListener("click", () => askForDimensions())
document.body.insertBefore(btn, container);