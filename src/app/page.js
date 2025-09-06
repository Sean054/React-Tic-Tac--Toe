// Required for using React hooks in Next.js app directory files
"use client";
import { useState } from "react";

// Square is a reusable component for each tic-tac-toe cell
function Square({ value, onClick }) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

// Board manages the state for the tic-tac-toe grid and player turns
function Board() {
  // State for the 9 squares (null means empty)
  const [squares, setSquares] = useState(Array(9).fill(null));
  // State for tracking whose turn it is
  const [xIsNext, setXIsNext] = useState(true);

  // Handles a click on a square
  function onSquareClick(idx) {
    // Prevent overwriting a filled square
    if (squares[idx]) {
      return;
    }
    // Copy the squares array and update the clicked square
    const newSquares = squares.slice();
    newSquares[idx] = xIsNext ? "X" : "O";
    // Switch turns
    setXIsNext(!xIsNext);
    // Update the board state
    setSquares(newSquares);
  }

  return (
    <>
      {/* Show which player's turn it is */}
      <p>Next Player: {xIsNext ? "X" : "O"}</p>

      {/* Render the 3x3 grid using Square components */}
      <div className="board-row">
        <Square value={squares[0]} onClick={() => onSquareClick(0)} />
        <Square value={squares[1]} onClick={() => onSquareClick(1)} />
        <Square value={squares[2]} onClick={() => onSquareClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onClick={() => onSquareClick(3)} />
        <Square value={squares[4]} onClick={() => onSquareClick(4)} />
        <Square value={squares[5]} onClick={() => onSquareClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onClick={() => onSquareClick(6)} />
        <Square value={squares[7]} onClick={() => onSquareClick(7)} />
        <Square value={squares[8]} onClick={() => onSquareClick(8)} />
      </div>
      {/* Restart button to reset the game state */}
      <button
        onClick={() => {
          setSquares(Array(9).fill(null));
          setXIsNext(true);
        }}
      >
        Restart Game
      </button>
    </>
  );
}


// Game is the main component that renders the Board
export default function Game() {
  return (
    <div>
      <Board />
    </div>
  );
}
