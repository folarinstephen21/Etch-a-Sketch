const container = document.querySelector(".container");
const resizeBtn = document.getElementById("resize-btn");

const CONTAINER_SIZE = 960;

// Create grid function
function createGrid(gridSize) {
  // Clear existing grid
  container.innerHTML = "";

  const squareSize = CONTAINER_SIZE / gridSize;
  const totalSquares = gridSize * gridSize;

  for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    // Hover effect
    square.addEventListener("mouseenter", () => {
      square.style.backgroundColor = "black";
    });

    container.appendChild(square);
  }
}

// Button click logic
resizeBtn.addEventListener("click", () => {
  let userInput = prompt("Enter number of squares per side (max 100):");

  userInput = Number(userInput);

  if (
    userInput > 0 &&
    userInput <= 100 &&
    Number.isInteger(userInput)
  ) {
    createGrid(userInput);
  } else {
    alert("Please enter a valid number between 1 and 100.");
  }
});

// Initial grid
createGrid(16);
