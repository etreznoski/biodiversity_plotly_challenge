
d3.json('samples.json').then(data => {

    console.log(data);
    console.log(data.samples[3]);


    function bar() {
      let otuIdStr = data.samples[3].otu_ids.map(d => d.toString());
      let trace1 = {
        x: data.samples[3].sample_values,
        y: otuIdStr.map(d => `OTU ${d}`),
        type: "bar",
        orientation: "h",
        name: data.samples[3].id,
        text: data.samples[3].otu_labels
      };
      let data1 = [trace1];
      let layout1 = {
        title: data.samples[3].id,
        // yaxis: {tickangle: -45,}

      };
      Plotly.newPlot('bar', data1, layout1);

    }
    bar();
});
