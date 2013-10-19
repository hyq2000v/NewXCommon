<%@page contentType="text/html;charset=utf-8" %>
<%@page import="org.apache.commons.lang.StringUtils"%>
<%@page import="newx.menu.MenuService"%>
<html>
    <head>
        <title>Untitled Document</title>
        <link rel="stylesheet" href="<%=request.getContextPath()%>/jsp/framework/default.css" type="text/css">
        <link href="<%=request.getContextPath()%>/jsp/framework/default1.css" rel="stylesheet" type="text/css">
    </head>
<script type="text/javascript">
function HideOrShowTop(){
    var showtop = document.getElementsByName("showtop")[0];
    //var btnHide = document.all.item("btnHide");
    var pic = document.getElementsByName("pictop")[0];
        if(showed.value!=null){
            if(showtop.value=="true"){
                window.parent.document.getElementsByName("topFrame")[0].rows="0,0,35,*";
                showtop.value="false";
                pic.src="<%=request.getContextPath()%>/jsp/framework/images/show_banner.gif";    
                pic.title="显示横幅栏";
            }else{
                window.parent.document.getElementsByName("topFrame")[0].rows="0,49,35,*";
                showtop.value="true";
                pic.src="<%=request.getContextPath()%>/jsp/framework/images/hide_banner.gif";
                pic.title="隐藏横幅栏";
            }
        }else{
            alert("Error");
        }
}

function ShowHide(tableid,topName,url){
   //eval("var obj = document.all."+tableid+".className");
   var aTD = document.getElementsByTagName("TD");
   var len = aTD.length;
   //alert("len="+len);
   for(var i=0;i<len;i++){
    //alert("i:"+aTD[i].className);
    if(aTD[i].className=="topo"){
        aTD[i].className="topover";
    }
    if(aTD[i].id==tableid){
        aTD[i].className="topo";
    }
    
   }
   //eval("document.all."+tableid+".className=\"topo\";");
   // var navFrameDoc = window.parent.frames("navigation").document;
   var navFrameDoc = window.parent.document.getElementsByName("navigation")[0].contentWindow.document;
   var tables = navFrameDoc.getElementsByTagName("div");
   for (i=0; i<tables.length; i++) {
      if (tables[i].getAttribute("name") == "TOP" && tables[i].id==tableid) {
         tables[i].style.display="";
      }
      else if (tables[i].getAttribute("name")=="TOP" && tables[i].id!==tableid) {
         tables[i].style.display="none";
      }
   }
   if (url != "" && url =="./blank.jsp"){
        //url = "../../blank.jsp";
        url = "<%=request.getContextPath()%>/action/MainAction?ActionType=blank";
   }
   if (url != "" && url =="./index.jsp"){
        url = "<%=request.getContextPath()%>/action/MainAction?ActionType=welcome";
   }
   if (url!=""){
      window.parent.document.getElementsByName("workspace")[0].contentWindow.open(url,"_self","",false);
   }
}

function relogon(){
    window.top.location.href="<%=request.getContextPath()%>/quit.jsp";
}

function mpass(){
    var url = "<%=request.getContextPath()%>/action/MainAction?ActionType=passmdy&from=topIcon";
    window.parent.frames("workspace").open(url,"_self","",false);
    
}
</script>
<%
   String menu = MenuService.getInstance().getTopMenu();
   menu = StringUtils.replace(menu,"rootdir",request.getContextPath());
%>

<script type="text/javascript">  
var Tweek,Tmonth;
var Tday=new Date(); 
//取今天的日期，并赋给变量Tday
switch(Tday.getDay())
//getday函数返回星期几,0为星期日
{
case 1:Tweek="星期一";break;
case 2:Tweek="星期二";break;
case 3:Tweek="星期三";break;
case 4:Tweek="星期四";break;
case 5:Tweek="星期五";break;
case 6:Tweek="星期六";break;
case 0:Tweek="星期日";break;
}
Tmonth =Tday.getMonth() + 1;
timeStr = Tday.getYear()+"."+Tmonth+"."+Tday.getDate()+""+Tweek;
</script>

    <body leftmargin="0" topmargin="0">
