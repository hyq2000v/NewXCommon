/**
 *  author: zouchunping
 *	Purpose:  打开窗口选择单位
 *	Inputs: aform?表单 
            action?表单的action 
            actiontype?表单提交的url)
 *	Returns: 
 *  
 */
function dwxz(aform,Action,ActionType){
	var obj = aform;
	// var obj = document.createElement("form");
	obj.ActionType.value = ActionType;
	obj.action = Action;
	//alert(obj.action);
	obj.method="post";
	if(ActionType == ""){
		alert("ActionType未指定!");
	}
	//存在组织机构代码才打开窗口
  	for (i = 0; i < obj.elements.length; i ++){//遍历form中的字段
		ele = obj.elements[i];
		//alert(ele.name);
		if (ele.name=="AAB003"||ele.name=="AAB004"){
			obj.submit();
			return
		}
	}
}	

/**
*author:lianglifu
*Purpose:打开培训机构选择窗口
*
*
*/
function pxjgxd(aform,Action,ActionType){
	var obj = aform;
	obj.ActionType.value = ActionType;
	//obj.action = Action;
	//alert("ok");
	obj.method="post";
	if(ActionType == ""){
		alert("ActionType未指定!");
	}
			obj.submit();
	}
	/**
*author:lianglifu
*Purpose:打开培训机构选择窗口
*
*
*/
function jdzxd(aform,Action,ActionType){
	var obj = aform;
	obj.ActionType.value = ActionType;
	//obj.action = Action;
	//alert("ok");
	obj.method="post";
	if(ActionType == ""){
		alert("ActionType未指定!");
	}
			obj.submit();
	}
/**
 *  author: zouchunping
 *	Purpose:  大字段拆分处理
 *	Inputs: value?需要拆分的大字段 
            len?拆分以后字段长度 
            max？数组的大小)
 *	Returns: 拆分后的数组
 *  
 */
function blobSubstr(value,len,max){
    if (len==null||len==0){
		len=1000;
	}
	
    var n = Math.ceil(value.length/len);
	var sz = new Array();
	var begin =0;
	var end = 0;
	if(n==1){
		end=value.length;
    }else{
    	end = len;
	}
	
	//存在组织机构代码才打开窗口
  	for (i = 0; i < max; i ++){//遍历form中的字段  		
		sz[i] = value.substring(begin,end);
		//alert(value+"---"+i+ value.substring(begin,end));	
		end = end + len;
		begin = begin + len;
		
	}
	return sz;
}	

function checknull(str){
     if ((isNull(str)) || (str == "null") || (str == "")){ return false;}
     return true;
}
function checksame(str1,str2){
    if (str1==str2){return true;}
    if ((isNull(str1) || (str1 == "null") || (str1 == "")) && (isNull(str2) || (str2 == "null") || (str2 == ""))){
        return true;
    }
    return false;
}

function gettoday(){
    var today = new Date(); 
    return today.getYear() + "-"+(today.getMonth()+101).toString().substr(1,2) +'-' +(today.getDate()+100).toString().substr(1,2);
}	
/**
 *	作者：陈密
 *  日期：2005-07-06
 *	功能：转换身份证号
 *	参数意义：str         身份证号码
 *  返回值：身份证号码  或  false
 *	使用方法：    transformSfzh("123456789");
 */

     function transformSfzh(str){
         var newstr="new";
         if ((isNull(str)) || (str == "null") || (str == "")){
            return false;
         }
         if (str.length!=15 && str.length !=18){
             alert("公民身份证长度不正确应该为15或18位！");
             return false;
         }
         if (str.length==15){
             if (isNaN(str)==true){
                 alert("15位公民身份证应该为数字！");
                 return false
             }
             newstr = transact(str);
         }
         if (str.length==18){
             if (isNaN(str.substr(0,17))==true){
                 alert("18位公民身份证前17位应该为数字！");
                 return false
             }
             newstr = str;
         }
         if (IDCard_validate(newstr)==true){
            return newstr;
        }else{
            return false;
        }
     }
/**
 *	作者：刘斯宇
 *  日期：2005-08-24
 *	功能：转换身份证号(无提示信息)
 *	参数意义：str         身份证号码
 *  返回值：身份证号码  或  
 *	0	传入参数str为null
 *	-1	公民身份证长度不是15或18位
 *	-1	15位公民身份证不是数字
 *	-3	18位公民身份证前17位不是数字
 *	-4	没有通过18位校验
 *	使用方法：    transformSfzh_na("123456789");
 */

     function transformSfzh_na(str){
         var newstr="new";
         if ((isNull(str)) || (str == "null") || (str == "")){
            return 0;
         }
         if (str.length!=15 && str.length !=18){
             //alert("公民身份证长度不正确应该为15或18位！");
             return -1;
         }
         if (str.length==15){
             if (isNaN(str)==true){
                 //alert("15位公民身份证应该为数字！");
                 return -2
             }
             newstr = transact_na(str);
         }
         if (str.length==18){
             if (isNaN(str.substr(0,17))==true){
                 //alert("18位公民身份证前17位应该为数字！");
                 return -3
             }
             newstr = str;
         }
         if (IDCard_validate(newstr)==true){
            return newstr;
        }else{
            return -4;
        }
     }
	 
/**
 *	作者：陈密
 *  日期：2005-06-13
 *	功能：日期的增加减少
 *	参数意义：ksrq          输入日期（类型为日期型）
 *	        type          处理类型（yy年  mm月  dd日）
 *	        num           增减数为正数为增加，负数为减少
 *  返回值：日期
 *	使用方法：
 *             如：在今天的基础上增加5天
 *                var jt = new Date();
 *                dateadd(jt,'dd',5);
 *                在今天的基础上增加5年
 *                var jt = new Date();
 *                dateadd(jt,'yy',5);
 */
