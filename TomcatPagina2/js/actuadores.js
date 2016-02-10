var fecha = "";
        	$(document).ready(function (){
        		$("#PRENDE").click(function(){
        			fecha = new Date();
        			fecha = fecha.getTime()/1000 - 21600;
		        	$.ajax({
			            method: 'GET',
			            async: false,
			            contentType: 'application/json',
			            jsonp: "callback",
			            url: 'http://190.143.30.11:8888/instrucciones.php',
			            data: {inst:"prende_led" , fecha:fecha},
			            dataType: 'jsonp',
			            crossDomain: true,
			            success: function(datos) {

			            },
			            error: function(textStatus)
			            {
			                alert("ERROR EN ENVIO! " + JSON.stringify(textStatus));
			            }
			        });
        		})

        		$("#APAGA").click(function (){
        			fecha = new Date();
        			fecha = fecha.getTime()/1000 - 21600;
		        	$.ajax({
			            method: 'GET',
			            async: false,
			            contentType: 'application/json',
			            jsonp: "callback",
			            url: 'http://190.143.30.11:8888/instrucciones.php',
			            data: {inst:"apaga_led" , fecha:fecha},
			            dataType: 'jsonp',
			            crossDomain: true,
			            success: function(datos) {
			            	
			            },
			            error: function(textStatus)
			            {
			                alert("ERROR EN ENVIO! " + JSON.stringify(textStatus));
			            }
			        });
        		})
        	})