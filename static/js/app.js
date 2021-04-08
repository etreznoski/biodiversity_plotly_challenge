
d3.json('samples.json').then(data => {

    console.log(data);
    console.log(data.samples[0]);


    function init() {
      let otuIdStr = data.samples[1].otu_ids.toString();
      let trace1 = {
        x: data.samples[1].sample_values,
        y: `OTU ${otuIdStr},
        type: "bar",
        orientation: "h",
        name: data.samples[1].id,
        text: data.samples[1].otu_labels
      };
      let data1 = [trace1];
      let layout1 = {
        title: data.samples[1].id,
        yaxis: {tickangle: -45,}

      };
      Plotly.newPlot('bar', data1, layout1);

    }
    init();
});