function dateadd(ksrq,type,num){
    var newrq = ksrq
    if (type == 'yy'){
        newrq.setYear(ksrq.getYear() + num); 
    }else if (type == 'mm'){
        newrq.setMonth(ksrq.getMonth() + num);
    }else if (type == 'dd'){
        newrq.setDate(ksrq.getDate() + num);
    }else {
        alter("输入参数错误");
        return ksrq;
    }      
    return newrq
}


/**
 *	作者：陈密
 *  日期：2005-06-13
 *	功能：日期的增加减少
 *	参数意义：ksrq        输入日期（类型为字符型‘yyyy-mm-dd’）
 *	        type          处理类型（yy年  mm月  dd日）
 *	        num           增减数为正数为增加，负数为减少
 *  返回值：日期(字符型'yyyy-mm-dd')
 *	使用方法：
 *             如：在今天的基础上增加5天
 *                var jt = '2005-12-12';
 *                dateadd2(jt,'dd',5);
 *                在今天的基础上增加5年
 *                var jt = '2005-12-12';
 *                dateadd2(jt,'yy',5);
 */
function dateadd2(str,type,num){
    if (isDate2(str)){
        var d_str = new Date(str.substring(0,4),(str.substring(5,7) - 1),str.substring(8,10));
        if (type == 'yy'){
            d_str.setFullYear(d_str.getFullYear() + num); 
        }else if (type == 'mm'){
            d_str.setMonth(d_str.getMonth() + num + 0 );
        }else if (type == 'dd'){
            d_str.setDate(d_str.getDate() + num);
        }else {
            alter("输入参数错误");
            return '';
        }      
        var d = d_str.getYear() + "-"+(d_str.getMonth()+101).toString().substr(1,2) +'-' +(d_str.getDate()+100).toString().substr(1,2);
        return d;
    }
    else{
         return '';
    }
    return '';
}
	   
function col_onblur(objform,objcolumn,objcolumn_o,hrefstr){   //焦点丢失事件
/**
 *	作者：陈密
 *  日期：2005-06-10
 *	功能：根据失去焦点（onBlur）事件触发查询本页面数据
 *	参数意义：objform       form名
 *	        objcolumn     查询字段名（如身份证号，组织机构代码）
 *	        objcolumn_o   查询字段名隐藏值（与objcolumn在数据库中为同一字段） （用于防止重新失去焦点触发时重新刷新页面把输入的数据清空）
 *	        hrefstr       页面连接指向【struts-config.xml】中定义的链接
 *	使用方法：1、在单记录表中增加一个隐含字段（如用身份证查询，身份证列为AAC002，增加一个AAC002o）
 *          2、在单记录表中的查询语句中增加一个隐含字段的列的别名（如select AAC002,...,AAC002 AAC002o from ac01 where ...）
 *          3、在单记录表的要触发onBlur事件的配置中增加cus=<onblur="function_name()">【function_name函数名自己定义】
 *          4、在页面的<scrip t> </scrip t>中定义一个函数function_name()与【3】中的函数名一致，并调用col_onblur即可
 *                 如：
 *                 function function_name(){
 *                     col_onblur(aform,aform.AAC002,aform.AAC002o,'2001');
 *                 }
 */
    var obj = objform;
    var showstr = objcolumn.value;
    var showstr_o = objcolumn_o.value;
    if (((isNull(showstr)) || (showstr == "null") || (showstr=="")) && (showstr_o == showstr)) {
         return;
    }
    if (((isNull(showstr)) || (showstr == "null") || (showstr=="")) && ((isNull(showstr_o)) || (showstr_o == "null") || (showstr_o==""))) {
         return;
    }
    if (showstr!=showstr_o){
         obj.ActionType.value =hrefstr;
         obj.submit(); 
         return ;
    }
}

	function zyjs_mrsxh(xtjs){
        var today = new Date();
        var yy = new String(today.getYear());
	    if (xtjs.length<=6){
	        var a=parseInt(xtjs)*100000;
	        var b=new String(a.valueOf());
	        return b.substr(0,6)+yy.substr(2,2);
	    }else{
	        var c=new String(xtjs.valueOf());
	        return c.substr(0,6)+yy.substr(2,2);;
	    }
	}  
	
function chkupdpreuwf(objcolumn){ 
/**
 *	作者：冯荣坤
 *  日期：2005-06-22
 *	功能：根据form中某字段是否有值判断表单是否已经保存
 *	参数意义：objform       form名
 *	          objcolumn     查询字段名（如身份证号，组织机构代码）
 *	使用方法：
 *                 function function_name(){
 *                     checkupdate(aform,aform.AAC002);
 *                 }
 */
    if (isNull(objcolumn.value)||objcolumn.value=='null') {
  	        window.alert('请先保存数据，然后提交任务！');
		return false;
    }
    
    return true;
}
/**       
       function col_onkeyup(objform,objcolumn,objcolumn_o,hrefstr){   //????
          //???objform       form?
          //     objcolumn     ?????
          //     objcolumn_o   ????????
          //     hrefstr       ??????
           var obj = objform;
           var showstr = objcolumn.value;
           var showstr_o = objcolumn_o.value;
           key=window.event.keyCode; 
	       if(key==0xD){
	           if (((isNull(showstr)) || (showstr == "null") || (showstr=="")) && (showstr_o == showstr)) {
                  return;
               }
               if (showstr!=showstr_o){
                   obj.ActionType.value =hrefstr;
                  obj.submit(); 
                   return ;
              }
       }
*/


