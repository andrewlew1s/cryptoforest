import React from 'react';
import TokenDisplay from './TokenDisplay';
import './TokenWindow.css';



const TokenWindow = () => {
	return(
		<div className="windowWrapper">
			<TokenDisplay />
			<TokenDisplay />
			<TokenDisplay />
		</div>
	)
}

export default TokenWindow;