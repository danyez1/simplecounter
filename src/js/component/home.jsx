import React from "react";
import { Counter, SimpleCounter } from "./Counter.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<SimpleCounter seconds={0} />
		</div>
	);
};

export default Home;
