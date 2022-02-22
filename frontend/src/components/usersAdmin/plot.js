import { CanvasJSChart } from 'canvasjs-react-charts';
import React from 'react';

// https://canvasjs.com/docs/charts/integration/react/
const stats = {
	ageDistribution: {
		title: {
			text: "Age Distribution",
		},
		data: [{
			type: "column",
			dataPoints: [
				{ label: "18-23",  y: 20 },
				{ label: "23-28", y: 30 },
				{ label: "28-33", y: 25 },
				{ label: "38-43",  y: 10 },
				{ label: "43-48",  y: 5 },
				{ label: "48-53",  y: 5 },
				{ label: "53-over",  y: 5 },
			]}
		]
	}
}

const Plot = (props) => {
	if (props.data != 'None') {
		console.log(props.data)
		return (
			<CanvasJSChart options = {getStats(props.data)}/>
		);
	} else {
		return null;
	}
};

function getStats(data) {
	return stats[data]
}

export default Plot;