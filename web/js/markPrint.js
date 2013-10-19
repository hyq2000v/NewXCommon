var z,x,y,temp1,temp2,actdiv,divbcolor,divfcolor;
//结束移动
function readyMove(obj){
   temp1=obj.style.pixelLeft;
   x=event.clientX;
   temp2=obj.style.pixelTop;
   y=event.clientY;
} 
//准备移动
function endMove(obj){
   obj.style.pixelLeft=temp1+event.clientX-x;
   obj.style.pixelTop=temp2+event.clientY-y;
}
//微移
function micMove(obj,direct){
  if(direct == null || direct == ""){
    return;
  }else if(direct == "up"){//上移
     obj.style.pixelTop = obj.style.pixelTop - 1;  
  }else if(direct == "down"){//下移
     obj.style.pixelTop = obj.style.pixelTop + 1;  
  }else if(direct == "left"){//左移
     obj.style.pixelLeft = obj.style.pixelLeft - 1;
  }else if(direct == "right"){//右移
     obj.style.pixelLeft = obj.style.pixelLeft + 1;  
  }	  
}            
//键盘增加改变层的高度和宽度
function micAlter(obj,direct){
   var height = obj.style.height;
   var width = obj.style.width;
   if(direct == null || direct == ""){
      return;
   }else if(direct == "up"){      
      obj.style.height = obj.style.pixelHeight - 1;      
   }else if(direct == "down"){
      obj.style.height = obj.style.pixelHeight + 1;    
   }else if(direct == "left"){
      obj.style.pixelWidth = obj.style.pixelWidth - 1;     
   }else if(direct == "right"){
      obj.style.pixelWidth = obj.style.pixelWidth + 1;
   }
}
//键盘上下左右键移动和改变层的面积
function keyCtrlAction(obj){  
  var key = window.event.keyCode;
  if((event.ctrlKey) && (key==0x26)){
     micMove(obj,'up');
  }else if((event.ctrlKey) && (key==0x28)){
     micMove(obj,'down');
  }else if((event.ctrlKey) && (key==0x25)){
     micMove(obj,'left');
  }else if((event.ctrlKey) && (key==0x27)){
     micMove(obj,'right');
  }else if((event.shiftKey) && (key==0x26)){
     micAlter(obj,'up');
  }else if((event.shiftKey) && (key==0x28)){
     micAlter(obj,'down');  
  }else if((event.shiftKey) && (key==0x25)){
     micAlter(obj,'left');  
  }else if((event.shiftKey) && (key==0x27)){
     micAlter(obj,'right');  
  }
}
//处理鼠标双击事件
function DbCtrlAction(obj){
obj.innerHTML="<input type=text id=mytxt value="+obj.innerText+" onblur=\"hideText(this)\">";
}
function hideText(obj){
var mytxt=obj.value;
obj.parentElement.innerText=mytxt;
}
//格式化字体
function format(what,opt) {   
   //if(document.selecttion == null || document.selecttion == "undefined"){
      //alert(document.selecttion);   
      //return false;
   //}
   //alert("b");
   //var textRangeObj = document.selection.createRange();//当前选择的块对象
   //alert(textRangeObj.htmlText);
   //var text = textRangeObj.text;
   //var htmlText = textRangeObj.htmlText;
   //var parentObj = textRangeObj.parentElement();
   if (opt=="removeFormat"){
     what=opt;
     opt=null;
   }
   if (opt=="CustomFont"){
	  opt = prompt("用何种字体格式化文本?","Geneva, Arial, Sans-Serif");
   }	
   if ((opt=="") && (what=="forecolor")){
	  opt = prompt("用何种颜色格式化文本?","Black");
   }
   if (opt==null){
       document.execCommand(what);
   }else{
       document.execCommand(what,"",opt);
   }
}

//激活一个层
//function actDiv(obj){
  // if(!obj){
    //  return;
   //}
   //divbcolor = obj.style.backgroundColor;//当前层的背景颜色
   //actdiv = obj.id;//当前层ID
  // obj.style.backgroundColor = "#D4D0C8"; //改变当前层的背景  
//}
//激活一个层
function actDiv(obj){
   if(!obj){
      return;
   }
   divbcolor = obj.style.backgroundColor;//当前层的背景颜色
   actdiv = obj.id;//当前层ID
   obj.style.backgroundColor = "#D4D0C8"; //改变当前层的背景 
   try{
      document.ToolBarForm.moveX.value = obj.style.pixelLeft;   
      document.ToolBarForm.moveY.value = obj.style.pixelTop;   
   }catch(e){
   }
   
}
//还原被激活的层
function resetDiv(obj){
   if(!obj){
      return;
   }
   obj.style.backgroundColor = divbcolor;
   actdiv = null;
}
//打印预览
function printPreview(ind){
   if(ind == -1){//非批量打印   
      document.all.WebBrowser.ExecWB(7,1);
   }else{//批量打印
      document.all.WebBrowser[ind].ExecWB(7,1);
   }      
}

