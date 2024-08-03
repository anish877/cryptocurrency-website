if(document.getElementById("sparkline")){
var sparkline  = JSON.parse(document.getElementById("sparkline").getAttribute("value"));

var canvas = document.getElementById("priceChart");
var ctx = canvas.getContext("2d");
var gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, '#765dd0');   
gradient.addColorStop(1, '#1c1b21');

const plugin = {
  id: 'customCanvasBackgroundColor',
  beforeDraw: (chart, args, options) => {
    const {ctx} = chart;
    ctx.save();
    ctx.globalCompositeOperation = 'destination-over';
    ctx.fillStyle = options.color || '#99ffff';
    ctx.fillRect(0, 0, chart.width, chart.height);
    ctx.restore();
  }
};

function generateChart(yValues){
    var xValues = [];
        yValues.forEach((item, index) => {
        xValues.push(index);
    });
    new Chart(document.getElementById("priceChart"), {
      type: "line",
      data: {
        labels: xValues,
        datasets: [{
          fill: true,
          backgroundColor: gradient, // Put the gradient here as a fill color
          borderColor: "#765dd0",
          pointBackgroundColor: "#765dd0",
          pointBorderColor: "#765dd0",
          // pointHighlightFill: "#fff",
          // pointHighlightStroke: "#ff6c23",
          data: yValues
        }]
      },
      options: {
        elements: {
          point:{
              radius: 0
          }
        },
        animations: {
          tension: {
            duration: 1000,
            easing: 'linear',
            from: 1,
            to: 0,
            loop: true
          }
        },
        plugins: {
          customCanvasBackgroundColor: {
            color: '#1c1b21',
          }
        },
        legend: {display: false},
        scales: {      y: { // defining min and max so hiding the dataset does not change scale range
          min: 0,
          max: 100
        }
        }
      },
      plugins: [plugin],
    });
    console.log(yValues[yValues.length-1])
}

generateChart(sparkline);
}


const globalConfig = {
  "strokeBottom": 5,
  "colorSlice": "#765dd0",
  "colorCircle": "#1c1b21",
  "round": true,
  /* e.t.c */
}

const btcDominanceConfig = {
  "strokeBottom": 5,
  "colorSlice": "#FCF55F",
  "colorCircle": "#1c1b21",
  "round": true,
}

const circle = new CircularProgressBar("pie",globalConfig);
circle.initial();

const btcDominance = new CircularProgressBar("btcDominance",btcDominanceConfig);
btcDominance.initial();

if(document.getElementById("heading")){
var highAnim = new countUp.CountUp('high', document.getElementById("high").getAttribute("value"), {decimalPlaces: 5, duration: 3, enableScrollSpy: true});
highAnim.start()
var lowAnim = new countUp.CountUp('low', document.getElementById("low").getAttribute("value"), {decimalPlaces: 5, duration: 3, enableScrollSpy: true});
lowAnim.start()
var changeAnim = new countUp.CountUp('change', document.getElementById("change").getAttribute("value"), {decimalPlaces: 2, duration: 3, enableScrollSpy: true});
changeAnim.start()
}

if(document.getElementById("globalStats")){
var totalCoins = new countUp.CountUp('totalCoins', document.getElementById("totalCoins").getAttribute("value"), { duration: 4, });
totalCoins.start()
var totalMarkets = new countUp.CountUp('totalMarkets', document.getElementById("totalMarkets").getAttribute("value"), { duration: 4});
totalMarkets.start()
var totalExchanges = new countUp.CountUp('totalExchanges', document.getElementById("totalExchanges").getAttribute("value"), {duration: 4});
totalExchanges.start()
var totalMarketCap = new countUp.CountUp('totalMarketCap', document.getElementById("totalMarketCap").getAttribute("value"), { duration: 4});
totalMarketCap.start()
var total24hVolume = new countUp.CountUp('total24hVolume', document.getElementById("total24hVolume").getAttribute("value"), { duration: 4});
total24hVolume.start()
}

if(document.querySelectorAll("#coinRow"))
{
  document.querySelectorAll("#coinRow").forEach((item)=>{
    item.addEventListener("mouseenter", ()=>{
    item.classList.remove("coinRow");
    item.classList.add("mouse-enter-coin-row");
    })
    
    item.addEventListener("click", ()=>{
      item.querySelector("#form").submit();
    })

    item.addEventListener("mouseleave", ()=>{
      item.classList.remove("mouse-enter-coin-row");
      item.classList.add("coinRow");
      })
  })
}
if(document.querySelectorAll("button"))
  {
    document.querySelectorAll("button").forEach((item)=>{
      item.addEventListener("mouseenter", ()=>{
      item.classList.remove("button-before");
      item.classList.add("mouse-enter-button");
    })

      item.addEventListener("mouseleave", ()=>{
      item.classList.remove("mouse-enter-button");
      item.classList.add("button-before");
    })
    })
  }
if(document.querySelectorAll("#timePeriodButtons"))
    {
      document.querySelectorAll("#timePeriodButtons").forEach((item)=>{
        item.addEventListener("mouseenter", ()=>{
        item.classList.remove("timePeriodButtons");
        item.classList.add("mouse-enter-period-button");
        })

        item.addEventListener("mouseleave", ()=>{
        item.classList.remove("mouse-enter-period-button");
        item.classList.add("timePeriodButtons");
        })
      })
    }
if(document.querySelectorAll("#bestCoinsRow"))
{
  document.querySelectorAll("#bestCoinsRow").forEach((item)=>{
    item.addEventListener("click", ()=>{
      item.querySelector("#form").submit();
    });
    item.addEventListener("mouseenter", ()=>{
      item.classList.remove("bestCoinRow");
      item.classList.add("mouse-enter-best-coin-row");
      });
    item.addEventListener("mouseleave", ()=>{
      item.classList.remove("mouse-enter-best-coin-row");
      item.classList.add("bestCoinRow");
      });  
})
}

  