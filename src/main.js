// Dummy data
// Oh my god this code is so bad i would rewrite it all if i didn't hate js with a passion
const data = {
    sleep: {
        data: [{x: 0, y:4}, {x: 1, y: 7}, {x: 3, y: 10}, {x: 4, y: 9.5}],
        unit: "hrs",
        name: "Sleep"
    },
    exercise: {
        data: [{x: 0, y:0}, {x: 1, y: 20}, {x: 3, y: 80}, {x: 4, y: 45}],
        unit: "mins",
        name: "Exercise"
    },
    screentime: {
        data: [{x: 0, y:9.5}, {x: 1, y: 4}, {x: 3, y: 0}, {x: 4, y: 3}],
        unit: "hrs",
        name: "Screen Time"
    },
    mood: {
        data: [{x: 0, y:1}, {x: 1, y: 3}, {x: 3, y: 5}, {x: 4, y: 4}],
        unit: "(1-5 scale)",
        name: "Mood"
    },
};
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
            title: `Sleep (${data['sleep']['unit']})`,
            lineColor: "#C24642",
            tickColor: "#C24642",
            labelFontColor: "#C24642",
            titleFontColor: "#C24642",
            includeZero: true,
        },
        {
            title: `Exercise (${data['exercise']['unit']})`,
            lineColor: "#369EAD",
            tickColor: "#369EAD",
            labelFontColor: "#369EAD",
            titleFontColor: "#369EAD",
            includeZero: true,
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
            dataPoints: data["sleep"].data,
        },
        {
            type: "line",
            name: "Exercise",
            color: "#369EAD",
            showInLegend: true,
            axisYIndex: 1,
            dataPoints: data["exercise"].data,
        }
    ]
}

function addSelectorOption(name, value, selector) {
    const option = document.createElement("option")
    option.setAttribute("value", value)
    option.appendChild(document.createTextNode(name))
    selector.appendChild(option)
}

function initializeSelectors() {
    const selectors =Array.from(document.getElementsByClassName("data-select"))
    const dataKeys = Object.keys(data)
    for(let selector of selectors) {
        for(let key of dataKeys) {
            addSelectorOption(data[key].name, key, selector)
        }
        selector.addEventListener("change", (e) => {
            const axis = e.target.getAttribute("data-yaxis");
            const value = e.target.value;
            updateConfig(value, axis)
            let c = new CanvasJS.Chart("demochart", cfg)
            c.render();
        })
        selector.value=dataKeys[selectors.indexOf(selector)]
    }
}

function updateConfig(dataValue, axisYIndex) {
    const axisY = cfg.axisY[axisYIndex];
    axisY.title = `${data[dataValue].name} (${data[dataValue].unit})`
    axisY.dataPoints = data[dataValue].data;
    const d = cfg.data.filter((d)=>{return d.axisYIndex==axisYIndex})[0]
    d.dataPoints = data[dataValue].data
    d.name=data[dataValue].name
}


initializeSelectors();
let c = new CanvasJS.Chart("demochart", cfg);
c.render();