/**
 *	作者：刘斯宇
 *  日期：2005-06-30
 *	功能：根据form中输入的身份证，解析出性别、出生日期、出生地（非广州籍仅显示省籍）
 *	参数意义：aform       form名
 *	          AAC002     身份证号所在控件的name
 *			  AAC025,AAC006,AAC004 需要返回的出生地，出生日期，性别所在的控件name
 *	使用方法：
 *                 使用触发事件调用
 *                     	identityCard('aform','AAC002','AAC025','AAC006','AAC004');
 *						CallidentityCard('aform','AAC002','AAC025','AAC006','AAC004');
 *					根据提供的ID返回解析结果
 *                 
 */



   function identityCard(aform,AAC002,AAC025,AAC006,AAC004){
        key=window.event.keyCode; 
		if(key==0xD){
			CallidentityCard(aform,AAC002,AAC025,AAC006,AAC004);
		}
   	
   }
	function CallidentityCard(aform,AAC002,AAC025,AAC006,AAC004){
       eval("var obj = document."+aform);
      		eval("var getno=obj."+AAC002+".value");
           if(getno.substr(17,3)=="_"){
           		getno=getno.substr(0,6)+"19"+getno.substr(6,2)+getno.substr(8,2)+getno.substr(10,2)+getno.substr(12,3);
           		//alert(getno);
           		}
           
//           alert("getno:"+getno+"|");
//			alert(getno.length);
//           if(getno.length==18)
           var get1=getno.substr(0,6);
//           alert("get1"+get1);
//          obj.AAC025.value=get1;
           var get2=getno.substr(6,8);
//           alert("get2"+get2);
			
           var get3=getno.substr(16,1);
//           alert("get3"+get3);
		   var trans="MainAction?ActionType=identity_card";
		   trans=trans+"&get1="+get1+"&get2="+get2+"&get3="+get3+"&formname="+aform;
		   trans=trans+"&AAC025="+AAC025+"&AAC006="+AAC006+"&AAC004="+AAC004;
//		   alert("trans:"+trans+"|");
           dealno.src=trans;
           return;
	}

/**
 *	作者：刘斯宇
 *  日期：2005-07-01
 *	功能：根据form中输入的身份证，解析出性别、出生日期
 *	参数意义：aform       form名
 *	          AAC002     身份证号所在控件的name
 *			  AAC006,AAC004 需要返回的出生日期，性别所在的控件name
 *	使用方法：
 *                 使用触发事件调用
 * 	                    identityCardSimple('aform','AAC002','AAC006','AAC004');
 *						CallidentityCardSimple(aform,AAC002,AAC006,AAC004);
 *					根据提供的ID返回解析结果
 *                 
 */



      function identityCardSimple(aform,AAC002,AAC006,AAC004){
        key=window.event.keyCode; 
		if(key==0xD){
			CallidentityCardSimple(aform,AAC002,AAC006,AAC004);
		}
   	
   }
   function CallidentityCardSimple(aform,AAC002,AAC006,AAC004){
       eval("var obj = document."+aform);
      		eval("var getno=obj."+AAC002+".value");
           
//           alert("getno:"+getno+"|");
           
           var get1=getno.substr(0,6);
//           alert(getno.length);
//           alert(getno.substr(17,3));
           if(getno.substr(17,3)=="_"){
//           		alert(getno.substr(0,6));
//           		alert(getno.substr(6,2)+"-"+getno.substr(8,2)+"-"+getno.substr(10,2));
//           		alert(getno.substr(12,3));
           		getno=getno.substr(0,6)+"19"+getno.substr(6,2)+getno.substr(8,2)+getno.substr(10,2)+getno.substr(12,3);
           		//alert(getno);
           		}
           
//           alert("get1"+get1);
//          obj.AAC025.value=get1;
           var get2=getno.substr(6,4)+"-"+getno.substr(10,2)+"-"+getno.substr(12,2);
           
//           alert("get2"+get2);
			eval("var A6=obj."+AAC006);
			A6.value=get2;
           var get3=getno.substr(16,1);
//           alert("get3"+get3);
			var get31=get3%2;
//			alert("get31:"+get31);
			if(get31==0){
				get31=2;
			}
			eval("var A4=obj."+AAC004);
			A4.value=get31;
//		   var trans="MainAction?ActionType=identity_card";
//		   trans=trans+"&get1="+get1+"&get2="+get2+"&get3="+get3+"&formname="+aform;
//		   trans=trans+"&AAC025="+AAC025+"&AAC006="+AAC006+"&AAC004="+AAC004;
//		   alert("trans:"+trans+"|");
//           dealno.src=trans;
           return;
   	
   }

/**
 *	作者：刘斯宇
 *  日期：2005-06-30
 *	功能：根据form中输入的身份证，解析出性别、出生日期、出生地（非广州籍仅显示省籍）
 *	参数意义：aform       form名
 *	          AAC002     身份证号所在控件的name
 *			  AAC025,AC025,AAC006,AAC004 需要返回的出生地,出生地代码，出生日期，性别所在的控件name
 *	使用方法：
 *                 使用触发事件调用
 *                     identityCardComplex('aform','AAC002','AAC025','AC025','AAC006','AAC004');
 *						CallidentityCardComplex(aform,AAC002,AAC025,AC025,AAC006,AAC004);
 *					根据提供的ID返回解析结果
 *                 
 */



   function identityCardComplex(aform,AAC002,AAC025,AC025,AAC006,AAC004){
       eval("var obj = document."+aform);
        key=window.event.keyCode; 
		if(key==0xD){
			CallidentityCardComplex(aform,AAC002,AAC025,AC025,AAC006,AAC004);
		}
   	
   }
   
   function CallidentityCardComplex(aform,AAC002,AAC025,AC025,AAC006,AAC004){
       eval("var obj = document."+aform);
      		eval("var getno=obj."+AAC002+".value");
           if(getno.substr(17,3)=="_"){
           		getno=getno.substr(0,6)+"19"+getno.substr(6,2)+getno.substr(8,2)+getno.substr(10,2)+getno.substr(12,3);
           		//alert(getno);
           		}
           
//           alert("getno:"+getno+"|");
           
           var get1=getno.substr(0,6);
//           eval("var get11=obj."+AC025);
//           get11.value=get1;
           
//           alert("get1"+get1);
//          obj.AAC025.value=get1;
           var get2=getno.substr(6,8);
//           alert("get2"+get2);
			
           var get3=getno.substr(16,1);
//           alert("get3"+get3);
		   var trans="MainAction?ActionType=identity_card";
		   trans=trans+"&get1="+get1+"&get2="+get2+"&get3="+get3+"&formname="+aform;
		   trans=trans+"&AAC025="+AAC025+"&AAC006="+AAC006+"&AAC004="+AAC004;
		   trans=trans+"&code="+AC025;
//		   alert("trans:"+trans+"|");
           dealno.src=trans;
           return;
   	
   }


