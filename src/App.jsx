import React from 'react';
import Dashboard from './Components/Dashboard';
import Header from './Components/Header';
import './indexTailwind.css';

const App = () => {
  return (
    <div className="bg-gray-800 w-full  px-3 ">
      <div className="max-w-5xl mx-auto h-screen flex flex-col py-2">
        <Header title="Covid-19 Global Cases Dashboard" name="Elvis Miranda" />
        <Dashboard />
      </div>
    </div>
  );
};

export default App;
