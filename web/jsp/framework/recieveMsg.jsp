<%@ page contentType="text/html;charset=utf-8" %>
<%@ taglib uri="hnisi.tld" prefix="hnisi" %> 
<HTML>
	<HEAD>
	<LINK href="<%= request.getContextPath() %>/css/menu.css" type=text/css rel=StyleSheet>
		<title>短消息</title>
		
	</HEAD>
	<body>
  <jsp:include page = "/bodyStart.jsp" flush="false"/>
  <br>
  <CENTER>
    <hnisi:gt id="sys_msg" title="站内消息" hasTitle="false">
    </hnisi:gt>
    </CENTER>
	<center>
	<!--
	<INPUT type="button" onclick="window.close()" value="关闭">
	-->
	<a class=buttonLink href="javascript:window.close()">关闭</a>
	</center>
	</body>
</HTML>
