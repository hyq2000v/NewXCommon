/**
 *	Purpose: 格式化字符串  
 *	Inputs: String 
 *	Returns:  
 */
function parseElement(str)
{
	var prefix=""; //可以修改这里的默认金额格式 
	var wd="w";
	var tempnum=str;
	for (i=0;i<tempnum.length;i++)
	{
		if (tempnum.charAt(i)==".");
		{
			wd="d";
			break;
		}
	}
	if (wd=="w")
		thisone.value=prefix+tempnum+".00"
	else
	{
		if (tempnum.charAt(tempnum.length-2)==".")
		{
			thisone.value=prefix+tempnum+"0"
		}
		else
		{
			tempnum=Math.round(tempnum*100)/100
			thisone.value=prefix+tempnum
		}
	}	
}

/**
 *	Purpose: 判断输入是否为整数字 
 *	Inputs: String 
 *	Returns: True, False 
 */
function isInteger(str) 
{ 
	var i,strlength,tempchar; 
	str=CStr(str); 
	if(str=="") return false; 
	strlength=str.length; 
	for(i=0;i<strlength;i++) 
	{ 
		tempchar=str.substring(i,i+1); 
		if(!(tempchar==0||tempchar==1||tempchar==2||tempchar==3||tempchar==4||tempchar==5||tempchar==6||tempchar==7||tempchar==8||tempchar==9)) 
		{ 
			//alert("只能输入数字　"); 
			return false; 
		} 
	} 
	return true; 
}

/**
 *	Purpose: 判断输入是否为数值(包括小数点) 
 *	Inputs: String 
 *	Returns: True, False 
 */
function isFloat(str) {
	
	var tmp; 
	var temp; 
	var i; 
	tmp =str; 
	if(str=="") 
		return false; 
	for(i=0;i<tmp.length;i++) 
	{
		temp=tmp.substring(i,i+1); 
		if((temp>='0'&& temp<='9')||(temp=='.'))
		{} //check input in 0-9 and '.' 
		else
		{
			return false;
		} 
	}	 
	return true; 
} 

/**
 *	Purpose: 判断输入是否为电话号码  
 *	Inputs: String 
 *	Returns: True, False 
 */
function isPhoneNumber(str) 
{ 
	var i,strlengh,tempchar; 
	str=CStr(str); 
	if(str=="")
		return false; 
	strlength=str.length; 
	for(i=0;i<strlength;i++) 
	{ 
		tempchar=str.substring(i,i+1); 
		if(!(tempchar==0||tempchar==1||tempchar==2||tempchar==3||tempchar==4||tempchar==5||tempchar==6||tempchar==7||tempchar==8||tempchar==9||tempchar=='-'||tempchar=='+'||tempchar==' '||tempchar=='/'||tempchar=='('||tempchar==')')) 
		{ 
			//alert("电话号码只能输入数字、中划线（-）和加号（+）　"); 
			return(false); 
		} 
	} 
	return(true); 
} 

/**
 *	Purpose: 判断输入是否为Email
 *	Inputs: String 
 *	Returns: True, False 
 */
function isEmail(str) 
{ 
	var bflag=true ;

	if (str.indexOf("'")!=-1) 
	{ 
		bflag=false ;
	} 
	if (str.indexOf("@")==-1) 
	{ 
		bflag=false 
	} 
	else if(str.charAt(0)=="@")
	{ 
		bflag=false 
	} 
	return bflag 
} 

/**
 *	Purpose: 判断输入是否含有为中文
 *	Inputs: String 
 *	Returns: True, False 
 */
function hasChinese(str) 
{ 
	if(escape(str).indexOf("%u")!=-1) 
	{ 
		return true; 
	} 
	return false; 
} 

/**
 *	Purpose: 判断输入是否全为中文
 *	Inputs: String 
 *	Returns: True, False 
 */
function isAllChinese(str)
{
   if(/[^\u4E00-\u9FA5]/gi.test(str))
	{		
		return false;
	}
	return true;
}

/**
 *	Purpose: 判断输入是否含有空格 
 *	Inputs: String 
 *	Returns: True, False 
 */
function hasBlank(str) 
{ 
	var strlength; 
	var k; 
	var ch; 
	strlength=str.length; 
	for(k=0;k<=strlength;k++) 
	{ 
		ch=str.substring(k,k+1); 
		if(ch==" ") 
		{ 
			alert("对不起　不能输入空格　"); 
			return false; 
		} 
	} 
	return true; 
} 


/**
 *	Purpose: 去掉Str两边空格  
 *	Inputs: String  
 *	Returns: 去掉两边空格的String 
 */
function trim(str) 
{ 
	var i,strlength,t,chartemp,returnstr; 
	str=CStr(str); 
	strlength=str.length; 
	t=str; 
	for(i=0;i<strlength;i++) 
	{ 
		chartemp=str.substring(i,i+1); 
		if(chartemp==" ") 
		{ 
			t=str.substring(i+1,strlength); 
		} 
		else 
		{ 
			break; 
		} 
	} 
	returnstr=t; 
	strlength=t.length; 
	for(i=strlength;i>=0;i--) 
	{ 
		chartemp=t.substring(i,i-1); 
		if(chartemp==" ") 
		{ 
			returnstr=t.substring(i-1,0); 
		} 
		else 
		{ 
			break; 
		} 
	} 
	return (returnstr); 
} 

/**
 *	Purpose: 将数值类型转化为String   
 *	Inputs: int  
 *	Returns: String
 */
function CStr(inp) 
{ 
	return(""+inp+""); 
} 

/**
 *	Purpose: 去除不合法字符, ' " < > 
 *	Inputs: String  
 *	Returns: String
 */ 
function Rep(str) 
{
	var str1; 
	str1=str; 
	str1=replace(str1,"'","`",1,0); 
	str1=replace(str1,'"',"`",1,0); 
	str1=replace(str1,"<","(",1,0); 
	str1=replace(str1,">",")",1,0); 
	return str1; 
} 

/**
 *	Purpose: 替代字符
 *	Inputs: 目标String,欲替代的字符,替代成为字符串,大小写是否敏感,是否整字代替  
 *	Returns: String
 */ 
function replace(target,oldTerm,newTerm,caseSens,wordOnly) 
{ 
	var wk ; 
	var ind = 0; 
	var next = 0; 
	wk=CStr(target); 
	if (!caseSens) 
	{ 
		oldTerm = oldTerm.toLowerCase(); 
		wk = target.toLowerCase(); 
	} 
	while ((ind = wk.indexOf(oldTerm,next)) >= 0) 
	{ 
		if (wordOnly) 
		{ 
			var before = ind - 1; 
			var after = ind + oldTerm.length; 
			if (!(space(wk.charAt(before)) && space(wk.charAt(after)))) 
			{ 
				next = ind + oldTerm.length; 
				continue; 
			} 
		} 
		target = target.substring(0,ind) + newTerm + target.substring(ind+oldTerm.length,target.length); 
		wk = wk.substring(0,ind) + newTerm + wk.substring(ind+oldTerm.length,wk.length); 
		next = ind + newTerm.length; 
		if (next >= wk.length)
		{
			break; 
		} 
	} 
	return target; 
} 

/**
判断输入是否为年月(格式:yyyymm)
输入:string
返回:true-是,false-否
*/
function isNY(str){
  if(str.length != 6) return false;
  var yy=str.substring(0,4);
  var mm=str.substring(4,6);
  if(!isInteger(yy)) return false;
  if(!isInteger(mm)) return false;
  if(yy<"1900"||yy>"2999") return false;
  if(mm<"01"||mm>"12") return false;
  return true;
}
/**
 *	Purpose: 判断输入是否为日期格式：yyyy-MM-dd，不检查日期的合法性
 *	Inputs: String 
 *	Returns: True, False 
 */
