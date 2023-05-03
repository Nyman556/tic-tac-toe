cells = 9;
board = document.getElementById("board");

function renderBoard() {
	for (i = 0; i < cells; i++) {
		cell = document.createElement("div");
		cell.classList.add("cell");
		board.appendChild(cell);
	}
}

renderBoard();
