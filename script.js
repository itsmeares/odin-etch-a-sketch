const gridContainer = document.querySelector(".grid__container");

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const square = document.createElement("div");
        square.classList.add("grid__square");
        gridContainer.appendChild(square);
    }
}

/* Should add to single not all of the children

gridContainer.addEventListener("mouseenter", (e) => {
    e.target.classList.add("hover");
})

gridContainer.addEventListener("mouseleave", (e) => {
    e.target.classList.remove("hover");
})

*/