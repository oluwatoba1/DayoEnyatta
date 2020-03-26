import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
	render() {
		return (
			<div>
				<button
					onClick={() => {
						this.props.remove(this.props.id);
					}}>
					{this.props.text}
				</button>
			</div>
		);
	}
}

export default Button;