function printPreview2(ind){
var obj = window.document.getElementById("ToolBarForm");
   if(obj){
	      obj.removeNode(true);
	   }
  obj = window.document.getElementById("delRow");
   
   if(obj){
	      obj.removeNode(true);
	   }
   if(ind == -1){//非批量打印   
      document.all.WebBrowser.ExecWB(7,1);
   }else{//批量打印
      document.all.WebBrowser[ind].ExecWB(7,1);
   }      
      location.reload();
}
//打印
function printFor(num1,num2,reportNum){
   if(reportNum == -1){//非批量打印
      document.all("Layer0").className = "backgroudprint";
      document.all.WebBrowser.ExecWB(num1,num2);      	
   }else if(reportNum > 1){//批量打印
      for(var i=0;i<reportNum;i++){		 
         document.all("Layer0")[i].className = "backgroudprint";   	     
      }     
      document.all("WebBrowser")[0].ExecWB(num1,num2); 
   }
}

//打印
function printFor2(num1,num2,reportNum){
   var obj = window.document.getElementById("ToolBarForm");
   if(obj){
	      obj.removeNode(true);
	   }
  obj = window.document.getElementById("delRow");
   
   if(obj){
	      obj.removeNode(true);
	   }
	   
   if(reportNum == -1){//非批量打印
      document.all("Layer0").className = "backgroudprint";
      document.all.WebBrowser.ExecWB(num1,num2);      	
   }else if(reportNum > 1){//批量打印
      for(var i=0;i<reportNum;i++){		 
         document.all("Layer0")[i].className = "backgroudprint";   	     
      }     
      document.all("WebBrowser")[0].ExecWB(num1,num2); 
   }
   location.reload();
}

//锁定背景层
function lock(obj){
   var border = obj.style.borderStyle;
   if(border == "inset"){//如果已锁定
      obj.style.borderStyle = "outset";	  
	  eval("document.all('Layer0').onKeyDown = 'keyCtrlAction(" + obj + ")';");	  
	  eval("document.all('Layer0').onFocus = 'actDiv(" + obj + ")';");
	  eval("document.all('Layer0').onBlur = 'resetDiv(" + obj + ")';");
   }else{
      obj.style.borderStyle = "inset";
	  document.all("Layer0").onKeyDown = "";
	  document.all("Layer0").onFocus = "";
	  document.all("Layer0").onBlur = "";   
   }  
}
//保存打印格式,即数据项层到cookie
function savePrintFormat(ind){  
var name="";
var valu=""; 
try{
   var noteId;
   if(ind == -1){//非批量打印
      noteId = document.ToolBarForm.NoteId.value;//报表ID
   }else{//批量打印
      noteId = document.ToolBarForm[ind].NoteId.value;//报表ID
   }
   var i = 0;
   var divId = "Layer" + i;
   var obj;
   if(ind == -1){//非批量打印
      obj = document.all(divId);   
   }else{//批量打印
      obj =  document.all(divId)[ind];   
   }
 
   while(obj){
      name=name+noteId + "_" + divId + "_left"+"||";
      valu=valu+obj.style.pixelLeft+"||";
      name=name+noteId + "_" + divId + "_top"+"||";
      valu=valu+obj.style.pixelTop+"||";
      //SetCookie(noteId + "_" + divId + "_left", obj.style.pixelLeft); 
	  //SetCookie(noteId + "_" + divId + "_top", obj.style.pixelTop);
	  i++;
	  divId = "Layer" + i;
      if(ind == -1){//非批量打印
         obj = document.all(divId);   
      }else{//批量打印
	     if(document.all(divId)){	  	  	  	 
	        obj = document.all(divId)[ind];
	     }else{
	        obj = null;
	     }  
      }
   }
   //alert("name>="+name+"<=valu=>"+valu);
   SetCookie(name,valu);
   alert("保存成功!");
   return true;
 }catch(e){
    alert("保存套打格式失败!");
	return false;
 }  
}


