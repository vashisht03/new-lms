var btnToggle = document.querySelector("#header-toggle");
var sidebar = document.querySelector(".l-navbar");

// When the page loads, use localStorage to set the initial class

if(localStorage.getItem("expand") && localStorage.getItem("expand") == "true"){
  sidebar.classList.add("expand");
}

btnToggle.onclick = function() {
  sidebar.classList.toggle("expand");
  localStorage.setItem("expand", sidebar.classList.contains("expand"));
}
// sidebar
document.addEventListener("DOMContentLoaded", function(event) {
   
    const showNavbar = (toggleId, navId, bodyId, headerId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    bodypd = document.getElementById(bodyId),
    headerpd = document.getElementById(headerId)
    
    // Validate that all variables exist

    if(toggle && nav && bodypd && headerpd){
    toggle.addEventListener('click', ()=>{
    // show navbar
    nav.classList.toggle('show')
    // change icon
    toggle.classList.toggle('bx-x')
    // add padding to body
    bodypd.classList.toggle('body-pd')
    // add padding to header
    headerpd.classList.toggle('body-pd')
    })
    }
    }
   
    showNavbar('header-toggle','nav-bar','body-pd','header')
    
    /*===== LINK ACTIVE =====*/
    const linkColor = document.querySelectorAll('.nav_link')
    
    function colorLink(){
    if(linkColor){
    linkColor.forEach(l=> l.classList.remove('active'))
    this.classList.add('active')
    }
    }
    linkColor.forEach(l=> l.addEventListener('click', colorLink))
    
     // Your code to run since DOM is loaded and ready
    });

    // graph
    window.onload = function () {

        var chart = new CanvasJS.Chart("chartContainer", {
            animationEnabled: true,
            axisX:{
                valueFormatString: "MMM",
                crosshair: {
                    enabled: true,
                    snapToDataPoint: true
                }
            },
            axisY: {
                valueFormatString: "##0.00",
                crosshair: {
                    enabled: true,
                    snapToDataPoint: true,
                    labelFormatter: function(e) {
                        return "" + CanvasJS.formatNumber(e.value, "##0.00");
                    }
                }
            },
            data: [{
                type: "area",
                xValueFormatString: "DD MMM",
                yValueFormatString: "##0.00",
                dataPoints: [
                    { x: new Date(2016, 07, 01), y: 76.727997 },
                    { x: new Date(2016, 07, 02), y: 75.459999 },
                    { x: new Date(2016, 07, 03), y: 76.011002 },
                    { x: new Date(2016, 07, 04), y: 75.751999 },
                    { x: new Date(2016, 07, 05), y: 77.500000 },
                    { x: new Date(2016, 07, 08), y: 77.436996 },
                    { x: new Date(2016, 07, 09), y: 79.650002 },
                    { x: new Date(2016, 07, 10), y: 79.750999 },
                    { x: new Date(2016, 07, 11), y: 80.169998 },
                    { x: new Date(2016, 07, 12), y: 79.570000 },
                    { x: new Date(2016, 07, 15), y: 80.699997 },
                    { x: new Date(2016, 07, 16), y: 79.686996 },
                    { x: new Date(2016, 07, 17), y: 78.996002 },
                    { x: new Date(2016, 07, 18), y: 78.899002 },
                    { x: new Date(2016, 07, 19), y: 77.127998 },
                    { x: new Date(2016, 07, 22), y: 76.759003 },
                    { x: new Date(2016, 07, 23), y: 77.480003 },
                    { x: new Date(2016, 07, 24), y: 77.623001 },
                    { x: new Date(2016, 07, 25), y: 76.408997 },
                    { x: new Date(2016, 07, 26), y: 76.041000 },
                    { x: new Date(2016, 07, 29), y: 76.778999 },
                    { x: new Date(2016, 07, 30), y: 78.654999 },
                    { x: new Date(2016, 07, 31), y: 77.667000 }
                ]
            }]
        });
        chart.render();
        
        }