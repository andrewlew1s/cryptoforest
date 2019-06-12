import React from 'react';
import './TokenDisplay.css';
import axios from 'axios';

//there are probably smarter ways of going about doing this, but not bad for my first React component :)
class TokenDisplay extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tokenMetaData: [],
			imageURLS: [],
			randomNo: null
		};
	}
	componentDidMount() {
		//initialize random state
		const NUMTOKENS = 7;
		const min = 0;
		const max = NUMTOKENS;
		const rand = Math.floor(min + Math.random() * (max - min));
		this.setState({randomNo: this.state.randomNo + rand});
		//init metaData and imgURLS
		let metaData = this.state.tokenMetaData;
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
	renderImage() {
		//makes the src random
		let rand = this.state.randomNo;
		let string = this.state.imageURLS[rand];
		return string;
	}
	render() {
		return(
			<img className="tokenImages" src={this.renderImage()} alt="" />
		);
	}
}

export default TokenDisplay;