/**
 *	作者：刘斯宇
 *  日期：2005-07-07
 *	功能：根据输入条件判断两个日期中是否符合要求，当前一日期晚于后一日期自动提示并返回false，否则返回true
 *	参数意义：aform       form名
 *	          check1,check2     两个日期所在控件的name;
 *			  alert1,alert2		两个控件名称的提示文字——（“alert1”不能晚于“alert2”）
 *			  Ccon				分别提供0~3，四种类型支持，用来判断控件value是否可以为空；
 *				 				0.check1,check2 	not null;
 *								1.check1 			not null;
 *								2.check2			not null;
 *								3.					all null;
 *			  Clevel			分别提供0~2，三种类型支持，用来控制比较深度的；
 *								0.day(include second)	日（精确到秒）
 *								1.month					月
 *								2.year					年
 *
 *	使用方法：
 *                 
 *                     compareDate('aform','check1','check2','0','0','开始日期','截止日期');
 *						参数正确和条件符合返回true，否则返回false；
 *                 
 */
      function compareDate(aform,check1,check2,Ccon,Clevel,alert1,alert2){
   			eval("var obj00=document."+aform);
			eval("var obj01=obj00."+check1+".value");
			eval("var obj02=obj00."+check2+".value");
			
			if(isNull(Ccon)||isNull(Clevel)){
				alert("条件为空");
				return false;
			}
			if(Ccon==0&&(isNull(obj01)||isNull(obj02))){
				alert(alert1+"和"+alert2+"不能为空！");
				return false;
			}else if(Ccon==1){
				if(isNull(obj01)){
					alert(alert1+"不能为空！");
					return false;
				}else{
					if(isNull(obj02)){
						return true;
					}
				}
			}else if(Ccon==2){
				if(isNull(obj02)){
					alert(alert2+"不能为空！");
					return false;
				}else{
					if(isNull(obj1)){
	    			alert(alert1+" 不能晚于 "+alert2);
						return false;
					}
				}
				
			}else if(Ccon==3&&(isNull(obj02))){
				return true;
			}else if(Ccon==3&&(isNull(obj01))){
				return false;
			}else if(Ccon!=0&&Ccon!=1&&Ccon!=2&&Ccon!=3){
				alert("未识别的条件参数："+Ccon);
				return false;
			}
			if(isNull(alert1)||isNull(alert2)){
				alert("提示说明为空");
				return false;
			}
    		
    		
	    		var obj11=new Array();
	    		var obj21=new Array();
	    		obj11=obj01.split("-");
	    		obj21=obj02.split("-");
	    		if(obj11.length<3||obj21.length<3){
	    			alert("日期类型错误");
	    			return false;
	    		}
//	    		alert("1="+obj1+"2="+obj2);
//	    		alert("1="+obj11+"2="+obj21);
	    		var obj12=new Date(obj11[0],obj11[1],obj11[2]);
	    		var obj22=new Date(obj21[0],obj21[1],obj21[2]);
//	    		alert("1="+obj12+"2="+obj22);
				if(Clevel==0){
					if(obj12>obj22){
	    			alert(alert1+" 不能晚于 "+alert2);
	    			return false;
		    		}else{
	//	    			alert("right");
		    			return true;
		    		}
	    		}else if(Clevel==1||Clevel==2){
	    			if(obj11[0]>obj21[0]){
    					alert(alert1+" 不能晚于 "+alert2);
    					return false;
	    				
	    			}else{
	    				if(Clevel==1&&(obj11[1]>obj21[1])){
	    					alert(alert1+" 不能晚于 "+alert2);
	    					return false;
	    				}
	    				return true;
	    			}
	    		
	    		}else if(Clevel!=0&&Clevel!=1&&Clevel!=2){
					alert("未识别的条件参数："+Clevel);
					return false;
	    			
	    		}
   
   }
   
/**
 *	作者：刘斯宇
 *  日期：2005-07-07
 *	功能：根据输入条件判断两个日期的大小，前一日期大返回-1，后一日期大返回1，日期相等返回0，参数错误返回-2
 *	参数意义：aform       		form名
 *	          check1,check2     两个日期所在控件的name;
 *			  Clevel			分别提供0~2，三种类型支持，用来控制比较深度的；
 *								0.day(include second)	日（精确到秒）
 *								1.month					月
 *								2.year					年
 *
 *	使用方法：
 *                 
 *                     compareDateValue('aform','check1','check2','0');
 *						
 *                 
 */
   function compareDateValue(aform,check1,check2,Clevel){
   			eval("var obj00=document."+aform);
			eval("var obj01=obj00."+check1+".value");
			eval("var obj02=obj00."+check2+".value");
   
	    		var obj11=new Array();
	    		var obj21=new Array();
	    		obj11=obj01.split("-");
	    		obj21=obj02.split("-");
	    		if(obj11.length<3||obj21.length<3){
	    			alert("日期类型错误");
	    			return -2;
	    		}
	    		
//	    		alert("1="+obj1+"2="+obj2);
//	    		alert("1="+obj11+"2="+obj21);
				if(Clevel==1||Clevel==2){
					obj11[2]=1;
					obj21[2]=1;
					if(Clevel==2){
						obj11[1]=1;
						obj21[1]=1;
					}
				}else if(Clevel!=0&&Clevel!=1&&Clevel!=2){
					alert("未识别的条件参数："+Clevel);
					return false;
				}
				
	    		var obj12=new Date(obj11[0],obj11[1],obj11[2]);
	    		var obj22=new Date(obj21[0],obj21[1],obj21[2]);
//	    		alert("1="+obj12+"2="+obj22);
				if(obj12>obj22){
    				return -1;
	    		}else if(obj12<obj22){
	    			return 1;
	    		}else{
	    			return 0;
	    		}
   }


