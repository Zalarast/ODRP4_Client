import React from 'react';
import { StructureTable } from './pages';
import { Header } from './components';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header/>
      <StructureTable/>
    </div>
  );
}

export default App;
