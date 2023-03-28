// Dummy data
const sleepData = [{x: 0, y:4}, {x: 1, y: 7}, {x: 3, y: 10}, {x: 4, y: 9.5}] 
const exerciseData = [{x: 0, y:0}, {x: 1, y: 20}, {x: 3, y: 80}, {x: 4, y: 45}]

// Config for graph
const cfg = {
    title: {
        text: "Sleep vs. Exercise Time",
    },
    axisX: {
        title: "Day",
        minimum: 0,
    },
    axisY:[
        {
            title: "Sleep (hrs)",
            lineColor: "#C24642",
            tickColor: "#C24642",
            labelFontColor: "#C24642",
            titleFontColor: "#C24642",
            includeZero: true,
            suffix: "h"
        },
        {
            title: "Exercise (mins)",
            lineColor: "#369EAD",
            tickColor: "#369EAD",
            labelFontColor: "#369EAD",
            titleFontColor: "#369EAD",
            includeZero: true,
            suffix: "m"
        }
    ],
    toolTip: {
		shared: true
	},
	legend: {
		cursor: "pointer",
	},
    type: 'line',
    data: [
        {
            type: "line",
            name: "Sleep",
            color: "#C24642",
            axisYIndex: 0,
            showInLegend: true,
            dataPoints: sleepData,
        },
        {
            type: "line",
            name: "Exercise",
            color: "#369EAD",
            showInLegend: true,
            axisYIndex: 1,
            dataPoints: exerciseData,
        }
    ]
}
// Create & render chart
let c = new CanvasJS.Chart("mychart", cfg);
c.render();