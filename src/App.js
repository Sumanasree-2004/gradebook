// App.js

import React, { useState } from 'react';
import Header from './Components/Header';
import MainBlock from './Components/MainBlock';
import StatisticsBlock from './Components/Statistics';
import Footer from './Components/Footer';
import './App.css';

function App() {
  const [showStatistics, setShowStatistics] = useState(false);

  return (
    <div className="app">
      <Header />
      <MainBlock showStatistics={showStatistics} />
      {showStatistics && <StatisticsBlock />}
      <Footer />
    </div>
  );
}

export default App;
