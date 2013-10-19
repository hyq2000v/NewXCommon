
function checkObject(){
	this.callByName = _callByName;
	this.checkNull = _checkNull;
	this.checkDividDate = _checkDividDate;
        this.DividDate = _DividDate;
	this.getDateSepator = _getDateSepator;
}
function _callByName (name, value, obj) {
      if (name.indexOf("checkDividDate") != -1) {
		if (name.indexOf("(") == -1 || name.indexOf(")") == -1 || name.split("\"").length != 5) {
			alert("javascript方法 " + name + " 调用错误:checkDividDate(\"\",\"\")");
			return false;
		} else {
			var fieldname = name.split("\"")[1];
			var y_value = document.all(fieldname + "_y_id").value;
			var m_value = document.all(fieldname + "_m_id").value;
			var d_value = document.all(fieldname + "_d_id").value;
			var datesepator = obj.getDateSepator(name.split("\"")[3]);

                        if (m_value.length<2){
                           m_value = "0"+m_value;
                        }
                        if (d_value.length<2){
                           d_value = "0"+d_value;
                        }

			if (obj.checkDividDate(y_value + m_value + d_value) == true) {
				document.all(fieldname + "_id").value= y_value + datesepator + m_value + datesepator + d_value;
				return true;
			} else {
				return false;
                        }
                } 
	}
        else if (name.indexOf("DividDate") != -1) {
		if (name.indexOf("(") == -1 || name.indexOf(")") == -1 || name.split("\"").length != 5) {
			alert("javascript方法 " + name + " 调用错误:checkDividDate(\"\",\"\")");
			return false;
		} else {
			var fieldname = name.split("\"")[1];
			var y_value = document.all(fieldname + "_y_id").value;
			var m_value = document.all(fieldname + "_m_id").value;
			var d_value = document.all(fieldname + "_d_id").value;
			var datesepator = obj.getDateSepator(name.split("\"")[3]);

                        if (m_value.length>0 && m_value.length<2){
                           m_value = "0"+m_value;
                        }
                        if (d_value.length>0 && d_value.length<2){
                           d_value = "0"+d_value;
                        }

			if (obj.DividDate(y_value + m_value + d_value) == true) {
				document.all(fieldname + "_id").value= y_value + datesepator + m_value + datesepator + d_value;
				return true;
			} else {
				return false;
                        }
                } 
	}
return true;
}

function _getDateSepator(format){
	var strSepator = "-";
	//if (format == "YYYY-MM-DD") ;
	if (format == "YYYY/MM/DD") strSepator = "/";
	if (format == "YYYY\\MM\\DD") strSepator = "\\";
	if (format == "YYYY.MM.DD") strSepator = ".";
	if (format == "YYYYMMDD") strSepator = "";

	return strSepator;
}
function checkAll(object) {
	co = new checkObject();
	returnvalue = true;
	i = object.elements.length;
	for (j = 0; j < i; j++)
	{
		//alert(object.elements[j].type);

		if (object.elements[j].checkMethod != null)
		{
			if (!co.callByName(object.elements[j].checkMethod, object.elements[j].value, co))
			{
				returnvalue = false;
			}
		}
	}

	return returnvalue;
}
function checkDate0(rq)
{
	if(!isDate2(rq.value))
	{
		//rq.focus();
		//rq.select();
		window.alert("输入错误: 不为合法日期或格式错误!");
        rq.value="";
	}	
}

function checkNull(value)
{
	if(isNull(value))
	{	
		window.alert("输入错误: 不能输入空值!");
		return false;
	}		

	return true;
}

function _checkNull(value)
{
	if(isNull(value))
	{	
		window.alert("输入错误: 不能输入空值!");
		return false;
	}		

	return true;
}

//控制必录项不能为空,true时表示录入项非空,false时表示录入项为空,具体的提示信息在jsp页面实现
function checkNull0(sz)
{
	if(isNull(sz.value))
	{
//		window.alert("输入错误: 不能输入空值!");	
		return false;
	}		
	return true;
}

function checkNumber0(sz)
{
	if(!isInteger(sz.value))
	{
		//sz.focus();
		//sz.select();
		window.alert("输入错误: 只能输入数字!");
		sz.value="";		
	}
}

function checkFloat0(sz)
{
	if(!isFloat(sz.value))
	{
		//sz.focus();
		//sz.select();
		window.alert("输入错误: 只能输入数字!");
		sz.value="";		
	}
}


function checkDate(rq)
{
	if(rq.value=="")
		return false;
	if(!isDate2(rq.value))
	{
		rq.value="";
		window.alert("输入错误: 不为合法日期或格式错误!");
		//rq.focus();
		//rq.select()
		return false;
	}	
	else
		return true;
}

