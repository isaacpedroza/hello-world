 
(function($){
  $(function(){
    
    $( '#ss' ).change(function() {
        var str = ""; 
       $('#yellow').css('visibility','hidden');      
       $('#red').css('visibility','hidden');      
       $('#blue').css('visibility','hidden');       
        $('#green').css('visibility','hidden');       
      $('#brown').css('visibility','hidden');       
      $('#pink').css('visibility','hidden');       

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
         
                   }else if (str==4) {
            $('#red').css('visibility','visible');      
         $('#blue').css('visibility','visible');      
       $('#yellow').css('visibility','visible');      
       $('#green').css('visibility','visible');      
         
                   }
                   else if (str==5) {
            $('#red').css('visibility','visible');      
         $('#blue').css('visibility','visible');      
       $('#yellow').css('visibility','visible');      
       $('#green').css('visibility','visible');      
       $('#brown').css('visibility','visible');      
         
                   }else if (str==6) {
            $('#red').css('visibility','visible');      
         $('#blue').css('visibility','visible');      
       $('#yellow').css('visibility','visible');      
       $('#green').css('visibility','visible');      
       $('#brown').css('visibility','visible');      
       $('#pink').css('visibility','visible');      
         
                   }
      }).trigger( "change" );    
   
  }); // end of document ready
})(jQuery); // end of jQuery name space