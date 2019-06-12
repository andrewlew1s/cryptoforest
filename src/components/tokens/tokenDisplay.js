import React from 'react';
import './TokenDisplay.css';
import axios from 'axios';


class TokenDisplay extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tokenMetaData: [],
		};
	}
	getImageMetaData() {
		const NUMTOKENS = 7;
		let metaData = this.state.tokenMetaData;
		for(var i=1; i <=NUMTOKENS; i++){
			axios.get('https://crypto-forest.herokuapp.com/api/creature/' + i)
			.then(res => {
				const tokenMetaData = res.data;
				metaData = metaData.concat(tokenMetaData);
				this.setState({tokenMetaData: metaData});
			})
		}

		console.log(this.state)
	}
	render() {
		return(
			<div>
				<button onClick={() => this.getImageMetaData()} />
				{/* <img src="this.imgURL" alt="" /> */}
			</div>
		);
	}
}

export default TokenDisplay;