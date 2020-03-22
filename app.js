// Read in the provided JSON file
d3.json("samples.json").then(function(data) {
  console.log(data);
});

// Fill drop down menu with "names" from JSON




// Create an empty array to add the numbers.
var topTenUnitID = [];

// Create a for loop to generate 5 random numbers between 1 and 59.
for (var i = 0; i < 10; i++) {
 //Add the numbers to the array
 topTenUnitID.push();
}
//  Check your numbers.
console.log(topTenUnitID);





// Create the framework for the belly button bar chart
var trace1 = {
  x: [],
  y: [],
  type: 'bar',
  orientation: 'h'
};

var data = [trace1];

var layout = {
};

Plotly.newPlot("bar", data, layout);


// Create framework for gauge chart
var trace2 = [
	{
		domain: { x: [0, 1], y: [0, 1] },
		value: 270,
		title: { text: "Speed" },
		type: "indicator",
		mode: "gauge+number"
	}
];

var layout = { width: 600, height: 500, margin: { t: 0, b: 0 } };
Plotly.newPlot('gauge', trace2, layout);


// Create the framework for the belly button bubble chart
var trace3 = {
  x: [],
  y: [],
  text: [],
  mode: 'markers',
  marker: {
    color: [],
    size: []
  }
};

var data = [trace3];

var layout = {
  title: 'OTU ID',
  // height: 600,
  // width: 600
};

Plotly.newPlot('bubble', data, layout);


