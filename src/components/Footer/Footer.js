import React from 'react';
import './Footer.css';
import GitHub from '../../assets/github.svg'

const footer = () => {
	return (
		<div className="footer">
			<p>Thanks for visiting. The CryptoForest website is in early development. Suggestions and comments are always welcome. Feel free to check out the GitHub repo!</p>
			<a href="https://github.com/andrewlew1s/cryptoforest" target="_blank" rel="noopener noreferrer">
				<img height="22px" src={GitHub} alt=""/>
			</a>
		</div>
	)
}

export default footer;