// date picker
$( function() {
  $( "#datepicker" ).datepicker();
} );
function toggle(source) {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i] != source)
            checkboxes[i].checked = source.checked;
    }
}

// maultioption
  $(document).ready(function() {
    $("#delete-btn").click(function(){
        $("#buttonAlert").addClass('show') 
        setTimeout(function() { $("#buttonAlert").fadeOut(1500); }, 5000)//Shows Bootstrap alert
  })
$('.js-example-basic-multiple').select2();

});
// var btnToggle = document.querySelector("#header-toggle");
// var sidebar = document.querySelector(".l-navbar");

// // When the page loads, use localStorage to set the initial class

// if(localStorage.getItem("expand") && localStorage.getItem("expand") == "true"){
//   sidebar.classList.add("expand");
// }

// btnToggle.onclick = function() {
//   sidebar.classList.toggle("expand");
//   localStorage.setItem("expand", sidebar.classList.contains("expand"));
// }
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

        // filter options
        $(document).ready(function(){
            $("#dropdownfilter").click(function(){
              $(".filter_options").toggle();
            });
          });

          
          $(function() {

            var start = moment().subtract(29, 'days');
            var end = moment();
            
            function cb(start, end) {
                $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
            }
            
            $('#reportrange').daterangepicker({
                startDate: start,
                endDate: end,
                ranges: {
                   'Today': [moment(), moment()],
                   'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                   'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                   'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                   'This Month': [moment().startOf('month'), moment().endOf('month')],
                   'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
                }
            }, cb);
            
            cb(start, end);
            
            });

            


            jQuery(function(){
                var start_date = moment(jQuery('#date_timepicker_start').val(), 'DD-MM-YYYY HH:mm').format("DD-MM-YYYY");
                var start_time = moment(jQuery('#date_timepicker_start').val(), 'DD-MM-YYYY HH:mm').format("HH:mm");
                
                var end_date = moment(jQuery('#date_timepicker_end').val(), 'DD-MM-YYYY HH:mm').format("DD-MM-YYYY");
                var end_time = moment(jQuery('#date_timepicker_end').val(), 'DD-MM-YYYY HH:mm').format("HH:mm");
                //moment('<local date value>','<local date format>').format('<expected convert format>')
                 jQuery('#date_timepicker_start').datetimepicker({
                  format:'d-m-Y h:i',
                  onShow:function( ct ){
                   this.setOptions({
                    maxDate:end_date?end_date:false,
                    maxTime:end_time?end_time:false
                   })
                  },
                  timepicker:true
                 });
                 jQuery('#date_timepicker_end').datetimepicker({
                  format:'d-m-Y h:i',
                  onShow:function( ct ){
                   this.setOptions({
                    minDate:start_date?start_date:false,
                    minTime:start_time?start_time:false
                   })
                  },
                  timepicker:true
                 });
                });
                
                
                function getFormatDate(datetimestring, datetimeformat, sp){
                  if(sp===''){
                    sp = '-';
                  }
                  //var sDate = new Date(Date.parse("03/20/2012 23:20","MM/dd/yyyy HH:mm"));
                  dt = new Date(Date.parse(datetimestring, datetimeformat));
                  date = dt.getDate();
                  date = date < 10 ? "0"+date : date;
                  mon = dt.getMonth();
                  mon = mon < 10 ? "0"+mon : mon;
                  year = dt.getFullYear();
                  return date.toString()+sp+mon.toString()+sp+year.toString();
                }
                function getFormatTime(datetimestring, datetimeformat,sp){
                  if(sp===''){
                    sp = ':';
                  }
                  //var sDate = new Date(Date.parse("03/20/2012 23:20","MM/dd/yyyy HH:mm"));
                  dt = new Date(Date.parse(datetimestring, datetimeformat));
                  //	var d2 = dt.setDate(dt.getDate() + 1);
                  //	var curr_date = dt.getDate();
                  //	var curr_month = dt.getMonth()+1;
                  //	var curr_year = dt.getFullYear();
                  hour = dt.getHours();
                  hour = hour < 10 ? "0"+hour : hour;
                  min = dt.getMinutes();
                  min = min < 10 ? "0"+min : min;
                  return hour.toString()+sp+min.toString();   
                }
                


                var zoom = 1;
		
                $('.zoom').on('click', function(){
                  zoom += 0.1;
                  $('.target').css('transform', 'scale(' + zoom + ')');
                });
                $('.zoom-init').on('click', function(){
                  zoom = 1;
                  $('.target').css('transform', 'scale(' + zoom + ')');
                });
                $('.zoom-out').on('click', function(){
                  zoom -= 0.1;
                  $('.target').css('transform', 'scale(' + zoom + ')');
                });


// drag drop
const dropzoneSource = document.querySelector(".source");
const dropzone = document.querySelector(".target");
const dropzones = [...document.querySelectorAll(".dropzone")];
const draggables = [...document.querySelectorAll(".draggable")];

function getDragAfterElement(container, y) {
  const draggableElements = [
    ...container.querySelectorAll(".draggable:not(.is-dragging)")
  ];

  return draggableElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;

      if (offset < 0 && offset > closest.offset) {
        return {
          offset,
          element: child
        };
      } else {
        return closest;
      }
    },
    { offset: Number.NEGATIVE_INFINITY }
  ).element;
}

draggables.forEach((draggable) => {
  draggable.addEventListener("dragstart", (e) => {
    draggable.classList.add("is-dragging");
  });

  draggable.addEventListener("dragend", (e) => {
    draggable.classList.remove("is-dragging");
  });
});

dropzones.forEach((zone) => {
  zone.addEventListener("dragover", (e) => {
    e.preventDefault();
    const afterElement = getDragAfterElement(zone, e.clientY);
    const draggable = document.querySelector(".is-dragging");
    if (afterElement === null) {
      zone.appendChild(draggable);
    } else {
      zone.insertBefore(draggable, afterElement);
    }
  });
});



                