function isDate(str) 
{ 
	if(str.length == 10)
	{
		var i = str.indexOf("-");
		var j = str.lastIndexOf("-");
		if((i != 4)||(j != 7))
			return false;
		if((!isInteger(str.substring(0,4)))||(!isInteger(str.substring(5,7)))||(!isInteger(str.substring(8,10))))
			return false;

		return true;
	}
	else
		return false; 
} 

/**
 *	Purpose: 判断输入是否为日期 格式：yyyy-MM-dd，且为合法的日期
 *	Inputs: String 
 *	Returns: True, False 
 */
function isDate2(strDate)
{
	 strDate = strDate.replace(/(^\s+)?(\s+$)?/gi, "");
   var strSeparator = "-"
   var strDateArray
   var intYear
   var intMonth
   var intDay
   var boolLeapYear

   var ln_len=strDate.length;
   if(ln_len<8||ln_len>10)  return false//长度判断

   strDateArray = strDate.split(strSeparator)

   if(strDateArray.length!=3) return false

   intYear = parseInt(strDateArray[0],10)
   intMonth = parseInt(strDateArray[1],10)
   intDay = parseInt(strDateArray[2],10)

   if(isNaN(intYear)||isNaN(intMonth)||isNaN(intDay)) return false
   if(intYear<1900||intYear>2999) return false
   if(intMonth>12||intMonth<1) return false

   if((intMonth==1||intMonth==3||intMonth==5||intMonth==7||intMonth==8||intMonth==10||intMonth==12)&&(intDay>31||intDay<1)) return false

   if((intMonth==4||intMonth==6||intMonth==9||intMonth==11)&&(intDay>30||intDay<1)) return false

   if(intMonth==2){
      if(intDay<1) return false

      boolLeapYear = false
      if((intYear%100)==0){
         if((intYear%400)==0) boolLeapYear = true
      }
      else{
         if((intYear%4)==0) boolLeapYear = true
      }

      if(boolLeapYear){
         if(intDay>29) return false
      }
      else{
         if(intDay>28) return false
      }
   }

   return true
}

/**
 *	Purpose: 判断输入是否为日期 格式：yyyy-MM-dd 或者 yyyy-MM-dd hh:mm:ss，且为合法的日期
 *	Inputs: String 
 *	Returns: True, False 
 */
function isDate3(strDate)
{
	 strDate = strDate.replace(/(^\s+)?(\s+$)?/gi, "");
   var ln_len=strDate.length;
   if((ln_len<8||ln_len>10) && (ln_len<17||ln_len>19))  return false//长度判断
   if ( ln_len >=8 && ln_len <= 10 )
   		return isDate(strDate);
   if ( ln_len >=17 && ln_len <= 19 )
			return isDateTime(strDate);
   return false;
}

/**
 *	Purpose: 判断输入是否为日期 格式：yyyy-MM，且为合法的日期
 *	Inputs: String 
 *	Returns: True, False 
 */
function isDateShort(strDate)
{
   var strSeparator = "-"
   var strDateArray
   var intYear
   var intMonth
   var intDay
   var boolLeapYear

   var ln_len=strDate.length;
   if(ln_len<6||ln_len>7)  return false//长度判断

   strDateArray = strDate.split(strSeparator);

   if(strDateArray.length!=2) return false

   intYear = parseInt(strDateArray[0],10);
   intMonth = parseInt(strDateArray[1],10);

   if(isNaN(intYear)||isNaN(intMonth)) return false
   if(intYear<1900||intYear>2999) return false
   if(intMonth>12||intMonth<1) return false


   return true
}
/**
 *	Purpose: 判断输入是否为日期 格式：yyyyMM，且为合法的日期
 *	Inputs: String 
 *	Returns: True, False 
 */
function isDateClose(strDate)
{
   var strSeparator = "-"
   var strDateArray
   var intYear
   var intMonth
   var intDay
   var boolLeapYear
   var charMonth

   var ln_len=strDate.length;
   if(ln_len!=6)  return false//长度判断


   intYear = parseInt(strDate.substr(0,4));
   intMonth = parseInt(strDate.substr(4,6));
   charMonth = strDate.substr(4,6);

   if(isNaN(intYear)||isNaN(intMonth)) return false
   if(intYear<1900||intYear>2999) return false
   if(charMonth>12||charMonth<1) return false


   return true
}
/**
 *	Purpose: 判断输入是否为时间，格式：hh:mm:ss，且为合法的24小时制时间
 *	Inputs: String 
 *	Returns: True, False 
 */
function isTime2(strTime)
{
	var hStr;
	var mStr;
	var sStr;
	var h;
	var m;
	var s;
	if(strTime.length == 8)
	{
		if((strTime.substring(2,3)==":")&&(strTime.substring(5,6)==":"))
		{
			hStr = strTime.substring(0,2);
			mStr = strTime.substring(3,5);
			sStr = strTime.substring(6,8);
			h = parseInt(hStr);
			m = parseInt(mStr);
			s = parseInt(sStr);			
			if((h<=23)&&(m<=59)&&(s<=59))
				return true;
			else
				return false;
		}
	}
	else
	{
		return false;
	}
}
/**
 *	Purpose: 判断输入是否为日期+时间，格式：yyyy-MM-dd hh:mm:ss，且为合法的日期和合法的24小时制时间
 *	Inputs: String 
 *	Returns: True, False 
 */
function isDateTime(str){
//	alert(str);
	var ln_len=str.length;
	if(ln_len<17||ln_len>19)  return false//长度判断
	var str1=str.split(" ");
//	alert(str1.length);
//	alert(str1[0]);
//	alert(str1[1]);
	if(isDate(str1[0])){
		if(isDate2(str1[0])){
			if(isTime2(str1[1])){
				return true;
			}
		}
	}
	return false;
	
	
}
/**
 *	Purpose: 从身份证号码取生日
 *	Inputs: String 
 *	Returns: String 
 */
function getBirthday(str) 
{ 
	if(str!="")
	{
		if(str.length==15)
		{
			var year = "19" + str.substring(6,8);
			var month = str.substring(8,10);
			var day = str.substring(10,12);
			var retStr = year + "-" + month + "-" + day;
			//window.alert(year);
			//window.alert(month);
			//window.alert(day);
			//window.alert(retStr);
			return retStr;
		}
		else if(str.length==18)
		{
			var year = str.substring(6,10);
			var month = str.substring(10,12);
			var day = str.substring(12,14);
			var retStr = year + "-" + month + "-" + day;
			return retStr;
		}		
	}
	else
		return "";	
} 

/**
 *	Purpose: 判断输入是否为空 
 *	Inputs: String 
 *	Returns: True, False 
 */
function isNull(str)
{	
	var temp; 
	temp = trim(str); 
	if((temp=="")||(temp.length==0)) 
	{
		return true;
	}
	return false; 
}

/**
 * 以下是smjk添加
 *	Purpose: 回车模拟Tab键
 *	Returns: True, False 
 */
function changefocus_onkeyup(frm){
	return;
	newinfo_form = frm;
	key=window.event.keyCode; 
	if(key==0xD){//判断是否按下回车键
		if (validateEle(event.srcElement)){//校验通过
			CurTabIndex=event.srcElement.tabIndex+1//将当前tabindex的值加1
			for (n=0;n<newinfo_form.elements.length;n++) {
				if (newinfo_form.elements[n].tabIndex==CurTabIndex){//找到下一个表单元素
					newinfo_form.elements[n].focus(); //移动焦点
					return true;
				} 
			}
		} 
	} 
}

