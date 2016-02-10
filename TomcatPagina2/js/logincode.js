$(document).ready(function(){
	$('.parallax').parallax();
	//CODIGO FORMULARIO DEL LOGIN
	$('#formulario_login').submit(function(evento) {
        evento.preventDefault();
        $('#respuestax').hide();
        localStorage.clear();
        var datos_formulario = $(this).serialize();
        $.ajax({
            method: 'POST',
            async: false,
            contentType: 'application/json',
            jsonp: "callback",
            url: 'sender.jsp',
            //url : 'http://190.143.30.11:8080/TomcatPagina/sender.jsp',
            data: datos_formulario,
            dataType: 'jsonp',
            crossDomain: true,
            success: function(datos) {
					if (datos.respuesta == "WRONG")
	            	{
	            		$('#respuestax').text("Username and password do not match");
	                	$('#respuestax').show();
	            	}
	            	else
	            	{
	            		if(datos.respuesta == "GOOD")
	            		{
	            			localStorage.setItem("username",datos.usuario);
	            			localStorage.setItem("password",datos.contraseña);
                            var user = localStorage.getItem("username");

                            if (datos.nsens>0)
                            {
                                localStorage.setItem("nsens",datos.nsens);
                            }
                            
                            $.ajax({
                                method: 'GET',
                                async: false,
                                contentType: 'application/json',
                                data: {"username": user},
                                jsonp: 'callback',
                                dataType: 'jsonp',
                                url:'http://190.143.30.11:8888/ApacheApp/phpapp.php',
                                crossDomain: true,

                                timeout: 3000,

                                success: function(data){
                                    localStorage["tages"] = JSON.stringify(data.etiquetas);
                                    localStorage["valueses"] = JSON.stringify(data.valores);
                                    setTimeout(function(){window.location.href="principal.html"},50)
                                },
                            });
	            			//window.location.href = "principal.html";
                        }
	            		
	            	}

            },
            error: function(textStatus)
            {
                alert("ERROR EN ENVIO! " + JSON.stringify(textStatus));
            }
        });
    });	
})


