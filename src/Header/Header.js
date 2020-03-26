import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
	render() {
		return (
			<div class="header">
				<div className="logo">Academy</div>
				<ul>
					<li>Home</li>
					<li>About</li>
					<li>Services</li>
					<li>Contact</li>
				</ul>
				<input type="search" name="search" id="search" placeholder="Search" />
			</div>
		);
	}
}

export default Header;
