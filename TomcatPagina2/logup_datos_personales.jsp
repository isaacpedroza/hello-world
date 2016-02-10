<html>
<head>
 	  <!--Import Google Icon Font-->
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.js"></script>

      <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <!--Import materialize.css-->
      <link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/>

      <!--Let browser know website is optimized for mobile-->
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

      <script type="text/javascript" src="js/logup.js"></script>

      <script type="text/javascript" src="js/dynamicoptionlist.js"></script>

</head>

<body onLoad="initDynamicOptionLists()">
    <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
    <script type="text/javascript" src="js/materialize.min.js"></script>

    <%@ page language="java" import="java.sql.*,javax.naming.*,javax.sql.*" %>
    <%

    try{

    Class.forName("com.mysql.jdbc.Driver").newInstance();
    Connection conexion = DriverManager.getConnection("jdbc:mysql://190.143.30.11/sensores","cristian","12345");
    Statement instruccion = conexion.createStatement();
    ResultSet tabla = instruccion.executeQuery("Select * from sensores.departamento");

    %>


    <!--Desde aqui comienza el codigo-->
    <!--NAVBAR-->
    <div class="row">
      <nav>
        <div class="nav-wrapper green accent-4" style="height: 80px">    
          <a href="#" class="brand-logo center" style="font-size: 2em"><b>Personal Information</b></a>
        </div>
      </nav>
    </div> 

    <br></br>

    <!--<form id = "theform" class="col s53" METHOD="post" enctype="multipart/form-data" ACTION="logup2.jsp">-->
    <form id = "theform">
      <div class="row center">
      <div class="col s1 m2 l4"><br></br></div>
        <div class="input-field col s10 m8 l4">
          <i class="material-icons prefix">face</i>
          <input id="icon_prefix" type="text" name="nam" class="validate">
          <label for="icon_prefix">First Name</label>
        </div>
        <div class="col s1 m2 l4"><br></br></div>
      </div>

      <!--<div class="input-field col s6">
          <i class="material-icons prefix">face</i>
          <input id="icon_lastname" type="text" name="last" class="validate">
          <label for="icon_lastname">Last Name</label>
        </div>
      </div>-->

      <div class="row center">
        <div class="col s1 m2 l4"><br></br></div>
        <div class="input-field col s10 m8 l4">
          <i class="material-icons prefix"></i>
          <input id="icon_lastname" type="text" name="last" class="validate">
          <label for="icon_lastname">Last Name</label>
        </div>
        <div class="col s1 m2 l4"><br></br></div>
      </div>

      <div class="row center">
      <div class="col s1 m2 l4"><br></br></div>
        <div class="input-field col s10 m8 l4">
          <i class="material-icons prefix">perm_identity</i>
          <input id="icon_username" type="text" name="user" class="validate">
          <label for="icon_username">Username</label>
        </div>
        <div class="col s1 m2 l4"><br></br></div>
      </div>
     
      <div class="row center">
      <div class="col s1 m2 l4"><br></br></div>
        <div class="input-field col s10 m8 l4">
            <i class="material-icons prefix">vpn_key</i>
            <input id="pass" type="password" name="pass" length="10">
            <label for="pass">Password</label>
          </div>
      <div class="col s1 m2 l4"><br></br></div>
      </div>

      <div class="row center">
      <div class="col s1 m2 l4"><br></br></div>
        <div class="input-field col s10 m8 l4">
            <i class="material-icons prefix">vpn_key</i>
            <input id="pass2" type="password" name="pass2" length="10">
            <label for="pass2">Re-Enter Password</label>
          </div>
      <div class="col s1 m2 l4"><br></br></div>
      </div>

      <div class="row center">
      <div class="col s1 m2 l4"><br></br></div>
        <div class="input-field col s10 m8 l4">
            <i class="material-icons prefix">credit_card</i>  
            <input id="icon_bank" type="text" name="bank" class="validate" length="20">
            <label for="icon_bank">Bank Account</label>
            <div id = "resultado_bank"></div>
          </div>
      <div class="col s1 m2 l4"><br></br></div>
      </div>


      <div class="row center">
      <div class="col s1 m2 l4"><br></br></div>
        <div class="input-field col s10 m8 l4">
            <i class="material-icons prefix">email</i>
            <input id="icon_email" type="text" name=email class="validate">
            <label for="icon_email">Email</label>
          </div>
          <div class="col s1 m2 l4"><br></br></div>
        </div>

      <div class="row center">
      <div class="col s1 m2 l4"><br></br></div>
        <select class="browser-default col s10 m8 l4" name="dep">  
        <option value="" disabled selected>Department</option>
        <%
        while (tabla.next())  {
        %>
        <option value=<%= tabla.getInt(1)%>><%= tabla.getString(2)%></option>
        <% 
        }
        %>   </select>
        <div class="col s1 m2 l4"><br></br></div>
      </div>

      <div class="row center">
      <div class="col s1 m2 l4"><br></br></div>
        <select class="browser-default col s10 m8 l4" name="ciu">  
        <option value="" disabled selected>Town</option>
        <!--<script type="text/javascript">namesSex.printOptions("ciu")</script>--> 
        </select>
        <div class="col s1 m2 l4"><br></br></div>
      </div>

      <br></br>   

      <div class="row center">
      <div id="resultados"></div>
      </div> 

      <br></br> 

      <div class="row" align="center">
        <button type="submit" id="submit" class="waves-effect waves-light btn green accent-4"><i class="material-icons right">play_arrow</i>Continue</button>
      </div>

  
    </form>
    <%
               
    }
    catch(Exception e){
       out.println("ERROR! "+e.getMessage());
    }
     

    %>

    <script>
      $(document).ready(function(){
          $('#theform').submit(function(evento) {
              evento.preventDefault();
              $('#resultados').hide();
              // VALIDACION DE CONTRASEÑAS
                  pswd = $("#pass").val();
                  pswd2 = $("#pass2").val();
                  account = $("#icon_bank").val();

                  if ((pswd.length)>10 || (pswd2.length)>10) 
                  {
                    $('#resultados').hide();
                    $('#resultados').text("Error! Passwords can not be more than 10 characters");
                    $('#resultados').show();
                  }
                  else 
                  {
                      if (pswd != pswd2)
                      {
                        $('#resultados').hide();
                        $('#resultados').text("Error! Reentered password does not match with first password");
                        $('#resultados').show();
                      }
                      else
                      {
                        if (account.length!=20)
                        {
                          $('#resultados').hide();
                          $('#resultados').text("Error! Bank account must be 20 characters");
                          $('#resultados').show();
                        }
                        else
                        {
                          var datos_formulario = $(this).serialize();
                          $.ajax
                          ({
                            method: 'POST',
                            async: false,
                            contentType: 'application/json',
                            jsonp: "callback",
                            url: 'insertaDB_logup_datos_personales.jsp',
                            //url: 'http://190.143.30.11:8080/TomcatPagina2/insertaDB_logup_datos_personales.jsp',
                            data: datos_formulario,
                            dataType: 'jsonp',
                            crossDomain: true,
                            success: function(datos) {
                            if (datos.response == "OK" && datos.responsebank == "good")
                            {
                              valor_username = $("#icon_username").val();
                              localStorage.setItem("username",valor_username);
                              window.location.href="logup_foto.jsp";
                            }          

                            if (datos.response == "NOOK")
                            {
                              $('#resultados').hide();
                              $('#resultados').html("This Username already exists in our database. Please try other.");
                              $('#resultados').show();
                            }

                            if (datos.responsebank == "wrong")
                            {
                              $('#resultado_bank').hide();
                              $('#resultado_bank').html("This Bank Account already exists in our database. Please change it.");
                              $('#resultado_bank').show();
                            }

                            },
                            error: function(textStatus)
                            {
                              alert("ERROR EN ENVIO! " + JSON.stringify(textStatus));
                            }

                          });                         
                        }

                      }
                  }
          });
      });
    </script>

</body>
</html>