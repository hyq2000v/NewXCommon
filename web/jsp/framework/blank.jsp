<%@ page contentType="text/html;charset=utf-8" %>

<HTML>
<HEAD>
<TITLE>首页</TITLE>
<!--DEC系统首页，包含我的桌面、我的消息、快捷通道-->
<META http-equiv=Content-Type content="text/html; charset=GB2312">
<LINK href="<%= request.getContextPath() %>/css/menu.css" type=text/css rel=StyleSheet>
    <jsp:include page = "/htmlHead.jsp" flush="false"/>
</head>
<body>
  <jsp:include page = "/bodyStart.jsp" flush="false"/>
</body>
</html>
