function createGrid(rows,cols) {
    //select container element
    const container = document.querySelector(".container")
    container.style.cssText = `grid-template-columns: repeat(${cols}, 1fr)`;
    container.style.cssText = `grid-template-rows: repeat(${rows}, 1fr)`;
    //create n number of divs with similar class/naming convention
    for (x = 1; x <= cols; x++) {
        for (y = 1; y <= rows; y++) {
            const div = document.createElement('div');
            div.classList.add(`square`);
            container.appendChild(div);
            //add grid specific styles
            div.style.display = "grid";
            div.style.cssText = `grid-column: ${y}`;
            div.style.cssText = `grid-row: ${x}`;
        }
    }
    const gridAll = document.querySelectorAll(".square");
    gridAll.forEach(individualGrid => individualGrid.addEventListener("pointerover",addColor));
}

function restartGrid(e) {
    e.stopPropagation();
    //console.log(e);
    //initial prompt for user inpput
    let sizeSelect = prompt("Select what size Etch-a-Sketch bord you would like. Please enter a number between 1 and 100.","20");
    sizeSelect = Number(sizeSelect);
    //condition for non number
    while (isNaN(sizeSelect)) {
        sizeSelect = prompt("Your input was not a number. Please renter a number between 1 and 100.","20");
        sizeSelect = Number(sizeSelect);
    }
    //conditions for out of limit numbers
    while (sizeSelect > 100 || sizeSelect < 1) {
        sizeSelect = prompt("Your input was not between 1 and 100. Please renter a number between 1 and 100.","20");
        sizeSelect = Number(sizeSelect);
    }
    //clears grid by removing colorful class or deleting old divs
    const deleteGrid = document.querySelectorAll(".square");
    //console.log(deleteGrid);
    //console.log(divTest);
    deleteGrid.forEach(element => divTest.removeChild(element));
    //call create Grid once input conditions met 
    createGrid(sizeSelect,sizeSelect);
}

function addColor(e) {
    e.stopPropagation(); //added to prevent bubbling of event, only want single event
    //random color generator 
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    e.srcElement.style.backgroundColor = "#" + randomColor;

}

//Inital Case
createGrid(20,20);
//Event Listeners for grid and control buttons
const divTest = document.querySelector(".container");
const restartBtn = document.querySelector(".restart");
restartBtn.addEventListener("click",restartGrid);
