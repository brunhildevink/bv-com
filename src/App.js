import React from 'react';
import './App.scss';

// Components
import Header from './components/Header'

// Pages
import Skills from './pages/Skills'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="App">
      <Header />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
