 $(document).ready(function() {
      $('#oculto').css('visibility','hidden');      
      $('#terminar').css('visibility','hidden'); 
      $('#regresar').css('visibility','hidden'); 
      nume = [];
      //clearListCookies();
    /*function getCookie(cname) {
      var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i=0; i<ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1);
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    var h=getCookie("habitacion");
    var c=getCookie("cocina");
    var s=getCookie("sala");
    var b=getCookie("baño");
    var g=getCookie("garage");*/

    function clearListCookies()
    {   
        var cookies = document.cookie.split(";");
        for (var i = 0; i < cookies.length; i++)
        {   
            var spcook =  cookies[i].split("=");
            deleteCookie(spcook[0]);
        }
        function deleteCookie(cookiename)
        {
            var d = new Date();
            d.setDate(d.getDate() - 1);
            var expires = ";expires="+d;
            var name=cookiename;
            //alert(name);
            var value="";
            document.cookie = name + "=" + value + expires + "; path=/acc/html";                    
        }
        //window.location = ""; // TO REFRESH THE PAGE
    }

    var h = localStorage.getItem("habitacion");
    var c = localStorage.getItem("cocina");
    var s = localStorage.getItem("sala");
    var b = localStorage.getItem("baño");
    var g = localStorage.getItem("garage");

    var namesSex = new DynamicOptionList(); 
    namesSex.addDependentFields("sex","names");  
     for (i=1; i<=h;i++){
     	var str1="Room";
    namesSex.forValue("boy").addOptions(str1.concat(i)); 

    }

    for (i=1; i<=c; i++){
    	var str2="Kitchen";
    namesSex.forValue("boy").addOptions(str2.concat(i)); 

     }
     for (i=1; i<=b; i++){
      var str3="Bathroom";
    namesSex.forValue("boy").addOptions(str3.concat(i)); 

     }
     for (i=1; i<=s; i++){
      var str4="Living-room";
    namesSex.forValue("boy").addOptions(str4.concat(i)); 

     }
     for (i=1; i<=g; i++){
      var str5="Garage";
    namesSex.forValue("boy").addOptions(str5.concat(i)); 

     }

    j=1;
         $("#ss").change( function (){
          j=j+1;
          $('#terminar').css('visibility','visible');      
          $('#regresar').css('visibility','visible');      
        
          if(j==2){
            $('#datos option').clone().appendTo("#recibe");
            $('#datos option').clone().appendTo("#recibe2");
            $('#datos option').clone().appendTo("#recibe3");

            $('#datos option').clone().appendTo("#recibe4");

            $('#datos option').clone().appendTo("#recibe5");
                  }
          });

      $("#sen1,#datos").change(function(){
             var space1  = $('#datos').val();
             var n=space1.length;  
             var n=space1.substring(n-1,n);
             var space1 = space1.substring(0,3);
             var sensor1 = $('#sen1').val();  
             
             var sensor1 = sensor1.substring(0,1);
             
            space1=space1.concat(n);
             var env1= space1.concat(sensor1);
             nume[0]=env1;   // PRIMER DATOO DEL NODO SENSOR 1

            //document.getElementById("hola").innerHTML = nume;
        });

        $("#sen2,#recibe").change(function(){
            var space2  = $('#recibe').val();
            var n2=space2.length;  
            var n2=space2.substring(n2-1,n2);
            var space2 = space2.substring(0,3);
            var sensor2 = $('#sen2').val();  



            var sensor2 = sensor2.substring(0,1);

            space2=space2.concat(n2);
            var env2= space2.concat(sensor2);
            nume[1]=env2;   // PRIMER DATOO DEL NODO SENSOR 1
            //document.getElementById("hola").innerHTML = nume;
        });

       $("#sen3,#recibe2").change(function(){
            var space3  = $('#recibe2').val();
            var n3=space3.length;  
            var n3=space3.substring(n3-1,n3);
            var space3 = space3.substring(0,3);
            var sensor3 = $('#sen3').val();  


            var sensor3 = sensor3.substring(0,1);

            space3=space3.concat(n3);
            var env3= space3.concat(sensor3);
            nume[2]=env3;   // PRIMER DATOO DEL NODO SENSOR 1
            //document.getElementById("hola").innerHTML = nume;
        });


       $("#sen4,#recibe3").change(function(){
            var space4  = $('#recibe3').val();
            var n4=space4.length;  
            var n4=space4.substring(n4-1,n4);
            var space4 = space4.substring(0,3);
            var sensor4 = $('#sen4').val();  

            var sensor4 = sensor4.substring(0,1);

            space4=space4.concat(n4);
            var env4= space4.concat(sensor4);
            nume[3]=env4;   // PRIMER DATOO DEL NODO SENSOR 1
            //document.getElementById("hola").innerHTML = nume;
        });

        $("#sen5,#recibe4").change(function(){

            var space5  = $('#recibe4').val();
            var n5=space5.length;  
            var n5=space5.substring(n5-1,n5);
            var space5 = space5.substring(0,3);
            var sensor5 = $('#sen5').val();  
            var sensor5 = sensor5.substring(0,1);

            space5=space5.concat(n5);
            var env5= space5.concat(sensor5);
            nume[4]=env5;   // PRIMER DATOO DEL NODO SENSOR 1
            //document.getElementById("hola").innerHTML = nume;
       });

        $("#sen6,#recibe5").change(function(){
            var space6  = $('#recibe5').val();
            var n6=space6.length;  
            var n6=space6.substring(n6-1,n6);
            var space6 = space6.substring(0,3);
            var sensor6 = $('#sen6').val();  


            var sensor6 = sensor6.substring(0,1);

            space6=space6.concat(n6);
            var env6= space6.concat(sensor6);
            nume[5]=env6;   // PRIMER DATOO DEL NODO SENSOR 1
            //document.getElementById("hola").innerHTML = nume;
        });


      //numi=["hola" , "home"];
      //cont=nume.length;

      $('#senso').submit(function(evento) {
          evento.preventDefault();

          gon=[];
          for(var i=0;i<nume.length;i++){
            gon=nume[nume.length-1-i].concat(gon);
          }

          conte = $('#ss').val();
          //document.getElementById("hola").innerHTML = conte;
          $('#resultados').hide();
          // var datos_formulario = numi;
          //var  datof = $this().serialize(numi);
          var valor_username = localStorage.getItem("username");
          $.ajax({
              method: 'POST',
              async: false,
              contentType: 'application/json',
              jsonp: "callback",
              //url: 'http://190.143.30.11:8080/TomcatPagina2/insertar_datos_sensores.jsp',
              url: 'insertar_datos_sensores.jsp',
              data: {"numin": gon , "con": conte , "username": valor_username},
              dataType: 'jsonp',
              crossDomain: true,
              success: function(datos) {
                $('#resultados').text("EXITO!. Se envío: " + JSON.stringify(datos));
                $('#resultados').show();
                window.location.href = "index.html";
              },
              error: function(textStatus)
              {
                alert("ERROR EN ENVIO! " + JSON.stringify(textStatus));
              }
          }); 
      }); 

});