import React from 'react';
import './TokenDisplay.css';
import axios from 'axios';


class TokenDisplay extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tokenMetaData: [],
			imageURLS: []
		};
	}
	componentDidMount() {
		const NUMTOKENS = 7;
		let metaData = this.state.tokenMetaData;
		let imgURLS = this.state.imageURLS;
		for(var i=1; i <=NUMTOKENS; i++){
			axios.get('https://crypto-forest.herokuapp.com/api/creature/' + i)
			// eslint-disable-next-line no-loop-func
			.then(res => {
				const tokenMetaData = res.data;
				metaData = metaData.concat(tokenMetaData);
				this.setState({tokenMetaData: metaData});
					let imgs = [];
					imgs = this.state.tokenMetaData.map((token, i, tokenMetaData) => {
						return token.image
					});
					this.setState({imageURLS: imgs})
				}
			)
		}
	}
	render() {
		return(
			<div>
				<img src={this.state.imageURLS[1]} alt="" />
			</div>
		);
	}
}

export default TokenDisplay;