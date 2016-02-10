<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" import="java.sql.*,javax.naming.*,java.io.IOException,java.io.InputStream, java.io.File,java.io.FileInputStream,javax.sql.*,org.json.simple.JSONObject,org.json.simple.JSONObject" %>
<%
String daton = request.getParameter("numin");
String conte = request.getParameter("con");
String callback = request.getParameter("callback");
String username = request.getParameter("username");

int cuenta= Integer.parseInt(conte);
String[] corte=new String[cuenta];
int c=0;

for(int i=0;i<cuenta*5;i=i+5){
   corte[c] = daton.substring(i,i+5);
   c=c+1;
}

		 	// Insertar los datos
try{
		Class.forName("com.mysql.jdbc.Driver");
		Connection conexion = DriverManager.getConnection("jdbc:mysql://190.143.30.11/sensores","cristian","12345");
		Statement instruccion = conexion.createStatement();

		String amigo="";

		int v=0;
		for (int i=0;i<corte.length;i++) {		 
			amigo+=corte[i]+" FLOAT NOT NULL COMMENT '',";
		}

		instruccion.executeUpdate("CREATE TABLE sensores."+username+"( idMedida INT NOT NULL AUTO_INCREMENT COMMENT '',"+amigo+" LATITUD FLOAT NOT NULL COMMENT '', LONGITUD FLOAT NOT NULL COMMENT '', TIEMPO DATETIME NOT NULL COMMENT'' , PRIMARY KEY (idMedida)  COMMENT '');");

//instruccion.executeUpdate("CREATE TABLE sensores."+username+"( idMedida INT NOT NULL AUTO_INCREMENT COMMENT   
//'',"+amigo+" PRIMARY KEY (idMedida)  COMMENT '');");


		System.out.println("CREATE TABLE sensores."+username+"( idMedida INT NOT NULL AUTO_INCREMENT COMMENT '',"+amigo+" PRIMARY KEY (idMedida)  COMMENT '');");
}

catch(Exception e){
	out.println("ERROR! "+e.getMessage());
}

		JSONObject respuesta = new JSONObject();
		respuesta.put("daton",daton);
		out.println(callback+"("+respuesta.toString()+")");
		out.flush();
		//System.out.println(callback+"("+respuesta.toString()+")");


%>