/**
 * 在changefocus_onkeyup中调用
 *	Purpose: 检查表单中某个输入组件的输入情况的合法性，只包含非空、字符和日期型的校验
 *	Inputs: 表单输入元素
 *	Returns: True, False 
 */
function validateEle(element){
	ele = element;
	//String validateStr = ele.vldStr;
	if (ele.vldStr == null || ele.vldStr.length == 0){//不需要检查
		return true;
	}
	tmpArray = ele.vldStr.split('+');
	for (j = 0; j < tmpArray.length; j ++){//检查该字段的校验类型
		if (tmpArray[j] == 'nn' && isNull(ele.value)){//有非空却为空的字段
			window.alert('该字段不能为空！');
			return false;
		}else if(tmpArray[j] == 'n' && !isInteger(ele.value)){//有不合法的数字型字段
			window.alert('该字段只能填写数字内容！');
			return false;
		}else if(tmpArray[j] == 'd' && !isDate2(ele.value)){//有不合法的日期型字典
			window.alert('该字段只能填写日期类型，格式yyyy-MM-dd！');
			return false;
		}else if(tmpArray[j].substring(0, 1)=='l'){//检查输入长度
			tmpStr = tmpArray[j].substring(1);
			index = tmpStr.indexOf('-');
			min = tmpStr.substring(0, index);
			max = tmpStr.substring(index + 1);
			if (ele.value.length < min || ele.value.length > max){
				window.alert('该字段长度只能在' + min + '、' + max + '之间!');
				return false;
			}
		}
	}
	return true;
}


/**
 *	Purpose: 判断输入是否为数值(包括小数点) 
 *	Inputs: String ,lenStr表示要判断的小数位数，如4,表示小数点后不能超过4位
 *	Returns: True, False 
 */
function checkFloat(str, lenStr) {
	if(str=="") 
		return true; 
	//alert('str=' + str);
	var tmp; 
	var temp; 
	var i; 
	var num;
	num = -1;
	tmp =str; 
	for(i=0;i<tmp.length;i++) 	{
		temp=tmp.substring(i,i+1); 
		if((temp>='0'&& temp<='9')||(temp=='.')){
			if (num >= 0){num = num+1;}
			if (temp=='.'){num = 0;}
		} //check input in 0-9 and '.' 
		else
		{
			return false;
		} 
	}	 
	if (num > lenStr || num == 0){return false;}	
	return true; 
} 

/**
 * 
 *	Purpose: 检查整个表单中输入组件的输入情况的合法性，只包含非空、字符和日期型的校验
 *	Inputs: 表单,
 *	Returns: True, False 
 */
