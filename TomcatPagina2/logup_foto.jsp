<html>
<head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
 	  <!--Import Google Icon Font-->
      <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>

      <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <!--Import materialize.css-->
      <link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/>
      <!--Let browser know website is optimized for mobile-->
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  
      <script type="text/javascript" src="js/logup.js"></script>    
      <script type="text/javascript" src="js/dynamicoptionlist.js"></script>

</head>

<body>
    <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
    <script type="text/javascript" src="js/materialize.min.js"></script>

    <!--Desde aqui comienza el codigo-->

    <!--NAVBAR-->
    <div class="row">
      <nav>
        <div class="nav-wrapper green accent-4" style="height: 80px">    
          <a href="#" class="brand-logo center" style="font-size: 2em"><b>Personal Information</b></a>
        </div>
      </nav>
    </div> 

    <BR><BR>

    <div class="row" align="center">
      <span style="font-size: 20px; font-family: Arial, Verdana; font-weight: bold;">Load your profile photo
      </span>
    </div>

    <br>
    <form id = "theform" class="col s53" METHOD="post" enctype="multipart/form-data" ACTION="insertar_logup_foto.jsp">
        <div class="row" align="center" style="width:35%">
          <div class="file-field input-field">
            <div class="btn">
              <span>File</span>
              <input type="file" name="foto">
            </div>
            <div class="file-path-wrapper">
              <input class="file-path validate" type="text">
            </div>
          </div>
        </div>

        <input type="text" id="userhidden" name="userhidden">

        <br>
        <div class="row" align="center">
          <button type="submit" id="submit" class="waves-effect waves-light btn #1b5e20 green accent-4"><i class="material-icons right">play_arrow</i>Continue</button>
          <a id="regresar" href="logup_datos_personales.jsp" class="waves-effect waves-light btn #1b5e20 green accent-4"><i class="material-icons right">replay</i>Back</a>
        </div>
    </form>

    <div id="resultados"></div>

    <script>
      var user_value = "";
      $(document).ready(function(){
        $("#userhidden").hide();
        user_value = localStorage.getItem("username");
        $("#userhidden").val(user_value);
        //$("#resultados").html(user_value);
      })
    </script>
</body>
</html>