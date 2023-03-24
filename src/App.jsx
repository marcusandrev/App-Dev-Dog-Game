import { useState } from 'react';
import './App.css';
import Cards from './components/Cards';
import RefreshButton from './components/RefreshButton';

function App() {
  return (
    <div className='App'>
      <div className='header'>
        <h2>Laboratory 2</h2>
        <h6>
          Marcus Andre Villanueva <br /> BSCS 2-4 <br /> Oliver Kocsis's Match
          Up LAB
        </h6>
        <RefreshButton />
      </div>
      <Cards />
    </div>
  );
}

export default App;