function validateForm2(dform){
//alert('aaaaaaaaaaa');
	var notnullStr = '';
	var numberStr = '';
	var numberAgeStr = '';
	var numberAgeLawMaleStr = '';
	var numberAgeLawFemaleStr = '';
	var numberHeightStr = '';
	var numberWeightStr = '';
	var postcodeStr = '';
	var dateStr = '';
	var dateLongStr = '';
	var dateShortStr = '';
	var dateCloseStr = '';
	var dateTimeStr = '';
	var floatStr = '';
	var floatSightStr = '';
	var bitLStr ='';
	var telLStr ='';
	var colorStr ='';
	var sfzStr ='';
	var chineseStr = '';
	var notHasChineseStr = '';
	theForm = dform;
	for (i = 0; i < theForm.elements.length; i ++){//遍历form中的字段
		ele = theForm.elements[i];
		readOnly = theForm.elements[i].readOnly;
		if (ele.vldStr==null){
			continue;
		}else if(readOnly){
			continue;
		}
		colName = theForm.elements[i].name;//字段的名称
		validStrs = theForm.elements[i].vldStr;
		
		name_validStrs = validStrs.split('=');//得到字段的中文名称
		if (name_validStrs.length == 2){
			colName = name_validStrs[0];
			validStrs = name_validStrs[1];
			pint=parseInt(theForm.elements[i].value);
			pfloat=parseFloat(theForm.elements[i].value);
		}
		tmpArray = validStrs.split('+');
		for (j = 0; j < tmpArray.length; j ++){//检查该字段的校验类型
		//alert('colName=' + colName + '  validStr=' + validStrs+'   value='+theForm.elements[i].value);
//		alert('readOnly'+readOnly);
           //alert(tmpArray[j] + ' length=' + tmpArray[j].length);
		
			if (tmpArray[j] == 'nn' && isNull(theForm.elements[i].value)){//有非空却为空的字段
				notnullStr = notnullStr + '\n' + colName;
			}else if(tmpArray[j] == 'n' && !isNull(theForm.elements[i].value) && !isInteger(theForm.elements[i].value)){//有不合法的数字型字段
				numberStr = numberStr + '\n' + colName;
			}else if(tmpArray[j] == 'h' && !isNull(theForm.elements[i].value)){//有不合法的身高型字段
				if(isInteger(theForm.elements[i].value) && (pint>0) && (pint<300)){
				}else{
					numberHeightStr = numberHeightStr + '\n' + colName;
					}
			}else if(tmpArray[j] == 'w' && !isNull(theForm.elements[i].value)){//有不合法的体重型字段
				if(isInteger(theForm.elements[i].value) && (pint>0) && (pint<200)){
				}else{
					numberWeightStr = numberWeightStr + '\n' + colName;
				}
			}else if(tmpArray[j] == 'a' && !isNull(theForm.elements[i].value)){//有不合法的年龄型字段
				if(isInteger(theForm.elements[i].value) && (pint>0) && (pint<200)){
//					alert("a"+pint);
				}else{
					numberAgeStr = numberAgeStr + '\n' + colName;
				}
			}else if(tmpArray[j] == 'alm' && !isNull(theForm.elements[i].value)){//有不合法的法定男性年龄型字段
				if(isInteger(theForm.elements[i].value) && (pint>=16) && (pint<=60)){
//					alert("alm"+pint);
				}else{
				numberAgeLawMaleStr = numberAgeLawMaleStr + '\n' + colName;
				}
			}else if(tmpArray[j] == 'alf' && !isNull(theForm.elements[i].value)){//有不合法的法定女性年龄型字段
				if(isInteger(theForm.elements[i].value) && (pint>=16) && (pint<=55)){
//					alert("alf"+pint);
				}else{
				numberAgeLawFemaleStr = numberAgeLawFemaleStr + '\n' + colName;
				}
			}else if(tmpArray[j] == 'p' && !isNull(theForm.elements[i].value)){//有不合法的邮政编码型字段
				if(isInteger(theForm.elements[i].value) && (theForm.elements[i].value.length == 6)){
				}else{
				postcodeStr = postcodeStr + '\n' + colName;
				}

			}else if(tmpArray[j] == 't' && !isNull(theForm.elements[i].value) && !isPhoneNumber(theForm.elements[i].value)){//有不合法的电话号码型字段
				telLStr = telLStr + '\n' + colName;
			}else if(tmpArray[j] == 'd' && !isNull(theForm.elements[i].value) && !isDate3(theForm.elements[i].value)){//有不合法的日期型字典
				dateStr = dateStr + '\n' + colName;
			}else if(tmpArray[j] == 'dl' && !isNull(theForm.elements[i].value) && !isDateTime(theForm.elements[i].value)){//有不合法的(YYYY-MM-DD HH24:MI:SS)日期型字典
				dateLongStr = dateLongStr + '\n' + colName;
			}else if(tmpArray[j] == 'ds' && !isNull(theForm.elements[i].value) && !isDateShort(theForm.elements[i].value)){//有不合法的(YYYY-MM)日期型字典
				dateShortStr = dateShortStr + '\n' + colName;
			}else if(tmpArray[j] == 'dc' && !isNull(theForm.elements[i].value) && !isDateClose(theForm.elements[i].value)){//有不合法的(YYYYMM)日期型字典
				dateCloseStr = dateCloseStr + '\n' + colName;
			}else if(tmpArray[j] == 'dt' && !isNull(theForm.elements[i].value) && !isTime2(theForm.elements[i].value)){//有不合法的(HH24:MI:SS)时间型字典
				dateTimeStr = dateTimeStr + '\n' + colName;
            }else if(tmpArray[j] == 'ac' && !isNull(theForm.elements[i].value) && !isAllChinese(theForm.elements[i].value)){//不合法的纯中文字符串
			    chineseStr = chineseStr + '\n' + colName;
            }else if(tmpArray[j] == 'nc' && !isNull(theForm.elements[i].value) && hasChinese(theForm.elements[i].value)){//不合法的非中文字符串
				notHasChineseStr = notHasChineseStr + '\n' + colName;
			}else if(tmpArray[j] == 'f4' && !checkFloat(theForm.elements[i].value, 4)){//有不合法的数字型字段
				floatStr = floatStr + '\n' + colName;
			}else if(tmpArray[j] == 'f2' && !checkFloat(theForm.elements[i].value, 2)){//有不合法的数字型字段
				floatStr = floatStr + '\n' + colName;
			}else if(tmpArray[j] == 'f1' && !checkFloat(theForm.elements[i].value, 1)){//有不合法的数字型字段
				floatStr = floatStr + '\n' + colName;
			}else if(tmpArray[j] == 'sfz' && !isNull(theForm.elements[i].value) && !IDCard_validate(theForm.elements[i].value)){//有不合法的身份证型字段
				sfzStr = sfzStr + '\n' + colName;
			}else if(tmpArray[j] == 's'&& !isNull(theForm.elements[i].value)){//有不合法的视力型字段
//				alert(pfloat);
				if(checkFloat(theForm.elements[i].value, 1) && (((pfloat>=0.1) && (pfloat<=1.5))||((pfloat>=4.0)&&(pfloat<=5.2))) ){
				}else{
				floatSightStr = floatSightStr + '\n' + colName;
				}
			}else if(tmpArray[j] == 'c'&& !isNull(theForm.elements[i].value)){//有不合法的颜色型字段
				var c1=theForm.elements[i].value.substr(0,1);
				var c2=theForm.elements[i].value.substr(1,6);
//				alert(theForm.elements[i].value.length+"|"+c1+"|"+parseInt(c2,16));
				if((theForm.elements[i].value.length==7) && (c1=="#") && (parseInt(c2,16)>=0) && (parseInt(c2,16)<=16777215)){
				}else{
				colorStr = colorStr + '\n' + colName;
				}
			}else if(tmpArray[j].substr(0,1) == 'l'){
				var tmpA1=new String();
				tmpA=tmpArray[j];
//				alert("tmpA="+tmpA);
				var bitL=bitLength(theForm.elements[i].value);
//				alert("bitL="+bitL);
				var tmpAL=tmpA.length;
//				alert("tmpAL="+tmpAL);
				var pos1=tmpA.indexOf("(");
				var pos2=tmpA.indexOf("-");
				var pos3=tmpA.indexOf(")");
//				alert("1="+pos1+"&2="+pos2+"&3="+pos3);
				var bitL1=tmpA.substring(pos1+1,pos2);
				var bitL2=tmpA.substring(pos2+1,pos3);
//				alert("L1"+bitL1+">L2="+bitL2);
				if(bitL!=0){
					if(isInteger(bitL1)&&isInteger(bitL2)){
						if(bitL<bitL1||bitL>bitL2){
//							alert("no");
							bitLStr = bitLStr + '\n' +colName;
						}else{
//							alert("yes");
						}
						
					}
				}
//				return false;
			}
		}
	}
	if (notnullStr.length > 0){
		window.alert('以下字段不能为空！' + notnullStr);
		return false;
	}
	if (sfzStr.length > 0){
//		window.alert('以下身份证型字段不合法！' + sfzStr);
		return false;
	}
	if (numberStr.length > 0){
		window.alert('以下数字型字段不合法！' + numberStr);
		return false;
	}
	if (numberHeightStr.length > 0){
		window.alert('以下身高型字段不合法！' + numberHeightStr);
		return false;
	}
	if (numberWeightStr.length > 0){
		window.alert('以下体重型字段不合法！' + numberWeightStr);
		return false;
	}
	if (numberAgeStr.length > 0){
		window.alert('以下年龄型字段不合法！' + numberAgeStr);
		return false;
	}
	if (numberAgeLawMaleStr.length > 0){
		window.alert('以下法定男性年龄(16~60)型字段不合法！' + numberAgeLawMaleStr);
		return false;
	}
	if (numberAgeLawFemaleStr.length > 0){
		window.alert('以下法定女性年龄(16~55)型字段不合法！' + numberAgeLawFemaleStr);
		return false;
	}
	if (postcodeStr.length > 0){
		window.alert('以下邮政编码型字段不合法！' + postcodeStr);
		return false;
	}
	if (telLStr.length > 0){
		window.alert('以下电话型字段不合法！(格式示例：+86020-12345678)' + telLStr);
		return false;
	}
	if (dateStr.length > 0){
		window.alert('以下日期型字段格式不合法！(格式示例：2005-05-05)' + dateStr);
		return false;
	}
	if (dateLongStr.length > 0){
		window.alert('以下日期型字段格式不合法！(格式示例：2005-05-05 23:59:59)' + dateLongStr);
		return false;
	}
	if (dateShortStr.length > 0){
		window.alert('以下日期型字段格式不合法！(格式示例：2005-05)' + dateShortStr);
		return false;
	}
	if (dateCloseStr.length > 0){
		window.alert('以下日期型字段格式不合法！(格式示例：200505)' + dateCloseStr);
		return false;
	}
	if (dateTimeStr.length > 0){
		window.alert('以下时间型字段格式不合法！(格式示例：23:59:59)' + dateTimeStr);
		return false;
	}
	if (chineseStr.length > 0){
        window.alert('以下纯中文字符串不合法！' + chineseStr);
		return false;
	}
	if (notHasChineseStr.length > 0){
       window.alert('以下非中文字符串不合法！' + notHasChineseStr);
	   return false;
    }
	if (floatStr.length > 0){
		window.alert('以下浮点型字段不合法！' + floatStr);
		return false;
	}
	if (floatSightStr.length > 0){
		window.alert('以下浮点型字段不合法！(示例：0.1~1.5 或者 4.0~5.2)' + floatSightStr);
		return false;
	}
	if (bitLStr.length > 0){
		window.alert('以下字段长度不合法！' + bitLStr);
		return false;
	}
	if (colorStr.length > 0){
		window.alert('以下颜色型字段不合法！' + colorStr);
		return false;
	}
	return true;
}


