import React from 'react';
import './App.scss';
import { CalculatorInputs, CalculatorResult } from './components/templates';

function App() {
  return (
    <div className="app">
      <div className="card">
        <div className="calculator">
          <CalculatorInputs />
          <CalculatorResult />
        </div>
      </div>
    </div>
  );
}

export default App;
