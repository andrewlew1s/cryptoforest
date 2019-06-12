import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import TokenDisplay from './components/Tokens/TokenDisplay';

function App() {
  return (
    <div className="App">
		<Header />
		<h1>Welcome to the CryptoForest website</h1>
		<TokenDisplay />
		<p> this works</p>
		<Footer />
	</div>
  );
}

export default App;
