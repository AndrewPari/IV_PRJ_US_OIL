
var width = 2000, height = 800

   
    
//read in our json files
d3.json("./data.json").then((data) => {

    /*
    //filter out the nulls in price_usd
    data = data.bitcoin.filter((d) => {
        return d.price_usd;
    })
    */

    const oil = data;

    
    const svg = d3.select("#canvas");
    svg.style("background-color", "grey");

    //create an svg g element and add 50px of padding
    const chart = svg.append("g")
        .attr("transform", `translate(65, 65)`);


    var x = d3.scaleBand()
        .range([0, width])
        .domain(oil.map(function (d) { return d.Country; }))
        .padding(0.1);


    var y = d3.scaleLinear()
        .domain([0, 600000])
        .range([height, 0]);



    var blues = d3.scaleLinear()
        .domain([0,5,10])
        .range(["red", "white", "blue"]);



    bars = chart.append('g')
        .selectAll(".rect")
        .data(oil)
        .join("rect")
        .attr("x", function (d) { return x(d.Country); })
        .attr("y", function (d) { return y(d.ninetythree); })
        .attr("width", x.bandwidth())
        .attr("height", function (d) { return height - y(d.ninetythree); })
        .attr("fill", function (d) {
            if (d.Score) return blues(d.Score);
            return 'black' })


    //add axes
    chart.append("g")
        .attr("transform", "translate(0," + (height) + ")") //put our axis on the bottom
        .call(
            d3.axisBottom(x) //ticks + tickSize adds grids
    ).call((g) => g.select(".domain").remove()) //Optional: remove the axis endpoints
        .selectAll("text")
        .style("text-anchor", "end")
        .style("color", "white")
        .attr("dx", "-.8em")
        .attr("dy", ".15em")
        .attr("font-size", "12px")
        .attr("transform", function (d) {
            return "rotate(-65)"
        });

    chart.append("g")
        .style("color", "white")
        .call(
            d3.axisLeft(y).ticks(10).tickSize(-width - 10)
    ).call((g) => g.select(".domain").remove()); //Optional: remove the axis endpoints

    chart.append("g")
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("font-size", "20px")
        .attr("y", -50)
        .attr("x", -500)
        .attr("stroke", "black")
        .text("Thousands of Barrels of Oil");




});


