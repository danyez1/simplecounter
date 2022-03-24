import React from "react";
import { IconClock } from "./iconclock.jsx";

export const SimpleCounter = (props) => {
	const d1 = Math.floor(props.seconds / 100000) % 10;
	const d2 = Math.floor(props.seconds / 10000) % 10;
	const d3 = Math.floor(props.seconds / 1000) % 10;
	const d4 = Math.floor(props.seconds / 100) % 10;
	const d5 = Math.floor(props.seconds / 10) % 10;
	const d6 = Math.floor(props.seconds / 1) % 10;

	return (
		<div
			className="container d-flex justify-content-center bg-dark 
		bg-gradient text-white p-5 mt-3">
			<div className="rounded-3 bg-secondary border border-danger fs-1 p-3">
				<IconClock />
			</div>
			<div className="rounded-3 border border-light fs-1 p-3">{d1}</div>
			<div className="rounded-3 border border-light fs-1 p-3">{d2}</div>
			<div className="rounded-3 border border-light fs-1 p-3">{d3}</div>
			<div className="rounded-3 border border-light fs-1 p-3">{d4}</div>
			<div className="rounded-3 border border-light fs-1 p-3">{d5}</div>
			<div className="rounded-3 border border-light fs-1 p-3">{d6}</div>
		</div>
	);
};
