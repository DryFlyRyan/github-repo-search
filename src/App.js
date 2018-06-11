import React from 'react';
import './App.css';
import TopBar from './components/TitleBar';
import SearchBar from './components/SearchBar';
import ResultsFrame from './components/ResultsFrame';

const App = () => {
  return (
    <div className="App">
      <TopBar />
      <ResultsFrame />
    </div>
  );
};

export default App;