//从cookie中取得当前用户的套打样式刷新页面
function localizeFormat(ind){
	var name="";
	var valu=""; 
  try{
   var noteId;  
   if(ind == -1){//非批量打印
      noteId = document.ToolBarForm.NoteId.value;//报表ID
   }else{//批量打印
      noteId = document.ToolBarForm[ind].NoteId.value;//报表ID
   }	
   var i = 0;
   var divId = "Layer" + i;   
   var obj;
   if(ind == -1){//非批量打印   
      obj = document.all(divId);     	 
   }else{//批量打印
      obj = document.all(divId)[ind];     	 
   }   
   while(obj){
      name=name+noteId + "_" + divId + "_left"+"||";
      name=name+noteId + "_" + divId + "_top"+"||";
      //if(GetCookie(noteId + "_" + divId + "_left") != null){
        // obj.style.pixelLeft = GetCookie(noteId + "_" + divId + "_left"); 	  
	  //}
	  //if(GetCookie(noteId + "_" + divId + "_top") != null){	 
	   //  obj.style.pixelTop = GetCookie(noteId + "_" + divId + "_top");
	  //}  	  
	  i++;
	  divId = "Layer" + i;	
          if(ind == -1){//非批量打印   
	     obj = document.all(divId);
	  }else{//批量打印
	     if(document.all(divId)){	  	  	  	 
	        obj = document.all(divId)[ind];
	     }else{
	        obj = null;
	     }
	  }
   }  
   //var myvl=GetCookie(name);
   //alert(myvl);
   setPrintStyle(name,ind);
   return true;
  }catch(e){
     alert("本地化套打格式出错,请检查模板中各层的属性!");
	 return false;
  } 
}
function setPrintStyle(name,ind){
	var myvl=GetCookie(name);
	if(myvl==null||myvl==""||myvl=="null") return;
	var varray=myvl.split("||");
	var narray=name.split("||");
	for(var i=0;i<varray.length-1;i++){
		var start=narray[i].indexOf("Layer");
		var end1=narray[i].indexOf("_left");
		var end2=narray[i].indexOf("_top");
		//alert("=======>start=====>"+start+">====end1=====>"+end1+"<===end2==>"+end2+"<====>");
		if(end1>0){
		//alert(narray[i].substring(start,end1));
		if(ind==-1) eval(narray[i].substring(start,end1)+".style.pixelLeft="+varray[i]);
		else {
			eval(narray[i].substring(start,end1)+"["+ind+"].style.pixelLeft="+varray[i]);
			}
		}
		else{
		//alert(narray[i].substring(start,end2));
		if(ind==-1) eval(narray[i].substring(start,end2)+".style.pixelTop="+varray[i]);
		else {
			eval(narray[i].substring(start,end2)+"["+ind+"].style.pixelTop="+varray[i]);
			}
		}
	}	
}
/**
 @param reportNum 报表的份数
 **/
function localFormat(reportNum){
  for(var i=0;i<reportNum;i++){
     //alert(i); 	
     localizeFormat(i);
  }
}

//删除本地化套打样式
function resetFormat(ind){
	var name="";
	var valu=""; 
  try{
  var noteId;
   if(ind == -1){//非批量打印
      noteId = document.ToolBarForm.NoteId.value;//报表ID
   }else{//批量打印
      noteId = document.ToolBarForm[ind].NoteId.value;//报表ID
   }   
   var i = 0;
   var divId = "Layer" + i;
   var obj;
   if(ind == -1){//非批量打印
      obj = document.all(divId);   
   }else{//批量打印
      obj = document.all(divId)[ind];   
   }   
   while(obj){
      name=name+noteId + "_" + divId + "_left"+"||";
      name=name+noteId + "_" + divId + "_top"+"||";
      //DelCookie(noteId + "_" + divId + "_left"); 	  
      //DelCookie(noteId + "_" + divId + "_top");
	  i++;
	  divId = "Layer" + i;
      if(ind == -1){//非批量打印
         obj = document.all(divId);   
      }else{//批量打印
         if(document.all(divId)){	  
            obj = document.all(divId)[ind];   
         }else{
            obj = null;
         }   
      }  	  
   }
   DelCookie(name);
   window.location.href = window.location.href;
   return true;
  }catch(e){
     alert("恢复原有套打格式出错!");
	 return false;
  } 
}

