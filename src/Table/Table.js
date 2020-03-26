import React, { Component } from 'react';
import './Table.css';
import Button from '../Button/Button';

class Table extends Component {
	render() {
		return (
			<div className="table">
				<table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Job</th>
							<th>Income</th>
							<th>Remove</th>
						</tr>
					</thead>
					<tbody>
						{this.props.characters.map(character => (
							<tr key={character.id}>
								<td>{character.name}</td>
								<td>{character.job}</td>
								<td>{character.income}</td>
								<td>
									<Button
										remove={this.props.onDelete}
										id={character.id}
										text="delete"
									/>
									{/* <button onClick={() => this.props.onDelete(character.id)}>
										Delete
									</button> */}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		);
	}
}

export default Table;
