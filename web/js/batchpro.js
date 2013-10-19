    //??????????????
    //var rownum = -1;//???????????????-1
       
       //????
    function addOneRow(formName, tableId){
      var tbl = document.getElementById(tableId);
      eval('var obj = document.'+formName+';');      
	  var rownum = getMaxRowNum(formName);
	  rownum++;
	  setMaxRowNum(formName,rownum);
	  //obj.rowsCount.value = rownum + 1;//??????
	  eval("var baseTrNode = " + tableId + "_tempTable.rows[0];");
	  var oneRow = baseTrNode.cloneNode(true);	
	  //alert(oneRow.innerHTML);
	  //obj.oldHt.value = oneRow.innerHTML;
	  if(oneRow.hasChildNodes()){
	    //??????name??
	    for(var i=0;i<oneRow.childNodes.length;i++){
		  var oneTd = oneRow.childNodes[i];
		  var inHtml = oneTd.innerHTML;//innerHTML?name????????		 
          if(inHtml.indexOf("setday(")!=-1){
             var start = inHtml.indexOf("setday(");
             var end = inHtml.indexOf(")",start);
             var funRef = inHtml.substring(start+7,end);
             funRef += "_"+rownum;
             inHtml = inHtml.substring(0,start) + "setday(" + funRef + inHtml.substring(end);
          }
		  var ind;
		  var newInHtml = "";
		  while((ind=inHtml.indexOf("name="))!=-1){
		    newInHtml += inHtml.substring(0,ind+5);
		    //alert(newInHtml);
			inHtml = inHtml.substring(ind+5);
			//alert(inHtml);
			var ind2 = inHtml.indexOf(" ");
			//alert("ind2:"+ind2);
			var ind3 = inHtml.indexOf(">");
			//alert("ind3:"+ind3);
			//??name?????
			if(ind2 == -1){
			  if(ind3>-1){
			     ind2 = ind3;
			  }
			}
			if(ind2>-1 && ind3>-1 && ind3<ind2){
			   ind2 = ind3;
			}
			var value = inHtml.substring(0,ind2);
			//alert(value);
			value = value + "_" +rownum;			
			//alert(value);
			newInHtml += value;
			//alert(newInHtml);
			inHtml = inHtml.substring(ind2);
			//alert(inHtml);
		  }		  
		  newInHtml += inHtml;
		  //alert(newInHtml);
		  oneRow.childNodes[i].innerHTML = newInHtml;
	    }  
	   
	  }
	  //obj.newHt.value = oneRow.innerHTML;
	  //alert(oneRow.innerHTML);
	  //alert(tbl.lastChild);	  
	  for(var i=0;i<tbl.childNodes.length;i++){
	     if(tbl.childNodes[i].nodeName.toUpperCase() == "TBODY"){
			 tbl.childNodes[i].appendChild(oneRow);
			 break;
		 }
	  }
	  //alert(tbl.lastChild.nodeName);
  	  //tbl.lastChild.appendChild(oneRow);//tbody?????
  	  //for(var i=0;i<obj.elements.length;i++){
  	    //alert(obj.elements[i].name);
  	  //}
  	   //eval("alert(obj.usertype_" + rownum + ");");
    }
      
	   //获取当前最大行号
	function getMaxRowNum(formName){
      eval('var obj = document.'+formName+';');	   
	  var rtn = -1;
	  rtn = parseInt(obj.rowsCount.value);
	  return rtn;
	}

	   //设置当前最大行号
	function setMaxRowNum(formName, maxRowNumVal){
      eval('var obj = document.'+formName+';');	   
	  obj.rowsCount.value = "" + maxRowNumVal;
	}
       //????
       function delOneRow(formName,tableId){
        var rownum = getMaxRowNum(formName);
		if(rownum == -1) return;  
        var tbl = document.getElementById(tableId);
		var k;		
		for(var i=0;i<tbl.childNodes.length;i++){
	       if(tbl.childNodes[i].nodeName.toUpperCase() == "TBODY"){					 
			   k = i;
			   break;
		   }
		}
        eval('var obj = document.'+formName+';');
        try{
          if(tbl.childNodes[k] == null){
            alert("没有要删除的记录!");//hava no record to delete
            return;
          }
          
          for(var i=tbl.childNodes[k].rows.length-1;i>=0;i--){          
            var firstTdHtml = tbl.childNodes[k].rows[i].cells[0].innerHTML;         
            var ind1 = firstTdHtml.indexOf("checkbox_") + 9;
            var ind2 = firstTdHtml.indexOf(">",ind1);
            var boxInd = parseInt(firstTdHtml.substring(ind1,ind2));          
            eval("var cb = obj.checkbox_"+boxInd+";");               
            if(cb.checked){
              
              //alert("cb.checked");	          					 
            
			  tbl.childNodes[k].deleteRow(i);			       
              //tbl.lastChild.deleteRow(i);
              //alert("rownum--之前" + rownum);
              rownum--;
              //alert("rownum--之后" + rownum);
			  setMaxRowNum(formName,rownum);
			  
              //obj.rowsCount.value = rownum + 1;//??????
            }
          }

      //调整列表行号的连续性
	  adjustContinuity(formName, tableId);

        }catch(e){
          alert("删除记录时出错!");  //wrong at delete record 
        }  
     }
     
       var theArray=new Array();
       
       //???????
       function getChange(obj){
         var frag=true; 
         var i=0
         var str1="";
         var tr2=obj.split("_");
         var ind = tr2.length - 1;
         for(;i<theArray.length;i++){
           if(theArray[i]==tr2[ind].toString()){
             frag=false;
           }   
         }
        if(frag){
          theArray[i]=tr2[ind].toString();
        }  
        //???????????
        document.all.updList.value=theArray;
    }      


   //增加一行,用于在一个页面有多个列表做批量新增的情况
   //@par formName 列表所在表单名称
   //@par tableId 列表ID
   //@par index 列表的索引号，从0开始，按从上到下的顺序
   function addOneRowSpec(formName, tableId, index){
      var tbl = document.getElementById(tableId);
      eval('var obj = document.'+formName+';');      
	  var rownum = parseInt(obj.rowsCount[index].value);
	  rownum++;
	  obj.rowsCount[index].value = rownum + "";
	  eval("var baseTrNode = " + tableId + "_tempTable.rows[0];");
	  var oneRow = baseTrNode.cloneNode(true);	
	  if(oneRow.hasChildNodes()){
	    for(var i=0;i<oneRow.childNodes.length;i++){
		  var oneTd = oneRow.childNodes[i];
		  var inHtml = oneTd.innerHTML;//innerHTML?name????????		 
          if(inHtml.indexOf("setday(")!=-1){
             var start = inHtml.indexOf("setday(");
             var end = inHtml.indexOf(")",start);
             var funRef = inHtml.substring(start+7,end);
             funRef += "_"+rownum;
             inHtml = inHtml.substring(0,start) + "setday(" + funRef + inHtml.substring(end);
          }
		  var ind;
		  var newInHtml = "";
		  while((ind=inHtml.indexOf("name="))!=-1){
		    newInHtml += inHtml.substring(0,ind+5);
			inHtml = inHtml.substring(ind+5);
			var ind2 = inHtml.indexOf(" ");
			var ind3 = inHtml.indexOf(">");
			if(ind2 == -1){
			  if(ind3>-1){
			     ind2 = ind3;
			  }
			}
			if(ind2>-1 && ind3>-1 && ind3<ind2){
			   ind2 = ind3;
			}
			var value = inHtml.substring(0,ind2);
			value = value + "_" +rownum;			
			newInHtml += value;
			inHtml = inHtml.substring(ind2);
		  }		  
		  newInHtml += inHtml;
		  oneRow.childNodes[i].innerHTML = newInHtml;
	    }  
	   
	  }
	  for(var i=0;i<tbl.childNodes.length;i++){
	     if(tbl.childNodes[i].nodeName.toUpperCase() == "TBODY"){
			 tbl.childNodes[i].appendChild(oneRow);
			 break;
		 }
	  }
	 
	  //alert("当前最大行号：" + obj.rowsCount[index].value);
   }
        
       //删除列表中选定的行，用于在一个页面有多个列表做批量新增的情况 
       //@par formName 表单名称
       //@par tableId 表Id
       //@par cboxName checkbox的名称，指不包含下划线和行号的名称 如checkbox_0,则指checkbox
       //@index 列表的索引号，从0开始，按从上到下的顺序排
     function delRowsSpec(formName,tableId,cboxName,index){
        eval("var obj = document." + formName + ";");//得到form对象
        var rownum = parseInt(obj.rowsCount[index].value);
        if(rownum == -1) return;  
	
        var tbl = document.getElementById(tableId);
	    var k;		
	    //取得TBODY的索引
		for(var i=0;i<tbl.childNodes.length;i++){
	       if(tbl.childNodes[i].nodeName.toUpperCase() == "TBODY"){					 
			   k = i;
			   break;
		   }
		}
        try{
          if(tbl.childNodes[k] == null){
            alert("没有要删除的记录!");//hava no record to delete
            return;
          }
          for(var i=rownum;i>=0;i--){
            eval("var cb = obj."+cboxName+"_"+i+";");
            if(cb.checked){
              //alert("cb.checked");	          					 
			  tbl.childNodes[k].deleteRow(i);			       
              //tbl.lastChild.deleteRow(i);
              rownum--;
              //alert("a");
			  obj.rowsCount[index].value = rownum + "";
			  //alert("b");
			  //所有行已全部删除
			  if(rownum==-1){
			     break;
			  }
              //obj.rowsCount.value = rownum + 1;//??????
            }
          }
        }catch(e){
          alert("删除记录时出错!");  //wrong at delete record 
        } 
	  //alert("当前最大行号：" + obj.rowsCount[index].value);         
     }   
     
