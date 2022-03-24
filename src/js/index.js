//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import { SimpleCounter } from "./component/Counter.jsx";

const start = Date.now();

setInterval(() => {
	const seconds = Math.floor((Date.now() - start) / 1000);
	//render your react application
	ReactDOM.render(
		<SimpleCounter seconds={seconds} />,
		document.querySelector("#app")
	);
}, 1000);