function GetCookieVal(offset)
//获得Cookie解码后的值
{	
var endstr = document.cookie.indexOf (";", offset);
if (endstr == -1)
endstr = document.cookie.length;
return unescape(document.cookie.substring(offset, endstr));
}
function SetCookie(name, value)
//设定Cookie值
{
var expdate = new Date();
var argv = SetCookie.arguments;
var argc = SetCookie.arguments.length;
var expires = (argc > 2) ? argv[2] : null;
var path = (argc > 3) ? argv[3] : null;
var domain = (argc > 4) ? argv[4] : null;
var secure = (argc > 5) ? argv[5] : false;
//if(expires!=null) 
expdate.setTime(expdate.getTime() + ( 60 * 30 * 24 * 60 * 60 * 1000 ));
document.cookie = name + "=" + escape (value) + "; expires="+ expdate.toGMTString()
+((path == null) ? "" : ("; path=" + path)) +((domain == null) ? "" : ("; domain=" + domain))
+((secure == true) ? "; secure" : "");
//alert(name + "=" + escape (value) + "; expires="+ expdate.toGMTString()+((path == null) ? "" : ("; path=" + path)) +((domain == null) ? "" : ("; domain=" + domain))+((secure == true) ? "; secure" : ""));
}
function DelCookie(name)
//删除Cookie
{
var exp = new Date();
exp.setTime (exp.getTime() - 1);
var cval = GetCookie (name);
document.cookie = name + "=" + cval + "; expires="+ exp.toGMTString();
}
function GetCookie(name)
//获得Cookie的原始值
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
return null;
}

//页面设置
function setPage(ind){
    if(ind == -1){//非批量套打	
      document.all.WebBrowser.ExecWB(8,1);
    }else{//批量套打
      document.all.WebBrowser[ind].ExecWB(8,1);
    }
}

//关闭窗口
function closeWin(ind){
	window.close();
}

//选定所有的层
function selectAll(obj){
    try{   
	   //alert("a");
       var border = obj.style.borderStyle;
       if(border == "inset"){//如果已全选,变成未选
             obj.style.borderStyle = "outset";	  
    	     var ind = 1;
    		 var divObject = document.all("Layer"+ind);
    		 while(divObject){
    		    divObject.style.backgroundColor = divbcolor;
                divObject.style.backgroundColor = ""; 			
    			ind ++;
    			divObject = document.all("Layer"+ind);
    		 }
       }else if(border == "outset"){//如果未选，变成全选
	         //alert("b");
             obj.style.borderStyle = "inset";	
    	     var ind = 1;
    		 var divObject = document.all("Layer"+ind);
			 //alert(divObject);
    		 while(divObject){
				//alert(ind);
                divbcolor = divObject.style.backgroundColor;//当前层的背景颜色
                divObject.style.backgroundColor = "#D4D0C8"; //改变当前层的背景 
				//alert(ind);
    			ind ++;
    			divObject = document.all("Layer"+ind);		   
    		 }	    
       }  
    }catch(e){   
    }
}

//根据座标值移动层，响应onChange事件
function moveOnNum(obj,moveDirect){
    try{
       var selAllObj = document.all("sellock");
       var border = selAllObj.style.borderStyle;//获取锁的当前状态
       if(border == "inset"){//如果已经全选,依次更改每一层的座标
            if(moveDirect == "X"){
    		    var ind = 1;
    			var oneDivObj = document.all("Layer"+ind);
    			while(oneDivObj){
    			    oneDivObj.style.pixelLeft = oneDivObj.style.pixelLeft + parseInt(obj.value);    						
    				ind ++;
    				oneDivObj = document.all("Layer"+ind);
    			}
    		}else if(moveDirect == "Y"){
    		    var ind = 1;
    			var oneDivObj = document.all("Layer"+ind);
    			while(oneDivObj){
    			    oneDivObj.style.pixelTop = oneDivObj.style.pixelTop + parseInt(obj.value);
    				ind ++;
    				oneDivObj = document.all("Layer"+ind);
    			}		     		
    		}
       }else if(border == "outset"){//如果未全选
           var lastActDivObj = document.all(lastActDiv);
           if(moveDirect == "X"){
               lastActDivObj.style.pixelLeft = obj.value;
           }else if(moveDirect == "Y"){
               lastActDivObj.style.pixelTop = obj.value;
           }
       }  
    }catch(e){
    } 
}
//根据座标值移动层，响应onKeyUp事件
function moveOnNumOnKeyup(obj,moveDirect){
    try{
        var key = window.event.keyCode;
        if(key==0xD && moveDirect=="X"){
            moveOnNum(obj,moveDirect);
    	    document.ToolBarForm.moveY.focus();
        }else if(key==0xD && moveDirect=="Y"){
            moveOnNum(obj,moveDirect);
    	    document.ToolBarForm.moveY.blur();
        } 
    }catch(e){
    }    
}
