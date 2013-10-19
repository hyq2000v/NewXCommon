function LEMIS(){
    this.WEB_APP_NAME  = "lemis";
}
var lemis = new LEMIS();






function getAlldata(obj){
    var row="";
    var flag=0;
    if(obj.length){
        for (i=0; i<obj.length; i++ ){
            if ( obj(i).type != "submit" && obj(i).type != "reset" && obj(i).type != "button"){
                if(obj(i).type =="radio" || obj(i).type =="checkbox"){
                    if (obj(i).checked){
                        flag=1;
                    }else{
                        flag=0;
                    }
                }else{
                    if(flag==1){
                        var name=obj(i).name;
                        var value=obj(i).value;
                        row=row+name+"="+value+"&";
                    }
                }
            }
        }
    }else{
      if ( obj.type != "submit" && obj.type != "reset" && obj.type != "button"){
                if(obj.type =="radio" || obj.type =="checkbox"){
                    if (obj.checked){
                        flag=1;
                    }else{
                        flag=0;
                    }
                }else{
                    if(flag==1){
                        var name=obj.name;
                        var value=obj.value;
                        row=row+name+"="+value+"&";
                    }
                }
            }
    }
    
    return row;
}


function clearForm(obj,aryDef){
  if(obj.length){
    for(var i = 0; i < obj.length; i++){
        if ( obj(i).type != "submit" && obj(i).type != "reset" && obj(i).type != "button" ){
          if(obj(i).type == "hidden"){
            if(obj(i).name == "aaa020" || obj(i).name == "aca111"){
                obj(i).value='';
            }
          }else{
          	if(!isInAry(obj(i).name,aryDef))
	            obj(i).value='';
          }
        }
    }
  }else{
    if (obj.type != "submit" && obj.type != "reset" && obj.type != "button" ){
            if(obj.type == "hidden"){
                if(obj.name == "aaa020" || obj.name == "aca111"){
                    obj.value='';
                }
            }else{
             	if(!isInAry(obj(i).name,aryDef))
		            obj.value='';
                
            }
    }
  }
}