function _checkDividDate(value)
{
	if (value.length != 8) {
		window.alert("输入错误1: 不为合法日期或格式错误! (" + value + ")");

		return false;
	} else {
		value = value.substring(0,4) + "-" + value.substring(4,6) + "-" + value.substring(6,8);
	}

	if(!isDate2(value, "-"))
	{
		//rq.value="";
		window.alert("输入错误2: 不为合法日期或格式错误! (" + value + ")");

		return false;
	}	
	else
	{
		return true;
	}
}

function _DividDate(value)
{
     if (value.length > 0){
        if (value.length != 8) {
	        window.alert("输入错误3: 不为合法日期或格式错误! (" + value + ")");

		return false;
        } else {
		value = value.substring(0,4) + "-" + value.substring(4,6) + "-" + value.substring(6,8);
	}

	if(!isDate2(value, "-"))
	{
		//rq.value="";
		window.alert("输入错误4: 不为合法日期或格式错误! (" + value + ")");

		return false;
	}	
	else
	{
		return true;
	}
    }
    else{
        return true;
    }
return true;
}

function checkNY(ny){
  if(ny.value=="") return false;
  if(!isNY(ny.value)){
    ny.value="";
	window.alert("输入错误:不为合法的年月格式!");
	return false;
  }
  return true;
}
function checkDate2(rq)
{
	if(rq.value=="")
		return;
	if(rq.value.length=19)
	{
		if((rq.value.substring(10,11)==" ")&&(rq.value.substring(13,14)==":")&&(rq.value.substring(16,17)==":"))
		{
			if(isDate2(rq.value.substring(0,10)))
			{
				if(!isTime2(rq.value.substring(11,19)))
				{
					rq.value="";
					window.alert("输入错误: 不为合法时间或格式错误!");
				}
			}
			else
			{
				rq.value="";
				window.alert("输入错误: 不为合法日期或格式错误!");
				//rq.focus();
				//rq.select()
			}
		}
		else
		{
			rq.value="";
			window.alert("输入错误: 不为合法的输入或格式错误!");
		}
	}
	else
	{
		rq.value="";
		window.alert("输入错误: 不为合法的输入或格式错误!");
	}

}

function checkNumber(sz)
{
	if((sz.value == "")||(sz.value.length == 0))
		return;
	if(!isInteger(sz.value))
	{
		sz.value="";
		window.alert("输入错误: 只能输入数字!");
		//sz.focus();
		//sz.select();		
	}
}

function checkFloat(sz)
{
	if(sz.value=="")
		return;
	if(!isFloat(sz.value))
	{
		//sz.focus();
		//sz.select();
		sz.value="";
		window.alert("输入错误: 只能输入数字!");
	}
}

function checkNullNumber(sz)
{
	checkNull(sz);
	checkNumber(sz);	
}

function fillBirthday(sfz,sr)
{	
	if(sfz.value=="")
		return;
	if(isInteger(sfz.value))
	{
		if((sfz.value.length==15)||(sfz.value.length==18))
		{
			sr.value=getBirthday(sfz.value);
		}
		else
		{
			window.alert("输入错误: 身份证长度只能为15位或18位!");
			sfz.focus();
			sfz.select();	
		}
		
	}	
	else
	{
		window.alert("输入错误: 身份证号只能为数字!");
		sfz.focus();
		sfz.select();	
	}
}

function getQueryString(f)
{
	var len = f.elements.length;
	var queryStr = "1=1";
	for(var loop_index=0;loop_index<len;loop_index++)
	{
		var type = f.elements[loop_index].type;//alert(type + ":" + f.elements[loop_index].name);
		if((type=="select-one")||(type=="text")||(type=="textarea"))
		{
			var name = f.elements[loop_index].name;
            if(name.substring(0,5)=="hnisi") continue;
			var value= trim(f.elements[loop_index].value);
			if(value!="")
			{
				if(name.lastIndexOf("hnisi")!=-1)
				{
					var l = name.length;
					name = name.substring(0,l-5);
					queryStr = queryStr + " and " + name + " = to_date('" + value + "','yyyy-mm-dd')";
				}		
				else if(name.lastIndexOf("ComboBoxID")!=-1)
				{

				}
				else
					queryStr = queryStr + " and " + name + " like '" + value + "'"; 			
			}
		}
	}
		//	queryStr=replace(queryStr,"=","%3d",true,true);
	f.condition.value = queryStr;

	window.alert("condition:" + f.condition.value);
}

function getQueryString1(f)
{
	var tempStr = f.condition1.value;
	var len = f.elements.length;
	var queryStr = "1=1" + tempStr;
	for(var loop_index=0;loop_index<len;loop_index++)
	{
		var type = f.elements[loop_index].type;
		if((type=="select-one")||(type=="text")||(type=="textarea"))
		{
			var name = f.elements[loop_index].name;
            if(name.substring(0,5)=="hnisi") continue;
			var value= trim(f.elements[loop_index].value);
			if(value!="")
			{
				if(name.lastIndexOf("hnisi")!=-1)
				{
					var l = name.length;
					name = name.substring(0,l-5);
					queryStr = queryStr + " and " + name + " = to_date('" + value + "','yyyy-mm-dd')";
				}
				else if(name.lastIndexOf("ComboBoxID")!=-1)
				{

				}
				else
					queryStr = queryStr + " and " + name + " like '" + value + "'"; 			
			}
		}
	}
	f.condition.value = queryStr;	
}

