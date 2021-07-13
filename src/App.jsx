import React from 'react';
import Dashboard from './Components/Dashboard';
import Header from './Components/Header';
import './indexTailwind.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="w-full bg-gray-200  px-3 ">
        <div className="max-w-7xl mx-auto min-h-screen flex flex-col py-2">
          <Header
            title="Covid-19 Global Cases Dashboard"
            name="Elvis Miranda"
          />
          <Dashboard />
        </div>
      </div>
    </QueryClientProvider>
  );
};

export default App;