function isInAry(name,ary){
	for(var i = 0; i < ary.length; i++){
		if(name == ary[i]){
			return true;
			break;
		}
	}
	return false;
}
function resetForm(obj){
	clearForm(obj,new Array());
}
function replaceStr(str)
{
    str = str.replace(/%/g,"%25");
    str = str.replace(/&/g,"%26");
    str = str.replace(/\\/g,"&#92;");
    str = str.replace(/</g,"&#60;");
    str = str.replace(/>/g,"&#62;");
    str = str.replace(/\"/g,"&#34;");
    str = str.replace(/ /g,"&nbsp;");

    return str;
}



function checkValue(formObj){
    var obj;
    var form = formObj;
    for(i=0;i<form.elements.length; i++){

         obj=form[i];

            if(obj.isEAF=="true"){

            if(obj.type != "submit" && obj.type != "reset" && obj.type != "button" )
                if(!validate(obj)){
                    return false;
                 }
         }
    }
    return true;
}



function validate(obj){
  if(!obj.validate()){
    try{
        obj.focus();
    }catch(e){
    }
    return false;
  }
  return true;
}



function preCheckForBatch(){
   var obj = document.all("tableform");
    if(obj.length){
        for (i=0; i<obj.length; i++ ){
            if ( obj(i).type != "submit" && obj(i).type != "reset" && obj(i).type != "button"){
                if(obj(i).type =="radio" || obj(i).type =="checkbox"){
                    if (obj(i).checked){
                        flag=1;
                    }else{
                        flag=0;
                    }
                }else{
                    if(1 == flag && "true" == obj(i).isEAF){
                         if(!validate(obj(i))){
                           return false;
                         }
                    }
                }
            }
        }
    }else{
      if ( obj.type != "submit" && obj.type != "reset" && obj.type != "button"){
                if(obj.type =="radio" || obj.type =="checkbox"){
                    if (obj.checked){
                        flag=1;
                    }else{
                        flag=0;
                    }
                }else{
                    if(1 == flag && "true" == obj.isEAF){
                         if(!validate(obj)){
                           return false;
                         }
                    }
                }
            }
    }
    return true;
}




function newBatch(){
   var obj = document.all("tableform");
    if(obj.length){
        for (i=0; i<obj.length; i++ ){
            if ( obj(i).type != "submit" && obj(i).type != "reset" && obj(i).type != "button"){
                if(obj(i).type =="radio" || obj(i).type =="checkbox"){
                    if (obj(i).checked){
                        obj(i).checked = false;
                    }
                }else{
                  if("hidden" != obj(i).type){
                    obj(i).value='';
                  }
                }
            }
        }
    }else{
      if ( obj.type != "submit" && obj.type != "reset" && obj.type != "button"){
                if(obj.type =="radio" || obj.type =="checkbox"){
                    if (obj.checked){
                        obj.checked = false;
                    }
                }else{
                   if("hidden" != obj.type){
                    obj.value='';
                  }
                }
      }
    }
}



function page_init()
{

}
function selectall(obj)
{
    if(null ==obj) return false;
 var num=obj.length;
  if(document.all("checkall").checked){
    if(num==null){obj.checked=true;}
    else{
       for (var i=0;i<num;i++){
         if(!obj[i].disabled){
            obj[i].checked=true;
         }
       }
    }
    }
  else
  {
   if(num==null){obj.checked=false;}
   else{
     for (var i=0;i<num;i++)
      obj[i].checked=false;
  }
  }
}

function checkItem(checkListName, controlCheck)
{
 var aryChecked = document.all(checkListName);
 if (aryChecked != null)
 {
  if (aryChecked.length != null && aryChecked.length > 0)
  {
   var nCount = 0;
   for (var i = 0; i < aryChecked.length; i ++)
   {
    if (aryChecked[i].checked)
        nCount ++;
   }
   if (nCount == aryChecked.length) {
       controlCheck.checked = true;
    }  else{
       controlCheck.checked = false;
    }
  }
  else
  {
   controlCheck.checked = aryChecked.checked;
  }
 }
}


function editObj(name) {
    var checkObj = document.all(name);
    if (checkObj) {
      if (checkObj.length) {
        for (var i=0,j=0;i<checkObj.length && j<=2;i++) {
          if (checkObj[i].checked) {
            j++;
          }
        }
        if (j > 1) {
          alert("只能选择一条业务数据！");
          return false;
        } else if (j == 0) {
          alert("请选择业务数据！");
          return false;
        }
      } else {
        if (! checkObj.checked) {
          alert("请选择业务数据");
          return false;
        }
      }
    } else {
      alert("当前没有可操作业务数据！");
      return false;
    }

    return true;
  }



function delObj(name) {
    var checkObj = document.all(name);   
    if (checkObj) {
      if (checkObj.length) {
        for (var i=0,j=0;i<checkObj.length;i++) {
          if (checkObj[i].checked) {
            j++;
            break;
          }
        }
        if (j == 0) {
          alert("请选择业务数据！");
          return false;
        }
      } else {
        if (!checkObj.checked) {
          alert("请选择业务数据！");
          return false;
        }
      }
    } else {
      alert("当前没有可操作的业务数据！");
      return false;
    }
     return true;
  }




function getRowData(obj){
    
    var obj_col=obj.parentElement;
    if (obj_col==null)
    {
        return;
    }
    
    var obj_row=obj_col.parentElement;
    if (obj_row==null)
    {
        return;
    }
    
    var rowData=new Array();
    var iLength=obj_row.childNodes.length;
    var iNum=0;
    for (var i=0;i<iLength;i++)
    {
        
        rowData[iNum]=obj_row.childNodes(i).innerText;
        iNum++;
    }
    return rowData;
}


function getEditData(name){
  var obj=document.all.tags("input");
  var rowdata = null;
    var str="";
    for(var i=0;i<obj.length;i++)
    {
      if(obj[i].type == "checkbox"){

        if( obj[i].name == name && obj[i].checked){
            rowdata = getRowData(obj[i]);
              break;
        }
      }
    }
  return rowdata;
}






function checkRadio(objRadio){
    if(objRadio==undefined)
    return null;
    if(objRadio.length==undefined){
        return objRadio.checked;
    }else{
        for(var i=0;i<objRadio.length;i++){
         if(objRadio[i].checked)
            return true;
        }
        return false;
    }
}






function checkRadio(objRadio){
    if(objRadio==undefined)
    return true;
    if(objRadio.length==undefined){
        return objRadio.checked;
    }else{
        for(var i=0;i<objRadio.length;i++){
         if(objRadio[i].checked)
            return true;
        }
        return false;
    }
}



var bMoveable=true;     
var regionTree=false;
var workTypeTree=false;
var calendar=false;
var _VersionInfo="Version:2.0&#13;2.0作者:walkingpoison&#13;1.0作者: F.R.Huang(meizz)&#13;MAIL: meizz@hzcnc.com"    


var strFrame;       
document.writeln('<iframe id=meizzDateLayer Author=wayx frameborder=0 style="position: absolute; width: 144; height: 211; z-index: 9998; display: none"></iframe>');
strFrame='<style>';
strFrame+='INPUT.button{BORDER-RIGHT: #8FB1F3 1px solid;BORDER-TOP: #8FB1F3 1px solid;BORDER-LEFT: #8FB1F3 1px solid;';
strFrame+='BORDER-BOTTOM: #8FB1F3 1px solid;BACKGROUND-COLOR: #fff8ec;font-family:宋体;}';
strFrame+='TD{FONT-SIZE: 9pt;font-family:宋体;}';
strFrame+='</style>';
strFrame+='<scr' + 'ipt>';
strFrame+='var datelayerx,datelayery;   /*存放日历控件的鼠标位置*/';
strFrame+='var bDrag;   /*标记是否开始拖动*/';
strFrame+='function document.onmousemove()  /*在鼠标移动事件中，如果开始拖动日历，则移动日历*/';
strFrame+='{if(bDrag && window.event.button==1)';
strFrame+=' {var DateLayer=parent.document.all.meizzDateLayer.style;';
strFrame+='     DateLayer.posLeft += window.event.clientX-datelayerx;/*由于每次移动以后鼠标位置都恢复为初始的位置，因此写法与div中不同*/';
strFrame+='     DateLayer.posTop += window.event.clientY-datelayery;}}';
strFrame+='function DragStart()     /*开始日历拖动*/';
strFrame+='{var DateLayer=parent.document.all.meizzDateLayer.style;';
strFrame+=' datelayerx=window.event.clientX;';
strFrame+=' datelayery=window.event.clientY;';
strFrame+=' bDrag=true;}';
strFrame+='function DragEnd(){      /*结束日历拖动*/';
strFrame+=' bDrag=false;}';
strFrame+='</scr' + 'ipt>';
strFrame+='<div style="z-index:9999;position: absolute; left:0; top:0;" onselectstart="return false"><span id=tmpSelectYearLayer Author=wayx style="z-index: 9999;position: absolute;top: 3; left: 19;display: none"></span>';
strFrame+='<span id=tmpSelectMonthLayer Author=wayx style="z-index: 9999;position: absolute;top: 3; left: 78;display: none"></span>';
strFrame+='<table border=1 cellspacing=0 cellpadding=0 width=142 height=160 bordercolor=#8FB1F3 bgcolor=#8FB1F3 Author="wayx">';
strFrame+='  <tr Author="wayx"><td width=142 height=23 Author="wayx" bgcolor=#FFFFFF><table border=0 cellspacing=1 cellpadding=0 width=140 Author="wayx" height=23>';
strFrame+='      <tr align=center Author="wayx"><td width=16 align=center bgcolor=#8FB1F3 style="font-size:12px;cursor: hand;color: #ffffff" ';
strFrame+='        onclick="parent.meizzPrevM()" title="向前翻 1 月" Author=meizz><b Author=meizz>&lt;</b>';
strFrame+='        </td><td width=60 align=center style="font-size:12px;cursor:default" Author=meizz ';
strFrame+='onmouseover="style.backgroundColor=\'#FFD700\'" onmouseout="style.backgroundColor=\'white\'" ';
strFrame+='onclick="parent.tmpSelectYearInnerHTML(this.innerText.substring(0,4))" title="点击这里选择年份"><span Author=meizz id=meizzYearHead></span></td>';
strFrame+='<td width=48 align=center style="font-size:12px;cursor:default" Author=meizz onmouseover="style.backgroundColor=\'#FFD700\'" ';
strFrame+=' onmouseout="style.backgroundColor=\'white\'" onclick="parent.tmpSelectMonthInnerHTML(this.innerText.length==3?this.innerText.substring(0,1):this.innerText.substring(0,2))"';
strFrame+='        title="点击这里选择月份"><span id=meizzMonthHead Author=meizz></span></td>';
strFrame+='        <td width=16 bgcolor=#8FB1F3 align=center style="font-size:12px;cursor: hand;color: #ffffff" ';
strFrame+='         onclick="parent.meizzNextM()" title="向后翻 1 月" Author=meizz><b Author=meizz>&gt;</b></td></tr>';
strFrame+='    </table></td></tr>';
strFrame+='  <tr Author="wayx"><td width=142 height=18 Author="wayx">';
strFrame+='<table border=1 cellspacing=0 cellpadding=0 bgcolor=#8FB1F3 ' + (bMoveable? 'onmousedown="DragStart()" onmouseup="DragEnd()"':'');
strFrame+=' BORDERCOLORLIGHT=#8FB1F3 BORDERCOLORDARK=#FFFFFF width=140 height=20 Author="wayx" style="cursor:' + (bMoveable ? 'move':'default') + '">';
strFrame+='<tr Author="wayx" align=center valign=bottom><td style="font-size:12px;color:#FFFFFF" Author=meizz>日</td>';
strFrame+='<td style="font-size:12px;color:#FFFFFF" Author=meizz>一</td><td style="font-size:12px;color:#FFFFFF" Author=meizz>二</td>';
strFrame+='<td style="font-size:12px;color:#FFFFFF" Author=meizz>三</td><td style="font-size:12px;color:#FFFFFF" Author=meizz>四</td>';
strFrame+='<td style="font-size:12px;color:#FFFFFF" Author=meizz>五</td><td style="font-size:12px;color:#FFFFFF" Author=meizz>六</td></tr>';
strFrame+='</table></td></tr><!-- Author:F.R.Huang(meizz) http://www.meizz.com/ mail: meizz@hzcnc.com 2002-10-8 -->';
strFrame+='  <tr Author="wayx"><td width=142 height=120 Author="wayx">';
strFrame+='    <table border=1 cellspacing=2 cellpadding=0 BORDERCOLORLIGHT=#8FB1F3 BORDERCOLORDARK=#FFFFFF bgcolor=#fff8ec width=140 height=120 Author="wayx">';
var n=0; for (j=0;j<5;j++){ strFrame+= ' <tr align=center Author="wayx">'; for (i=0;i<7;i++){
strFrame+='<td width=20 height=20 id=meizzDay'+n+' style="font-size:12px" Author=meizz onclick=parent.meizzDayClick(this.innerText,0)></td>';n++;}
strFrame+='</tr>';}
strFrame+='      <tr align=center Author="wayx">';
for (i=35;i<39;i++)strFrame+='<td width=20 height=20 id=meizzDay'+i+' style="font-size:12px" Author=wayx onclick="parent.meizzDayClick(this.innerText,0)"></td>';
strFrame+='        <td colspan=3 align=right Author=meizz><span onclick=parent.closeLayer() style="font-size:12px;cursor: hand"';
strFrame+='         Author=meizz title="' + _VersionInfo + '"><u>关闭</u></span>&nbsp;</td></tr>';
strFrame+='    </table></td></tr><tr Author="wayx"><td Author="wayx">';
strFrame+='        <table border=0 cellspacing=1 cellpadding=0 width=100% Author="wayx" bgcolor=#FFFFFF>';
strFrame+='          <tr Author="wayx"><td Author=meizz align=left><input Author=meizz type=button class=button value="<<" title="向前翻 1 年" onclick="parent.meizzPrevY()" ';
strFrame+='             onfocus="this.blur()" style="font-size: 12px; height: 20px"><input Author=meizz class=button title="向前翻 1 月" type=button ';
strFrame+='             value="< " onclick="parent.meizzPrevM()" onfocus="this.blur()" style="font-size: 12px; height: 20px"></td><td ';
strFrame+='             Author=meizz align=center><input Author=meizz type=button class=button value=今日 onclick="parent.meizzToday()" ';
strFrame+='             onfocus="this.blur()" title="当前日期" style="font-size: 12px; height: 20px; cursor:hand"></td><td ';
strFrame+='             Author=meizz align=right><input Author=meizz type=button class=button value=" >" onclick="parent.meizzNextM()" ';
strFrame+='             onfocus="this.blur()" title="向后翻 1 月" class=button style="font-size: 12px; height: 20px"><input ';
strFrame+='             Author=meizz type=button class=button value=">>" title="向后翻 1 年" onclick="parent.meizzNextY()"';
strFrame+='             onfocus="this.blur()" style="font-size: 12px; height: 20px"></td>';
strFrame+='</tr></table></td></tr></table></div>';

window.frames.meizzDateLayer.document.writeln(strFrame);
window.frames.meizzDateLayer.document.close();      



var outObject;
var outButton;      
var outDate="";     
var odatelayer=window.frames.meizzDateLayer.document.all;       
function setday(tt,obj) 
{
    if (arguments.length >  2){alert("对不起！传入本控件的参数太多！");return;}
    if (arguments.length == 0){alert("对不起！您没有传回本控件任何参数！");return;}
   calendar=true;       
   lemisTree=false;     


    var dads  = document.all.meizzDateLayer.style;
    var th = tt;
    var ttop  = tt.offsetTop;     
    var thei  = tt.clientHeight;  
    var tleft = tt.offsetLeft;    
    var ttyp  = tt.type;          
    while (tt = tt.offsetParent){ttop+=tt.offsetTop; tleft+=tt.offsetLeft;}
    dads.top  = (ttyp=="image")? ttop+thei : ttop+thei+6;
    dads.left = tleft;
    outObject = (arguments.length == 1) ? th : obj;
    outButton = (arguments.length == 1) ? null : th;    
    
    var reg = /^(\d+)-(\d{1,2})-(\d{1,2})$/;
    var r = outObject.value.match(reg);
    if(r!=null){
        r[2]=r[2]-1;
        var d= new Date(r[1], r[2],r[3]);
        if(d.getFullYear()==r[1] && d.getMonth()==r[2] && d.getDate()==r[3]){
            outDate=d;      
        }
        else outDate="";
            meizzSetDay(r[1],r[2]+1);
    }
    else{
        outDate="";
        meizzSetDay(new Date().getFullYear(), new Date().getMonth() + 1);
    }
    dads.display = '';

    event.returnValue=false;
}

var MonHead = new Array(12);               
    MonHead[0] = 31; MonHead[1] = 28; MonHead[2] = 31; MonHead[3] = 30; MonHead[4]  = 31; MonHead[5]  = 30;
    MonHead[6] = 31; MonHead[7] = 31; MonHead[8] = 30; MonHead[9] = 31; MonHead[10] = 30; MonHead[11] = 31;

var meizzTheYear=new Date().getFullYear(); 
var meizzTheMonth=new Date().getMonth()+1; 
var meizzWDay=new Array(39);               

function document.onclick(){ 
  with(window.event)
  {
      if(workTypeTree){
          if (srcElement.getAttribute("Author")!="zhansk" && srcElement != workType_outObject1){
              regionTree=false;
              workTypeTree=false;
              calendar=false;
              workTypeTree_close();
            }
      }else if(regionTree){
          if (srcElement.getAttribute("Author")!="zhansk" && srcElement != region_outObject1){
              regionTree=false;
              workTypeTree=false;
              calendar=false;
              regionTree_close();
            }
      }else if(calendar){
          if (srcElement.getAttribute("Author")!="wayx" && srcElement != outObject && srcElement != outButton)
          {
              regionTree=false;
              workTypeTree=false;
              calendar=false;
              closeLayer();
          }
      }
  }
}

function document.onkeyup()     
  {
    if (window.event.keyCode==27){
        if(outObject)outObject.blur();
        closeLayer();
    }
    else if(document.activeElement)
        if(document.activeElement.getAttribute("Author")==null && document.activeElement != outObject && document.activeElement != outButton)
        {
            closeLayer();
        }
  }

function meizzWriteHead(yy,mm)  
  {
    odatelayer.meizzYearHead.innerText  = yy + " 年";
    odatelayer.meizzMonthHead.innerText = mm + " 月";
  }

function tmpSelectYearInnerHTML(strYear) 
{
  if (strYear.match(/\D/)!=null){alert("年份输入参数不是数字！");return;}
  var m = (strYear) ? strYear : new Date().getFullYear();
  if (m < 1000 || m > 9999) {alert("年份值不在 1000 到 9999 之间！");return;}
  var n = m - 100;
  if (n < 1000) n = 1000;
  if (n + 26 > 9999) n = 9974;
  var s = "<select Author=meizz name=tmpSelectYear style='font-size: 12px' "
     s += "onblur='document.all.tmpSelectYearLayer.style.display=\"none\"' "
     s += "onchange='document.all.tmpSelectYearLayer.style.display=\"none\";"
     s += "parent.meizzTheYear = this.value; parent.meizzSetDay(parent.meizzTheYear,parent.meizzTheMonth)'>\r\n";
  var selectInnerHTML = s;
  for (var i = n; i < n + 150; i++)
  {
    if (i == m)
       {selectInnerHTML += "<option Author=wayx value='" + i + "' selected>" + i + "年" + "</option>\r\n";}
    else {selectInnerHTML += "<option Author=wayx value='" + i + "'>" + i + "年" + "</option>\r\n";}
  }
  selectInnerHTML += "</select>";
  odatelayer.tmpSelectYearLayer.style.display="";
  odatelayer.tmpSelectYearLayer.innerHTML = selectInnerHTML;
  odatelayer.tmpSelectYear.focus();
}

function tmpSelectMonthInnerHTML(strMonth) 
{
  if (strMonth.match(/\D/)!=null){alert("月份输入参数不是数字！");return;}
  var m = (strMonth) ? strMonth : new Date().getMonth() + 1;
  var s = "<select Author=meizz name=tmpSelectMonth style='font-size: 12px' "
     s += "onblur='document.all.tmpSelectMonthLayer.style.display=\"none\"' "
     s += "onchange='document.all.tmpSelectMonthLayer.style.display=\"none\";"
     s += "parent.meizzTheMonth = this.value; parent.meizzSetDay(parent.meizzTheYear,parent.meizzTheMonth)'>\r\n";
  var selectInnerHTML = s;
  for (var i = 1; i < 13; i++)
  {
    if (i == m)
       {selectInnerHTML += "<option Author=wayx value='"+i+"' selected>"+i+"月"+"</option>\r\n";}
    else {selectInnerHTML += "<option Author=wayx value='"+i+"'>"+i+"月"+"</option>\r\n";}
  }
  selectInnerHTML += "</select>";
  odatelayer.tmpSelectMonthLayer.style.display="";
  odatelayer.tmpSelectMonthLayer.innerHTML = selectInnerHTML;
  odatelayer.tmpSelectMonth.focus();
}

function closeLayer()               
{
    regionTree=false;
    workTypeTree=false;
    calendar=false;
    document.all.meizzDateLayer.style.display="none";
}

function IsPinYear(year)            
  {
    if (0==year%4&&((year%100!=0)||(year%400==0))) return true;else return false;
  }

function GetMonthCount(year,month)  
  {
    var c=MonHead[month-1];if((month==2)&&IsPinYear(year)) c++;return c;
  }

function GetDOW(day,month,year)     
  {
    var dt=new Date(year,month-1,day).getDay()/7; return dt;
  }

function meizzPrevY()  
  {
    if(meizzTheYear > 999 && meizzTheYear <10000){meizzTheYear--;}
    else{alert("年份超出范围（1000-9999）！");}
    meizzSetDay(meizzTheYear,meizzTheMonth);
  }
function meizzNextY()  
  {
    if(meizzTheYear > 999 && meizzTheYear <10000){meizzTheYear++;}
    else{alert("年份超出范围（1000-9999）！");}
    meizzSetDay(meizzTheYear,meizzTheMonth);
  }
function meizzToday()  
  {
    var today;
    meizzTheYear = new Date().getFullYear();
    meizzTheMonth = new Date().getMonth()+1;
    today=new Date().getDate();






    meizzSetDay(meizzTheYear,meizzTheMonth);
    if(outObject){







            if(meizzTheMonth < 10)
                meizzTheMonth = "0" + meizzTheMonth;
            if(today < 10)
                today = "0" + today;
            outObject.value=meizzTheYear + "-" + meizzTheMonth + "-" + today;

    }
    closeLayer();
  }
function meizzPrevM()  
  {
    if(meizzTheMonth>1){meizzTheMonth--}else{meizzTheYear--;meizzTheMonth=12;}
    meizzSetDay(meizzTheYear,meizzTheMonth);
  }
function meizzNextM()  
  {
    if(meizzTheMonth==12){meizzTheYear++;meizzTheMonth=1}else{meizzTheMonth++}
    meizzSetDay(meizzTheYear,meizzTheMonth);
  }

function meizzSetDay(yy,mm)   
{
  meizzWriteHead(yy,mm);
  
  meizzTheYear=yy;
  meizzTheMonth=mm;

  for (var i = 0; i < 39; i++){meizzWDay[i]=""};  
  var day1 = 1,day2=1,firstday = new Date(yy,mm-1,1).getDay();  
  for (i=0;i<firstday;i++)meizzWDay[i]=GetMonthCount(mm==1?yy-1:yy,mm==1?12:mm-1)-firstday+i+1  
  for (i = firstday; day1 < GetMonthCount(yy,mm)+1; i++){meizzWDay[i]=day1;day1++;}
  for (i=firstday+GetMonthCount(yy,mm);i<39;i++){meizzWDay[i]=day2;day2++}
  for (i = 0; i < 39; i++)
  { var da = eval("odatelayer.meizzDay"+i)     
    if (meizzWDay[i]!="")
      {
        
        da.borderColorLight="#8FB1F3";
        da.borderColorDark="#FFFFFF";
        if(i<firstday)      
        {
            da.innerHTML="<b><font color=gray>" + meizzWDay[i] + "</font></b>";
            da.title=(mm==1?12:mm-1) +"月" + meizzWDay[i] + "日";
            da.onclick=Function("meizzDayClick(this.innerText,-1)");
            if(!outDate)
                da.style.backgroundColor = ((mm==1?yy-1:yy) == new Date().getFullYear() &&
                    (mm==1?12:mm-1) == new Date().getMonth()+1 && meizzWDay[i] == new Date().getDate()) ?
                     "#FFD700":"#e0e0e0";
            else
            {
                da.style.backgroundColor =((mm==1?yy-1:yy)==outDate.getFullYear() && (mm==1?12:mm-1)== outDate.getMonth() + 1 &&
                meizzWDay[i]==outDate.getDate())? "#00ffff" :
                (((mm==1?yy-1:yy) == new Date().getFullYear() && (mm==1?12:mm-1) == new Date().getMonth()+1 &&
                meizzWDay[i] == new Date().getDate()) ? "#FFD700":"#e0e0e0");
                
                if((mm==1?yy-1:yy)==outDate.getFullYear() && (mm==1?12:mm-1)== outDate.getMonth() + 1 &&
                meizzWDay[i]==outDate.getDate())
                {
                    da.borderColorLight="#FFFFFF";
                    da.borderColorDark="#8FB1F3";
                }
            }
        }
        else if (i>=firstday+GetMonthCount(yy,mm))      
        {
            da.innerHTML="<b><font color=gray>" + meizzWDay[i] + "</font></b>";
            da.title=(mm==12?1:mm+1) +"月" + meizzWDay[i] + "日";
            da.onclick=Function("meizzDayClick(this.innerText,1)");
            if(!outDate)
                da.style.backgroundColor = ((mm==12?yy+1:yy) == new Date().getFullYear() &&
                    (mm==12?1:mm+1) == new Date().getMonth()+1 && meizzWDay[i] == new Date().getDate()) ?
                     "#FFD700":"#e0e0e0";
            else
            {
                da.style.backgroundColor =((mm==12?yy+1:yy)==outDate.getFullYear() && (mm==12?1:mm+1)== outDate.getMonth() + 1 &&
                meizzWDay[i]==outDate.getDate())? "#00ffff" :
                (((mm==12?yy+1:yy) == new Date().getFullYear() && (mm==12?1:mm+1) == new Date().getMonth()+1 &&
                meizzWDay[i] == new Date().getDate()) ? "#FFD700":"#e0e0e0");
                
                if((mm==12?yy+1:yy)==outDate.getFullYear() && (mm==12?1:mm+1)== outDate.getMonth() + 1 &&
                meizzWDay[i]==outDate.getDate())
                {
                    da.borderColorLight="#FFFFFF";
                    da.borderColorDark="#8FB1F3";
                }
            }
        }
        else        
        {
            da.innerHTML="<b>" + meizzWDay[i] + "</b>";
            da.title=mm +"月" + meizzWDay[i] + "日";
            da.onclick=Function("meizzDayClick(this.innerText,0)");     
            
            if(!outDate)
                da.style.backgroundColor = (yy == new Date().getFullYear() && mm == new Date().getMonth()+1 && meizzWDay[i] == new Date().getDate())?
                    "#FFD700":"#e0e0e0";
            else
            {
                da.style.backgroundColor =(yy==outDate.getFullYear() && mm== outDate.getMonth() + 1 && meizzWDay[i]==outDate.getDate())?
                    "#00ffff":((yy == new Date().getFullYear() && mm == new Date().getMonth()+1 && meizzWDay[i] == new Date().getDate())?
                    "#FFD700":"#e0e0e0");
                
                if(yy==outDate.getFullYear() && mm== outDate.getMonth() + 1 && meizzWDay[i]==outDate.getDate())
                {
                    da.borderColorLight="#FFFFFF";
                    da.borderColorDark="#8FB1F3";
                }
            }
        }
        da.style.cursor="hand"
      }
    else{da.innerHTML="";da.style.backgroundColor="";da.style.cursor="default"}
  }
}

function meizzDayClick(n,ex)  
{
  var yy=meizzTheYear;
  var mm = parseInt(meizzTheMonth)+ex;  
    
    if(mm<1){
        yy--;
        mm=12+mm;
    }
    else if(mm>12){
        yy++;
        mm=mm-12;
    }

  if (mm < 10){mm = "0" + mm;}
  if (outObject)
  {
    if (!n) {
      return;}
    if ( n < 10){n = "0" + n;}
    outObject.value= yy + "-" + mm + "-" + n ; 
    closeLayer();
  }
  else {closeLayer(); alert("您所要输出的控件对象并不存在！");}
}














function replaceBlankAll(str){
    str=str.toString();
    if (str=="")
    {
        return;
    }
    var reg=/ /gi;
    return str.replace(reg, "");

}




function replaceBlank(str){
    str=str.toString();
    if (str=="")
    {
        return;
    }
    var reg=/(^\s*|\s*$)/g;
    return str.replace(reg, "");

}






function compareDate(max,min){
    var newMax = strToDate(max);
    var newMin = strToDate(min);
    if (newMax >= newMin){
        return true;
    }else{
        return false;
    }
}





function strToDate(strDate) {
    var tempDate = strDate;
    var index1 = tempDate.indexOf(".");
    if(-1 == index1)
        index1 = tempDate.indexOf("-");
        
    var index2 = tempDate.lastIndexOf(".");
    if(-1 == index2)
        index2 = tempDate.lastIndexOf("-");

    
    if ((-1 != index1) || (-1 != index2)) {
        var year = tempDate.substring(0, index1);
        
        var m = parseInt(tempDate.substring(index1 + 1, index2),10);
        var month = "" + m;
        if(m < 10)
            month = "0" + m;
            
        var d = parseInt(tempDate.substring(index2 + 1, tempDate.length),10);             
        var day = "" + d;
        if(d < 10)
            day = "0" + d;
            
        tempDate = year + month + day;
    } 
    return tempDate;
}





function getStrLength(str){
    var num = str.length;
    var arr = str.match(/[^\x00-\x80]/ig)
    if(arr!=null)num+=arr.length;
    return num
}






function getDateForCard(str){
    var inputStr=str.toString();
    var year;
    var month;
    var day;
    if (inputStr.length==18)
    {
        year=parseInt(inputStr.substring(6,10),10).toString();
        month=parseInt(inputStr.substring(10,12),10).toString();
        day=parseInt(inputStr.substring(12,14),10).toString();
    }else{
        year=parseInt(inputStr.substring(6,8),10).toString();
        year="19"+year;
        month=parseInt(inputStr.substring(8,10),10).toString();
        day=parseInt(inputStr.substring(10,12),10).toString();
    }
    if (month.length==1)
    {
        month="0"+month;
    }
    if (day.length==1)
    {
        day="0"+day;
    }

    return year+month+day;
}





function getSexForCard(str){
    var inputStr=str.toString();
    var sex;
    if (inputStr.length==18)
    {
        sex=inputStr.charAt(16);
        if (sex%2==0)
        {
            return 2;
        }else{
            return 1;
        }
    }else{
        sex=inputStr.charAt(14);
        if (sex%2==0)
        {
            return 2;
        }else{
            return 1;
        }
    }

}





function compareMoney(maxMoney,minMoney){
  var max = 0;
  var min = 0;
  maxMoney = replaceBlank(maxMoney);
  minMoney = replaceBlank(minMoney);
  if(null != maxMoney && "" != maxMoney){
     max = parseInt(maxMoney.replace("￥","").replace(".",""));
  }

  if(null != minMoney && "" != minMoney){
     min = parseInt(minMoney.replace("￥","").replace(".",""));
  }
  if(max >= min){
    return true;
  }else{
    return false;
  }
}







function moveRight(form,leftOption,rightOption,isAll) {
 
 var leftSelect  = document.all(form).all(leftOption);
 var rightSelect = document.all(form).all(rightOption);
 move(leftSelect,rightSelect,isAll);
}







function moveLeft(form,leftOption,rightOption,isAll) {
 var leftSelect  = document.all(form).all(leftOption);
 var rightSelect = document.all(form).all(rightOption);
 move(rightSelect,leftSelect,isAll);
}







function move(fromSelect,toSelect,isAll)  {
 
 fromOptions = fromSelect.options;
 
 var toSelectLength = 0;
 if(toSelect.options) {
    toSelectLength = toSelect.options.length;
 }

if(fromOptions.length){
 if(isAll) {
   for(i=0;i<fromOptions.length;) {
       
       var newOption = new Option(fromOptions[i].text,fromOptions[i].value,toSelectLength++);
       toSelect.add(newOption);
       fromSelect.remove(fromOptions[i].index);
   }
 } else {
   for(i=0;i<fromOptions.length;i++) {
      if(fromOptions[i].selected) {
          
          var newOption =new Option(fromOptions[i].text,fromOptions[i].value,++toSelectLength);
          toSelect.add(newOption);
          fromSelect.remove(fromOptions[i].index);
          i = 0;
      }
   }
 }
}
}



function getSelectedData(form,selectedOption) {
  var selected = document.all(form).all(selectedOption);
  var resultList = "";
  if(selected.length){
   for(i = 0;i < selected.length; i++) {
          resultList += selected[i].value + ";";
   }
  }
  return resultList;
}





function computeForBatchInput(objID){

}





function getInfoByCard(objID){

}




function computeYearMonth(objID){

}

function selectChange(objID){

}



function closeWindow(formName){
   if(confirm("确信要关闭此窗口吗？")){            
    var XMLHTTP = new ActiveXObject("Microsoft.XMLHTTP");
    XMLHTTP.open("POST", "/" + lemis.WEB_APP_NAME + "/cleanSessionAction.do?name=" + formName, false);
    XMLHTTP.send("");
    location.href = "/" + lemis.WEB_APP_NAME + "/Main.htm";
   }
}



var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + 
"abcdefghijklmnopqrstuvwxyz" + 
"0123456789+/="; 


function encode64(inp)
{
var out = ""; 
var chr1, chr2, chr3 = ""; 
var enc1, enc2, enc3, enc4 = ""; 
var i = 0; 

do { 
chr1 = inp.charCodeAt(i++); 
chr2 = inp.charCodeAt(i++); 
chr3 = inp.charCodeAt(i++); 



enc1 = chr1 >> 2;
enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
enc4 = chr3 & 63;

if (isNaN(chr2)) {
enc3 = enc4 = 64;
} else if (isNaN(chr3)) {
enc4 = 64;
}


out = out + keyStr.charAt(enc1) + keyStr.charAt(enc2) + keyStr.charAt(enc3) +
keyStr.charAt(enc4);


chr1 = chr2 = chr3 = "";
enc1 = enc2 = enc3 = enc4 = "";

} while (i < inp.length); 


return out;
}


function decode64(inp)
{
var out = ""; 
var chr1, chr2, chr3 = ""; 
var enc1, enc2, enc3, enc4 = ""; 
var i = 0; 


var base64test = /[^A-Za-z0-9+/=]/g;

if (base64test.exec(inp)) { 
alert("There were invalid base64 characters in the input text.n" +
"Valid base64 characters are A-Z, a-z, 0-9, ?+?, ?/?, and ?=?n" +
"Expect errors in decoding.");
}
inp = inp.replace(/[^A-Za-z0-9+/=]/g, "");

do { 


enc1 = keyStr.indexOf(inp.charAt(i++));
enc2 = keyStr.indexOf(inp.charAt(i++));
enc3 = keyStr.indexOf(inp.charAt(i++));
enc4 = keyStr.indexOf(inp.charAt(i++));


chr1 = (enc1 << 2) | (enc2 >> 4);
chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
chr3 = ((enc3 & 3) << 6) | enc4;


out = out + String.fromCharCode(chr1);

if (enc3 != 64) {
out = out + String.fromCharCode(chr2);
}
if (enc4 != 64) {
out = out + String.fromCharCode(chr3);
}


chr1 = chr2 = chr3 = "";
enc1 = enc2 = enc3 = enc4 = "";

} while (i < inp.length); 


return out;
}


