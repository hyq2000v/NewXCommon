<%@ page contentType="text/html;charset=utf-8" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>无标题文档</title>
</head>
<script type="text/javascript">
function HideOrShow(){
	var showed = document.getElementById("showed");
	var pic = document.getElementById("pic");
     	if(showed.value!=null){
     		if(showed.value=="true"){
                window.parent.document.getElementById("MenuFrameset").cols="12,*";
                window.parent.document.getElementById("NavFrame").cols="0,18";
     			showed.value="false";
     			pic.src="<%=request.getContextPath()%>/jsp/framework/images/show_left.gif";    
     			pic.title="显示导航菜单";
     		}else{
     			window.parent.document.getElementById("MenuFrameset").cols="163,*";
                window.parent.document.getElementById("NavFrame").cols="151,12";
        		showed.value="true";
        		pic.src="<%=request.getContextPath()%>/jsp/framework/images/hide_left.gif";
        		pic.title="隐藏导航菜单";
     		}
     	}else{
     		alert("Error");
     	}

}
</script>
<body bgcolor="#ADB6C6" background="<%=request.getContextPath()%>/jsp/framework/images/scrollbar_bg.gif" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0" style="margin-left:0px">
<table width="75%" height="100%" border="0" cellpadding="0" cellspacing="0">
  <tr>
    <td><img id="pic" name="pic" style="cursor:hand" src="<%=request.getContextPath()%>/jsp/framework/images/hide_left.gif" width="12" height="50" onClick="HideOrShow()" title="隐藏导航菜单"></td>
  </tr>
</table>
<input id="showed" name="showed" type="hidden" value="true" id="showed3" width="0">
<input id="showtop" name="showtop" type="hidden" value="true" id="showtop" width="0">
</body>
</html>
