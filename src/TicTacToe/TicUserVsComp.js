
// Comp vs User => 

 import React, { useEffect, useState } from "react";
import "./TicUserVsComp.css";
import { FaUserCircle  } from "react-icons/fa";
import { HiComputerDesktop } from "react-icons/hi2";

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [move, setMove] = useState("X");
  const [winner, setWinner] = useState(null);
  const [score, setScore] = useState({player:0, computer:0});

  // 👆 cursor state
  const [screen, setScreen] = useState({ x: "", y: "" });

  useEffect(() => {
    const mouseMove = (e) => {
      setScreen({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("mousemove", mouseMove);
    return () => document.removeEventListener("mousemove", mouseMove);
  }, []);

  function handleReload() {
    setBoard(Array(9).fill(""));
    setMove("X");
    setWinner(null);
  }

  function handleClick(n) {
    if (board[n] !== "" || winner) return;

    let newBoard = [...board];
    newBoard[n] = move;
    setBoard(newBoard);

    if (checkWinner(newBoard)) {
      setWinner(move);
      updateScore(move);
    }else if(newBoard.every((cell) => cell !== "")) {
      setWinner("Draw")
    } else {
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
    for (let [a, b, c] of winningCombinations) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return true;
      }
    }
    return false;
  }

useEffect(() => {
    if (move === "O" && !winner) {
      const emptySquares = board
        .map((val, idx) => (val === "" ? idx : null))
        .filter((val) => val !== null);

      if (emptySquares.length > 0) {
        const randomIndex =
          emptySquares[Math.floor(Math.random() * emptySquares.length)];

        setTimeout(() => {
          handleClick(randomIndex);
        }, 500); // delay for natural effect
      }
    }
  }, [move, board, winner]);


  function updateScore(result) {
    if(result === "X") {
      setScore((prev) => ({...prev, player: prev.player+ 1}));
    } else if (result === "O") {
      setScore((prev) => ({...prev, computer: prev.computer + 1}));
    }
  }



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
            <h3 ><FaUserCircle className="userScore" /><br/> <span >{score.player}</span></h3>
            <h1>Vs</h1>
            <h3><HiComputerDesktop className="comScore"/><br/> <span >{score.computer}</span></h3>
        </div>

        <table>
      {winner && (
        <div className="winDeclare">
          <h1>🎉 Congratulation!</h1>
          <h3>Winner: {winner === "Draw" ? "It's Draw" : `${winner}`}</h3>
          <button onClick={handleReload}>Play Again</button>
        </div>
      )}

      <tbody>
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
      <button onClick={handleReload} className="newGame">
        New Game
      </button>
      <p>
        @2024 Copyright : <span>AmmarShah</span>
      </p>
    </div>
  );
}

export default TicTacToe;








        // {/* <tbody>
        //   {[0, 3, 6].map((row) => (
        //     <tr key={row}>
        //       {[0, 1, 2].map((col) => {
        //         const index = row + col;
        //         return (
        //           <td key={index} onClick={() => handleClick(index)}>
        //             {board[index]}
        //           </td>
        //         );
        //       })}
        //     </tr>
        //   ))}
        // </tbody> */}