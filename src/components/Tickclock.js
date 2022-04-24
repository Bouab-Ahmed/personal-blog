import reactDom from "react-dom";

const time = setInterval(
	() =>
		reactDom.render(
			new Date().toLocaleString(),
			document.getElementById("clock")
		),
	1000
);

const Tickclock = () => {
	const clear = () => {
		clearInterval(time);
	};
	return (
		<div>
			<p id="clock">{new Date().toLocaleString()}</p>
			<button onClick={clear}>clear timer</button>
		</div>
	);
};

export default Tickclock;
