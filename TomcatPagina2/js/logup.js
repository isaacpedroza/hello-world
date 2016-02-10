(function($){
  $(function(){

 $("#save").click(function(){
 
$(".error").hide();
        var hasError = false;
        var passwordVal = $("#pass").val();
        var checkVal = $("#pass2").val();
        if (passwordVal == '') {
            $("#pass").after('<span class="error" style="color:red">Please enter a password.</span>');
            hasError = true;
        } else if (checkVal == '') {
            $("#pass2").after('<span class="error" style="color:red">Please re-enter your password.</span>');
            hasError = true;
        } else if (passwordVal != checkVal ) {
            $("#pass2").after('<span class="error" style="color:red">Passwords do not match.</span>');
            hasError = true;
        }
        if(hasError == true) {return false;}
    });



var namesSex = new DynamicOptionList(); 
namesSex.addDependentFields("dep","ciu");  
namesSex.forValue("1").addOptions("Malambo","Barranquilla","Santo Tom\u00E1s","Soledad","Pto Colombia"); 
namesSex.forValue("2").addOptions("Bello","Envigado","Itagu\u00FC","Rionegro","Chigorod\00D3"); 
namesSex.forValue("3").addOptions("Caloto","Corinto","Miranda","Padilla","Puerto Tejada"); 
namesSex.forValue("4").addOptions("Ci\00E9naga","Fundaci\u00D3n","El Plato","Aracataca","Santa Marta"); 
namesSex.forValue("5").addOptions("Cartagena","El Carmen de Bol\u00EDvar","Cantagallo","El Guamo","Turbaco"); 
namesSex.forValue("6").addOptions("Ibagu\u00E9","El Espinal","L\n00EDbano","Honda"); 

  	  }); 

  	  // end of document ready
})(jQuery); // end of jQuery name space