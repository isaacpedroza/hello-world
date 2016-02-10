<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" import="java.sql.*,javax.naming.*,javax.sql.*,org.json.simple.JSONObject,org.json.simple.JSONObject"%>
<%
String username = request.getParameter("username");
String password = request.getParameter("password");
String callback = request.getParameter("callback");
String answer = "";

try
{
	Class.forName("com.mysql.jdbc.Driver");
	 
	Connection conexion = DriverManager.getConnection("jdbc:mysql://190.143.30.11/sensores","cristian","12345");
	 
	Statement instruccion = conexion.createStatement();
	 
	ResultSet tabla = instruccion.executeQuery("SELECT r.username, r.password FROM sensores.cliente2 as r WHERE username = '"+username+"' AND password= '"+password+"';");

	tabla.next();
	int filas = tabla.getRow();
	int col = 0;

	// Verificar si el user y pswd existen
	if (filas == 0){
		answer = "WRONG";
		col = -1; 
	}
	else
	{
		answer = "GOOD";
		ResultSet tabla2 =  instruccion.executeQuery("SELECT COUNT(*) AS numero_registros FROM information_schema.columns WHERE table_name = '"+username+"';");
		tabla2.next();
		col = tabla2.getInt(1) - 4;
	}


	String col_string = Integer.toString(col);
    JSONObject respuesta = new JSONObject();
    respuesta.put("respuesta",answer);
    respuesta.put("usuario",username);
    respuesta.put("contraseña",password);
    respuesta.put("nsens",col_string);
    out.println(callback+"("+respuesta.toString()+")");
    out.flush();
}
					
			

catch(Exception e){
   out.println("ERROR! "+e.getMessage());
}  


%>
