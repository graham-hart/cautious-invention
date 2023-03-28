const ctx = document.getElementById("mychart")


const splitData = (data) => {
    const xVal = []
    const yVal = []
    for (pt of data) {
        xVal.push(pt.x);
        yVal.push(pt.y)
    }
    return {x: xVal, y:yVal}
}

const DATA = [{x: 0, y:10}, {x: 1, y: 15}, {x: 3, y: 18}, {x: 4, y: 7}]
const sD = splitData(DATA);


const cfg = {
    type: 'line',
    data: {
        labels: sD.x,
        datasets: [{
            data: sD.y,
        }],
    }
}



new Chart(ctx, cfg);