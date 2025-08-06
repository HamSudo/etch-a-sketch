const container = document.querySelector("#container");

for (let i = 0; i < 16; i++) {
    const outer = document.createElement("div");
    for (let j = 0; j < 16; j++){
        const inner = document.createElement('div');
        inner.setAttribute("class", "inner");
        inner.addEventListener("mouseover", (e) => e.target.classList.add('hover'));
        outer.appendChild(inner);
    }
    outer.setAttribute("class", "outer");
    container.appendChild(outer);
}

