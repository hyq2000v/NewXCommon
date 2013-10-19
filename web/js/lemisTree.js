//==================================================== 参数设定部分 =======================================================
var _VersionInfo="Version:1.0&#13;2.0作者:李红涛 张定平 张守锴"	//版本信息 modify by chenkl（将src初始值为空，在点击时设置src）
var bMoveable=true;		//设置是否可以拖动
var regionTree=false;
var workTypeTree=false;
var calendar=false;
//====================================================Iframe WEB 页面显示部分 =====================================================
document.writeln('<iframe id=worktypeTreeLayer src=""  Author=zhangsk frameborder=0 style="position: absolute; width: 280; height: 220; z-index: 9998; display: none"></iframe>');
var workType_outObject1;
var workType_outObject2;

document.writeln('<iframe id=regionTreeLayer src=""  Author=zhangsk frameborder=0 style="position: absolute; width: 280; height: 400; z-index: 9998; display: none"></iframe>');
var region_outObject1;
var region_outObject2;

document.writeln('<iframe id=areaTreeLayer src=""  Author=zhangsk frameborder=0 style="position: absolute; width: 280; height: 400; z-index: 9998; display: none"  onblur="areaTree_close()"></iframe>');
var area_outObject1;
var area_outObject2;

function setWorkTypeTree(tt,disObjName,valObjName,condition) //主调函数
{
	if (arguments.length >  4){alert("对不起！传入本控件的参数太多！");return;}
	if (arguments.length == 0){alert("对不起！您没有传回本控件任何参数！");return;}
	if("" != condition && undefined != condition){
		condition = "?condition=" + condition;
	}else{
		condition = "";
	}
    var srcFrame = document.all.worktypeTreeLayer.src;
    if("" == srcFrame){
        document.all.worktypeTreeLayer.src = "/" + lemis.WEB_APP_NAME+"/common/workType.jsp"+condition;
    }
	var dads  = document.all.worktypeTreeLayer.style;
	var th = tt;
	var ttop  = tt.offsetTop;     //TT控件的定位点高
	var thei  = tt.clientHeight;  //TT控件本身的高
	var tleft = tt.offsetLeft;    //TT控件的定位点宽
	var ttyp  = tt.type;          //TT控件的类型
	while (tt = tt.offsetParent){ttop+=tt.offsetTop; tleft+=tt.offsetLeft;}
	dads.top  = (ttyp=="image")? ttop+thei : ttop+thei+6;
	dads.left = tleft;
    dads.display = '';
    workType_outObject1 = arguments[1];
    workType_outObject2 = arguments[2];
    workTypeTree=true;
    regionTree=false;
    calendar=false;
}
function workerType_setValue(dispaly_value,code_value){//为tag提供设置“显示”和“代码域”的值
    parent.workType_outObject1.value=dispaly_value;
    parent.workType_outObject2.value=code_value;
    parent.workTypeTree_close()
}
function workerType_clearvalue_tree(){//在iframe中点击“清空”按钮清空值同时关闭Iframe
    parent.workType_outObject1.value="";
    parent.workType_outObject2.value="";
    parent.workTypeTree_close()
}

function close_WorkType_Frame(){ //在iframe中点击“关闭”按钮关闭iframe
	parent.workTypeTree_close()
}

