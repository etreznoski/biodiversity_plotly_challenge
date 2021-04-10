
d3.json('samples.json').then(data => {
//variable to hold index
    let i = 0
    console.log(data.samples);
//bar chart function
    function bar(i) {

      //convert otu_ids to strings using .map
      let otuIdStr = data.samples[i].otu_ids.slice(0,10).map(d => d.toString());

      let trace1 = {
        x: data.samples[i].sample_values.slice(0,10),
        y: otuIdStr.map(d => `OTU ${d}`),
        type: "bar",
        orientation: "h",
        name: data.samples[i].id,
        text: data.samples[i].otu_labels
      };

      let data1 = [trace1];

      Plotly.newPlot('bar', data1);
    }
    //call bar function
    bar(i);
//bubble chart function
    function bubble(i) {

      let otuIdStr = data.samples[i].otu_ids.map(d => d.toString());

      let trace2 = {
        x: otuIdStr.map(d => `OTU ${d}`),
        y: data.samples[i].sample_values,
        text: data.samples[i].otu_labels,
        mode: 'markers',
        marker: {
          color: otuIdStr,
          size: data.samples[i].sample_values
        }
      };

      let data2 = [trace2];

      let layout2 = {
        title: data.samples[i].id,
        showlegend: false,
        xaxis: {
          tickangle: -45,
          title: "OTU ID"
         }
      };

      Plotly.newPlot('bubble', data2, layout2);
    };
//call bubble function
    bubble(i);
// demographic Info Function
    function metadataTable (i) {
      let id = data.metadata[i].id;
      let ethnicity = data.metadata[i].ethnicity;
      let gender = data.metadata[i].gender;
      let age = data.metadata[i].age;
      let location = data.metadata[i].location;
      let bbtype = data.metadata[i].bbtype;
      let wfreq = data.metadata[i].wfreq;

      let metadataArr = [`id: ${id}`,
         `ethnicity: ${ethnicity}`,
         `gender: ${gender}`,
         `age: ${age}`,
         `location: ${location}`,
         `bbtype: ${bbtype}`,
         `wfreq: ${wfreq}`]
      d3.select("#sample-metadata").select("ul")
        .selectAll("li")
        .data(metadataArr)
        .join("li")
        .text(d => d)
      };
    //call demographic info function
    metadataTable(i);

}).catch(error => console.log(error));
