function createGrid(size = 16) {
    const gridContainer = document.querySelector(".grid__container");

    for (let i = 0; i < size; i++) {
            const gridColumn = document.createElement("div");
            gridColumn.classList.add("grid__column");
        for (let j = 0; j < size; j++) {
            const gridRow = document.createElement("div");
            gridRow.classList.add("grid__row");
            gridColumn.appendChild(gridRow);
        }
    gridContainer.appendChild(gridColumn);
    }
}

createGrid();

function hover() {
    const squares = document.querySelectorAll(".grid__row");

    squares.forEach(item => {
        item.addEventListener("mouseenter", () => {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);

            item.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        });
    });
}

hover();

function resetGrid(size) {
    const rowsAndColumns = document.querySelectorAll(".grid__row, .grid__column");
    rowsAndColumns.forEach(item => {
        item.remove();
    });

    createGrid(size)
    hover();
}

const button = document.querySelector(".grid__button");

button.addEventListener("click", () => {
    let newSize = +prompt("Set grid size (Default = 16)", 16);
    if(newSize > 100) {
        return alert("You can only set a maximum of 100.");1
    } else return resetGrid(newSize);
});
