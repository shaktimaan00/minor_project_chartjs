const ctx = document.getElementById("myChart");
const myChart = new Chart(ctx, {
	type: "line",
	data: {
		labels: [
			"jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec",
		],
		datasets: [
			{
				label: false,
				data: [50, 100, 250, 175, 200, 230, 150, 130, 80, 40, 50, 30],
				pointBorderColor: [
					"rgba(255, 99, 132, 1)",
					"rgba(54, 162, 235, 1)",
					"rgba(255, 206, 86, 1)",
					"rgba(75, 192, 192, 1)",
					"rgba(153, 102, 255, 1)",
					"rgba(255, 159, 64, 1)",
				],
				borderWidth: 3,
				borderColor: "white",
				// barPercentage: .5,
				lineWidth: 80,
				// categoryPercentage: .14,
			},
		],
	},

	options: {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: false,
		},
		scales: {
			x: {
				ticks: {
					color: "white",
				},
			},
			y: {
				ticks: {
					color: "white",
				},
			},
		},
	},
});

const newctx = document.getElementById("mynewChart");
const mynewChart = new Chart(newctx, {
  type: "bar",
  data: {
    labels: [
      "jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: false,
        data: [50, 100, 250, 175, 200, 230, 150, 130, 80, 40, 50, 30],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 8,
        borderRadius: 50,
        // borderColor: "white",
        // fill: "red",
        barPercentage: .9,
        // lineWidth: 80,
        categoryPercentage: .3,
      },
    ],
  },

  options: {
    responsive: true,
    maintainAspectRatio: false,
    // indexAxis: "y",
    plugins: {
      legend: false,
    },
    scales: {
      x: {
        ticks: {
          color: "white",
        },
      },
      y: {
        ticks: {
          color: "white",
        },
      },
    },
  },
});

for(let i=0; i<12; i++){
	let base_price =
		document.querySelector(".styled-table").children[1].children[0].children[1].children[0]
		.innerHTML;
	let current_price =
		document.querySelector(".styled-table").children[1].children[i].children[1].children[0]
		.innerHTML;
	let percent_change =
		document.querySelector(".styled-table").children[1].children[i].children[2].children[0];

	let n = (parseInt(current_price) - parseInt(base_price)) / parseInt(base_price);
	percent_change.innerHTML = (n*100).toPrecision(3);
	// console.log(base_price - current_price);
	// console.log(current_price);
	// console.log(percent_change);
}