function getQueryString2(f)
{
	var len = f.elements.length;
	var queryStr = "1=1";
	for(var loop_index=0;loop_index<len;loop_index++)
	{
		var type = f.elements[loop_index].type;
		if((type=="select-one")||(type=="text")||(type=="textarea"))
		{
			var name = f.elements[loop_index].name;
            if(name.substring(0,5)=="hnisi") continue;
			var value= trim(f.elements[loop_index].value);
			if(value!="")
			{
				if(name.lastIndexOf("hnisi")!=-1)
				{
					var l = name.length;
					name = name.substring(0,l-5);
					queryStr = queryStr + " and " + name + " = to_date('" + value + "','yyyy-mm-dd')";
				}
				else if(name.lastIndexOf("ComboBoxID")!=-1)
				{

				}
				else
					queryStr = queryStr + " and " + name + " like '" + value + "%'"; 			
			}
		}
	}
	f.condition.value = queryStr;
	//window.alert("condition:" + f.condition.value);
}

function selectAll(f)
{
	var len = f.elements.length;
	
	for(var loop_index=0;loop_index<len;loop_index++)
	{
		var type = f.elements[loop_index].type;
		if((type=="checkbox"))
		{
			var name = f.elements[loop_index].name;
			f.elements[loop_index].checked=true;			
		}
	}
}

function deselAll(f)
{
	var len = f.elements.length;
	
	for(var loop_index=0;loop_index<len;loop_index++)
	{
		var type = f.elements[loop_index].type;
		if((type=="checkbox"))
		{
			var name = f.elements[loop_index].name;
			f.elements[loop_index].checked=false;			
		}
	}
}

function selectAllUp(f)
{
	var len = f.elements.length;
	
	for(var loop_index=0;loop_index<len;loop_index++)
	{
		var type = f.elements[loop_index].type;
		if((type=="checkbox"))
		{
			var name = f.elements[loop_index].name;
			if(name == "uprows")
				f.elements[loop_index].checked=true;			
		}
	}
}

function unSelectAllUp(f)
{
	var len = f.elements.length;
	
	for(var loop_index=0;loop_index<len;loop_index++)
	{
		var type = f.elements[loop_index].type;
		if((type=="checkbox"))
		{
			var name = f.elements[loop_index].name;
			if(name == "uprows")
				f.elements[loop_index].checked=false;			
		}
	}
}

function setAllDown(f)
{
	var len = f.elements.length;
	
	for(var loop_index=0;loop_index<len;loop_index++)
	{
		var type = f.elements[loop_index].type;
		if((type=="checkbox"))
		{
			var name = f.elements[loop_index].name;
			if(name == "downrows")
				f.elements[loop_index].checked=true;			
		}
	}
}

function unSelectAllDown(f)
{
	var len = f.elements.length;
	
	for(var loop_index=0;loop_index<len;loop_index++)
	{
		var type = f.elements[loop_index].type;
		if((type=="checkbox"))
		{
			var name = f.elements[loop_index].name;
			if(name == "downrows")
			f.elements[loop_index].checked=false;			
		}
	}
}
function res()           
{
	document.forms[0].reset();
}
function sub0() 
{ 
	document.forms[0].submit(); 
}
function sub00(sz)
{
	if(checkNull(sz))
		sub0();
}
function sub() 
{ 
	getQueryString(document.forms[0]);
	document.forms[0].submit(); 
} 
function sub1() 
{ 
	getQueryString1(document.forms[0]);
	document.forms[0].submit(); 
}
function sub2() 
{ 
	getQueryString2(document.forms[0]);
	document.forms[0].submit(); 
}
     
	 var count = 0;
      function addAttach(){        
        var divobj = document.getElementById("attach");
        count++;
        var loadHtml = "附件：<input type=file name=file" + count + " size=50>&nbsp;<input type=checkbox name=attachCheckbox" + count + " value=1>允许在线编辑(仅用于word文档)<br>";
        divobj.insertAdjacentHTML("BeforeEnd",loadHtml); 
      }

/**生成点击按钮后的效果页面*/
function createEff(){
     if(document.getElementById("LoadIframe")){
	    return;
	 }   
   	 var iframeObj = window.document.createElement("<IFRAME id='LoadIframe' frameBorder=0 scrolling='no'></IFRAME>");
	 window.document.body.insertBefore(iframeObj);
	 iframeObj.src = "../jsp/common/loading.htm";
}
