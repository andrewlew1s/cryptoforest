import React from 'react';
import './Landing.css';
import Logo from '../../assets/logo.svg'

const Landing = () => {
	return (
		<div className="landingWrapper">
			<a href="/" >
				<img src={Logo} alt="" />
			</a>
			<h1>Welcome to the CryptoForest</h1>
			<p>Please enjoy your stay. Remember! Each visit is a new experience. </p>
		</div>
	)
}

export default Landing;