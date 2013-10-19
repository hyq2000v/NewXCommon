<%@ page contentType="text/html;charset=utf-8" %>
<%@page import="org.apache.commons.lang.StringUtils"%>
<%@page import="newx.menu.MenuService"%>
<html>
<head>
<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=utf-8">             
<meta http-equiv="pragma" content="no-cache">
<link href="<%=request.getContextPath()%>/jsp/framework/leftMenu.css" rel="stylesheet" type="text/css">
</head>
    
<body class="navibody">
	<table width="75%" height="" border="0" cellspacing="0" cellpadding="0">
		<tr>
			<td height="11" >
			</td>
		</tr>
	</table>
<%
   String menu = MenuService.getInstance().get2LvlMenu();
   menu = StringUtils.replace(menu,"rootdir",request.getContextPath());
%>       
<%=menu %>          
<Script type="text/javascript">
	function expandIt(parent){
		allChildren = document.getElementsByTagName("div");
		//alert(allChildren.length + " parent=" + parent);
		for (i = 0; i < allChildren.length; i ++){
			child = allChildren[i];
			//alert("id=" + child.id + " name=" + child.name);
			if (child.getAttribute("name")=="Child"){
				if(child.id==parent){
					//alert ("yes!!!");
					if(child.style.display=="none")
						child.style.display="";
					else
						child.style.display="none";
					break;
					//child.class="menubutton";
//				}else {
//					//alert ("no!!!");
//					child.style.display="none";
//					//child.class="menubutton1";
				}
			}
		}
	}
</Script>
</div>
</body>
</html>    
