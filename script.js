const gridContainer = document.querySelector(".grid__container");

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const square = document.createElement("div");
        square.classList.add("grid__square");
        gridContainer.appendChild(square);
    }
}

const squares = document.querySelectorAll(".grid__square");

squares.forEach(item => {
    item.addEventListener("mouseenter", () => {
        item.classList.add("hover");
    });

    item.addEventListener("mouseleave", () => {
        item.classList.remove("hover");
    });
});
