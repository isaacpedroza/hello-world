<%@ page language="java" import="java.sql.*,javax.naming.*,java.io.IOException,java.io.InputStream, java.io.File,java.io.FileInputStream" %>
<%@ page import="javax.servlet.http.*" %>
<%@ page import="java.util.*" %>
<%@ page import="org.apache.commons.fileupload.*" %>
<%@ page import="org.apache.commons.fileupload.disk.*" %>
<%@ page import="org.apache.commons.fileupload.servlet.*" %>
<%@ page import="org.apache.commons.io.*" %>
<%@ page import="java.io.*,org.json.simple.JSONObject,org.json.simple.JSONObject"%>

<%

try{
		/*FileItemFactory es una interfaz para crear FileItem*/
		FileItemFactory file_factory = new DiskFileItemFactory();

		/*ServletFileUpload esta clase convierte los input file a FileItem*/
		ServletFileUpload servlet_up = new ServletFileUpload(file_factory);
		/*sacando los FileItem del ServletFileUpload en una lista */
		List items = servlet_up.parseRequest(request);
		//  for(int i=0;i<items.size();i++){
		/*FileItem representa un archivo en memoria que puede ser pasado al disco duro*/
		FileItem item0 = (FileItem) items.get(0);
		FileItem item1 = (FileItem) items.get(1);
		/*item.isFormField() false=input file; true=text field*/
		String user=item1.getString();

		if (! item0.isFormField()){
				/*cual sera la ruta al archivo en el servidor*/
				File archivo_server = new File("/home/pi/TOMCAT/apache-tomcat-8.0.23/webapps/ROOT/TomcatPagina2/img/"+user+".jpg");

				/*File archivo_server = new File("D:/OTROS PROGRAMAS/tomcat8/webapps/ROOT/Proyecto/img/"+user+".jpg");*/
						
				/*y lo escribimos en el servido*/
				item0.write(archivo_server);
				//    out.print("Nombre --> " + item.getName() );
				//  out.print("<br> Tipo --> " + item.getContentType());
				//out.print("<br> tamaño --> " + (item.getSize()/1240)+ "KB");
				//out.print("<br>");
			}
		out.println("SU IMAGEN FUE ALMACENADA CON EXITO");%>
		<script>setTimeout(function(){window.location.href="ejemplo.html"},3000)</script>
<%
}

catch(Exception e){
		out.println("ERROR! "+e.getMessage());
}

%>
