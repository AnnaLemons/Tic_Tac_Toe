import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Square from "./Square.jsx";

const Home = () => {
	const [turn, setTurn] = useState(true);
	const [board, setboard] = useState(Array(9).fill(null));
	const [winner, setWinner] = useState("");
	const [message, setMessage] = useState("Tic-Tac-Toe!");
	//STORE VALUES ON THE BOARD
	const continueGame = (value, position) => {
		let auxBoard = [...board];

		auxBoard[position] = value;
		setboard(auxBoard);
		//CHECK WHO WINS
		let victory = setVictory(auxBoard);
		if (victory === true) {
			setMessage("X is the winner");
		} else if (victory === false) {
			setMessage("O is the winner");
		} else if (victory === true || victory === false) {
			setWinner("We have a winner");
		}
	};
	//CHANGE TURN
	const changeTurn = turn => {
		setTurn(!turn);
	};
	//CHECK WINNER WHILE CONDITION
	const setVictory = turnValue => {
		const WINNINGOPTIONS = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6]
		];

		for (let i in WINNINGOPTIONS) {
			const [a, b, c] = WINNINGOPTIONS[i];
			if (
				board[a] != null &&
				board[a] === board[b] &&
				board[a] === board[c]
			) {
				return turnValue[a];
			}
		}
		return null;
	};

	const EMPTYARRAY = new Array(9).fill("");

	const box = EMPTYARRAY.map((_, index) => {
		return (
			<Square
				key={index.toString()}
				position={index}
				turn={turn}
				continueGame={continueGame}
				changeTurn={changeTurn}
			/>
		);
	});

	return (
		<div className="ticTacToe">
			<Container>
				<h2 className="win_message">{message}</h2>
				<Row>
					{box[0]}
					{box[1]}
					{box[2]}
				</Row>

				<Row>
					{box[3]}
					{box[4]}
					{box[5]}
				</Row>

				<Row>
					{box[6]}
					{box[7]}
					{box[8]}
				</Row>
			</Container>
		</div>
	);
};

export default Home;