function workTypeTree_close(){ //为其他函数提供关闭Iframe的方法
	regionTree=false;
	workTypeTree=false;
	calendar=false;
	document.all.worktypeTreeLayer.style.display="none";
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function clearValue(obj1,obj2){   //提供页面的调用清空值的方法（不是在Iframe中的清空）
    obj1.value="";
    obj2.value="";
}
function document.onclick(){ //任意点击时关闭该控件	//ie6的情况可以由下面的切换焦点处理代替
  with(window.event)
  {
      if(workTypeTree){
          if (srcElement.getAttribute("Author")!="zhansk" && srcElement != workType_outObject1){
              regionTree=false;
              workTypeTree=false;
              calendar=false;
              workTypeTree_close();
        	}
      }
      if(regionTree){
          if (srcElement.getAttribute("Author")!="zhansk" && srcElement != region_outObject1){
              regionTree=false;
              workTypeTree=false;
              calendar=false;
              regionTree_close();
        	}
      }
      if(calendar){
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
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function setRegionTree(tt,disObjName,valObjName,condition) //主调函数
{
	if (arguments.length >  4){alert("对不起！传入本控件的参数太多！");return;}
	if (arguments.length == 0){alert("对不起！您没有传回本控件任何参数！");return;}
    var srcFrame = document.all.regionTreeLayer.src;
    if("" != condition && undefined != condition){
		condition = "?condition=" + condition;
	}else{
		condition = "";
	}
    if("" == srcFrame){
        document.all.regionTreeLayer.src = "/" + lemis.WEB_APP_NAME+"/common/region.jsp" + condition;
    }
	var dads  = document.all.regionTreeLayer.style;
	var th = tt;
	var ttop  = tt.offsetTop;     //TT控件的定位点高
	var thei  = tt.clientHeight;  //TT控件本身的高
	var tleft = tt.offsetLeft;    //TT控件的定位点宽
	var ttyp  = tt.type;          //TT控件的类型
	while (tt = tt.offsetParent){ttop+=tt.offsetTop; tleft+=tt.offsetLeft;}
	dads.top  = (ttyp=="image")? ttop+thei : ttop+thei+6;
	dads.left = tleft;
    dads.display = '';
    region_outObject1 = arguments[1];
    region_outObject2 = arguments[2];
    regionTree=true;
    calendar=false;
}

function region_setValue(dispaly_value,code_value){//为tag提供设置“显示”和“代码域”的值
    parent.region_outObject1.value=dispaly_value;
    parent.region_outObject2.value=code_value;
    parent.regionTree_close()
}
function region_clearvalue_tree(){//在iframe中点击“清空”按钮清空值同时关闭Iframe
    parent.region_outObject1.value="";
    parent.region_outObject2.value="";
    parent.regionTree_close()
}

function close_region_Frame(){
	parent.regionTree_close()
}

function regionTree_close(){               //在iframe中点击“关闭”按钮关闭iframe
	regionTree=false;
	workTypeTree=false;
	calendar=false;
	document.all.regionTreeLayer.style.display="none";
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

   function setAreaTree(tt,cols1,cols2,aform) //主调函数
{
//	alert("setAreaTree");

	if (arguments.length >  4){alert("对不起！传入本控件的参数太多！");return;}
	if (arguments.length == 0){alert("对不起！您没有传回本控件任何参数！");return;}
    var srcFrame = document.all.areaTreeLayer.src;
    
    var theform=aform;//控件所在的form名称
	var item=cols1;//地区分类代码的控件ID
	var name=cols2;//地区分类名称的控件ID
    var condition="MainAction?ActionType=xczp_test2&item="+item+"&name="+cols2+"&aform="+theform;
    
    if("" == srcFrame){
 //   	alert("condition="+condition);
        document.all.areaTreeLayer.src = condition;
//        alert("srcFame="+srcFrame);
        //alert("src="+document.all.areaTreeLayer.src = condition);
    }
	var dads  = document.all.areaTreeLayer.style;
	var th = tt;
	var ttop  = tt.offsetTop;     //TT控件的定位点高
	var thei  = tt.clientHeight;  //TT控件本身的高
	var tleft = tt.offsetLeft;    //TT控件的定位点宽
	var ttyp  = tt.type;          //TT控件的类型
	while (tt = tt.offsetParent){ttop+=tt.offsetTop; tleft+=tt.offsetLeft;}
	dads.top  = (ttyp=="image")? ttop+thei : ttop+thei+6;
	dads.left = tleft;
    dads.display = '';

	//alert("Layer");
    area_outObject1 = arguments[1];
    area_outObject2 = arguments[2];
    areaTree=true;
    calendar=false;
//	document.all.sform.focus();
}
function area_setValue(dispaly_value,code_value){//为tag提供设置“显示”和“代码域”的值
    parent.area_outObject1.value=dispaly_value;
    parent.area_outObject2.value=code_value;
    parent.areaTree_close()
}
function area_clearvalue_tree(){//在iframe中点击“清空”按钮清空值同时关闭Iframe
    parent.area_outObject1.value="";
    parent.area_outObject2.value="";
    parent.areaTree_close()
}

function close_area_Frame(){
	parent.areaTree_close()
}

function areaTree_close(){               //在iframe中点击“关闭”按钮关闭iframe
	areaTree=false;
	workTypeTree=false;
	calendar=false;
	document.all.areaTreeLayer.style.display="none";
}

