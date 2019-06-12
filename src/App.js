import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import TokenWindow from './components/Tokens/TokenWindow';
import Landing from './components/Landing/Landing';


function App() {
  return (
    <div className="App">
		<Header />
		<Landing />
		<TokenWindow />
		<Footer />
	</div>
  );
}

export default App;