/**
 *	作者：刘斯宇
 *  日期：2005-07-13
 *	功能：根据输入个人编号从CC91中查询，弹出窗口显示数据库中相对应的照片，如果没有则提示“没有照片”。
 *	参数意义：
 *			  aform       		form名
 *	          Ino			    编号所在控件的name;
 *			  obj				直接填this
 *
 *	使用方法：
 *                 使用buttonlink的href会有问题，建议使用
 *                  onclick="javascript:openDataImage('id','aform',this)" 
 *						
 *                 
 */


function openDataImage(Ino,aform,obj){
	var tt=obj;
	var ttop  = tt.offsetTop;     
    var thei  = tt.clientHeight;  
    var tleft = tt.offsetLeft;    
    var ttyp  = tt.type;          
//    while (tt = tt.offsetParent){ttop+=tt.offsetTop; tleft+=tt.offsetLeft;}
//		 alert("tt.offsetParent"+tt.offsetParent);
//		 alert("tt.offsetLeft"+tt.offsetLeft);
//		 alert("tt.type"+tt.type);
//		 alert("tt.clientHeight"+tt.clientHeight);
//		 alert("this.offsetTop"+this.offsetTop);
    //,scrollbars,titlebar=0,resizable,height=500,width=200,left=160,top=100
    //center,scrollbars,resizable,dialogHeight=300,dialogWidth=100,dialogLeft=160,dialogTop=100
//    alert(event.screenX);
//    alert(event.screenY);
	eval("var item=document."+aform+"."+Ino+".value;");
	
	
	if(isNull(item)||item=="null"||item=='null'){
		alert("没有输入个人编号");
		return;
	}
	//alert("item="+item);
	locStr = "dialogLeft:" + event.screenX + ";dialogTop:" + event.screenY;
	var position="status:0;help:0;dialogWidth:500px;dialogHeight:400px;";
	var pageu="MainAction?ActionType=showImage&item="+item+"&name=B2&aform=aform";
   	showModalDialog(pageu,window, position);
   	//window.open(pageu,"_blank","");
   }
   

/**
 *	作者：刘斯宇
 *  日期：2005-09-13
 *	功能：根据form中输入的身份证，从AC01中查询出该身份证所对应的信息
 *	参数意义：	aform       form名
 *	          	AAC002     	身份证号所在控件的name
 *				type		目前处理类型为"1",当ac01中无此身份证号时,返回分析出的性别和出生日期
 *	返回值:
 *			  	AAC001 		个人编号                         
 *				AAC002 		公民身份号码                     
 *				AAC003 		姓名                             
 *				AAC004 		性别                             
 *				AAC005 		民族                             
 *				AAC006 		出生日期                         
 *				AAC009 		户口性质                         
 *				AAC011 		文化程度                         
 *				AAC015 		国家职业资格等级（工人技术等级） 
 *				AAC017 		婚姻状况                         
 *				AAC024 		政治面貌                         
 *				AAC025 		出生地                           
 *				AAC026 		家庭住址                         
 *				AAC027 		人员类别                         
 *				AAC033 		健康状况                         
 *				AAE005 		联系电话                         
 *				AAE006 		地址                             
 *				AAE007 		邮政编码                         
 *				AAE015 		电子信箱                         
 * 
 *	使用方法：
 *                 使用触发事件调用
 *                     	identityCardSearch(''bform'',''AAC002'',''0'',''AAC001'',''AAC003'',''AAC004'',''AAC005'',''AAC006'',''AAC009'',''AAC011'',''AAC015'',''AAC017'',''AAC024'',''AAC025'',''AAC026'',''AAC027'',''AAC033'',''AAE005'',''AAE006'',''AAE007'',''AAE015'')
 *						identityCardSearch(''bform'',''AAC002'',''1'',''AAC001'',''AAC003'',''AAC004'',''AAC005'',''AAC006''
 *					根据提供的ID返回解析结果
 *			 增加以下代码在页面中（body之后）：
 *			<SCRIPT id="searchno" src="" language="JavaScript" type="text/javascript"></SCRIPT> 
 *	注意事项:
 *					因为返回值过多,所以有不需要的内容,无配制隐含参数，但是需要按照顺序传入参数.
 *								
 *                 
 */



   function identityCardSearch(aform,AAC002,type,AAC001,AAC003,AAC004,AAC005,AAC006,AAC009,AAC011,AAC015,AAC017,AAC024,AAC025,AAC026,AAC027,AAC033,AAE005,AAE006,AAE007,AAE015){
       eval("var obj = document."+aform);
      		eval("var getno=obj."+AAC002+".value");
      		if(getno.substr(15,3)=="___"){
      			//alert(getno);
      			getno=getno.substr(0,15);
      		}
      		var id=transformSfzh_na(getno);
      		if(id!=""&&(id!=false)){
      		}else{
      			return false;
      		}
		   var trans="MainAction?ActionType=identitycard_search";
		   trans=trans+"&formname="+aform+"&id="+id+"&type="+type;
		   trans=trans+"&AAC001="+AAC001+"&AAC003="+AAC003+"&AAC004="+AAC004+"&AAC005="+AAC005;
		   trans=trans+"&AAC006="+AAC006+"&AAC009="+AAC009+"&AAC011="+AAC011+"&AAC015="+AAC015;
		   trans=trans+"&AAC017="+AAC017+"&AAC024="+AAC024+"&AAC025="+AAC025+"&AAC026="+AAC026;
		   trans=trans+"&AAC027="+AAC027+"&AAC033="+AAC033+"&AAE005="+AAE005+"&AAE006="+AAE006;
		   trans=trans+"&AAE007="+AAE007+"&AAE015="+AAE015;
//		   alert("trans:"+trans+"|");
           searchno.src=trans;
           return;
   	
   }