/**
* Form 提交时调用的函数，对一些关联字段进行校验，如结束日期小于开始日期等。
* 校验串从form的tableValidateStr中取出，多个校验内容以“|”分隔，
* 如：“L:jsrq:ksrq|LE:zje2:zje1”，L开头表示大于，LE开头表示大于等于
*
*/
function validateForm(dform){
	theForm = dform;
	validStr = theForm.tableValidateStr.value;
	if (!isNull(validStr)){
		strs = validStr.split('|');
		for (i = 0; i < strs.length; i ++){//循环每个校验配置
			strs2 = strs[i].split(':');
			eleName1 = strs2[1];
			eleName2 = strs2[2];
			eleValue1 = null;
			eleValue2 = null;
			cnt = 0;
			for (j = 0; j < theForm.elements.length; j ++){//遍历form中的字段,找到要比较的字段值
				if (cnt == 2){
					break;
				}
				if (theForm.elements[j].name == eleName1){
					eleValue1 = theForm.elements[j].value;
					cnt ++;
				}
				if (theForm.elements[j].name == eleName2){
					eleValue2 = theForm.elements[j].value;
					cnt ++;
				}
			}
			
			if (str2[0] == 'L' && eleValue1 <= eleValue2){
				window.alert(eleName1 + '的值应大于' + eleName2 + '的值');
				return false;
			}else if (str2[0] == 'LE' && eleValue1 < eleValue2){
				window.alert(eleName1 + '的值应大于等于' + eleName2 + '的值');
				return false;
			}
		}
	}
	return true;
}

/**
* 根据列表中的选择（checkbox，可选多条）要进行某项操作前（如批量删除），调用
* 该函数进行检查，如果没有打勾，提示没有选择，如果有打勾，确认是否要执行某项操作
* 2005-09-20 smjk 加入对多记录批量修改删除的勾选校验
*/
function confirmOper(aform, checkboxName, confirmStr){
	theForm = aform;
	flag = false;
	//alert(theForm.name + "--" + theForm.elements);
	//alert(theForm.elements.length);
	if(theForm.elements == null){
		alert("要提交的表单没有数据");
	}else{
		for (i = 0; i < theForm.elements.length; i ++){
//			window.alert(theForm.elements[i].type + "--" + theForm.elements[i].checked);
			if ((theForm.elements[i].name == checkboxName || theForm.elements[i].name.substr(0,checkboxName.length) == checkboxName)
				&& (theForm.elements[i].type == "checkbox" || theForm.elements[i].type == "radio" )){
				if (theForm.elements[i].checked){
					flag = true;
					break;
				}
			}
		}
	}
	if (flag){
		answer = window.confirm("您确定要" + confirmStr + "所选的记录吗？");
		if (answer != "0"){
			return true;
		}
	}else{
		window.alert("您没有选择要操作的记录！");
	}
	return false;
}

/**
 *	Purpose: 根据列表中的选择（checkbox，可选多条）进行修改操作，调用
 *			 该函数进行检查，如果勾选项数量为空或者超过一个时，提示出错，否则直接执行选定项的修改
 *	Inputs: 表单，勾选框的名字、存取ID的变量
 *	Returns: true、false
 */

 function confirmEdit(aform, checkboxName,inputID){
    //alert("inputID'value=" + inputID.value);
	theForm = aform;
	flag = false;
	var id;
	var count=0;
	//alert(theForm.name + "--" + theForm.elements);
	//alert(theForm.elements.length);
	if(theForm.elements == null){
		alert("要提交的表单没有数据");
	}else{
		for (i = 0; i < theForm.elements.length; i ++){
//			window.alert(theForm.elements[i].type + "--" + theForm.elements[i].checked);
			if (theForm.elements[i].name == checkboxName
				&& (theForm.elements[i].type == "checkbox" || theForm.elements[i].type == "radio" )){
				if (theForm.elements[i].checked){
					flag = true;
				    //alert("selected id=" + theForm.elements[i].value);
				    inputID.value = theForm.elements[i].value;
					count = count + 1;
					continue;
				}
			}
		}
	}
	if(count == 0){
		window.alert("您没有选择要操作的记录！");
		return false;
	}
	if (flag && count > 1){
		window.alert("您只能选择一条记录！");
		return false;
	}	
	if (flag && count == 1){
//		window.alert("ok, you are right！");
//    alert("now inputID'value=" + inputID.value);
		return true;
	}
	return false;
}

/**
 *	Purpose: 根据列表中的选择（checkbox，可选多条）进行修改操作，调用
 *			 该函数进行检查，如果勾选项数量为空或者超过一个时，提示出错，否则直接执行选定项的修改
 *	Inputs: 表单，勾选框的名字、存取ID的变量(2个)
 *	Returns: true、false
 */

 function confirmEditCon2(aform, checkboxName,editform,eles){
	theForm = aform;
	if(theForm.elements == null){
		alert("要提交的表单没有数据");
		return false;
	}
	var count=0;
	index = -1;
	flag = false;
	for (i = 0; i < theForm.elements.length; i ++){
		if (theForm.elements[i].name == checkboxName
			&& (theForm.elements[i].type == "checkbox" || theForm.elements[i].type == "radio" )){
			if (theForm.elements[i].checked){
				flag = true;
				index = i;
				count = count + 1;
				continue;
			}
		}
	}
	if(count == 0){
		window.alert("您没有选择要操作的记录！");
		return false;
	}
	if (flag && count > 1){
		window.alert("您只能选择一条记录！");
		return false;
	}	
	if (flag && count == 1){
		split_pot=theForm.elements[index].value;
		split_array=split_pot.split("|");
		arr2=eles.split("|");
		if (arr2.length != split_array.length){
			alert("主键数目不匹配");
			alert("checkbox："+split_array.length+";form.value:"+arr2.length);
		}
		for(j=0; j<arr2.length; j++){
			inputs = editform.getElementsByTagName('input');
			flag = false;
			for(k = 0; k < inputs.length; k ++){
				inputname = inputs[k].name;
				if (inputname == arr2[j]){
					inputs[k].value=split_array[j];
					flag = true;
					break;
				}
			}
			if (!flag){
				alert ("editform中没有找到明为" + arr2[j] + "的元素");
				return false;
			}
		}
		return true;
	}
	return false;
}

/**
 *	Purpose: 该函数扩展confirmEditCon2，除了可以取出checkbox中的value
 *			 还可以取出checkbox中的自定义属性
 *	Inputs: 表单，勾选框的名字、存取ID的变量(2个)、存取flag的变量(2个)
 *	Returns: true、false
 *	2006-04-05 太和开发组
 */

function confirmEditFlag(aform, checkboxName,editform,eles,flagform,flags){
	theForm = aform;
	if(theForm.elements == null){
		alert("要提交的表单没有数据");
		return false;
	}
	var count=0;
	index = -1;
	flag = false;
	for (i = 0; i < theForm.elements.length; i ++){
		if (theForm.elements[i].name == checkboxName
			&& (theForm.elements[i].type == "checkbox" || theForm.elements[i].type == "radio" )){
			if (theForm.elements[i].checked){
				flag = true;
				index = i;
				count = count + 1;
				continue;
			}
		}
	}
	if(count == 0){
		window.alert("您没有选择要操作的记录！");
		return false;
	}
	if (flag && count > 1){
		window.alert("您只能选择一条记录！");
		return false;
	}
	
	if (flag && count == 1){
		split_pot=theForm.elements[index].value;
		split_array=split_pot.split("|");
		arr2=eles.split("|");
		if (arr2.length != split_array.length){
			alert("主键数目不匹配");
			alert("checkbox："+split_array.length+";form.value:"+arr2.length);
		}
		for(j=0; j<arr2.length; j++){
			//alert(arr2[j]);
			inputs=editform.elements[arr2[j]];
			if(inputs==null)
			{
				alert ("editform中没有找到明为" + arr2[j] + "的元素");
				continue;
			}
			inputs.value=split_array[j];
		}
		
		arr2=flags.split("|");
		for(j=0;j<arr2.length;j++){
			//alert(arr2[j]);
			inputs=flagform.elements[arr2[j]];
			
			if(inputs==null)
			{
				alert ("editform中没有找到明为" + arr2[j] + "的元素");
				continue;
			}
			inputs.value=theForm.elements[index].getAttribute(arr2[j]);
		}
		return true;
	}
	return false;	
}


