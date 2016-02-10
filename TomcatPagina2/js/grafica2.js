 (function($){
  $(function(){

	var grafica2 = function () {

		
		var dataPoints1 = [];
		var dataPoints2 = [];
		var dataPoints3 = [];
        
		var chart = new CanvasJS.Chart("chartContainer2",{
			zoomEnabled: true,
			title: {
				text: "Temperature, Humidity and Gas Concentration",
				fontWeight: "lighter",			
			},
			toolTip: {
				shared: true
				
			},
			legend: {
				verticalAlign: "top",
				horizontalAlign: "center",
				fontWeight: "bold",
				fontFamily: "calibri",
				fontColor: "Black"
			},
			axisX: {
				title: "Tiempo",
				titleFontWeight: "lighter",
			},
			axisY:{
				includeZero: false,
				title: "Eje Universal",
				titleFontWeight: "lighter",
			}, 
			data: [{ 
				// dataSeries1
				type: "line",
				xValueType: "dateTime",
				showInLegend: true,
				name: "Humedad",
				dataPoints: dataPoints1
			},
			{				
				// dataSeries2
				type: "line",
				xValueType: "dateTime",
				showInLegend: true,
				name: "Temperatura" ,
				dataPoints: dataPoints2
			},
			{
				// dataSeries3
				type: "line",
				xValueType: "dateTime",
				showInLegend: true,
				name: "Concentración de Gas",
				dataPoints: dataPoints3
			}],
          legend:{
          	fontSize: 18,
            cursor:"pointer",
            itemclick : function(e) {
              if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                e.dataSeries.visible = false;
              }
              else {
                e.dataSeries.visible = true;
              }
              chart.render();
            }
          }
		});
        
      
		//var updateInterval = 8000; 
		
		var updateChart = function () {

		//var hora = "Wed Dec 2 01:38:54 2015";
        
        /*var yVal1 = Tempo;

		var yVal2 = Humo;

		var yVal3 = Gaso;

		var datet = Dato;*/

		var yVal1 = ["25","25","25","25","25"];

		var yVal2 = ["85","85","85","85","85"];

		var yVal3 = ["8.5","8.5","8.5","8.5","8.5"];

		var datet = ["2015-10-10 14:53:00","2015-10-11 14:53:00","2015-10-12 14:53:00","2015-10-13 14:53:00","2015-10-14 14:53:00"];

        for (var i = 0; i < yVal1.length; i++){

				var hora = datet[i];

        		var time = new Date(parseInt(hora.slice(0,4)),parseInt(hora.slice(5,7)) , 
        			parseInt(hora.slice(8,10)), 
        			parseInt(hora.slice(11,13)), 
        			parseInt(hora.slice(14,16)), 
        			parseInt(hora.slice(17,19)));
 
                yValue1 = parseFloat(yVal1[i]);
               
				yValue2 = parseFloat(yVal2[i]);

 				yValue3 = parseFloat(yVal3[i]);

                
				// pushing the new values
 				dataPoints1.push({
 					x: time.getTime(),
 					y: yValue1
 				});
 				dataPoints2.push({
 					x: time.getTime(),
 					y: yValue2
 				});
 				dataPoints3.push({
 					x: time.getTime(),
 					y: yValue3
 				});
 
 			// updating legend text with  updated with y Value 
 			chart.options.data[0].legendText = " Humidity: " + yValue1 + "%";
 			chart.options.data[1].legendText = " Temperature: " + yValue2 + "°C";
 			chart.options.data[2].legendText = " Gas concentration: " + yValue3 + "PPM";
			
			}
 			chart.render();
 		
 		};
 		 
 		// update chart after specified interval 
 		updateChart();
 	}

 	//grafica2();

    }); // end of document ready
})(jQuery); // end of jQuery name space
