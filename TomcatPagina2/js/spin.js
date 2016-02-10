 $(document).ready(function() {
  //eliminacion inicial de las cookies
       /*document.cookie = "habitacion=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
       document.cookie = "cocina=; expires=Thu, 01 Jan 1970 00:00:00 UTC";*/
        //localStorage.clear();
        var username = localStorage.getItem("username");
        $("#depurar").html("Aquí va username: " + username);
        //clearListCookies();

         $('#hab').spinit({ height: 30, width: 150, min: 0, initValue: 0, max: 255, callback: onred}); 
         $('#coc').spinit({ height: 30, width: 150, min: 0, initValue: 0, max: 255,  callback: oncoc}); 
         $('#sal').spinit({ height: 30, width: 150, min: 0, initValue: 0, max: 255,  callback: onsal });
         $('#ba').spinit({ height: 30, width: 150, min: 0, initValue: 0, max: 255,  callback: onba});
         $('#ga').spinit({ height: 30, width: 150, min: 0, initValue: 0, max: 255,  callback: onga});      

          function onred(val) {
           re = val;
           }
             function oncoc(val) {
                be = val;
           }
            function onsal(val) {
                qe = val;
           }
             function onba(val) {
                fe = val;
           }
            function onga(val) {
                ge = val;
           }
// Preparacion extrema de la cookie 
/*
function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
}

function getCookie(cname) {
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
/*
function checkCookie() {
    var h=getCookie("habitacion");
    var c=getCookie("cocina");
    if (h != "" && c!="") {
       alert("Welcome again " + h+ "y"+c);
    } else {
    
           h = $('#hab').val();    
 
           c = $('#coc').val();    


       if (h != "" && h != null && c != "" && c != null) {
           setCookie("habitacion", h, 30);
           setCookie("cocina", c, 30);
       

           }
    }
}
*/

///boton para guardar cookie

/*
$('#coc').change(function(){
document.cookie = "cocina=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
setCookie("cocina", 5, 30);
});
*/

/*$('#good').click(function(){
  
  checkCookie();

});*/

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

    $('#pur').click(function(){
        /*document.cookie = "cocina=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
        document.cookie = "habitacion=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
        document.cookie = "sala=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
        document.cookie = "baño=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
        document.cookie = "garage=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
        */
           h = $('#hab').val();    
     
           c = $('#coc').val(); 
           s = $('#sal').val();    
     
           b = $('#ba').val(); 
           g = $('#ga').val(); 
              
          /*setCookie("cocina", c, 30);
          setCookie("habitacion", h, 30);
          setCookie("sala", s, 30);
          setCookie("baño", b, 30);
          setCookie("garage", g, 30);*/

          localStorage.setItem("cocina",c);
          localStorage.setItem("habitacion",h);
          localStorage.setItem("sala",s);
          localStorage.setItem("baño",b);
          localStorage.setItem("garage",g);


    });

        
});

   

