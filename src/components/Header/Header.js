import React from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Logo from '../../assets/logo.svg'

const header = () => {
	return (
		<div>
			<link
			rel="stylesheet"
			href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
			integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
			crossOrigin="anonymous"
			/>
			<Navbar bg="light" variant="light">
				<Navbar.Brand href="#home">
				<img
					alt=""
					src={Logo}
					width="50"
					height="32"
					className="d-inline-block align-top"
				/>
				{' CryptoForest '}
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href="https://opensea.io/category/cryptoforest" target="_blank">OpenSea</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	)
}

export default header;