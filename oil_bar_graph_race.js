
(function () {
    //iife - this wraps the code in a function so it isn't accidentally exposed 
    //to other javascript in other files. It is not required.

    var width = 2000, height = 800
    
    //read in our csv file 
    d3.json("./data.json").then((data) => {

        console.log(data);

        const svg = d3.select("#canvas");

        //create an svg g element and add 50px of padding
        const chart = svg.append("g")
            .attr("transform", `translate(50, 50)`);


        var x = d3.scaleBand()
            .range([0, width])
            .domain(data.map(function (d) { return d.Country; }))
            .padding(0.1);


        var y = d3.scaleLinear()
            .domain([0, 2000000])
            .range([height, 0]);


        bars = chart.append('g')
            .selectAll(".rect")
            .data(data)
            .join("rect")
            .attr("x", function (d) { return x(d.Country); })
            .attr("y", function (d) { return y(d.zero); })
            .attr("width", x.bandwidth())
            .attr("height", function (d) { return height - y(d.zero); })


        //add axes
        chart.append("g")
            .attr("transform", "translate(0," + (height) + ")") //put our axis on the bottom
            .call(
                d3.axisBottom(x) //ticks + tickSize adds grids
        ).call((g) => g.select(".domain").remove()) //Optional: remove the axis endpoints
            .selectAll("text")
            .style("text-anchor", "end")
            .attr("dx", "-.8em")
            .attr("dy", ".15em")
            .attr("transform", function (d) {
                return "rotate(-65)"
            });

        chart.append("g")
            .call(
                d3.axisLeft(y).ticks(10).tickSize(-width - 10)
            ).call((g) => g.select(".domain").remove()); //Optional: remove the axis endpoints




    });

})();