/**
 *	Purpose: 对复选框checkbox全选
 *	Inputs: var
 *	Returns: 
 */
function checkAll(opform){
   eval('var obj = document.' + opform);
  // alert(obj.checkbox.length);
	try {
		if(obj.checkbox.length>1) {
		 	for (var i=0;i<obj.checkbox.length;i++) {
		    obj.checkbox[i].checked=obj.flag.checked;
		
		  }
	 	}
	 	else {
			obj.checkbox.checked=obj.flag.checked;
	 	}
	}
	catch(e) {
	 if (obj.Checkbox != undefined){
		obj.checkbox.checked=obj.flag.checked;
	}
	}	
}
/**
 *  added by hyq
 *	Purpose: 对复选框checkbox全选
 *	Inputs: opform 表单名称
 *	Inputs: chkname 复选框名称
 *	Returns: 
 */
function checkAll2(opform, chkname){
   	eval('var obj = document.' + opform);
   	eval('var chkbox = document.' + opform+'.'+chkname);
		try {
			if(chkbox.length>1) {
		 		for (var i=0;i<chkbox.length;i++) {
		    	chkbox[i].checked=obj.flag.checked;
		
		 	}
	 		}
	 		else {
			chkbox.checked=obj.flag.checked;
	 		}
		}
			catch(e) {
		 		if (chkbox != undefined){
				chkbox.checked=obj.flag.checked;
			}
		}	
}
	
/**
 *	Purpose: 校验提交工作流程信息时是否选择了下一环节
 *	Inputs: var
 *	Returns: 
 */
function selectNextActivity(aform){
  //var obj = document.aform;
  if(aform.tansitionID.value == ""){
    alert("请选择下一环节");
    return false;
  }
  return true;
}
/**
 *	Purpose: 调用职业分类与代码表
 *	Inputs: cols1——职业分类代码的控件ID；
 *			cols2——职业分类名称的控件ID；
 *			aform——控件所在的form名称；（均为字符型传入，用单引号e.g.（'AAA102','BCC279','aform'））
 *	Returns: 返回职业分类代码到原来页面上的cols1,职业分类名称到原来页面上的cols2
 *	
 */

    function openCareerCodeList(cols1,cols2,aform,whereCond,branchLink){
	var theform=aform;//控件所在的form名称
	var item=cols1;//职业分类代码的控件ID
	var name=cols2;//职业分类名称的控件ID
	if(whereCond==undefined){
		whereCond="";
	}
	if(branchLink==undefined){
		branchLik="";
	}
	var leftX=event.screenX;
	var heightY=event.screenY
	var transpage="MainAction?ActionType=career_code_list&item=";
	transpage += item+"&name="+cols2+"&aform="+theform+"&whereCond="+whereCond+"&branchLink="+branchLink;
//	alert("left="+event.screenX+"|right="+event.screenY);
	if(event.screenX>600){leftX=parseInt(event.screenX,10)-260;}
//	if(true){heightY=750;}
	locStr = "dialogLeft:" + leftX + ";dialogTop:" + heightY;
	var position="status:0;help:0;dialogWidth:260px;dialogHeight:450px;"+locStr;
   	showModalDialog(transpage,window, position);
   }

/**
 *	Purpose: 调用地区分类与代码表
 *	Inputs: cols1——地区分类代码的控件ID；
 *			cols2——地区分类名称的控件ID；
 *			aform——控件所在的form名称；（均为字符型传入，用单引号e.g.（'AAA001','BAA314','aform'））
 *	Returns: 返回地区分类代码到原来页面上的cols1,地区分类名称到原来页面上的cols2
 *	
 */

    function openCareerAreaList(cols1,cols2,aform,whereCond,branchLink){
	var theform=aform;//控件所在的form名称
	var item=cols1;//地区分类代码的控件ID
	var name=cols2;//地区分类名称的控件ID
	if(whereCond==undefined){
		whereCond="";
	}
	if(branchLink==undefined){
		branchLik="";
	}
	var transpage="MainAction?ActionType=career_area_list&item=";
	transpage += item+"&name="+cols2+"&aform="+theform+"&whereCond="+whereCond+"&branchLink="+branchLink;
	locStr = "dialogLeft:" + event.screenX + ";dialogTop:" + event.screenY;
	var position="status:0;help:0;dialogWidth:260px;dialogHeight:300px;"+locStr;
   	showModalDialog(transpage,window, position);
   }


/**
 *	Purpose: clear the elements of the form called formName
 *	Inputs: formName
 *	Returns: no return value
 *	Author: runfly
 */
function clear(formName){ 
   eval("var obj = document."+ formName + ";");
   if(obj.elements.length==0){
     return;
   }
   //清除表单前先提示
   var confFlag = window.confirm("您确定要清除表单吗?");
   if (!confFlag){
	  return ;
   }
   for(var i=0;i<obj.elements.length;i++){
     var eleObj = obj.elements[i];
     var type = eleObj.type;   
	 //alert("type="+type);
     switch(type){
       case "text": 
          if(eleObj.readOnly==true){
	         break;
		  }else{
	         eleObj.value = "";break;
		  }	 
       case "hidden":break;
       case "password":
          if(eleObj.readOnly==true){
	         break;
	      }else{
	         eleObj.value = "";break;  
		  }
       case "file":eleObj.value = "";break;	   
       case "textarea": 
		   if(eleObj.readOnly==true){
		      break;
	       }else{
	          eleObj.value = "";break;
		   } 
       case "checkbox":
	      eleObj.checked = false;break;
       case "radio": 
	      eleObj.checked = false;break;
       case "select-one":
	      for(var j=0;j<eleObj.options.length;j++){
		     eleObj.options[j].selected = false;
			 if(eleObj.options[j].text == "请选择"){//the Chinese is "please select"
			    eleObj.options[j].selected = true;
			 }
		  } 
		  break;
       case "select-multiple": 
	      for(var j=0;j<eleObj.options.length;j++){
		     eleObj.options[j].selected = false;
		  } 		  
		  break;;
     }
   }

}
/**
 *	Purpose: clear the elements of the form called formName without confirm
 *	Inputs: formName
 *	Returns: no return value
 *	Author: liusiyu
 */
