<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" import="java.sql.*,javax.naming.*,java.io.IOException,java.io.InputStream, java.io.File,java.io.FileInputStream,javax.sql.*,org.json.simple.JSONObject,org.json.simple.JSONObject" %>

<%
String nam = request.getParameter( "nam" );
String last = request.getParameter( "last" );
String pass = request.getParameter( "pass" );
String user = request.getParameter( "user" );
String email = request.getParameter( "email" );
String dep = request.getParameter( "dep" );
String ciu = request.getParameter( "ciu" );
String callback = request.getParameter("callback");
String account = request.getParameter("bank");
String answer = "";
String answerbank = "";

try{
		Class.forName("com.mysql.jdbc.Driver").newInstance();
		Connection conexion = DriverManager.getConnection("jdbc:mysql://190.143.30.11/sensores","cristian","12345");

		Statement instruccion = conexion.createStatement();
		ResultSet tabla = instruccion.executeQuery("SELECT c.Username FROM sensores.cliente2 as c WHERE Username = '"+user+"';");
		tabla.next();
		int filas = tabla.getRow();
		JSONObject respuesta = new JSONObject();

		if(filas==0){
			answer = "OK";
			// System.out.println(nombre + " " + telefono);
			//System.out.println(callback+"("+respuesta.toString()+")");
		}
		else
		{
			//  JSONObject respuesta = new JSONObject();
			answer = "NOOK";
			//System.out.println(callback+"("+respuesta.toString()+")");
		}

		ResultSet otra_tabla = instruccion.executeQuery("SELECT r.CuentaB FROM sensores.cliente2 as r WHERE CuentaB = '"+account+"';");
		otra_tabla.next();
		int otrasfilas = otra_tabla.getRow();

		if (otrasfilas == 0)
		{
			answerbank = "good";
		}
		else
		{
			answerbank = "wrong";
		}	
		// Si ambos no existen, entonces se realiza la inserccion
		if (answerbank == "good" && answer == "OK")
		{
			PreparedStatement stmt = conexion.prepareStatement("INSERT INTO sensores.cliente2 VALUES (?,?,?,?,?,?,?,?,?)");
			stmt.setInt(1,0);
			stmt.setString(2,user);
			stmt.setString(3,nam);
			stmt.setString(4,last);
			stmt.setString(5,pass);
			stmt.setString(6,email);
			stmt.setString(7,dep);
			stmt.setString(8,ciu);
			stmt.setString(9,account);
			stmt.executeUpdate();
			stmt.close();
		}

		respuesta.put("response",answer);
		respuesta.put("responsebank",answerbank);
		out.println(callback+"("+respuesta.toString()+")");
		out.flush();

}
catch(Exception e){
		out.println("ERROR! "+e.getMessage());
}

%>
