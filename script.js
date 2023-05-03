const playerOne = [(id = 2), (sign = "o")];
const playerTwo = [(id = 1), (sign = "x")];
let turns = 0;
cells = 9;
board = document.getElementById("board");

board.addEventListener("click", (event) => {
	target = event.target;
	if (target.classList.contains("played")) {
		return;
	}
	if (turns % 2 === 0) {
		target.classList.add(`played_by_player_${playerTwo[0]}`);
		target.classList.add(`played`);
		target.innerHTML = playerTwo[1];
		return turns++;
	} else {
		target.classList.add(`played_by_player_${playerOne[0]}`);
		target.classList.add(`played`);
		target.innerHTML = playerOne[1];
		return turns++;
	}
});

function renderBoard() {
	for (i = 0; i < cells; i++) {
		cell = document.createElement("div");
		cell.classList.add("cell");
		board.appendChild(cell);
	}
}

renderBoard();
