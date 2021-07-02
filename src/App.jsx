import React from 'react';
import Dashboard from './Components/Dashboard';
import Header from './Components/Header';
import './indexTailwind.css';

const App = () => {
  return (
    <div className="bg-gray-800 w-full min-h-screen px-3 pt-2">
      <div className="max-w-5xl border mx-auto">
        <Header title="Covid-19 Global Cases Dashboard" name="Elvis Miranda" />
        <Dashboard />
      </div>
    </div>
  );
};

export default App;