/**
 *	作者：刘斯宇
 *  日期：2005-09-14
 *	功能：用回车键调用identityCardSearch
 *	参数意义：	同identityCardSearch
 *                 
 */
     
   function callICSearch(aform,AAC002,type,AAC001,AAC003,AAC004,AAC005,AAC006,AAC009,AAC011,AAC015,AAC017,AAC024,AAC025,AAC026,AAC027,AAC033,AAE005,AAE006,AAE007,AAE015){
        key=window.event.keyCode; 
		if(key==0xD){
      		identityCardSearch(aform,AAC002,type,AAC001,AAC003,AAC004,AAC005,AAC006,AAC009,AAC011,AAC015,AAC017,AAC024,AAC025,AAC026,AAC027,AAC033,AAE005,AAE006,AAE007,AAE015);
      		return;
           }

   }


/**
 *  日期：2005-09-09
 *	功能：弹出选择单位窗口
**/
function select_dw(){
    window.open('QueryAction?ActionType=sbyw_dw_select','','scrollbars,resizable,height=450,width=800,top=150,left=130');
    return false;
}



/**
*日期：2005-09-09
*功能：弹出选择人员窗口
*
**/
	function select_gr(){
	    window.open('MainAction?ActionType=jbxx_gr_select','','scrollbars,resizable,height=450,width=800,top=150,left=130');
	    return false;
	}
	
	
	function IDCard_substr(inputStr){
		//alert("IDCard_substr(1)");
		var outputStr = inputStr;

		if (isNull(inputStr) || inputStr == "null") return;
		if (inputStr.length != 18) {
				alert ("公民身份号码不是18位");
				return "";
		}
		
		outputStr = inputStr.substr(0,6);
		outputStr += inputStr.substr(8,9);
		return outputStr;
}


	function dlztrukou_panduan(aform, strutsId){ 
   		var BAE006, ACE706, OrgCode, flag;   	
   		BAE006  = aform.BAE006.value;	//取出个人代理项目中系统机构代码
   		ACE706  = aform.ACE706.value;	//取出个人代理项目中代理状态值 
   		OrgCode = aform.OrgCode.value;	//办理人所在的系统机构代码
   		flag    = aform.flag.value;     //标识是否进行了入口判断
		//alert("flag=="+flag);
   		if(flag=="false"){
   			if( ACE706=="1" && (OrgCode.substr(0,4) == (BAE006.substr(0,4)))){
   			}
   			else{
   				alert("代理协议中没有签订此业务！");
   				aform.AAC001.value = "";
   				aform.AAC002.value = "";
   				aform.ActionType.value=strutsId;
   				aform.flag.value="true";
				aform.submit();
				return false;
   			}
   		}
		return true;
	}
	
/**
 *	作者：刘斯宇
 *  日期：2005-11-7
 *	功能：打开SQL Server服务器连接参数设置窗口
 *	参数意义：
 *				aform       		界面将要提交的form名
 *
 *	使用方法：
 *				openSSConnection('aform')		
 *	注意事项：
 *				函数会在指定的form中创建SQLurl、SQLport、SQLdname、SQLid、SQLpwd
 *				五个隐藏字段用来获取数据，然后打开模态窗后，提示录入完整信息，保存后返回。
 *                 
 */

	
	function openSSConnection(aform){
		eval("var obj2 = document."+aform+";");
       	var temp1 = "<input type=hidden name=SQLurl value=\"\">";
    	var temp2 = "<input type=hidden name=SQLport value=\"\">";
    	var temp3 = "<input type=hidden name=SQLdname value=\"\">";
    	var temp4 = "<input type=hidden name=SQLid value=\"\">";
    	var temp5 = "<input type=hidden name=SQLpwd value=\"\">";
    	
    	var SQLurl = document.createElement(temp1);
    	var SQLport = document.createElement(temp2);
    	var SQLdname = document.createElement(temp3);
    	var SQLid = document.createElement(temp4);
    	var SQLpwd = document.createElement(temp5);
    	//alert("after create"+SQLurl+"|"+temp1);
    	
    	obj2.appendChild(SQLurl);
    	//alert("first");
    	obj2.appendChild(SQLport);
    	obj2.appendChild(SQLdname);
    	obj2.appendChild(SQLid);
    	obj2.appendChild(SQLpwd);
    	//alert("after appenChild");
   
   		var position="status:0;help:0;dialogWidth:300px;dialogHeight:400px;";
		var pageu="MainAction?ActionType=getSQLServer&aform="+aform;
   		showModalDialog(pageu,window, position);
   	
   }
	
/**
 *	作者：刘斯宇
 *  日期：2005-11-19
 *	功能：进入个人选择
 *	参数意义：
 *				aform       		界面将要提交的form名
 *
 *	使用方法：
 *				dwxz('aform')		
 *	注意事项：
 *				在aform中需要配置<input type=hidden name=returnURL value="返回页面的ActionType">
 *                 
 */
	function grxz_show(aform){
		eval("var obj = document."+aform+";");
		// var obj = document.createElement("form");
		obj.ActionType.value = "yw_grjbxx_xz";
		obj.method="post";
		obj.submit();
	}	
	
	
	
	
 	// 单位是否在系统中
 	function comInSystem_WF_Common(aform, returnURL, accept){
 		//alert("comInSystem(3)");
 		if (accept == null) accept = "n"; // accept默认为"n"
	 	if(aform.AAB003 == null || isNull(aform.AAB003.value)) return false;// 组织机构代码
		if (isNull(aform.AAB001.value) || aform.AAB001.value=="null"){// 单位编号
			if((accept == "y") && (confirm("该单位("+aform.AAB003.value+")不在系统中,您是否要新增?"))){
				// 同意新增该单位
				aform.ActionType.value = "zlyw_dwjbxx_lr";
				document.aform.submit();
				return false;
			}else{// 不同意新增该单位
				alert("对不起！您不能为系统外的单位办理本业务");
				aform.AAB001.value = "";
				aform.AAB003.value = "";
				aform.flag.value = "false";
				return false;
			}// end_if_else					
		}
		return true;
	}

 	
 	// 个人是否在系统中
 	function perInSystem_WF_Common(aform, returnURL, accept){
 		if (accept == null) accept = "n"; // accpet默认为"n" 		
 		if(aform.AAC002 == null || isNull(aform.AAC002.value)) return false; // 身份证号码
		if(isNull(aform.AAC001.value) || aform.AAC001.value=="null"){ // 个人编号
			if ((accept == "y") && (confirm("该客户("+aform.AAC002.value+")不在系统中，您是否要新增?"))){  
				// 同意新增该客户
	           aform.ActionType.value = "zli_zyjs_grzldj_edit"; 
	           document.aform.submit();
	           return false;
	        }else{// 不同意新增该客户
	        	alert("对不起！您不能为系统外的客户办理本业务");
				aform.AAC001.value = "";
				aform.AAC002.value = "";
				aform.flag.value = "false";
				return false;
			}// end_if_else
		}
		return true;
 	}



