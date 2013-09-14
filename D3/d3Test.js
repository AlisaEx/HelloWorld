// var dataset = [],
//     i = 0;
    
// for(i=0; i<5; i++){
//     dataset.push(Math.round(Math.random()*100));
// }        

// var sampleSVG = d3.select("#viz")
//     .append("svg")
//     .attr("width", 400)
//     .attr("height", 75);    
    
// sampleSVG.selectAll("circle")
//     .data(dataset)
//     .enter().append("circle")
//     .style("stroke", "gray")
//     .style("fill", "white")
//     .attr("height", 40)
//     .attr("width", 75)
//     .attr("x", function(d, i){return i*80})
//     .attr("y", 20
$(document).ready(makeRequest);

function makeRequest(){
    $.ajax({
        url: "http://localhost:8001",
        success: function(res){
            $("#result").html(res);
        },
        error: function(err){
            console.log(err);
        }
    })
};


function getNames(res){
    for (var i=0; i<res.length; i++){
        
    }
}