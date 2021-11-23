import React, { useState } from "react";
import PropTypes from "prop-types";

const Square = props => {
	const [value, setValue] = useState("");
	//CHOICE "X" OR "O"
	const turnSelection = turn => {
		if (value == "" && turn == true) {
			setValue("X");
		} else if (value == "" && turn == false) {
			setValue("O");
		}
	};
	return (
		<div
			className="square"
			onClick={() => {
				if (!value) {
					turnSelection(props.turn);
					props.changeTurn(props.turn);
					props.continueGame(props.turn, props.position);
				}
			}}>
			{value}
		</div>
	);
};

Square.propTypes = {
	turn: PropTypes.bool,
	position: PropTypes.number,
	continueGame: PropTypes.func,
	changeTurn: PropTypes.func
};

export default Square;
