$(document).ready(function() {
  
$( "#ss" ).change(function() {
    var str = ""; 
   $('#yellow').css('visibility','hidden');      
   $('#red').css('visibility','hidden');      
   $('#blue').css('visibility','hidden');       

    $( "#ss option:selected" ).each(function() {
      str += $( this ).text() + " ";
    });
    if (str==1){
   $('#red').css('visibility','visible');      
       }else if (str==2){
    $('#red').css('visibility','visible');      
    $('#blue').css('visibility','visible');      
           
           }else if (str==3) {
        $('#red').css('visibility','visible');      
     $('#blue').css('visibility','visible');      
   $('#yellow').css('visibility','visible');      
     
               }
  })
  .trigger( "change" );    
   
});