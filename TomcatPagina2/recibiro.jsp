<%

String callback = request.getParameter("callback");
String username = request.getParameter("username");
//String username="batman";

 %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" import="java.sql.*,javax.naming.*,java.io.IOException,java.io.InputStream, java.io.File,java.io.FileInputStream,javax.sql.*,org.json.simple.JSONObject,org.json.simple.JSONObject" %>
                <%
         
               try{

          Class.forName("com.mysql.jdbc.Driver").newInstance();
          Connection conexion = DriverManager.getConnection("jdbc:mysql://190.143.30.11/sensores","cristian","12345");
          Statement instruccion = conexion.createStatement();
          Statement instruccion2 = conexion.createStatement();
          
          
          ResultSet tabla = instruccion.executeQuery("SELECT c.Username, c.Name, c.Lastname, c.Email, d.departamento, c.Ciudad FROM cliente2 as c , departamento as d where Username='"+username+"'and c.Departamento = d.idDepartamento ;");
          
          String  nombres1  = ""; 
          String apellidos1  = "";
          String  nombres  = ""; 
          String usernames  = "";
          String    ciudads = ""; 
          String apellidos  = "";
          String  emails  = ""; 
          String departamentos  = "";

 




 while (tabla.next())  {
              
                      
            usernames= tabla.getString(1);            
           nombres=tabla.getString(2);
           apellidos= tabla.getString(3);
           emails = tabla.getString(4);
           departamentos= tabla.getString(5);
           ciudads  = tabla.getString(6);

                           
            }
            
            System.out.println(ciudads);
          JSONObject respuesta = new JSONObject();
      //  respuesta.put("nam",nam);
     //  respuesta.put("last",last);
            respuesta.put("username",usernames);
            respuesta.put("nombres",nombres);
            respuesta.put("apellidos",apellidos);
            respuesta.put("emails",emails);
            respuesta.put("departamentos",departamentos);
            respuesta.put("ciudads",ciudads);
            respuesta.put("nombres1",nombres1);
            respuesta.put("apellidos1",apellidos1);
           

      out.println(callback+"("+respuesta.toString()+")");
        out.flush();
       // System.out.println(nombre + " " + telefono);
        System.out.println(callback+"("+respuesta.toString()+")");
        


System.out.println("CREATE TABLE wisens."+username+"( idMedida INT NOT NULL AUTO_INCREMENT COMMENT '',"+usernames+" PRIMARY KEY (idMedida)  COMMENT '');");
                 
               }
               catch(Exception e){
                   out.println("ERROR! "+e.getMessage());
               }
                
                %>