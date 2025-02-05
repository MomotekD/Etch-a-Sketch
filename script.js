const grid = document.querySelector(".grid");
const gridWidth = grid.clientWidth;
let Columns = 16;
let isDrawing = false;

function getGridItemWidth(){
    return (gridWidth / Columns);
}

function startDrawing(){
    if(isDrawing === true){
        isDrawing = false;
    }else{
        console.log("Drawing");
        isDrawing = true;
    }
}

function generateGrid(){
    for(let i = 0; i < Columns * Columns; i++){
        const gridItem = document.createElement("div");
        gridItem.classList.add("gridItem");
        gridItem.style.width = `${getGridItemWidth()}px`;
        grid.appendChild(gridItem);
    }
}

function getGridSizeButton() {
    Columns = prompt("Write a number between 2-100");
    grid.innerHTML = "";
    if(Columns > 100 || Columns < 2){
        alert("Grid size needs to be from 2-100");
        Columns = 16;
        generateGrid();
        return
    }else{
        generateGrid();
    }
}

function clearGrid(){
    Columns = 16;
    grid.innerHTML = "";
    
    generateGrid();
}

grid.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("gridItem")) {
        grid.addEventListener("mousedown", startDrawing);
        if(isDrawing){
            const RandomColor = event.target.style.backgroundColor || Math.floor(Math.random()*16777215).toString(16);
            let opacity = parseFloat(event.target.style.opacity) || 0;
            console.log(opacity);
            event.target.style.backgroundColor = `#${RandomColor}`;
            event.target.style.opacity = Math.min(opacity + 0.25, 1);
        }
        grid.addEventListener("mouseup", startDrawing);
    }
});

generateGrid();
