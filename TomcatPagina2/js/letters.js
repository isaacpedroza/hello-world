(function($){
  $(function(){

      /*localStorage.setItem("centinela","false");
      function refrescar ()
      {
        if (localStorage.getItem("centinela") == "false")
        {
          location.reload();
          localStorage.setItem("centinela","true");
        }                
      }

      refrescar();*/
      //$('#googleMap').show();
    $('#primo2').leanModal();
    //initialize();

	  	$('.parallax').parallax();
	  	// the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
	    //$('.modal-trigger').leanModal();
        num_s = localStorage.getItem("nsens");
      // num_s=3;
	    username = localStorage.getItem("username"); // nuevo----------------

		for(i=0; i < num_s; i++){
			$('#prim'+i+'2').leanModal();
			$('#prim'+i+'1').leanModal();	
		}

	    //$("fecho").load("datetime.php");
		
	    var centinela = false;
	    var fech = "0000-00-00";

	    var Temp = "25.3"; var Hum = "70.5"; var Gas = "9.8"; var Dat = "2015-10-14 14:53:00"; 

	    var refresh = setInterval(function(){

	    	//$('#result').load('phpalone4.php'); 

		  	$('.temp1').html(Temp+"°C");
		  	$('.temp2').html(Temp+"°C");

		  	$('.hum1').html(Hum+"%");
		  	$('.hum2').html(Hum+"%");

		  	$('.gas1').html(Gas+"PPM");
		  	$('.gas2').html(Gas+"PPM");

		  	if (centinela == true){
		  		fech = $('#input_startdate').val().toString();
		  		centinela = false;
		  	}

		  	$.ajax({
                      method: 'GET',
                      async: false,
                      contentType: 'application/json',
                      data: {"username": username},  // nuevo -----------------
                      //jsonpCallback: 'jsoncallback',
                      jsonp: 'callback',
                      dataType: 'jsonp',
                      url:'http://190.143.30.11:8888/ApacheApp/phpapp.php',
                      //xhrFields: {withCredentials: true},
                      crossDomain: true,

                      timeout: 3000,
                                           
                      success: function(data){
			                    localStorage["tages"] = JSON.stringify(data.etiquetas);
			                    var tags = JSON.parse(localStorage["tages"]);
			                     values = JSON.parse(localStorage["valueses"]);
			                      //alert(tags);

								localStorage["tages"] = JSON.stringify(data.etiquetas);
								var tags = JSON.parse(localStorage["tages"]);
								num_s = tags.length - 4; 
								s = [];

								j = 0;
								for(l=1; l<=num_s; l++){
									s[j] = tags[l];
									j = j + 1;
								}

                                j = 0;
			                    for(l=1; l<=num_s; l++){
			                      $('.'+s[j]+'').html(data.valores[l]);
			                      j = j + 1;
			                    }
                                //document.write(dato);
                               	//.("#status").html(JSON.stringify(status));
                                },

                      error: function(textStatus,data){
                        alert("Error. Response Status: " + JSON.stringify(textStatus) + JSON.stringify(data));
                      },
            });
			
			// Ajax para estados
			$.ajax({
                      method: 'GET',
                      async: false,
                      contentType: 'application/json',
                      //data: {"username": username},  // nuevo -----------------
                      //jsonpCallback: 'jsoncallback',
                      jsonp: 'callback',
                      dataType: 'jsonp',
                      url:'http://190.143.30.11:8888/ApacheApp/estados.php',
                      //xhrFields: {withCredentials: true},
                      crossDomain: true,

                      timeout: 3000,
                                           
                      success: function(data){
                      				//var response = data.respuesta_estado;
                      				$("#estados").html("Estado: "+data.respuesta_estado);
                                },

                      error: function(textStatus,data){
                        alert("Error. Response Status: " + JSON.stringify(textStatus) + JSON.stringify(data));
                      },
            });



		  
		 }, 2000);


	  	$('.nodo1').mouseenter(function(){
	  		$('.fixed-action-btn.1').openFAB();
	        $('.temperatura1').fadeIn(300);
	        $('.humedad1').fadeIn(300);
	        $('.gases1').fadeIn(300);
	        });
	    $('.nodo1').mouseleave(function(){
	    	$('.fixed-action-btn.1').closeFAB();
	    	$('.temperatura1').fadeOut(300);
	        $('.humedad1').fadeOut(300);
	        $('.gases1').fadeOut(300);  
	        });

	    $('.nodo2').mouseenter(function(){
	  		$('.fixed-action-btn.2').openFAB();
	        $('.temperatura2').fadeIn(300);
	        $('.humedad2').fadeIn(300);
	        $('.gases2').fadeIn(300);
	        });
	    $('.nodo2').mouseleave(function(){
	    	$('.fixed-action-btn.2').closeFAB();
	    	$('.temperatura2').fadeOut(300);
	        $('.humedad2').fadeOut(300);
	        $('.gases2').fadeOut(300);  
	        });

	    $('.temperatura1').hide();
	    $('.humedad1').hide();
	    $('.gases1').hide();
	    $('.temperatura2').hide();
	    $('.humedad2').hide();
	    $('.gases2').hide();

	    $('.temp-btn.1').mouseenter(function(){
	        $('.temperatura1').fadeIn(300);
	        });
	    $('.temp-btn.1').mouseleave(function(){
	    	$('.temperatura1').fadeOut(300);    
	        });

	    $('.hum-btn.1').mouseenter(function(){
	        $('.humedad1').fadeIn(300);
	        });
	    $('.hum-btn.1').mouseleave(function(){
	    	$('.humedad1').fadeOut(300);    
	        });

	    $('.gas-btn.1').mouseenter(function(){
	        $('.gases1').fadeIn(300);
	        });
	    $('.gas-btn.1').mouseleave(function(){
	    	$('.gases1').fadeOut(300);    
	        });


	    $('.temp-btn.2').mouseenter(function(){
	        $('.temperatura2').fadeIn(300);
	        });
	    $('.temp-btn.2').mouseleave(function(){
	    	$('.temperatura2').fadeOut(300);    
	        });

	    $('.hum-btn.2').mouseenter(function(){
	        $('.humedad2').fadeIn(300);
	        });
	    $('.hum-btn.2').mouseleave(function(){
	    	$('.humedad2').fadeOut(300);    
	        });

	    $('.gas-btn.2').mouseenter(function(){
	        $('.gases2').fadeIn(300);
	        });
	    $('.gas-btn.2').mouseleave(function(){
	    	$('.gases2').fadeOut(300);    
	        });

	    $('.section.1').hide();
	    $('.temp-btn.1').click(function(){
	        $('.section.1').fadeToggle(300);
	        $('.card-panel.red').show(300);
	        $('.card-panel.blue').hide();
	        $('.card-panel.purple').hide();
	        });
	    $('.hum-btn.1').click(function(){
	        $('.section.1').fadeToggle(300);
	        $('.card-panel.blue').show(300);
	        $('.card-panel.red').hide();
	        $('.card-panel.purple').hide();
	        });
	    $('.gas-btn.1').click(function(){
	        $('.section.1').fadeToggle(300);
	        $('.card-panel.purple').show(300);
	        $('.card-panel.red').hide();
	        $('.card-panel.blue').hide();
	        
	        });


	    /*var con = 0; 

	    var prende = function(){

			  var myCenter = new google.maps.LatLng(10.9,-70.5);
			  var marker;
			  var map;

			  function initialize(){

			    var mapProp = {
			    center:myCenter,
			    zoom:20,
			    mapTypeId:google.maps.MapTypeId.ROADMAP
			    };

			    map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

			    setInterval(function(){SetMarker()}, 2000);

			  };


			  function SetMarker(){

			    if (marker != null) {
			      marker.setMap(null);
			    }

			    var myCentr = new google.maps.LatLng(10.9,-70.5);
			    
			    marker = new google.maps.Marker({
			      position:myCentr,
			    });

			    marker.setMap(map);
			  
			  };

			    initialize();
		}

	    $('.mapa').click(function(){

			$('#googleMap').show(1000);
			prende();
			initialize();
	    }); */


		$('#input_startdate').pickadate({
			selectYears: 15,
			selectMonths: true,
	    	format: 'yyyy-mm-dd', max: new Date()
		});

	    $('#input_startdate').click(function(){
	    	centinela = true;
	    });

	   	$('#input_enddate').pickadate({
	     	selectYears: 15,
	     	selectMonths: true,
	    	format: 'yyyy-mm-dd', 
	    	min: new Date(2015,8,12),
	    	max: new Date()
	    	//min: new Date(parseInt(fech.slice(0,4)),parseInt(fech.slice(5,7)),parseInt(fech.slice(8,10))),
	    });

	    $('#input_starttime').clockpicker({
	      twelvehour: false
	    });
	    $('#input_endtime').clockpicker({
	      twelvehour: false
	    });


	   	$('.section.2').hide();
	   	$('.section.3').hide();

		/*
		$('.hist').click(function(){
			
			$('.section.2').fadeToggle(300);
			$('.section.3').fadeToggle(300);

			var f1 = $("#input_startdate").val();
			var f2 = $("#input_enddate").val();
			var f3 = $("#input_starttime").val();
			var f4 = $("#input_endtime").val();

			var datos_fecha = {startdate:f1,enddate:f2,starttime:f3,endtime:f4};

			$.ajax({
	            method: 'GET',
	            async: false,
	            contentType: 'application/json',
	            jsonp: "callback",
	            url: 'http://190.143.30.11:8888/alone5app.php',
	            data: datos_fecha,
	            dataType: 'jsonp',
	            crossDomain: true,
	            success: function(datos) {
	                   //window.location.href = "http://uninorte.edu.co";
	                   var Tempo = datos.Tempo;
	                   var Humo = datos.Humo;
	                   var Gaso = datos.Gaso;
	                   var Dato = datos.Dato;
	                   grafica2(Tempo,Humo,Gaso,Dato);
	            },
	            error: function(textStatus)
	            {
	                alert("ERROR EN ENVIO! " + JSON.stringify(textStatus));
	            }
	        });



			//var strURL = 'alone5.php';
			//$('#MyDiv2').load(strURL, { valor1: f1, valor2: f2, valor3: f3, valor4: f4});

			var grafica2 = function (Tempo,Humo,Gaso,Dato) {

				
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
				
				var updateChart = function (Tempo,Humo,Gaso,Dato) {

				//var hora = "Wed Dec 2 01:38:54 2015";
		        //var Tempo = "30.1"; var Humo = "50" ; var Gaso = "9.5"; var Dato = "2015-10-14 14:53:00";

		        var yVal1 = Tempo;

				var yVal2 = Humo;

				var yVal3 = Gaso;

				var datet = Dato;

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
		 		updateChart(Tempo,Humo,Gaso,Dato);
	 		}
		});*/
		
		

		$('#torial').submit(function(evento) {
	    
		    $('.section.2').fadeToggle(300);
		    $('.section.3').fadeToggle(300);

			f1 = $("#input_startdate").val();
			f2 = $("#input_enddate").val();
			f3 = $("#input_starttime").val();
			f4 = $("#input_endtime").val();

			evento.preventDefault();
		    var datos_formulario = $(this).serialize();
		    $.ajax({
					method: 'POST',
					async: false,
					contentType: 'application/json',
					jsonp: "callback",
					url: 'http://190.143.30.11:8888/ApacheApp/alone7.php',
					data: {"valor1": f1,"valor2": f2, "valor3": f3, "valor4": f4, "username": username}, //nuevo ----------------
					// type: 'POST',
					// dataType: 'json',
					dataType: 'jsonp',
					crossDomain: true,
				success: function(datos) {
					//$('#respuesta').text(datos.respuesta).fadeIn('slow');
					//$('#respuesta').text("EXITO!. Se envío: " + JSON.stringify(datos.respuesta));
					Gdd1 = datos.hologram;
					namess1 = datos.nomes;

					var num_max = datos.nummax;
					var num_min = datos.nummin;
					var max = datos.maximo;
					var min = datos.minimo;
					var prom = datos.promedio;

                    fecha_min = [];
                    dato_min = [];
                    fecha_max = [];
                    dato_max = [];
                    k = 0;
                    l = 0;
                    for (var i=0; i < len; i++){
                          fecha_min[i] = [];
                          
                          for(var j=0; j < num_min[i]; j++){
                            fin = min[k][1];
                            //  dato_min=fin.concat(dato_min);
                            fecha_min[i] = fecha_min[i].concat(fin);
                            dato_min[i] = min[k][0];
                            k = k + 1;
                          }
                    }
                    for (var i=0; i < len; i++){
                          fecha_max[i] = [];

                          for(var j=0; j < num_max[i]; j++){
                            fin2 = max[l][1];
                            //  dato_min=fin.concat(dato_min);
                            fecha_max[i] = fecha_max[i].concat(fin2);
                            dato_max[i] = max[l][0];
                            l = l + 1;
                          }
                    }

                    //alert(fecha_max);
					
                    for(j=0; j < num_s; j++){
						$('.max'+j+'').html(dato_max[j]);
						$('.min'+j+'').html(dato_min[j]);
						$('.prom'+j+'').html(prom[j].slice(0,5));
					}

					for(j=0; j < num_s; j++){
						$('#modal_body'+j+'1').html('');
						$('#modal_body'+j+'2').html('');
					}
					
					for(j=0; j < num_s; j++){
			            for (var l=0; l < num_min[j]; l++){
			              	$('#modal_body'+j+'1').prepend('<span class="fech1'+j+''+l+'" style="font-size: 40px">'+fecha_min[j][l]+'</span><br />');
			            }
				        for (var l=0; l < num_max[j]; l++){
				            $('#modal_body'+j+'2').prepend('<span class="fech2'+j+''+l+'" style="font-size: 40px">'+fecha_max[j][l]+'</span><br />');
				        }	
                    }

                    ups1(Gdd1);
					grafica2(namess1);
					//document.getElementById("demo").innerHTML = Gdd1[1];
				}  
		    });

		   
			//--------------------------------------

			//var strURL = 'alone5.php';
			//$('#MyDiv2').load(strURL, { valor1: f1, valor2: f2, valor3: f3, valor4: f4});
			//document.getElementById("demo").innerHTML = namess1;
			//document.getElementById("demo").innerHTML = namepru;

			var ups1= function(Gdd1){     
				//var temo=Dato1;
		        
				var temo = Gdd1;
				item = temo[0].length-1;

				//var horan = temo[1];
			    //var matriz=Dgg;
		          
				var timen=[];

				for (var i = 0; i < temo.length; i++){
				 	timen[i] = new Date(parseInt(temo[i][item].slice(0,4)),
					parseInt(temo[i][item].slice(5,7)),
					parseInt(temo[i][item].slice(8,10)),
					parseInt(temo[i][item].slice(11,13)),
					parseInt(temo[i][item].slice(14,16)),
					parseInt(temo[i][item].slice(17,19)));
		        }

				
				dataPoints2 = [];
				var dataP = [];

				var quiero = temo.length-1;
				for(var j =0; j< temo[0].length-4 ; j++){
					dataPoints2[j]=[];
				 		for(var i =0; i<quiero ; i++){
				        	//	dataP[i]= {x: timen[i+1].getTime() , y: parseInt(Tempo1[i+1])};
				        	dataPoints2[j][i]= {x: timen[quiero-i].getTime() , y: parseFloat(temo[quiero-i][j+1])};
						}
				}
			}

			var grafica2 = function (namess1) {
				var namev = namess1;

		  		var g = { 
					// dataSeries1
					type: "line",
					xValueType: "dateTime",
					showInLegend: true,
					//----
					name: namev[1],
					//-----					
					//visible: state_hum,
					dataPoints: dataPoints2[0]
							
				};
		    
		  		var data = [g];
		      	//  var    data= g1;   
		      
		   
		      	for (var i = 1; i < dataPoints2.length; i++){
		      		var data = data.concat({
	         			type: "line",
						xValueType: "dateTime",
						showInLegend: true,
						name: namev[i+1],
						//visible: state_gas,
						dataPoints: dataPoints2[i]
		        	});
				}


				var chart = new CanvasJS.Chart("chartContainer2",{

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
						title: "Tiempo",
						titleFontWeight: "lighter",
					},
					axisY:{
						includeZero: false,
						title: "Eje Universal",
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
							else{
							 e.dataSeries.visible = true;
								/* if (e.dataSeries.name == "Humedad"){
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


				chart.render();
		 	}            

		});
		     
			$('#profile').click(function(){
					fredo = 'http://190.143.30.11:8080/TomcatPagina2/img/'+localStorage.getItem("username")+'.jpg';
          			document.getElementById("hola").innerHTML = '<img align="right" style="width:50%; height:70%" src= "'+fredo+'" />';
					$.ajax({
						method: 'POST',
						async: false,
						contentType: 'application/json',
						jsonp: "callback",
						url: 'recibiro.jsp',
						data: {"username":localStorage.getItem("username")},
						dataType: 'jsonp',
						crossDomain: true,
						success: function(datos) {

						//   g=datos;


						document.getElementById("last").innerHTML = datos.apellidos;
						document.getElementById("email").innerHTML = datos.emails;
						document.getElementById("departamento").innerHTML =datos.ciudads+","+datos.departamentos;
						document.getElementById("user").innerHTML = datos.username;
						document.getElementById("nombre").innerHTML = datos.nombres;
						document.getElementById("nombretit").innerHTML = datos.nombres+" "+datos.apellidos;
						document.getElementById("toll").innerHTML = localStorage.getItem("nsens");



						},
						error: function(textStatus)
						{
						alert("ERROR EN ENVIO! " + JSON.stringify(textStatus));
						}
					});

			});





//--------------aqui esta mapa--------------------------------------------------------------------------------------------------

var prende = function(){
values2=JSON.parse(localStorage["valueses"]);
		  var myCenter = new google.maps.LatLng(values2[values2.length-3],values2[values2.length-2]);
		  var marker;
		  var map;

		  function initialize(){

		    var mapProp = {
		    center:myCenter,
		    zoom:20,
		    mapTypeId:google.maps.MapTypeId.SATELLITE
		    };

		    map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

		    setInterval(function(){SetMarker()}, 2000);

		  };


		  function SetMarker(){

		    if (marker != null) {
		      marker.setMap(null);
		    }

		    var myCentr = new google.maps.LatLng(values2[values2.length-3],values2[values2.length-2]);
		    
		    marker = new google.maps.Marker({
		      position:myCentr,
		    });

		    marker.setMap(map);
		  
		  };

		    initialize();
	}

    $('.mapa').click(function(){

		$('#googleMap').show(1000);
		prende();
		//initialize();
    });




















  }); // end of document ready
})(jQuery); // end of jQuery name space
