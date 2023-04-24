import { useEffect, useState } from "react";
import { TURNS } from "./constants";
import { checkWinnerFrom, checkEndGame } from "./logic/board";
import { resetGameStorage, saveGameToStorage } from "./logic/storage/storage";
import { Board } from "./components/Board";
import "./App.css";
import confetti from "canvas-confetti";

function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem("board");
    return boardFromStorage
      ? JSON.parse(boardFromStorage)
      : Array(9).fill(null);
  });
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem("turn");
    return turnFromStorage ?? TURNS.X;
  });
  // null no hay ganador, false empate
  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
    resetGameStorage();
  };

  const updateBoard = (index) => {
    // no actualizar la posición si ya contiene un valor
    if (board[index] || winner) return;
    // Actualizar el tablero
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    // cambiar de turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    // revisar si hay ganador
    const newWinner = checkWinnerFrom(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner); // ganador
    } else if (checkEndGame(newBoard)) {
      setWinner(false); //empate
    }
  };

  useEffect(() => {
    // como minimo se ejecuta una vez
    //guardar partida
    saveGameToStorage({
      board: newBoard,
      turn: newTurn,
    });
  }, [turn, board])

  return (
    <Board
      board={board}
      turn={turn}
      winner={winner}
      resetGame={resetGame}
      updateBoard={updateBoard}
    />
  );
}

export default App;
