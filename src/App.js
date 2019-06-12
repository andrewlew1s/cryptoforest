import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import TokenWindow from './components/Tokens/TokenWindow';

function App() {
  return (
    <div className="App">
		<Header />
		<h1>Welcome to the CryptoForest website</h1>
		<TokenWindow />
		<Footer />
	</div>
  );
}

export default App;
