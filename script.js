const gridContainer = document.querySelector(".grid__container");

let column = 16
let row = 16

function createGrid(column, row) {
    for (i = 0; i < column; i++) {
        for (j = 0; j < row; j++) {
            const square = document.createElement("div");
            square.classList.add("grid__square");
            gridContainer.appendChild(square);
        }
    }
}

createGrid(column, row)

const squares = document.querySelectorAll(".grid__square");

squares.forEach(item => {
    item.addEventListener("mouseenter", () => {
        item.classList.add("hover");
    });

    item.addEventListener("mouseleave", () => {
        item.classList.remove("hover");
    });
});

const button = document.querySelector(".grid__button");

button.addEventListener("click", () => {
    let newColumn = +prompt("Set column amount", column);
    if(newColumn > 100) {
        return alert("You can only set a maximum of 100.");
    } else {
        column = newColumn;
    } 

    let newRow = +prompt("Set row amount", row);
    if(newRow > 100) {
        return alert("You can only set a maximum of 100.");
    } else {
        row = newRow;

        return createGrid(column, row),
        squares = document.querySelectorAll(".grid__square");
    };
});

// New added squares won't work on hover
// After creating a new grid the old squares might be still there
// Check CSS