function clearAuto(formName){ 
   eval("var obj = document."+ formName + ";");
   //alert(obj);
   if(obj.elements.length==0){
     return;
   }
   //清除表单前先提示
//   var confFlag = window.confirm("您确定要清除表单吗?");
//   if (!confFlag){
//	  return;
//   }
   for(var i=0;i<obj.elements.length;i++){
     var eleObj = obj.elements[i];
     var type = eleObj.type;   
	 //alert("type="+type);
     switch(type){
       case "text": 
          if(eleObj.readOnly==true){
	         break;
		  }else{
	         eleObj.value = "";break;
		  }	 
       case "hidden":break;
       case "password":
          if(eleObj.readOnly==true){
	         break;
	      }else{
	         eleObj.value = "";break;  
		  }
       case "file":eleObj.value = "";break;	   
       case "textarea": 
		   if(eleObj.readOnly==true){
		      break;
	       }else{
	          eleObj.value = "";break;
		   } 
       case "checkbox":
	      eleObj.checked = false;break;
       case "radio": 
	      eleObj.checked = false;break;
       case "select-one":
	      for(var j=0;j<eleObj.options.length;j++){
		     eleObj.options[j].selected = false;
			 if(eleObj.options[j].text == "请选择"){//the Chinese is "please select"
			    eleObj.options[j].selected = true;
			 }
		  } 
		  break;
       case "select-multiple": 
	      for(var j=0;j<eleObj.options.length;j++){
		     eleObj.options[j].selected = false;
		  } 		  
		  break;;
     }
   }
}

/**
*Purpose: 调用用户和部门
 *	Inputs: actionType 关联页面
 			cols1——获取分类代码的控件ID；
 *			cols2——获取分类名称的控件ID；
 *			formName——控件所在的form名称；（均为字符型传入，用单引号e.g.（'career_area_list','DDDD','CCCC','aform'））
 *	Returns: 返代码到原来页面上的cols1,名称到原来页面上的cols2
 *	
*
*/
 function openJumpChoose(actionType,cols1,cols2,formName){
	var trnaspage="MainAction?ActionType=" + actionType + "&cols1="+ cols1 + "&cols2=" + cols2 + "&formName=" + formName;
	//var trnaspage="MainAction?ActionType=workitem_accepter&cols1="+ cols1 + "&cols2=" + cols2 + "&formName=" + formName;
	var position = "dialogLeft:" + event.screenX + ";dialogTop:" + event.screenY ;
	var winSize = "status:0;help:0;dialogWidth:260px;dialogHeight:300px;" + position;
	showModalDialog(trnaspage,window,winSize);
	
}



/**
 *	Purpose: 身份证检验
 *	Inputs: 身份证号码
 *	Returns: 如果输入的15位会自动升级之后判断正确与否，正确返回true，错误返回 false
 *	
 */

function checkstr(str)
{
	if(str==null||element.value=="")return true;
	for(var i=0;i<str.length;i++)
	{
		var k=str.substring(i,i+1);
		if(k>="a"&&k<="z"&&k!="'")
		{
			return false;
		}
	}
	return true;
}
function checkEmpty(){

	if (element.value==null || element.value == "") {
		if(element.label==undefined)
			alert("不能为空!");
		else
			alert(element.label+"不能为空!");
		return false;
	}
	else{
		return true;
	}
}
function bitLength(str){
	if(str==null || str == "") return 0;
	var len = 0;
	for(var i=0; i < str.length; i++){
		var t=str.substring(i,i+1);
		if(t.charCodeAt(0) < 0x4e00&&t.charCodeAt(0)!=0x3002&&t.charCodeAt(0)!=0x2018&&t.charCodeAt(0)!=0x2019){
			len ++;
		 	continue;
		}

		len += 2;
	}
	return len;
}
function period_validate(inputStr)
{
	if(inputStr.substr(4,2)>12||inputStr.substr(4,2)<1)
	alert("年月中的月份不合法");
	if(inputStr.substr(0,4)<1900)
	alert("年月中的年份不能小于1900");
}
function transact(inputStr){
           var getno=inputStr;
//           alert("getno="+getno);
//           alert("length"+getno.length)
	           if(getno.length==15){
		           var wi=new Array(7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2,1);
//		           alert("wi="+wi[1]);
		           var ai=new Array(1,0,'X',9,8,7,6,5,4,3,2);
//		           alert("ai="+ai);
		           var F1=getno.substr(0,6)+"19"+getno.substr(6,15);
//		           alert("F1="+F1);
		           var F2=new Array();
		           F2=F1.split("");
//		           alert("F2="+F2[1]);
		           var i=0;
		           var j=0;
		           var sum =0;
		           for(i = 0 ; i<17; i++)
					{
						j = wi[i]*F2[i];
						sum = sum + j;
						
					}
//					alert("sum="+sum);
					sum=sum%11;
//					alert("again.sum="+sum);
					F2[17]=ai[sum];

					var F3=new String();
					for(i=0;i<18;i++){
						if(F2[i]=='X'){
							F3=F3+"X";
							break;
						}
						eval("F3=F3+"+F2[i]);
					}
					alert("身份证自动升位为"+F3);
					return F3;
		           
	           }else{
//	           		alert("不是15位");
	           		return inputStr;
	           }
           
   
   }
function transact_na(inputStr){
           var getno=inputStr;
//           alert("getno="+getno);
//           alert("length"+getno.length)
	           if(getno.length==15){
		           var wi=new Array(7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2,1);
//		           alert("wi="+wi[1]);
		           var ai=new Array(1,0,'X',9,8,7,6,5,4,3,2);
//		           alert("ai="+ai);
		           var F1=getno.substr(0,6)+"19"+getno.substr(6,15);
//		           alert("F1="+F1);
		           var F2=new Array();
		           F2=F1.split("");
//		           alert("F2="+F2[1]);
		           var i=0;
		           var j=0;
		           var sum =0;
		           for(i = 0 ; i<17; i++)
					{
						j = wi[i]*F2[i];
						sum = sum + j;
						
					}
//					alert("sum="+sum);
					sum=sum%11;
//					alert("again.sum="+sum);
					F2[17]=ai[sum];

					var F3=new String();
					for(i=0;i<18;i++){
						if(F2[i]=='X'){
							F3=F3+"X";
							break;
						}
						eval("F3=F3+"+F2[i]);
					}
					//alert("身份证自动升位为"+F3);
					return F3;
		           
	           }else{
//	           		alert("不是15位");
	           		return inputStr;
	           }
           
   
   }

