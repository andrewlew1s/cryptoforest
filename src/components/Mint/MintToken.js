import React from 'react';
import Mint from '../../assets/mint.svg'
import './MintToken.css';


class mintToken extends React.Component {

	APICall = () => {
		return(
			fetch("/mint-token", {
				method: "POST",
				headers: {
				  "Content-Type": "application/json"
				},
				body: JSON.stringify({
				  authKey: "authkey",
				  tokenData: {
					name: "CryptoForest" // it's under this name currently, should change later since it's not a CryptoForest token, just OSC
				  },
				  toValue: "someone_email", // to which account you want to mint the token, can be new (automatically makes db entry)
				  requestType: "email" // either "email" or "text"
				})
			  })
				.then(res => res.json())
				.then(res => console.log(`res=\n${JSON.stringify(res, null, 2)}`))
		)
	}

	render() {
		return (
			<img className="mintButton" src={Mint} alt="" onClick={() => this.APICall()} />
		)
	}
}

export default mintToken;