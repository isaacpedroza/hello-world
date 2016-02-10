 (function($){
  $(function(){

	  	var ups = function(){     
		//var temo=Dato1;
	    
	    var temo = Gdd;
   		item = temo[0].length-1;
		//var horan = temo[1];
	    //var matriz=Dgg;

		var timen = [];

		for (var i = 0; i < temo.length; i++){
		 timen[i] = new Date(parseInt(temo[i][item].slice(0,4)),
			parseInt(temo[i][item].slice(5,7)),
			parseInt(temo[i][item].slice(8,10)),
			parseInt(temo[i][item].slice(11,13)),
			parseInt(temo[i][item].slice(14,16)),
			parseInt(temo[i][item].slice(17,19)));
	    }

		//------------------------------------------------------

		dataPoints1 =[];
		dataP = [];
		h = [12,24,50,60];
		quiero = 7;

		for(var j =0; j< temo[0].length-3 ; j++){
			dataPoints1[j]=[];
	 		for(var i =0; i<quiero ; i++){
	        	//dataP[i]= {x: timen[i+1].getTime() , y: parseInt(Tempo1[i+1])};
				dataPoints1[j][i]= {x: timen[quiero-i].getTime() , y: parseFloat(temo[quiero-i][j+1])};

			}                   

		}

		//rota= [{x: timen[3].getTime() , y: parseInt(Tempo1[3])},{x: timen[2].getTime() , y: parseInt(Tempo1[2])},{x: timen[1].getTime() , y: parseInt(Tempo1[1])}];
		/*dataiu=dataP;

		dataPoints1=  [ dataP,[{x: timen[3].getTime() , y: parseInt(Tempo1[3])},{x: timen[2].getTime() , y: parseInt(Tempo1[2])},{x: timen[1].getTime() , y: parseInt(Tempo1[1])}] ,dataiu];
		*/
		/*dataPoints1 = [   [{x: timen[3].getTime() , y: parseInt(Tempo1[3])},{x: timen[2].getTime() , y: parseInt(Tempo1[2])},{x: timen[1].getTime() , y: parseInt(Tempo1[1])}]
			, [{x: timen[3].getTime() , y: parseInt(Humo1[3])},{x: timen[2].getTime() , y: parseInt(Humo1[2])},{x: timen[1].getTime() , y: parseInt(Humo1[1])}],
				 [{x: timen[3].getTime() , y: parseInt(Gaso1[3])},{x: timen[2].getTime() , y: parseInt(Gaso1[2])},{x: timen[1].getTime() , y: parseInt(Gaso1[1])}]  

				 ];
		*/

		//----------------------------------------------------
		//[{x: timen[3].getTime() , y: parseInt(Humo1[3])},{x: timen[2].getTime() , y: parseInt(Humo1[2])},{x: timen[1].getTime() , y: parseInt(Humo1[1])}]
		//	 dataPoints1 = [{x: timen[3].getTime() , y: parseInt(Humo1[3])},{x: timen[2].getTime() , y: parseInt(Humo1[2])},{x: timen[1].getTime() , y: parseInt(Humo1[1])}];
		//	 dataPoints2 = [{x: timen[3].getTime() , y: parseInt(Tempo1[3])},{x: timen[2].getTime() , y: parseInt(Tempo1[2])},{x: timen[1].getTime() , y: parseInt(Tempo1[1])}];
		//   dataPoints3 = [{x: timen[3].getTime() , y: parseInt(Gaso1[3])},{x: timen[2].getTime() , y: parseInt(Gaso1[2])},{x: timen[1].getTime() , y: parseInt(Gaso1[1])}];

		}


		var grafica = function () {
			// dataPoints
			//	var dataPoints1 
			//	var dataPoints2 
			//	var dataPoints3 
		  
		//setInterval(function(){ups()}, 1000);	
		// var namev=["Temperatura","Humedad","Concentración de Gas","nueva"];

		var namev = namess;

	  	g = { 
			// dataSeries1
			type: "line",
			xValueType: "dateTime",
			showInLegend: true,
			//----
			name: namev[1],
			//-----					
			//visible: state_hum,
			dataPoints: dataPoints1[0]
		};
	    
		var data = [g];
	    //var data = g1;   
	   
	    for (var i = 1; i < dataPoints1.length; i++){
	      	var data = data.concat(  {
	 			type: "line",
				xValueType: "dateTime",
				showInLegend: true,
				//---
				name: namev[i+1],
				//---
				//visible: state_gas,
				dataPoints: dataPoints1[i]  
	        });
		}

		var chart = new CanvasJS.Chart("chartContainer",{

			zoomEnabled: true,
			title: {
				text: "Real time monitoring",
				fontWeight: "lighter",		
			},
			toolTip: {
				shared: false
				
			},
			legend: {
				verticalAlign: "top",
				horizontalAlign: "center",
				fontWeight: "lighter",
				fontFamily: "calibri",
				fontColor: "Black"
			},
			axisX: {
				title: "Time",
				titleFontWeight: "lighter",
			},
			axisY:{
				includeZero: false,
				title: "Universal Axis",
				titleFontWeight: "lighter",
			}, 


		data,

	    legend:{
	      	fontSize: 18,
	        cursor:"pointer",
	        itemclick : function(e) {
	          if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
	            e.dataSeries.visible = false;
	          }
	          else {
		         e.dataSeries.visible = true;
		    /*     if (e.dataSeries.name == "Humedad"){
		         	chart.options.data[0].visible = false;
		         	chart.options.data[2].visible = false }; 
		         if (e.dataSeries.name == "Temperatura"){
		         	chart.options.data[1].visible = false;
		         	chart.options.data[2].visible = false }; 
		         if (e.dataSeries.name == "Concentración de Gas"){
		         	chart.options.data[0].visible = false;
		         	chart.options.data[1].visible = false };  */               
	          }
	          chart.render();
	        }
	      }
		});

		var updateInterval = 1000; 
		
		//	var yValue1 = 0;
		//	var yValue2 = 0;
		//	var yValue3 = 0;
		//------------------------------------------

		var updateChart = function () {
				//var hora = "2015-08-13 08:30:45";
				//updatechart();
				var vectoe = vecto;

					//var hora = Dat;
					var hora = vectoe[item];
					var time = new Date(parseInt(hora.slice(0,4)),
						parseInt(hora.slice(5,7)),
						parseInt(hora.slice(8,10)),
						parseInt(hora.slice(11,13)),
						parseInt(hora.slice(14,16)),
						parseInt(hora.slice(17,19)));
				//yValue1 = parseFloat(Hum);
				//yValue2 = parseFloat(Temp);
					//yValue3 = parseFloat(Gas);

				//yValue1 = parseFloat(vectoe[2]);
				//yValue2 = parseFloat(vectoe[1]);
				//yValue3 = parseFloat(vectoe[3]);

				var yValue = new Array(vectoe.length);

	            for (var i = 0; i < vectoe.length; i++){
	            		yValue[i] = parseFloat(vectoe[i]);

	            }

				// pushing the new values
			/*		dataPoints1[0].push({
						x: time.getTime(),
						y: yValue[2]
					});
					dataPoints1[1].push({
						x: time.getTime(),
						y: yValue[1]
					});
					dataPoints1[2].push({
						x: time.getTime(),
						y: yValue[3]
					}); */

			    for (var i = 0; i < dataPoints1.length; i++){
					dataPoints1[i].push({
						x: time.getTime(),
						y: yValue[i+1]
				 	});

			    }
			/*			dataPoints1[0].push({
						x: time.getTime(),
						y: yValue[1]
					});
					dataPoints1[1].push({
						x: time.getTime(),
						y: yValue[2]
					});
					dataPoints1[2].push({
						x: time.getTime(),
						y: yValue[3]
					});
			*/

				// updating legend text with  updated with y Value 
			/*	chart.options.data[0].legendText = " Temperature: " + yValue[1] + "%";
				chart.options.data[1].legendText = " Humidity: " + yValue[2] + "°C";
				chart.options.data[2].legendText = " Gas concentration: " + yValue[3] + "PPM"; */
			
				chart.render();
		 			
		 		};
		 		 
			setInterval(function(){updateChart()}, updateInterval);
	}

	ups(); 	
 	grafica();

   }); // end of document ready
})(jQuery); // end of jQuery name space