/**
 *	作者：runfly
 *  日期：2005-03-07
 *	功能：弹出树形窗口的JS函数
 *	参数意义：
 *         title	       弹出窗口的标题	
 *         viewName        形成树形结构的视图名称
 *         viewWhere       视图的查询条件
 *		   codeField       名为formName的表单中接收树形窗口返回的代码值的字段            
 *		   nameField       名为formName的表单中接收树形窗口返回的代码名称的字段
 *		   formName        弹出树形窗口的字段所在的表单名称
 *
 *	使用方法：
 *				
 *	注意事项：
 *				
 *                 
 */
   function popupTree(title,viewName,viewWhere,ltdConfId,codeField,nameField,formName){
	     var transpage="MainAction?ActionType=commonPopTree&title="+title+"&viewName="+viewName+
			 "&viewWhere="+viewWhere+"&ltdConfId="+ltdConfId+"&codeField="+codeField+"&nameField="+nameField+"&formName="+formName;
	     locStr = "dialogLeft:" + event.screenX + ";dialogTop:" + event.screenY;
	     var position="status:0;help:0;dialogWidth:260px;dialogHeight:300px;"+locStr;
   	     showModalDialog(transpage,window, position);       
   }
   
   /**
 *	作者：nxm
 *  日期：2006-05-09
 *	功能：弹出树形窗口的JS函数
 *	参数意义：
 *         title	       弹出窗口的标题	
 *         viewName        形成树形结构的视图名称
 *         viewWhere       视图的查询条件
 *		   codeField       名为formName的表单中接收树形窗口返回的代码值的字段            
 *		   nameField       名为formName的表单中接收树形窗口返回的代码名称的字段
 *		   formName        弹出树形窗口的字段所在的表单名称
 *
 *	使用方法：
 *				
 *	注意事项：
 *				
 *                 
 */
   function popupTreeJbxxgl(title,viewName,viewWhere,ltdConfId,codeField,nameField,formName){
	     var transpage="MainAction?ActionType=commonPopTreeJbxxgl&title="+title+"&viewName="+viewName+
			 "&viewWhere="+viewWhere+"&ltdConfId="+ltdConfId+"&codeField="+codeField+"&nameField="+nameField+"&formName="+formName;
	     locStr = "dialogLeft:" + event.screenX + ";dialogTop:" + event.screenY;
	     var position="status:0;help:0;dialogWidth:260px;dialogHeight:300px;"+locStr;
   	     showModalDialog(transpage,window, position);       
   }
   
//codeDirect为传入代码作为查询条件
   function popupTreeJbxxgl_Direct(title,viewName,viewWhere,ltdConfId,codeField,nameField,formName,codeDirect){
   	     var transpage="MainAction?ActionType=commonPopTreeJbxxgl&title="+title+"&viewName="+viewName+
			 "&viewWhere="+viewWhere+"&ltdConfId="+ltdConfId+"&codeField="+codeField+"&nameField="+nameField+"&formName="+formName+"&codeDirect="+codeDirect;
	     locStr = "dialogLeft:" + event.screenX + ";dialogTop:" + event.screenY;
	     var position="status:0;help:0;dialogWidth:300px;dialogHeight:500px;"+locStr;
   	     showModalDialog(transpage,window, position);       
   }

//20060710  add by zhoulei
 function select_dw1(obj){
   	if(obj != "null" && !isNull(obj) && typeof(obj) != "undefined"){
    	window.open('QueryAction?ActionType=sbyw_dw_select&AAB003=' + obj,'','scrollbars,resizable,height=450,width=800,top=150,left=130');
    }
    else{
    	window.open('QueryAction?ActionType=sbyw_dw_select','','scrollbars,resizable,height=450,width=800,top=150,left=130');
    }
    return false;
	}

