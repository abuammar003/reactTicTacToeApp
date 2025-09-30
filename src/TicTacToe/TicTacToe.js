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
      <h1 className="main_heading">Tic Tac Toe</h1>
 
        <div className="winScore">
            <div>
              <h3 className="player1">  X </h3>
              <h5 >{score.player1}</h5>
              </div>
            <h1>Vs</h1>
            <div>
              <h3 className="player2"> O </h3>
             <h5 >{score.player2}</h5></div>
        </div>

         

        <div className="board">

          {board.map((cell, i) => (
            <div key={i} className="cell" onClick={() => handleClick(i)}>
              <span className={`move ${cell === "X" ? "xturn" : cell === "O" ? "oturn" : ""}`}>{cell}</span>
            </div>
          ))}

          {winner && <div className="winDeclare">
             <h1>🎉 <br /> Congratultion! </h1>
             <h3>Winner: {winner === "Draw" ? "It's Draw" : `${winner}`}</h3>
             <button onClick={handleReload}>New Game</button>
           </div> }

        </div>

      
      <div className="footer">
      {winner ? <h2>Winner: {winner}</h2> : <h2>Next Move: {move}</h2>}
      <button onClick={handleReload} className="newGame"> New Game </button>
      <p>
        @2024 Copyright : <span>AmmarShah</span>{" "}
      </p>
      </div>

    </div>
  );
}

export default TicTacToe;





//ChatGpt design: 

// import React, { useEffect, useState } from "react";
// import "./TicTacToe.css";

// function TicTacToe() {
//   const [board, setBoard] = useState(Array(9).fill(""));
//   const [move, setMove] = useState("X");
//   const [winner, setWinner] = useState(null);
//   const [score, setScore] = useState({ player1: 0, player2: 0 });
//   const [screen, setScreen] = useState({ x: "", y: "" });

//   function handleReload() {
//     setBoard(Array(9).fill(""));
//     setMove("X");
//     setWinner(null);
//   }

//   function handleClick(n) {
//     if (board[n] !== "" || winner) return;
//     let square = [...board];
//     square[n] = move;
//     setBoard(square);

//     if (checkWinner(square)) {
//       setWinner(move);
//       updateScore(move);
//     } else if (square.every((cell) => cell !== "")) {
//       setWinner("Draw");
//     } else {
//       setMove(move === "X" ? "O" : "X");
//     }
//   }

//   function checkWinner(board) {
//     const combos = [
//       [0, 1, 2],[3, 4, 5],[6, 7, 8],
//       [0, 3, 6],[1, 4, 7],[2, 5, 8],
//       [0, 4, 8],[2, 4, 6],
//     ];
//     return combos.some(([a, b, c]) => board[a] && board[a] === board[b] && board[a] === board[c]);
//   }

//   function updateScore(result) {
//     if (result === "X") {
//       setScore((prev) => ({ ...prev, player1: prev.player1 + 1 }));
//     } else if (result === "O") {
//       setScore((prev) => ({ ...prev, player2: prev.player2 + 1 }));
//     }
//   }

//   useEffect(() => {
//     const mouseMove = (e) => setScreen({ x: e.clientX, y: e.clientY });
//     document.addEventListener("mousemove", mouseMove);
//     return () => document.removeEventListener("mousemove", mouseMove);
//   }, []);

//   return (

//     <div className="ticMain">
//       <div className="cursor" style={{ top: `${screen.y}px`, left: `${screen.x}px` }} />

//       <h1 className="title">Tic Tac Toe</h1>

//       {/* Scoreboard */}
//       <div className="scoreboard">
//         <div className="scoreCard player1">
//           <h3>X</h3>
//           <p>{score.player1}</p>
//         </div>
//         <span className="vs">VS</span>
//         <div className="scoreCard player2">
//           <h3>O</h3>
//           <p>{score.player2}</p>
//         </div>
//       </div>

//       {/* Winner Modal */}
//       {winner && (
//         <div className="modal">
//           <h2>{winner === "Draw" ? "🤝 It's a Draw!" : `🎉 ${winner} Wins!`}</h2>
//           <button onClick={handleReload}>Play Again</button>
//         </div>
//       )}

//       {/* Game Board */}
//       <div className="board">
//         {board.map((cell, idx) => (
//           <div key={idx} className={`cell ${cell}`} onClick={() => handleClick(idx)}>
//             {cell}
//           </div>
//         ))}
//       </div>

//       <h2 className="status">{winner ? `Winner: ${winner}` : `Next Move: ${move}`}</h2>
//       <button onClick={handleReload} className="newGame">Restart Game</button>

//       <footer>
//         <p>© 2024 <span>AmmarShah</span></p>
//       </footer>
//     </div>
//   );
// }

// export default TicTacToe;
