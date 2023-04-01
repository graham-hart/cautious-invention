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

let data0 = "sleep"
let data1 = "exercise"

// Config for graph
function constructConfig() {
    const cfg = {
        title: {
            text: `${data[data0].name} vs. ${data[data1].name}`,
            fontFamily: "sans-serif",
        },
        axisX: {
            title: "Day",
            minimum: 0,
        },
        axisY:[
            {
                title: `${data[data0].name} (${data[data0].unit})`,
                lineColor: "#C24642",
                tickColor: "#C24642",
                labelFontColor: "#C24642",
                titleFontColor: "#C24642",
                labelFontFamily: "sans-serif",
                includeZero: true,
            },
            {
                title: `${data[data1].name} (${data[data1].unit})`,
                lineColor: "#369EAD",
                tickColor: "#369EAD",
                labelFontColor: "#369EAD",
                titleFontColor: "#369EAD",
                includeZero: true,
                labelFontFamily: "sans-serif",
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
                name: data[data0].name,
                color: "#C24642",
                axisYIndex: 0,
                showInLegend: true,
                dataPoints: data[data0].data,
            },
            {
                type: "line",
                name: data[data1].name,
                color: "#369EAD",
                showInLegend: true,
                axisYIndex: 1,
                dataPoints: data[data1].data,
            }
        ]
    }
    return cfg;   
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
            if(axis == 0) {
                data0 = e.target.value;
            } else {
                data1 = e.target.value
            }
            new CanvasJS.Chart("demochart", constructConfig()).render()
        })
        selector.value=dataKeys[selectors.indexOf(selector)]
    }
}
initializeSelectors()
new CanvasJS.Chart("demochart", constructConfig()).render()