function IDCard_validate(inputStr){

     	 var inputPro = "公民身份号码";
       if(inputStr == null) inputStr = "";
       var format=inputStr.length;

	   if(!is0AndPosInteger(inputStr)){
          alert(inputPro + "输入不合法！");
          return false;	}


       if(inputStr == "") return true;
       if((format==18)&&(!checkCheckStr(inputStr))) return false;
       if(format==15){
       		inputStr=transact(inputStr);
       		}

       if(format==15 || format==18){
         if(!checkID(inputStr,inputPro,format))

            return false;
       }else{
          alert("公民身份号码的位数输入不正确！");
          return false;
       }

       return true;

	}

    function checkCheckStr(inputstr){

				   var i=(inputstr.substr(0,1)*7+inputstr.substr(1,1)*9+inputstr.substr(2,1)*10+inputstr.substr(3,1)*5+inputstr.substr(4,1)*8+inputstr.substr(5,1)*4+inputstr.substr(6,1)*2+inputstr.substr(7,1)*1+inputstr.substr(8,1)*6+inputstr.substr(9,1)*3+inputstr.substr(10,1)*7+inputstr.substr(11,1)*9+inputstr.substr(12,1)*10+inputstr.substr(13,1)*5+inputstr.substr(14,1)*8+inputstr.substr(15,1)*4+inputstr.substr(16,1)*2 )% 11 ;
				   if(i>2)i=12-i;
				   else if(i==2)i="X";
				   else if(i<2)i=1-i;
				   if(inputstr.substr(17,1)==i) {return true;}
				   else
				   {
				   alert("公民身份号码输入不合法！校验位错误");
				   return false;}
    }

    function checkID(inputStr,objName,format){
                var temp;
                var year,month,day;
                if(inputStr.length != format){
                      alert(objName+"格式不对,应为“"+format+"”位。");
                      return false;
                }
                else {


                    if(format==18){

                      temp=inputStr.substring(6,10);
                      year=parseInt(temp,10);
                      if(year<1900 || year>2200){
                         alert(objName+"年份应介于1900与2200之间，请重新输入！");
                         return false;
                      }

                    }
                    else if(format==15){
                      temp=inputStr.substring(6,8);
                      year=parseInt(temp,10);
                      if(year<00 || year>99){
                         alert(objName+"年份应介于00与99之间，请重新输入！");
                         return false;
                      }
                    }



                    if(format==18)
                      temp=inputStr.substring(10,12);
                    else if(format==15)
                      temp=inputStr.substring(8,10);

                    month=parseInt(temp,10);
                    if(month<1 ||month>12){
                        alert(objName+"月份必须介于1与12之间！");
                        return false;
                    }


                     if(format==18)
                       temp=inputStr.substring(12,14);
                    else if(format==15)
                      temp=inputStr.substring(10,12);

                    day=parseInt(temp,10);
                    if((day==0)||(day>31)){
                            alert(objName+"日必须介于0与31之间！");
                            return false;
                    }else if(day>28 && day<31){
                            if(month==2){
                                    if(day!=29){
                                            alert(objName+year+"年"+month+"月无"+day+"日。");
                                            return false;
                                    }
                                    else {
                                            if((year%4)!=0){
                                                    alert(objName+year+"年"+month+"月无"+day+"日。");
                                                    return false;
                                             }
                                             else {
                                                    if((year%100==0)&&(year%400!=0)){
                                                           alert(objName+year+"年"+month+"月无"+day+"日。");
                                                           return false;
                                                    }
                                             }
                                    }
                            }
                    }

                    else if(day==31){
                            if((month==2)||(month==4)||(month==6)||(month==9)||(month==11)){
                                    alert(objName+month+"月无"+day+"日");
                                    return false;
                            }
                    }
               }

               return true;
        }



    function is0AndPosInteger(inputVal) {

         var format=inputVal.length;
         if(format==18){
             var lastChar = inputVal.charAt(inputVal.length-1)
             if(lastChar=="X")
                inputVal=inputVal.substring(0, inputVal.length-1);
         }
       	 for (var i = 0; i < inputVal.length; i++) {
               var oneChar = inputVal.charAt(i)
	   if (oneChar < "0" || oneChar > "9") {
	       return false;
           }

        }
        return true;
   }


/**
 *	Purpose: 判断控件中的日期是否为法定假日
 *	Inputs: 表单,控件名称
 *			参数条件（0 全检验|1仅包括全体人节假日|2仅包括周六周日）
 *			提示标志(true提示，false不提示)
 *	Returns: True, False 
 */
function checkHoliday(aform,checkdate,Con,aFlag){
	//alert(aform+"|"+checkdate+"|"+Con+"|"+aFlag);
	var lunar = "";
	//参数判断
	if(aform==undefined||checkdate==undefined||isNull(checkdate)||Con==undefined||aFlag==undefined){
		alert("参数错误");
		return -1;
	}else{
		eval("var obj00=document."+aform);
		eval("var obj01=obj00."+checkdate+".value");
		var obj11=new Array();
		obj11=obj01.split("-");
		if(obj11.length<3){
			alert("日期类型错误");
			return -1;
		}
		//获取阴历日期（格式：2005-10-2）
		lunar = transDateTolunar(aform,checkdate);
		//alert(lunar);
	}
		var obj12=new Array();
		obj12=lunar.split("-");
		if(obj12.length<3){
			alert("返回日期类型错误");
			return -1;
		}
	//判断当前日期是否为周六/周日
	var checkday = new Date(parseInt(obj11[0],10),parseInt(obj11[1],10)-1,parseInt(obj11[2],10));
	if(checkday.getDay()==6){
		if(aFlag){alert("星期六");}
		return true;
	}else if(checkday.getDay()==0){
		if(aFlag){alert("星期日");}
		return true;
	
	}
	//判断参数==2，则忽略下面的检测
	if(Con=="2"){
		return false;
	}
	//农历新年（法定为初一到初三）
	if(obj12[1]=="1"&&(obj12[2]=="1"||obj12[2]=="2"||obj12[2]=="3")){
		switch(obj12[2]){
			case "1":	if(aFlag){alert("正月初一");}	return true;
			case "2":	if(aFlag){alert("正月初二");}	return true;
			case "3":	if(aFlag){alert("正月初三");}	return true;
			default:	alert("阴历识别错误");
		}
	}
	//公历法定假期（全民假期）
	var obj13=obj11[1]+"-"+obj11[2];
	
	switch(obj13){
		case "1-1":		if(aFlag){alert("元旦");}	return true;
		case "5-1":		if(aFlag){alert("劳动节");}	return true;
		case "5-2":		if(aFlag){alert("劳动节");}	return true;
		case "5-3":		if(aFlag){alert("劳动节");}	return true;
		case "10-1":	if(aFlag){alert("国庆节");}	return true;
		case "10-2":	if(aFlag){alert("国庆节");}	return true;
		case "10-3":	if(aFlag){alert("国庆节");}	return true;
		default:
	}
	//判断参数==1，则忽略下面的检测
	if(Con=="1"){
		return false;
	}
	//公历法定假期（部分人的节日）
	switch(obj13){
		case "3-8":		if(aFlag){alert("妇女节");}	return true;
		case "5-4":		if(aFlag){alert("青年节");}	return true;
		case "6-1":		if(aFlag){alert("儿童节");}	return true;
		case "8-1":		if(aFlag){alert("建军节");}	return true;
		default:
	}
	return false;
	
}
/**
 *	Purpose: 获取字符在指定字串中的位置，从0开始
 *	Inputs: 指定字符
 *			
 *			
 *	Returns: int
 */
        function getNUM(str){
    	     var CODESTR = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	         var value=CODESTR.indexOf(str);
	         return value;
	         }

/**
 *	Purpose: 根据国家技术监督局的组织机构编码规则对输入的组织机构代码进行校验
 *	Inputs: 组织机构代码
 *			
 *			
 *	Returns: True, False 
 */		
		function checkAAB003(AAB003){
		     if(AAB003 == null || AAB003 == ""){
			     return false;
			 }
			 if(AAB003.length!=10)  return false;
			 if(AAB003.substring(AAB003.length-2,AAB003.length-1)!="-") return false;
			 
			 var rightArray = new Array(3,7,9,10,5,8,4,2);
		     var primaryCode;//主体代码
			 var checkedCode;//当前校验码
			 var tmpCheckedCode;
			 var genCheckedCode;//生成的校验码
			 var ind = AAB003.indexOf("-");
			 checkedCode = AAB003.substring(ind+1,AAB003.length);
			 primaryCode = AAB003.substring(0,ind);
			 var s=0;
			 for(var i=0;i<8;i++){
			    var str = primaryCode.substring(i,i+1);//75106117-0
				var index =getNUM(str);
				var rightValue = rightArray[i]*1;
				s += index * rightValue;		
			 }
			 var modValue = s % 11;
			 tmpCheckedCode = 11 - modValue;
			 
			 if(tmpCheckedCode==10){
			    genCheckedCode = "X";
			 }else if(tmpCheckedCode==11){
			    genCheckedCode = "0";
			 }else{
			     genCheckedCode =""+tmpCheckedCode;
			 }
			 
			 if(genCheckedCode==checkedCode){
			     return true;
			 }else{
			     return false;				 
			 }					 
		}
		



