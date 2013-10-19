<%@ page contentType="text/html;charset=utf-8" %>
<%@page import="newx.service.ConfigServices"%>
<script type="text/javascript">
<!--
  window.defaultStatus="NewX系统欢迎您！";
  function setStatus(){
  	window.status="NewX系统欢迎您！";
  }
 	window.setInterval('setStatus()', 80);
	//-->
</script>
<html>
	<head>
	<meta HTTP-EQUIV="Expires" CONTENT="0">
	<title><%=ConfigServices.getInstance().getTitle() %></title>
	<!--TITLE框架主界面-->
	<!--DEC框架主界面-->
	</head>
	<frameset name="topFrame" rows="0, 49,35,*" cols="*" frameborder="NO" border="1" framespacing="0">
		<frame  scrolling="NO" noresize src="<%=request.getContextPath()%>/jsp/framework/freshMsg.jsp">
		<frame  scrolling="NO" noresize src="<%=request.getContextPath()%>/jsp/framework/banner.jsp">
		<frame  scrolling="NO" noresize src="<%=request.getContextPath()%>/jsp/framework/topMenu.jsp">
		<frameset id="MenuFrameset" name="MenuFrameset" cols="163,*" frameborder="NO" border="0" framespacing="0" rows="*">
			<!--frame name="leftFrame"  noresize scrolling="auto" src="Left.htm"-->
  			<frameset id="NavFrame" name="NavFrame" cols="151,12" frameborder="0" border="0" framespacing="0">
    				<frame id="navigation" name="navigation" scrolling="auto" noresize src="<%=request.getContextPath()%>/jsp/framework/Left.jsp">
    				<frame frameborder="no" scrolling="NO" noresize src="<%=request.getContextPath()%>/jsp/framework/menubtn.jsp">
  			</frameset>
			<frame id="workspace" name="workspace" scrolling="AUTO" src="<%=request.getContextPath()%>/action/MainAction?actionType=demo1">
		</frameset>
	</frameset>
	<noframes>
		<body bgcolor="#FFFFFF" text="#000000">
			对不起，您的浏览器不支持分帧。
		</body>
	</noframes>
</html>
