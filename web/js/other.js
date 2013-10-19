/**
 *	Purpose: 将左边多选列表中的项目移至右边列表  
 *	Inputs: formName form名称
 *      Inputs: leftSelectName 左边多选列表的名称
 *      Inputs: rightSelectName 右边多选列表的名称
 *	Returns:  
 */
function to_right(formName,leftSelectName,rightSelectName){
   eval("var formObj = document."+formName+";");
   eval("var leftListObj = formObj."+leftSelectName+";");
   eval("var rightListObj = formObj."+rightSelectName+";");
   var len = leftListObj.options.length;
   var i=0;
   while(i<len){        
       if(leftListObj.options[i].selected){
	       var itemObj = leftListObj.options[i];
	       var rightOption = document.createElement("OPTION");
		   rightOption.text = itemObj.text;
		   rightOption.value = itemObj.value;
		   rightListObj.add(rightOption);//右边增加元素
		   leftListObj.removeChild(itemObj);//删除左边选中的元素
		   len--; 
	    }else{
		   i++;
		}	
   }   
}
/**
 *	Purpose: 将左边多选列表中的项目移至右边列表  
 *	Inputs: formName form名称
 *      Inputs: leftSelectName 左边多选列表的名称
 *      Inputs: rightSelectName 右边多选列表的名称
 *	Returns:  
 */
function to_left(formName,leftSelectName,rightSelectName){
   eval("var formObj = document."+formName+";");
   eval("var leftListObj = formObj."+leftSelectName+";");
   eval("var rightListObj = formObj."+rightSelectName+";");
   var len = rightListObj.options.length;
   var i=0;
   while(i<len){        
       if(rightListObj.options[i].selected){
	       var itemObj = rightListObj.options[i];
	       var leftOption = document.createElement("OPTION");
		   leftOption.text = itemObj.text;
		   leftOption.value = itemObj.value;
		   leftListObj.add(leftOption);//右边增加元素
		   rightListObj.removeChild(itemObj);//删除左边选中的元素
		   len--; 
	    }else{
		   i++;
		}	
   }     
}

/**
 *	Purpose: 删除用于loading的iframe  
 *	Returns:  
 */
 function delLoad(){
	   var obj = window.document.getElementById("LoadIframe");
	   if(obj){//如果用于loading的iframe存在，则删除
	      setTimeout("removeNode()",100);
	   }
 }
 /**
 *	Purpose: 延迟0.1秒删除进度条界面
 *	Returns:  
 */
function removeNode(){
	var obj = window.document.getElementById("LoadIframe");
	while(obj){//触发按钮的回车事件，同时可能会导致触发单击事件，这样将产生两个进度条，因此要通过while循环来删除进度条
 	    obj.removeNode(true);
 	    obj = window.document.getElementById("LoadIframe");
 	}
 }
 
