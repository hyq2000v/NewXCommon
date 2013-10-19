<%@ page contentType="text/html;charset=utf-8" %>
<% 
response.setHeader("Pragma","No-cache"); 
response.setHeader("Cache-Control","no-cache"); 
response.setDateHeader("Expires", 0); 

String UserID = request.getParameter("UserID")==null?"":request.getParameter("UserID"); 
%>
<html>
<head>
<title>NewX系统</title>
<link rel="stylesheet" href="<%= request.getContextPath() %>/css/menu.css" type="text/css">
<jsp:include page="/htmlHead.jsp" flush="false" />
</head>
<script language="javascript">
function fKeyPress(obj){
  	var keycode;
  	keycode=window.event.keyCode;
  	if (keycode==0xD)  {
	    if(obj.name=="UserID" && obj.value != ""){
		   document.frm.Password.focus();
		   document.frm.Password.select();
		}else if(obj.name=="Password"){
		   if(document.frm.imagecheck){
		      document.frm.imagecheck.focus();
		      document.frm.imagecheck.select();
		   }else{
		      document.frm.submit();
		   }
		}else if(obj.name="imagecheck"){
		   document.frm.submit();
		} 	    
  	}
}

function do_summit(){
	alert("请输入用户名！");
	if (document.frm.UserID.value == "") {
		alert("请输入用户名！");
		return;
	} 
	DelCookie("UserID");
	SetCookie("UserID",document.frm.UserID.value);
	frm.submit();
	return;
}
	
function document.onkeydown() {
	var key = window.event.keyCode;
	if( (event.ctrlKey) && (key==0x26)){//key up
			alert("此版本构建时间: " + document.lastModified );
	}
}	
//

</script>
<body bgcolor="#FFFFFF" leftmargin="0" topmargin="0" onload="document.frm.UserID.focus()">
<div align="center">

 <FORM id="frm" name="frm" method=post action="<%= request.getContextPath() %>/jsp/framework/main.jsp">

<table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tr> 
    <td height="120" bgcolor="#347096">&nbsp;</td>
  </tr>
  <tr>
    <td valign="top">
	  <table width="1024" height="374" border="0" cellpadding="0" cellspacing="0" background="<%= request.getContextPath() %>/images/login_01.jpg">
        <tr> 
          <td width="575" height="210">&nbsp;</td>
          <td width="442">&nbsp;</td>
        </tr>
        <tr> 
          <td>&nbsp;</td>
          <td valign="top">
		     <table width="180" border="0" cellspacing="0" cellpadding="0">
              <tr> 
                <td>用户名：　 
                  <input id="UserID" name="UserID" type="text" size="14"  value="<%=UserID%>" tabindex=1 onKeyUp="fKeyPress(this)" style="margin-bottom: 1px;"></td>
              </tr>
              <tr>
                <td>密　码：　 
                  <input id="Password" name="Password" type="password" size="14" value="" tabindex=2 onKeyUp="fKeyPress(this)"></td>
              </tr>
              <tr>
                <td height="50"><div align="center">
                    <table width="200" border="0" cellspacing="0" cellpadding="0">
                      <tr> 
                        <td><div align="center"> 
                            <div><a href="javascript:do_summit()"  class="buttonLink"  tabindex=3>确 定</a> </div>
                          </div></td>
                        <td><div align="center"> 
                            <div ><a href="javascript:clear('frm')"  class="buttonLink"  tabindex=4>取 消</a> </div>
                          </div></td>
                        <td>&nbsp;</td>
                      </tr>
                    </table>
                  </div>
                  </td>
              </tr>
            </table></td>
        </tr>
      </table></td>
  </tr>
  <tr>
    <td height="232" valign="bottom" bgcolor="#347096" >
	<table width="100%" border="0" align="center" cellpadding="0" cellspacing="0" bgcolor="#FFFFFF">
        <tr> 
          <td height="1">
          </td>
        </tr>
        <tr> 
          <td height="3" bgcolor="#000000">
          </td>
        </tr>
      </table></td>
  </tr>
</table>
  </FORM>
</div>

</div>
</body>
<script>
var UserID="<%=UserID%>";
if(UserID==null||UserID==""||UserID=="null"){
document.frm.UserID.value=GetCookie("UserID");
}

function do_summit(){
	if (document.getElementById("UserID").value == "") {
		alert("请输入用户名！");
		return;
	} 
	DelCookie("UserID");
	SetCookie("UserID",document.getElementById("UserID").value);
	document.getElementById("frm").submit();
	return;
}
function GetCookie(name)
{
	var arg = name + "=";
	var alen = arg.length;
	var clen = document.cookie.length;
	var i = 0;
	while (i < clen)
	{
	var j = i + alen;
	if (document.cookie.substring(i, j) == arg)
	return GetCookieVal (j);
	i = document.cookie.indexOf(" ", i) + 1;
	if (i == 0) break;
	}
	return "";
}
function SetCookie(name, value)
{
	var expdate = new Date();
	var argv = SetCookie.arguments;
	var argc = SetCookie.arguments.length;
	var expires = (argc > 2) ? argv[2] : null;
	var path = (argc > 3) ? argv[3] : null;
	var domain = (argc > 4) ? argv[4] : null;
	var secure = (argc > 5) ? argv[5] : false;
	expdate.setTime(expdate.getTime() + ( 60 * 30 * 24 * 60 * 60 * 1000 ));
	document.cookie = name + "=" + escape (value) + "; expires="+ expdate.toGMTString()
	+((path == null) ? "" : ("; path=" + path)) +((domain == null) ? "" : ("; domain=" + domain))
	+((secure == true) ? "; secure" : "");
}
function GetCookieVal(offset)
{	
	var endstr = document.cookie.indexOf (";", offset);
	if (endstr == -1)
	endstr = document.cookie.length;
	return unescape(document.cookie.substring(offset, endstr));
}
function DelCookie(name)
//删除Cookie
{
var exp = new Date();
exp.setTime (exp.getTime() - 1);
var cval = GetCookie (name);
document.cookie = name + "=" + cval + "; expires="+ exp.toGMTString();
}
</script>
</html>
