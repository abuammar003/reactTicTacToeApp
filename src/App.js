import React from 'react';
import TicTacToe from './TicTacToe/TicTacToe';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TicNav from './TicTacToe/TicNav';
import TicUserVsComp from "./TicTacToe/TicUserVsComp";


function App() {
  return (
    <div>
      <Router>
        <TicNav />
        <Routes>
        
          <Route path='/' element ={ <TicTacToe /> } />
          <Route path='/Player-vs-Computer' element ={ <TicUserVsComp /> } />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
