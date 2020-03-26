import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Table from './Table/Table';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			characters: [
				{
					id: 1,
					name: 'Charlie',
					job: 'Janitor',
					income: '$1000'
				},
				{
					id: 2,
					name: 'Mac',
					job: 'Bouncer',
					income: '$2000'
				},
				{
					id: 3,
					name: 'Dee',
					job: 'Aspring actress',
					income: '$8000'
				},
				{
					id: 4,
					name: 'Dennis',
					job: 'Bartender',
					income: '$5000'
				}
			]
		};
	}

	remove = id => {
		console.log('delete');

		const characters = this.state.characters.filter(
			character => character.id !== id
		);
		this.setState({ characters });
	};

	render() {
		return (
			<div>
				<Header />
				<Table onDelete={this.remove} characters={this.state.characters} />
			</div>
		);
	}
}

export default App;