<table width="100%" height="35" border="0" cellpadding="0" cellspacing="0" background="<%=request.getContextPath()%>/jsp/framework/images/topmenu_bg2.jpg">
  <tr> 
    <td width="50px"><div align="center"><img name="pictop" style="cursor:hand" src="<%=request.getContextPath()%>/jsp/framework/images/hide_banner.gif" width="23" height="34" onClick="HideOrShowTop()" title="隐藏横幅栏"> 
        <input name="showed" type="hidden" value="true" id="showed" width="12">
        <input name="showtop" type="hidden" value="true" id="showtop" width="12">
      </div></td>
    <td width="180px" align="center" nowrap><font style="color:black;fontWeight=BOLD;font-size:12px;"> 测试
      <span category="UserName"></span>&nbsp; <script language="javascript">document.write(timeStr);</script></font></td>
    <td valign="top">&nbsp;</td>
    <td width="100%" valign="middle">
        <TABLE cellSpacing=0 cellPadding=0 border=0>
          <TR> 
            <%=menu %>
          </TR>
        </TABLE>
    </td>

     <td>
        <img src="images/p_l.gif" onclick="javascript:prior();" width="42" height="35" border="0" style="cursor:hand;">
        </td><td>
        <img src="images/p_r.gif" onclick="javascript:next();" width="42" height="35" border="0" style="cursor:hand;">
     </td>  
            <td><img src="images/home.gif" width="42" height="35" style="cursor:hand" title="首页" onclick="javascript:ShowHide('000000','index','./index.jsp');"></td>
            <td><img src="images/mpass.gif" width="42" height="35" style="cursor:hand" title="修改密码" onclick="javascript:mpass();"></td>
            <td><img src="images/btnRelogon.gif" width="42" height="35" style="cursor:hand" title="重新登录" onclick="relogon();"></td>            
            <td><img src="images/logout.jpg" width="42" height="35" style="cursor:hand" title="退出系统" onclick="window.parent.close();"></td>
            <td><img src="images/help.jpg" width="42" height="35" style="cursor:hand" onClick="window.open('help.jsp');" title="帮助"></td>
  </tr>
</table>
</body>


<script language="JavaScript">
var iFirst = 0;
var iLast = 4;
/*返回空一级菜单数*/
function getNextNum(){
    var tempLast = iLast;
    var returnValue = 0;
    for(var i = 0; i<5; i++){
        tempLast++;
        if(ids[tempLast]==null){
            returnValue++
        }
    }
    return returnValue;
}
/*返回空一级菜单数*/
function getBackNum(){
    var tempFirst = iFirst;
    var returnValue = 0;
    for(var i = 0; i<5; i++){
        tempFirst--;
        if(ids[tempFirst]==null){
            returnValue++
        }
    }
    return returnValue;
}

function next(){
     if (iLast>=ids.length-1) return;
     
     var circleTime = getNextNum();
     if(circleTime<5 && ids.length >5){
        iLast = iLast - circleTime;
        iFirst = iFirst - circleTime;
     }
     for(var i=0;i<5;i++){
         iLast = ++iLast;
         if(ids[iLast]!=null){
            document.all.item(ids[iLast]).style.display="";
         }
         if(ids[iFirst]!=null){  
            document.all.item(ids[iFirst]).style.display="none";
         }
         iFirst++;
     }
}
function prior(){
    if (iFirst<=0) return;
    
     var circleTime = getBackNum();
     if(circleTime<5 && ids.length >5){
        iLast = iLast + circleTime;
        iFirst = iFirst + circleTime;
     }
    for(var i=0;i<5;i++){
        iFirst = --iFirst;
        if(ids[iFirst]!=null){      
            document.all.item(ids[iFirst]).style.display="";
        }
        if(ids[iLast]!=null){
            document.all.item(ids[iLast]).style.display="none";
        }
        iLast--;
  }
}
</script>
</html>