//调整所有TR的行号使之连续，因为根据上述删除算法如果删除的并非最后一行，那么会导致所有TR的行索引不连续
 function adjustContinuity(formName,tableId){
        var rownum = getMaxRowNum(formName);
		if(rownum == -1) return;  
        var tbl = document.getElementById(tableId);
		var k;		
		for(var i=0;i<tbl.childNodes.length;i++){
	       if(tbl.childNodes[i].nodeName.toUpperCase() == "TBODY"){					 
			   k = i;
			   break;
		   }
		}
        eval('var obj = document.'+formName+';');
        try{
          if(tbl.childNodes[k] == null){
            alert("没有要删除的记录!");//hava no record to delete
            return;
          }
   
          for(var i=0;i<tbl.childNodes[k].rows.length;i++){      
			  for(var j=0;j<tbl.childNodes[k].rows[i].cells.length;j++){				
			     var tdHtml = tbl.childNodes[k].rows[i].cells[j].innerHTML;
				  //alert(i + "行" + j + "列的HTML" + tdHtml);
				 var newTdHtml = updateRowNum(tdHtml, i);
				 //alert("调整后的HTML" + newTdHtml);
                 tbl.childNodes[k].rows[i].cells[j].innerHTML = newTdHtml;

				 //alert("调整后的" + tbl.childNodes[k].rows[i].cells[j].innerHTML);
			  }            
          }
        }catch(e){
          alert("调整列表行号的连续性出错!");  //wrong at delete record 
        }  
 }
  //把name=namevar_ind的ind替换为rowInd   
  function updateRowNum(htmlStr,rowInd){
     var reg = /name=(\w+)_(\d+)/gi;
     var newStr = htmlStr.replace(reg,"name=$1_" + rowInd);
     return newStr;
} 
