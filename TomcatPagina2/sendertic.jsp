<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" import="java.sql.*,javax.naming.*,javax.sql.*,org.json.simple.JSONObject,org.json.simple.JSONObject"%>
<%
String username = request.getParameter("username");
String password = request.getParameter("password");
String callback = request.getParameter("callback");
String answer = "";

try
{
	Class.forName("com.mysql.jdbc.Driver");
	 
	Connection conexion = DriverManager.getConnection("jdbc:mysql://190.143.30.11/tic","cristian","12345");
	 
	Statement instruccion = conexion.createStatement();
	 
	ResultSet tabla = instruccion.executeQuery("SELECT r.username, r.password FROM sensores.cliente2 as r WHERE username = '"+username+"' AND password= '"+password+"';");

	tabla.next();
	int filas = tabla.getRow();

	// Verificar si el user y pswd existen
	if (filas == 0){
		answer = "WRONG";
	}
	else
	{
		answer = "GOOD";
	}

    JSONObject respuesta = new JSONObject();
    respuesta.put("respuesta",answer);
    out.println(callback+"("+respuesta.toString()+")");
    out.flush();
}
					
			

catch(Exception e){
   out.println("ERROR! "+e.getMessage());
}  


%>
