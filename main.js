const container = document.querySelector("#container");

for (let i = 0; i < 16; i++) {
    const outer = document.createElement("div");
    for (let j = 0; j < 16; j++){
        const inner = document.createElement('div');
        outer.appendChild(inner);
    }
    container.appendChild(outer);
}