/**
 * 在原有的popupTree基础上,加大,加长
 */
   function popupTree_big(title,viewName,viewWhere,ltdConfId,codeField,nameField,formName){
	     var transpage="MainAction?ActionType=commonPopTree&title="+title+"&viewName="+viewName+
			 "&viewWhere="+viewWhere+"&ltdConfId="+ltdConfId+"&codeField="+codeField+"&nameField="+nameField+"&formName="+formName;
	     locStr = "dialogLeft:" + event.screenX + ";dialogTop:" + event.screenY;
	     var position="status:0;help:0;dialogWidth:300px;dialogHeight:500px;"+locStr;
   	     showModalDialog(transpage,window, position);       
   }
      /**
 *	作者：runfly
 *  日期：2005-03-07
 *	功能：弹出树形窗口的JS函数
 *	参数意义：
 *         title	       弹出窗口的标题	
 *         viewName        形成树形结构的视图名称
 *         viewWhere       视图的查询条件
 *		   codeField       名为formName的表单中接收树形窗口返回的代码值的字段            
 *		   nameField       名为formName的表单中接收树形窗口返回的代码名称的字段
 *		   formName        弹出树形窗口的字段所在的表单名称
 *         rtnJsContr      返回的js代码控制标识
 *	使用方法：
 *				
 *	注意事项：
 *				
 *                 
 */
   function popupTree4WorkFlow(title,viewName,viewWhere,ltdConfId,codeField,nameField,formName,rtnJsContr){
	     var transpage="MainAction?ActionType=commonPopTree&title="+title+"&viewName="+viewName+
			 "&viewWhere="+viewWhere+"&ltdConfId="+ltdConfId+"&codeField="+codeField+"&nameField="+nameField+"&formName="+formName+"&rtnJsContr="+rtnJsContr;
	     locStr = "dialogLeft:" + event.screenX + ";dialogTop:" + event.screenY;
	     var position="status:0;help:0;dialogWidth:260px;dialogHeight:300px;"+locStr;
   	     showModalDialog(transpage,window, position);       
   }
   
   
 /*
  日期：2006-10-20 hyq
	功能：检查两个日期的闹中间隔是否少于两个月；
	参数：startMon：开始日期
		 endMon  ：结束日期
		 distance：月间隔多少个月,默认为2。
    返回： true  月间隔少于等于两个月,或者开始日期和结束日期都为空
         false 月间隔大于两个月,或者开始日期和结束日期之一为空
    例如：
    	appChkMonDist('2006-01-20','2006-02-10')
    	appChkMonDist('2006-01-20','2006-02-10',1) //比较两个日期间隔不大于一个月
*/
function appChkMonDist(startMon,endMon,distance){
	if (distance == undefined)
		distance = 2;
	if ( isNull(startMon) && isNull(endMon))
		return true;
	if ( isNull(startMon) || isNull(endMon))
		return false;
	if (!isDate2(startMon) || !isDate2(endMon) )
		return false;	
	var Date_start=dateadd2(startMon,'mm',distance);
	var Date_end=endMon;
	var D1=Date_start.split("-");
	var D2=Date_end.split("-");
	var D1_new=new Date(D1[0],D1[1]-1,D1[2]);
	var D2_new=new Date(D2[0],D2[1]-1,D2[2]);				
	if(D1_new<D2_new)
		return false;
	else 
		return true;
}

 /*
  日期：2006-10-20 hyq
	功能：打开查找单位的窗口,获取单位编号，单位名称，单位组织机构代码
	参数：p_aab001：单位编号元素  如：sform.AAB001
		 		p_aab004：单位名称元素  如：sform.AAB004
		 		p_aab003：单位组织机构代码元素。如：sform.AAB003 这个参数可缺  APP_AAB004onClick(sform.AAB001,sform.AAB004)
  返回：seachResult:
  				true     :找到所查询的单位；
  				false    :点击的查询按钮，但没有找到单位
  				noSelect :没有点击查询按钮，直接点击关闭按钮
  例如：
  		 appAAB004onClick(sform.AAB001,sform.AAB004);  //返回的单位编号和名称，并赋值给sform.AAB001.value,sform.AAB004.value
  		 
			 在单记录表配置的用法：单位名称<b href="#" onClick="appAAB004onClick(sform.AAB001,sform.AAB004)"><img src="../images/zoom.gif" width="14" height="14" class="showHand" border="0"></b>
*/
function appAAB004onClick(p_aab001,p_aab004,p_aab003,p_jumpJBXXFlag){
	jumpJBXXFlag = "false";
	seachResult="false";
	if ( p_jumpJBXXFlag != undefined)
			jumpJBXXFlag = p_jumpJBXXFlag;
  var myArray =window.showModalDialog('QueryAction?ActionType=jbxx_dw_select&jumpJBXXFlag='+jumpJBXXFlag+'&AAB004='+p_aab004.value,'','dialogHeight: 500px; dialogWidth: 800px; ');
  if(myArray!=undefined){
    var aab001=myArray[0];
    var aab004=myArray[1];
    var aab003=myArray[2];	      
    p_aab004.value=aab004;
    if (p_aab001 != undefined ){
    	p_aab001.value = aab001;    	
    }
    if (p_aab003 != undefined ){
    	p_aab003.value=aab003;
    }
    if (!isNull(aab001))
    	seachResult="true";
   }else{
      p_aab004.value="";
      if (p_aab001 != undefined )
      	p_aab001.value="";
      if (p_aab003 != undefined )
    		p_aab003.value="";
    	seachResult="noSelect";
   }
   return seachResult;
}

 /*
  日期：2006-10-20 hyq
	功能：清空表单中的元素，包括表单中非隐藏和非只读元素和指定隐藏和只读元素
	参数：forname 表单名 
				elementStr 自定元素名称字符串,名称之间用"|"符号分隔        
  例如：
			 clearFormCustom('fromName','AAB001|AAB004');
			 在静态查询标签的用法：
			 clearName="clearFormCustom('formName','AAB001|AAB004'); //"    注：最后的两个斜不要忘记了。
			 	
*/
function clearFormCustom(forname,elementStr){
	 if (!clearCustom(forname))
	 		return;
	 if ( elementStr != undefined && elementStr.length > 0){
	 		var arrayEle = elementStr.split("|");
	 		for ( i = 0; i< arrayEle.length; i++){
	 		   eval(forname+"."+arrayEle[i]+".value = ''");
	 		}
	}
}

function clearCustom(formName){ 
   eval("var obj = document."+ formName + ";");
   if(obj.elements.length==0){
     return true;
   }
   //清除表单前先提示
   var confFlag = window.confirm("您确定要清除表单吗?");
   if (!confFlag){
	  return false;
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
	return true;
}

//20061220 add by laiqingming
 function sqjy_select_dw(obj){
   	if(obj != "null" && !isNull(obj) && typeof(obj) != "undefined"){
    	window.open('QueryAction?ActionType=sqjy_dw_select&AAB003=' + obj,'','scrollbars,resizable,height=450,width=800');
    }
    else{
    	window.open('QueryAction?ActionType=sqjy_dw_select','','scrollbars,resizable,height=450,width=800');
    }
    return false;
	}
	
	
