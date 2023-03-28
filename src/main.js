const ctx = document.getElementById("mychart")

const cfg = {
    type: 'line',
    data: {
      datasets: [{
        data: [{x: 10, y: 20}, {x: 15, y: 3}, {x: 20, y: 10}]
      }]
    }
  }
 
  
new Chart(ctx, cfg);