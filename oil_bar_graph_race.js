
var width = 2000, height = 800

   
    
//read in our json files
d3.json("./data2.json").then((data) => {

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
        .domain([0, 1600000])
        .range([height, 0]);


    //color based on democracy score
    var blues = d3.scaleLinear()
        .domain([0,5,10])
        .range(["red", "white", "blue"]);


    //create legend
    chart.append('circle')
        .attr("cx", 1700)
        .attr("cy", 130)
        .attr("r", 25)
        .style("fill", "red")

    chart.append('circle')
        .attr("cx", 1750)
        .attr("cy", 130)
        .attr("r", 25)
        .style("fill", "white")

    chart.append('circle')
        .attr("cx", 1800)
        .attr("cy", 130)
        .attr("r", 25)
        .style("fill", "blue")

    chart.append("text")
        .attr("font-size", "24px")
        .attr("y", 60)
        .attr("x", 1500)
        .attr("stroke", "black")
        .text("Democracy index scores: Authoritarian - Democratic")

    chart.append("text")
        .attr("font-size", "36px")
        .attr("y", 98)
        .attr("x", 1690)
        .attr("stroke", "red")
        .attr("fill", "red")
        .text("0")
    chart.append("text")
        .attr("font-size", "36px")
        .attr("y", 98)
        .attr("x", 1742)
        .attr("stroke", "white")
        .attr("fill", "white")
        .text("5")
    chart.append("text")
        .attr("font-size", "36px")
        .attr("y", 98)
        .attr("x", 1777)
        .attr("stroke", "blue")
        .attr("fill", "blue")
        .text("10")

    //no democracy score
    chart.append("text")
        .attr("font-size", "28px")
        .attr("y", 95)
        .attr("x", 1600)
        .attr("stroke", "black")
        .text("no info")
    chart.append('circle')
        .attr("cx", 1650)
        .attr("cy", 130)
        .attr("r", 25)
        .style("fill", "black")
    

    //places & updates year text on screen
    theYear = chart.append("g")
        .append("text")
        .attr("font-size", "48px")
        .attr("y", -15)
        .attr("x", 0)
        .attr("stroke", "black")
        .text("Year: 1993")
        .transition()
        .duration(5000)
        .text("Year: 1993")
        .transition()
        .duration(5000)
        .text("Year: 1994")
        .transition()
        .duration(5000)
        .text("Year: 1995")
        .transition()
        .duration(5000)
        .text("Year: 1996")
        .transition()
        .duration(5000)
        .text("Year: 1997")
        .transition()
        .duration(5000)
        .text("Year: 1998")
        .transition()
        .duration(5000)
        .text("Year: 1999")
        .transition()
        .duration(5000)
        .text("Year: 2000")
        .transition()
        .duration(5000)
        .text("Year: 2001")
        .transition()
        .duration(5000)
        .text("Year: 2002")
        .transition()
        .duration(5000)
        .text("Year: 2003")
        .transition()
        .duration(5000)
        .text("Year: 2004")
        .transition()
        .duration(5000)
        .text("Year: 2005")
        .transition()
        .duration(5000)
        .text("Year: 2006")
        .transition()
        .duration(5000)
        .text("Year: 2007")
        .transition()
        .duration(5000)
        .text("Year: 2008")
        .transition()
        .duration(5000)
        .text("Year: 2009")
        .transition()
        .duration(5000)
        .text("Year: 2010")
        .transition()
        .duration(5000)
        .text("Year: 2011")
        .transition()
        .duration(5000)
        .text("Year: 2012")
        .transition()
        .duration(5000)
        .text("Year: 2013")
        .transition()
        .duration(5000)
        .text("Year: 2014")
        .transition()
        .duration(5000)
        .text("Year: 2015")
        .transition()
        .duration(5000)
        .text("Year: 2016")
        .transition()
        .duration(5000)
        .text("Year: 2017")
        .transition()
        .duration(5000)
        .text("Year: 2018")
        .transition()
        .duration(5000)
        .text("Year: 2019")
        .transition()
        .duration(5000)
        .text("Year: 2020")
        .transition()
        .duration(5000)
        .text("Year: 2021")
        


    //create & update the bars
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
            return 'black'
        })
        .transition()
        .duration(1000) //apply transition from above to below over XXXX milliseconds
        .attr("y", function (d) { return y(d.ninetyfour); }) //new attribute to be drawing off of
        .attr("height", function (d) { return height - y(d.ninetyfour); })
        .transition()
        .duration(5000) //apply transition from above to below over XXXX milliseconds
        .attr("y", function (d) { return y(d.ninetyfive); }) //new attribute to be drawing off of
        .attr("height", function (d) { return height - y(d.ninetyfive); })
        //animate & update
        .transition()
        .duration(5000) //apply transition from above to below over XXXX milliseconds
        .attr("y", function (d) { return y(d.ninetysix); }) //new attribute to be drawing off of
        .attr("height", function (d) { return height - y(d.ninetysix); })
        //animate & update
        .transition()
        .duration(5000) //apply transition from above to below over XXXX milliseconds
        .attr("y", function (d) { return y(d.ninetyseven); }) //new attribute to be drawing off of
        .attr("height", function (d) { return height - y(d.ninetyseven); })
        //animate & update
        .transition()
        .duration(5000) //apply transition from above to below over XXXX milliseconds
        .attr("y", function (d) { return y(d.ninetyeight); }) //new attribute to be drawing off of
        .attr("height", function (d) { return height - y(d.ninetyeight); })
        //animate & update
        .transition()
        .duration(5000) //apply transition from above to below over XXXX milliseconds
        .attr("y", function (d) { return y(d.ninetynine); }) //new attribute to be drawing off of
        .attr("height", function (d) { return height - y(d.ninetynine); })
        //animate & update
        .transition()
        .duration(5000) //apply transition from above to below over XXXX milliseconds
        .attr("y", function (d) { return y(d.zero); }) //new attribute to be drawing off of
        .attr("height", function (d) { return height - y(d.zero); })
        //animate & update
        .transition()
        .duration(5000) //apply transition from above to below over XXXX milliseconds
        .attr("y", function (d) { return y(d.one); }) //new attribute to be drawing off of
        .attr("height", function (d) { return height - y(d.one); })
        //animate & update
        .transition()
        .duration(5000) //apply transition from above to below over XXXX milliseconds
        .attr("y", function (d) { return y(d.two); }) //new attribute to be drawing off of
        .attr("height", function (d) { return height - y(d.two); })
        //animate & update
        .transition()
        .duration(5000) //apply transition from above to below over XXXX milliseconds
        .attr("y", function (d) { return y(d.three); }) //new attribute to be drawing off of
        .attr("height", function (d) { return height - y(d.three); })
        //animate & update
        .transition()
        .duration(5000) //apply transition from above to below over XXXX milliseconds
        .attr("y", function (d) { return y(d.four); }) //new attribute to be drawing off of
        .attr("height", function (d) { return height - y(d.four); })
        //animate & update
        .transition()
        .duration(5000) //apply transition from above to below over XXXX milliseconds
        .attr("y", function (d) { return y(d.five); }) //new attribute to be drawing off of
        .attr("height", function (d) { return height - y(d.five); })
        //animate & update
        .transition()
        .duration(5000) //apply transition from above to below over XXXX milliseconds
        .attr("y", function (d) { return y(d.six); }) //new attribute to be drawing off of
        .attr("height", function (d) { return height - y(d.six); })
        //animate & update
        .transition()
        .duration(5000) //apply transition from above to below over XXXX milliseconds
        .attr("y", function (d) { return y(d.seven); }) //new attribute to be drawing off of
        .attr("height", function (d) { return height - y(d.seven); })
        //animate & update
        .transition()
        .duration(5000) //apply transition from above to below over XXXX milliseconds
        .attr("y", function (d) { return y(d.eight); }) //new attribute to be drawing off of
        .attr("height", function (d) { return height - y(d.eight); })
        //animate & update
        .transition()
        .duration(5000) //apply transition from above to below over XXXX milliseconds
        .attr("y", function (d) { return y(d.nine); }) //new attribute to be drawing off of
        .attr("height", function (d) { return height - y(d.nine); })
        //animate & update
        .transition()
        .duration(5000) //apply transition from above to below over XXXX milliseconds
        .attr("y", function (d) { return y(d.ten); }) //new attribute to be drawing off of
        .attr("height", function (d) { return height - y(d.ten); })
        //animate & update
        .transition()
        .duration(5000) //apply transition from above to below over XXXX milliseconds
        .attr("y", function (d) { return y(d.eleven); }) //new attribute to be drawing off of
        .attr("height", function (d) { return height - y(d.eleven); })
        //animate & update
        .transition()
        .duration(5000) //apply transition from above to below over XXXX milliseconds
        .attr("y", function (d) { return y(d.twelve); }) //new attribute to be drawing off of
        .attr("height", function (d) { return height - y(d.twelve); })
        //animate & update
        .transition()
        .duration(5000) //apply transition from above to below over XXXX milliseconds
        .attr("y", function (d) { return y(d.thirteen); }) //new attribute to be drawing off of
        .attr("height", function (d) { return height - y(d.thirteen); })
        //animate & update
        .transition()
        .duration(5000) //apply transition from above to below over XXXX milliseconds
        .attr("y", function (d) { return y(d.fourteen); }) //new attribute to be drawing off of
        .attr("height", function (d) { return height - y(d.fourteen); })
        //animate & update
        .transition()
        .duration(5000) //apply transition from above to below over XXXX milliseconds
        .attr("y", function (d) { return y(d.fifteen); }) //new attribute to be drawing off of
        .attr("height", function (d) { return height - y(d.fifteen); })
        //animate & update
        .transition()
        .duration(5000) //apply transition from above to below over XXXX milliseconds
        .attr("y", function (d) { return y(d.sixteen); }) //new attribute to be drawing off of
        .attr("height", function (d) { return height - y(d.sixteen); })
        //animate & update
        .transition()
        .duration(5000) //apply transition from above to below over XXXX milliseconds
        .attr("y", function (d) { return y(d.seventeen); }) //new attribute to be drawing off of
        .attr("height", function (d) { return height - y(d.seventeen); })
        //animate & update
        .transition()
        .duration(5000) //apply transition from above to below over XXXX milliseconds
        .attr("y", function (d) { return y(d.eighteen); }) //new attribute to be drawing off of
        .attr("height", function (d) { return height - y(d.eighteen); })
        //animate & update
        .transition()
        .duration(5000) //apply transition from above to below over XXXX milliseconds
        .attr("y", function (d) { return y(d.nineteen); }) //new attribute to be drawing off of
        .attr("height", function (d) { return height - y(d.nineteen); })
        //animate & update
        .transition()
        .duration(5000) //apply transition from above to below over XXXX milliseconds
        .attr("y", function (d) { return y(d.twenty); }) //new attribute to be drawing off of
        .attr("height", function (d) { return height - y(d.twenty); })
        //animate & update
        .transition()
        .duration(5000) //apply transition from above to below over XXXX milliseconds
        .attr("y", function (d) { return y(d.twentyone); }) //new attribute to be drawing off of
        .attr("height", function (d) { return height - y(d.twentyone); })



    //x axis, rotate text
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
        .attr("font-size", "16px")
        .attr("transform", function (d) {
            return "rotate(-55)"
        });

    //y axis, ticks for horizontal lines
    chart.append("g")
        .style("color", "white")
        .call(
            d3.axisLeft(y).ticks(10).tickSize(-width - 10)
    ).call((g) => g.select(".domain").remove()); //Optional: remove the axis endpoints

    //y axis text
    chart.append("g")
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("font-size", "20px")
        .attr("y", -50)
        .attr("x", -500)
        .attr("stroke", "black")
        .text("Thousands of Barrels of Oil");

    //adds geopolitical events
    worldInfo = chart.append("g")
        .append("text")
        .attr("font-size", "36px")
        .attr("y", 55)
        .attr("x", 50)
        .attr("stroke", "black")
        .text("")
        .transition()
        .duration(5000)
        .text("EU established, Russia withdraws from Poland")
        .transition()
        .duration(5000)
        .text("US oil imports begin a steady increase will last a decade")
        .transition()
        .duration(10000)
        .text("Iraq agrees to oil-for-supplies agreement: sell $2Bil of oil every 6 months")
        .transition()
        .duration(10000)
        .text("UN winds down Iraq investigation into WMDs")
        .transition()
        .duration(10000)
        .text("DotCom Bubble Crash")
        .transition()
        .duration(10000)
        .text("9/11 terrorist attack, US invades Afghanistan, Taliban reemerge")
        .transition()
        .duration(10000)
        .text("US invades Iraq, beginning 8 year long occupancy")
        .transition()
        .duration(10000)
        .text("US oil imports peak at 5 Billion barrels")
        .transition()
        .duration(15000)
        .text("Oil prices peak above $150 / barrel")
        .transition()
        .duration(10000)
        .text("Recession due to housing crisis, US Shale Oil Boom")
        .transition()
        .duration(10000)
        .text("Syrian civil war begins, which continues to this day")
        .transition()
        .duration(10000)
        .text("Crimea declares independence, annexed by Russia")
        .transition()
        .duration(5000)
        .text("US lifts ban on exporting crude oil, Yemen civil war begins")
        .transition()
        .duration(5000)
        .text("Venezuela election result challenged by many countries, deemed fraudulent")
        .transition()
        .duration(5000)
        .text("US imposes total economic embargo on Venezuela in August") //whats shown is the oil bought prior to the embargo
        .transition()
        .duration(5000)
        .text("UK withdraws from EU") //immediate drop to about 60% of last years
        .transition()
        .duration(5000)
        .text("Taliban take over Afghanistan government")


});