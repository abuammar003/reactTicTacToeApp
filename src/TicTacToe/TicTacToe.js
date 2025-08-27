import React, { useEffect, useState  } from "react";
import "./TicTacToe.css";

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [move, setMove] = useState("X");
  const [winner, setWinner] = useState(null);
  const [score , setScore] = useState({player1:0, player2:0});


  function handleReload() {
    setBoard(Array(9).fill(""));
    setMove("X");
    setWinner(null);
  }

  function handleClick(n) {
    if (board[n] !== "" || winner) {
      return;
    }
        
    let square = [...board];
    square[n] = move;
    setBoard(square);

    if (checkWinner(square)) {
      setWinner(move);
      updateScore(move);
    }else if (square.every((cell) => cell !=="")){
      setWinner("Draw")
    }else {
      setMove(move === "X" ? "O" : "X");
    }
  }

  function checkWinner(board) {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return true;
      }
    }
    return false;
  }
  const [screen, setScreen] = useState({
    x: "",
    y: "",
  });
  // console.log(screen);

  function updateScore(result) {
    if(result === "X") {
      setScore((prev)=> ({...prev, player1: prev.player1 + 1 }));
    } else if (result === "O") {
      setScore((prev) => ({...prev, player2: prev.player2 + 1}));
    }
  }


  useEffect(() => {
    const mouseMove = (e) => {
      setScreen({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("mousemove", mouseMove);
    return () => document.removeEventListener("mousemove", mouseMove);
  }, []);



  return (

    <div className="ticMain">
      <div
        className="cursor"
        style={{ top: `${screen.y}px`, left: `${screen.x}px` }}
      >
        {move}
      </div>
      <h1>Tic Tac Toe</h1>
 
        <div className="winScore">
            <h3 className="player1">Player1 <br/> <span >{score.player1}</span></h3>
            <h1>Vs</h1>
            <h3 className="player2">Player2 <br/> <span >{score.player2}</span></h3>
        </div>


      <table>
        <tbody>
          {winner ? (
            <div className="winDeclare">
              <h1> Congratultion! </h1>
              <h3>Winner: {winner === "Draw" ? "It's Draw" : `Winner: ${winner}`}</h3>
              <button onClick={handleReload}>New Game</button>
            </div>
          ) : (
            ""
          )}
          <tr>
            <td
              onClick={() => {
                handleClick(0);
              }}
            >
              {" "}
              {board[0]}{" "}
            </td>
            <td
              onClick={() => {
                handleClick(1);
              }}
            >
              {" "}
              {board[1]}{" "}
            </td>
            <td
              onClick={() => {
                handleClick(2);
              }}
            >
              {" "}
              {board[2]}{" "}
            </td>
          </tr>

          <tr>
            <td
              onClick={() => {
                handleClick(3);
              }}
            >
              {" "}
              {board[3]}{" "}
            </td>
            <td
              onClick={() => {
                handleClick(4);
              }}
            >
              {" "}
              {board[4]}{" "}
            </td>
            <td
              onClick={() => {
                handleClick(5);
              }}
            >
              {" "}
              {board[5]}{" "}
            </td>
          </tr>
          <tr>
            <td
              onClick={() => {
                handleClick(6);
              }}
            >
              {" "}
              {board[6]}{" "}
            </td>
            <td
              onClick={() => {
                handleClick(7);
              }}
            >
              {" "}
              {board[7]}{" "}
            </td>
            <td
              onClick={() => {
                handleClick(8);
              }}
            >
              {" "}
              {board[8]}{" "}
            </td>
          </tr>
        </tbody>
      </table>
      {winner ? <h2>Winner: {winner}</h2> : <h2>Next Move: {move}</h2>}
      <button onClick={handleReload} className="newGame"> New Game </button>
      <p>
        @2024 Copyright : <span>AmmarShah</span>{" "}
      </p>
    </div>
  );
}

export default TicTacToe;




