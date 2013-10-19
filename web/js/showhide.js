	/***********************************************************************/
	/***********************************************************************/
	//根据pagetab显示相应的tab页
	/***********************************************************************/
	/***********************************************************************/
	
        var curPageTab;
        var curPageDiv;
        function showpage(pagetab) {    
       	 
         curPageTab = pagetab;
         //var ostate;
         //var tabid;
         var width = curPageTab.width;
         curPageTab.className= width+"pageon";
         for(var i=0;i<PageTab.rows[0].cells.length;i++) { 
           if(PageTab.rows[0].cells[i]!=curPageTab){
             PageTab.rows[0].cells[i].className=PageTab.rows[0].cells[i].width+"pageoff";
             //if(PageTab.rows[0].cells[i].state == "on"){
             	//ostate = "on";
             //}
             //PageTab.rows[0].cells[i].state="off"; 
                                
           }//else{
           	 //PageTab.rows[0].cells[i].state="on"; 
             //tabid = PageTab.rows[0].cells[i].id; 
           //}
         }         
         
         eval("pagediv="+pagetab.pagediv);
         if(curPageDiv!=null) {
         	curPageDiv.style.display='none';
         }
         pagediv.style.display='block';
         curPageDiv = pagediv;
         //if(ostate=="on"){        
         	//document.alltab.showpage.value=tabid;
         	//document.alltab.submit();
         //}
         
        }

	/***********************************************************************/
	/***********************************************************************/
	//要显示某个页面时,才从服务器上请求该页面
	/***********************************************************************/
	/***********************************************************************/
        var curPageTab_flash;
        var curPageDiv_flash;
        function showpage_flash(pagetab) {    
       	 
         curPageTab_flash = pagetab;
         var ostate;
         var tabid;
         var width = curPageTab_flash.width;
         curPageTab_flash.className= width+"pageon";
         for(var i=0;i<PageTab.rows[0].cells.length;i++) { 
           if(PageTab.rows[0].cells[i]!=curPageTab_flash){
             PageTab.rows[0].cells[i].className=PageTab.rows[0].cells[i].width+"pageoff";
             if(PageTab.rows[0].cells[i].state == "on"){
             	ostate = "on";
             }
             PageTab.rows[0].cells[i].state="off"; 
                                
           }else{
           	 PageTab.rows[0].cells[i].state="on"; 
             tabid = PageTab.rows[0].cells[i].id; 
           }
         }         
         
         eval("pagediv="+pagetab.pagediv);
         if(curPageDiv_flash!=null) {
         	curPageDiv_flash.style.display='none';
         }
         pagediv.style.display='block';
         curPageDiv_flash = pagediv;
         if(ostate=="on"){        
         	document.alltab.showpage.value=tabid;
         	document.alltab.submit();
         }
         
        }     
     
    /*
     * ??tabtd
     */
     function showtab(tabid){
       var tab = document.getElementById(tabid);
       tab.style.display="block";
     }
     
     
	/***********************************************************************/
	/***********************************************************************/
	//以下是做选择树处理的函数：包括节点的伸缩和选择的关联
	/***********************************************************************/
	/***********************************************************************/
	function MM_preloadImages() { //v3.0
		var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
	    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
	    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
	}
	
	
	/**
	 *	节点的伸缩，当点击父节点的＋号时展开子节点，或点击父节点的减号是收缩字节点
	 *	Inputs: Img是父节点前的加减号图片，
	 *	Content是要展开或收缩的父节点，带有display属性（现在用到的是TR）
	 *	Returns:  
	 */
	function WFShowHide(id){
		allChildren = document.getElementsByTagName("div");
		//alert(allChildren.length);
		for(i=0 ; i <allChildren.length; i++){
		child = allChildren[i];
		//alert("id=" + allChildren.length.id + " name=" + child.name);
			if(child.id==id){
				//alert ("yes!!!");
				if(child.style.display==""){
					child.style.display="none";	
				}else {
				//alert ("no!!!");
				child.style.display="";
			}
				
			}
		}
}
	
	function ShowHide(Img,Content){
		var ContentObj;
		ContentObj=Content.style;
		if(ContentObj.display==""){
			ContentObj.display="none";
			Img.src="../images/fold.gif";
		}else if(ContentObj.display=="none"){
            ContentObj.display="";
			Img.src="../images/unfold.gif";
		}
	}
	
	/**
	 *	//选择树调用，当父节点的checkbox被选中时，将子树中的节点都选中。反之亦然
	 *	Inputs: 选择树所属的form和当前被勾选的选择节点 
	 *	Returns:  
	 */
	/*function ContrarySelect(aform, pCheckbox){
		cb = pCheckbox;
		theForm = aform;
		boo = cb.checked;
		
		for (i = 0; i < theForm.elements.length; i++){
			if (theForm.elements[i].id.substring(0, cb.id.length) == cb.id){
				//window.alert("ok=" + theForm.elements[i].name);
				theForm.elements[i].checked = boo;
			}
		}
	}*/
    function ContrarySelect(aform, pCheckbox){
		cb = pCheckbox;
		theForm = aform;
		boo = cb.checked;
        var arrby_ = cb.id.split("_");
        var arrby_len = arrby_.length;
        //处理子节点
        var findSonFlag = false;//遍历儿子节点标志		
        //alert("01");
		for (var i = cb.ind; i < theForm.elements.length; i++){
			if(theForm.elements[i].id){//如果该元素的id存在
				//alert("cb.id=="+cb.id+"<=========>chlird===="+theForm.elements[i].id.substring(0, cb.id.length));
				
			   if (theForm.elements[i].id.substring(0, cb.id.length) == cb.id){
				   //window.alert("ok=" + theForm.elements[i].name);
  				   theForm.elements[i].checked = boo;
				   if(!findSonFlag){
				      findSonFlag = true;//已经找到并开始遍历儿子节点，设为true
				   }
			   }else if(findSonFlag){//已经遍历完所有的子节点、孙子节点...可以退出循环
                   break;
			   }
			}
		}
		//alert("arrby_len=="+arrby_len);
	    //处理父节点
        if(arrby_len > 3){//如果存在父节点
           var parentId = cb.id;
           for(var i=0;i<arrby_len-3;i++){
              var ind = parentId.substring(0, parentId.length-1).lastIndexOf("_");
              parentId = parentId.substring(0, ind + 1);
              //alert("parentId:" + parentId);
              if(boo == true){//当被选中
                 var sonsOfParentAllSelected = true;//当前父节点所有子节点是否被选中标志              
                 for(var j = 0;j < theForm.elements.length; j++){
                    if(theForm.elements[j].id.substring(0, parentId.length) == parentId){
                       if(theForm.elements[j].id.length > parentId.length){
                          if(theForm.elements[j].checked == false){
                             sonsOfParentAllSelected = false;
                             break;
                          }
                       }
                     }
                 }
                 if(sonsOfParentAllSelected == true){//如果儿子节点全被选中
                    if(document.getElementById(parentId)){
					    document.getElementById(parentId).indeterminate = false;                    
                        document.getElementById(parentId).checked = true;
					}
                 }else{//如果还有儿子未被选中
				    if(document.getElementById(parentId)){
                        document.getElementById(parentId).checked = false;
                        document.getElementById(parentId).indeterminate = true;
					}
                 }
              }else{//当不选中
                 var hasSonOfParentSelected = false;//父节点有无儿子被选中标志
                 for(var j = 0;j < theForm.elements.length; j++){
                   if(theForm.elements[j].id.substring(0, parentId.length) == parentId){
                       if(theForm.elements[j].id.length > parentId.length){
                          if(theForm.elements[j].checked == true){
                             hasSonOfParentSelected = true;
                             break;
                          }
                       }
                   }
                 }
                 if(hasSonOfParentSelected == true){//如果有儿子被选中
                    if(document.getElementById(parentId)){
                        document.getElementById(parentId).checked = false;                
                        document.getElementById(parentId).indeterminate = true;//如果无儿子被选中
					}
                 }else{//如果无儿子被选中
                    if(document.getElementById(parentId)){
                        document.getElementById(parentId).indeterminate = false;                                                         
                        document.getElementById(parentId).checked = false;
					}
                 }
              } 
           }
        }
        
	}

	
	/**
	 *	检查父节点与子节点的选中情况，并进行校正
	 *	Inputs: 选择树所属的form
	 *	Returns:  
	 */
    function initSelect(aform){
		var mydate = new Date();
		var start = mydate.getTime();
		//alert(start);
       theForm = aform;
	   var eleLen;
	   if(theForm.checkbox){
	       eleLen = theForm.checkbox.length;
	   }else{
		   return;
	   }
       //alert(theForm.name + "all elements count:" + theForm.elements.length);
       for (var i = 0; i < theForm.checkbox.length; i++){
          //alert(theForm.checkbox[i].value);
       	  var element_i = theForm.checkbox[i];
		  if(getNodeLevel2(element_i.id)==1 && element_i.checked==false){//根节点没被选中，跳过
		      continue;
		  }
          if(theForm.checkbox[i+1]){//如果该元素存在			     
              if(theForm.checkbox[i+1].id.substring(0, element_i.id.length) != element_i.id){
                  continue;
			  }
		  }else{//已到达最后一个节点，跳出循环
		      break;
		  }
       	  var hasSonSelected = false;//父节点有儿子被选中标志
       	  var hasSonNotSelected = false;//父节点有儿子不被选中标志
          var findSonFlag = false;//遍历儿子节点标志		
		  for(var j = i+1; j < theForm.checkbox.length; j++){
		  		
			  if(theForm.checkbox[j].id){//如果该元素ID存在
                 if (theForm.checkbox[j].id.substring(0, element_i.id.length) == element_i.id){
	                if(theForm.checkbox[j].checked == true){
	                   hasSonSelected = true;	
	                }
	                if(theForm.checkbox[j].checked == false){
	                   hasSonNotSelected = true;	
	                }
					if(!findSonFlag){
    					findSonFlag = true;
                    }
	             }else if(findSonFlag){//遍历完所有子节点、孙子节点...后即跳出循环
                    break;
			     } 
			  }
	      }
	  if(hasSonSelected == false && hasSonNotSelected == true){//所有儿子全未选中
             element_i.indeterminate = false;
	     element_i.checked = false;
	  }
	  if(hasSonSelected == true && 	hasSonNotSelected == false){//所有儿子全被选中
             element_i.indeterminate = false;
	     element_i.checked = true;
	  }	
	  if(hasSonSelected == true && hasSonNotSelected == true){//有儿子被选中，也有未被选中的，父节点变灰
	     element_i.checked = false;
	     element_i.indeterminate = true;
	  }	
       }
	   var mydate1 = new Date();
	   var end = mydate1.getTime();
	   //alert(end);
	   var diff = parseInt(end) - parseInt(start);
	   //alert(diff);
    }

	/**
	 *	检查父节点与子节点的选中情况，并进行校正
	 *	Inputs: 选择树所属的form
	 *	Returns:  
	 */
    function initSelect2(aform){
		//return;
		var mydate = new Date();
		var start = mydate.getTime();
		alert(start);
       var theForm = aform;
	   //var eleLen = theForm.checkbox.length;
	   var nodeCount = getRootNodeCount();//根节点总数
	   alert("根节点总数"+nodeCount);
       //alert(theForm.name + "all elements count:" + theForm.elements.length);

       for (var i = 0; i < nodeCount; i++){	
		  var prefix = "cb_lvl00_lvl1"; 
		  var rootNodeId = prefix + i + "_";
		  var rootNodeObject = document.getElementById(rootNodeId);
		  var rootNodeIndex = parseInt(rootNodeObject.ind);
          if(rootNodeObject.checked==false){//根节点没被选中，因为当通过javabean生成树时，只要根节点有一个子节点
		                                    //被选中，该根节点就会被选中；如果根节点没被选中，意味着它的所有子节点
											//都没被选中，因此没必要做检查
		      alert("根节点没被选中");
			  continue;
		  }
          if(theForm.checkbox[rootNodeIndex+1].id.substring(0, rootNodeObject.id.length) != rootNodeObject.id){
			  //如果根节点没有子节点，也没必要检查
			  alert("根节点没有子节点");
              continue;
    	   }


       	  var hasSonSelected = false;//父节点有儿子被选中标志
       	  var hasSonNotSelected = false;//父节点有儿子不被选中标志
          var findSonFlag = false;//遍历儿子节点标志		
		  //var j = rootNodeIndex+1;
		  //var nextNodeObject = theForm.checkbox[j];
		  alert(nextNodeObject);
		  var childStart = (new Date()).getTime();
		  for(var j = rootNodeIndex+1; j < theForm.elements.length; j++){
			  if(theForm.elements[j].id){//如果该元素ID存在
                 if (theForm.elements[j].id.substring(0, element_i.id.length) == element_i.id){
	                if(theForm.elements[j].checked == true){
	                   hasSonSelected = true;	
	                }
	                if(theForm.elements[j].checked == false){
	                   hasSonNotSelected = true;	
	                }
					if(!findSonFlag){
    					findSonFlag = true;
                    }
	             }else if(findSonFlag){//遍历完所有子节点、孙子节点...后即跳出循环
                    break;
			     } 
			  }
	      }
		  var childEnd = (new Date()).getTime();
		  var childDiff = (childEnd - childStart)/1000;
		  alert("第" + i + "个根节点的子循环时间是：" + childDiff);
	  if(hasSonSelected == false && hasSonNotSelected == true){//所有儿子全未选中
             rootNodeObject.indeterminate = false;
	     rootNodeObject.checked = false;
	  }
	  if(hasSonSelected == true && 	hasSonNotSelected == false){//所有儿子全被选中
             rootNodeObject.indeterminate = false;
	     rootNodeObject.checked = true;
	  }	
	  if(hasSonSelected == true && hasSonNotSelected == true){//有儿子被选中，也有未被选中的，父节点变灰
	     rootNodeObject.checked = false;
	     rootNodeObject.indeterminate = true;
	  }	
       }
	   var mydate1 = new Date();
	   var end = mydate1.getTime();
	   //alert(end);
	   var diff = parseInt(end) - parseInt(start);
	   alert("耗时" + (diff/1000) + "秒");
    }	

	/**
	 *	检查父节点与子节点的选中情况，并进行校正
	 *	Inputs: 选择树所属的form
	 *	Returns:  
	 */
    function initSelect11(aform){
        return;
		var mydate = new Date();
		var start = mydate.getTime();
		//alert(start);
       theForm = aform;
	   var rootNodeCount = getRootNodeCount();
	   if(rootNodeCount == 0){//如果没有根节点，则直接返回
           return;
	   }
	   //var eleLen = theForm.elements.length;
       //alert(theForm.name + "all elements count:" + theForm.elements.length);
	   var prefix = "cb_lvl00_lvl1";

       for (var i = 0; i < rootNodeCount; i++){
		  var nodeId = prefix + i + "_";
          var nodeObject = document.getElementById(nodeId);
		  if(hasChildNode(nodeObject) && nodeObject.checked==true){//如果有子节点并且该节点被选中才检查
		      
		  }else{//没有子节点，则跳过，接着检查下一节点
		      continue;
		  }

       	  //var element_i = theForm.elements[i];
          //if(theForm.elements[i+1]){//如果该元素存在
			//  if(theForm.elements[i+1].id){//如果该元素的ID存在
          //       if(theForm.elements[i+1].id.substring(0, element_i.id.length) != element_i.id){
          //          continue;
		//	     }
		//	  }
		 // }
       	  var hasSonSelected = false;//父节点有儿子被选中标志
       	  var hasSonNotSelected = false;//父节点有儿子不被选中标志
          var findSonFlag = false;//遍历儿子节点标志		
		  for(var j = i+1; j < theForm.elements.length; j++){
			  if(theForm.elements[j].id){//如果该元素ID存在
                 if (theForm.elements[j].id.substring(0, element_i.id.length) == element_i.id){
	                if(theForm.elements[j].checked == true){
	                   hasSonSelected = true;	
	                }
	                if(theForm.elements[j].checked == false){
	                   hasSonNotSelected = true;	
	                }
					if(!findSonFlag){
    					findSonFlag = true;
                    }
	             }else if(findSonFlag){//遍历完所有子节点、孙子节点...后即跳出循环
                    break;
			     } 
			  }
	      }
	  if(hasSonSelected == false && hasSonNotSelected == true){//所有儿子全未选中
             element_i.indeterminate = false;
	     element_i.checked = false;
	  }
	  if(hasSonSelected == true && 	hasSonNotSelected == false){//所有儿子全被选中
             element_i.indeterminate = false;
	     element_i.checked = true;
	  }	
	  if(hasSonSelected == true && hasSonNotSelected == true){//有儿子被选中，也有未被选中的，父节点变灰
	     element_i.checked = false;
	     element_i.indeterminate = true;
	  }	
       }
	   var mydate1 = new Date();
	   var end = mydate1.getTime();
	   //alert(end);
	   var diff = parseInt(end) - parseInt(start);
	   alert("检查父节点与子节点总共需要的时间："+diff/1000);
    }

	
    /**
	 *	计算某个节点的所有子节点的个数，如果没有子节点，返回0
	 *	Inputs: 父节点对象
	 *  Inputs: formObject 节点所属的表单对象
	 *	Returns: 指定节点的子节点数目
	 */
	 function getChildCount(parentNode,formObject){
         
	 }

    /**
	 *	返回某个节点的父节点对象，如果没有父节点对象，则返回null
	 *	Inputs: 子节点对象
	 *  Inputs: formObject 节点所属的表单对象
	 *	Returns: 指定节点的父节点对象
	 */
	 function getParentNode(childNode,formObject){
         
	 }

    /**
	 *	检查节点是否有子节点，如果有返回true，否则返回false
	 *	Inputs: parentNode 父节点对象
	 *  Inputs: formObject 节点所属的表单对象
	 *	Returns: true或者false
	 */
	 function hasChildNode(parentNode,formObject){
         
	 }

    /**
	 *	检查节点是否有父节点，如果有返回true，否则返回false
	 *	Inputs: childNode 父节点对象
	 *  Inputs: formObject 节点所属的表单对象
	 *	Returns: true或者false
	 */
	 function hasParentNode(childNode,formObject){
         
	 }

    /**
	 *	根据指定节点的ID值返回节点所在的层次，
	 *  如某个节点ID为cb_lvl00_lvl10_，说明该节点是根节点（可能不只一个），表示在第一层，则返回1，
	 *  如果节点ID为cb_lvl00_lvl10_lvl20_，表示该节点在第二层，则返回2
	 *	Inputs: node 指定节点对象
	 *  Inputs: formObject 节点所属的表单对象
	 *	Returns: int
	 */
	 function getNodeLevel(node,formObject){
         
	 }

    /**
	 *	根据指定节点的ID值返回节点所在的层次，
	 *  如某个节点ID为cb_lvl00_lvl10_，说明该节点是根节点（可能不只一个），表示在第一层，则返回1，
	 *  如果节点ID为cb_lvl00_lvl10_lvl20_，表示该节点在第二层，则返回2
	 *	Inputs: nodeId 指定节点对象的ID
	 *  Inputs: formObject 节点所属的表单对象
	 *	Returns: int
	 */
	 function getNodeLevel2(nodeId){
         var level = 0;
		 nodeId = nodeId.substring("cb_lvl000_".length);
		 var ind = nodeId.lastIndexOf("_");
		 while(ind > -1){
		     level ++;
			 nodeId = nodeId.substring(0,ind);
			 ind = nodeId.lastIndexOf("_");
		 }
		 return level;
	 }

    /**
	 *	判断节点A是否是节点B的子节点，是则返回true，否则返回false
	 *  Inputs：nodeA
	 *  Inputs：nodeB，
	 *	Returns: true或者false
	 */
	 function isChildNode(nodeA,nodeB){
         var flag = false;
		 if(nodeA==null || nodeB==null){
		     return flag;
		 }
         if(nodeA.id.substring(0, nodeB.id.length) == nodeB.id){
		     flag = true;
		 }
		 return flag;
	 }

    /**
	 *	计算一个页面中根节点的个数，
	 *	Returns: int
	 */
	 function getRootNodeCount(){
         var rootNodeCount = 0;//节点总数
		 var prefix = "cb_lvl00_lvl1";
		 rootNodeCount = getNodeCountHasPrefix(prefix);		 
		 return rootNodeCount;
	 }

    /**
	 *	得到以prefix为前缀的某一层节点的总数
	 *  Inputs：prefix
	 *	Returns: int
	 */
	 function getNodeCountHasPrefix(prefix){
		 var rootNodeCount = 0;//节点总数
		 var flag = true;//循环标志
		 var index = 0;
		 while(flag){
             var nodeId = prefix + index + "_";
			 //alert(nodeId);
			 var nodeObject = document.all.item(nodeId);
			 //alert(nodeObject);
			 if(nodeObject != null){
			     rootNodeCount++;
			 }else{
			     flag = false;
			 }
			 index++;
		 }
		 return rootNodeCount;
	 }



    /**
	 *	检查父节点与子节点的选中情况，并进行校正
	 *	Inputs: 选择树所属的form
	 *	Returns:  
	 */
    function initSelectRight(aform){
       theForm = aform;
       for (var i = 0; i < theForm.elements.length; i++){
       	  var element_i = theForm.elements[i];
       	  var hasSonSelected = false;//父节点有儿子被选中标志
       	  var hasSonNotSelected = false;//父节点有儿子不被选中标志
       	  for(var j = i+1; j < theForm.elements.length; j++){
             if (theForm.elements[j].id.substring(0, element_i.id.length) == element_i.id){
	        if(theForm.elements[j].checked == true){
	           hasSonSelected = true;	
	        }
	         if(theForm.elements[j].checked == false){
	           hasSonNotSelected = true;	
	        }	       
	     }   
	  }
	  if(hasSonSelected == false ){//所有儿子全未选中
             //element_i.indeterminate = false;
	     element_i.checked = false;
	  }
	  if(hasSonSelected == true ){//所有儿子全被选中
            // element_i.indeterminate = false;
	     element_i.checked = true;
	  }	
	   if(hasSonSelected == true && hasSonNotSelected == true){//有儿子被选中，也有未被选中的，父节点变灰
	     element_i.checked = true;
	  }	
       }
    }

	/***********************************************************************/
	/***********************************************************************/
	//以下是做Tab页处理的函数：
	/***********************************************************************/
	/***********************************************************************/

	//最支持10个Tab页，Tab标题是一系列的<td>元素，在选中和取消选中时
	//需要变更他们的背景图片
	pageTitles = new Array(20);
	
	//所有tab页的内容都放在一个页面中，如一个tab页对应一个<Table>, 用他们的ID来区分
	//当某个Tab标题被点击后使其对应的Tab页内容看见，而其它的都变为不可见。
	pages = new Array(20);

	/**
	 *	将一对tab标题和tab页加入到数组中，用以取消选中时用
	 *  在整个页面载入的时候，需要调用一次该函数，将缺省的选中Tab标题和Tab页保存起来
	 *	Inputs: 
	 *	Returns:  
	 */
	function addPageSetting(title, page){
		exist = false;
		curNumber = 0;
		for(i=0; i < pageTitles.length; i ++){
			if (pageTitles[i] == null){
				break;
			}else if (pageTitles[i].id == title.id){
				exist = true;
				curNumber = curNumber + 1;
				break;
			}else{
				curNumber = curNumber + 1;
			}
		}
		//window.alert("number=" + curNumber + " exist=" + exist);
		if (!exist){
			pageTitles[curNumber] = title;
			pages[curNumber] =  page;
		}
	}
	/**
	 *	点击某个Tab标题时调用，使其对应的Tab页变为可见，而其它的Tab页变为不可见。
	 *	Inputs: 
	 *	Returns:  
	 */
	function onTabPage(theTd, todisplay){
		//window.alert("==" + theTd.state);
		if (theTd.state!="on"){
			for(i=0; i < pageTitles.length; i ++){
				if (pageTitles[i] == null){
					break;
				}else if (pageTitles[i].state=="on"){
					pageTitles[i].background="/gdld/images/pageheadB.jpg";
					pageTitles[i].state="off";
					pages[i].style.display="none";
					break;
				}
			}

			theTd.background="/gdld/images/pageheadF.jpg";
			theTd.state = "on";
			style = todisplay.style;
		    style.display="";
			addPageSetting(theTd, todisplay);	
			
		}
	}
	
	/***********************************************************************/
	/***********************************************************************/
	//以下是做多级查询条件的动态显示，如点击按楼栋查询，则显示按楼栋查询的条件页面
	/***********************************************************************/
	/***********************************************************************/
	
	//最多按5种查询类别显示查询条件，也需要在页面加载时将缺省显示的查询条件保存进来
	//如一种查询条件页面对应一个<Table>或一个<TR>, 用他们的ID来区分
	//当其它查询种类被选中时，使其对应的查询条件页面内容可见，而其它的都变为不可见（也可以可见）。
	showPages = new Array(5);
	
	/**
	 *	将一个查询条件页加入到数组中，用以取消选中时用
	 *  在整个页面载入的时候，需要调用一次该函数，将缺省显示的查询条件页保存起来
	 *	Inputs: 
	 *	Returns:  
	 */
	function addOnePage(page){
		exist = false;
		curNumber = 0;
		for(i=0; i < showPages.length; i ++){
			if (showPages[i] == null){
				break;
			}else if (showPages[i].id == page.id){
				exist = true;
				curNumber = curNumber + 1;
				break;
			}else{
				curNumber = curNumber + 1;
			}
		}
		if (!exist){
			showPages[curNumber] =  page;
		}
		//window.alert("number=" + curNumber);
	}
	/**
	 *	点击某个查询种类时调用，使其对应的Tab页变为可见，而其它的Tab页变为不可见（或不可见）。
	 *	Inputs: page表示要显示的页（可能是一个<Table>或一个<TR>）, 
	 *  		showOld表示是否隐藏前面的显示页
	 *	Returns:  
	 */
	function showOherPage(page, showOld){
		if (page.style.display=="none"){
			if (!showOld){
				for(i=0; i < showPages.length; i ++){
					if (showPages[i] == null){
						break;
					}else if (showPages[i].style.display==""){
						showPages[i].style.display="none";
						break;
					}
				}
			}

			page.style.display="";
			addOnePage(page);
		}
	}
	
	
	/**
	 *	隐藏某个页面（可能是一个<Table>或一个<TR>）,
	 *	Inputs: page表示要隐藏的页（可能是一个<Table>或一个<TR>）, 
	 *	Returns:  
	 */
	function showhideContent(page){
		if (page.style.display==""){
			page.style.display="none";
		}else{
			page.style.display="";
		}
	}
	
	function popupMultiSelDlg() {
		locStr = "dialogLeft:" + (event.screenX-200) + ";dialogTop:" + event.screenY;
		showModalDialog("/gdld/jsp/common/multiSelectPopup.jsp",window,"status:0;help:0;dialogWidth:200px;dialogHeight:150px;" + locStr); 
	}
	
	/**
	 *	由总的字典串，和已选择的选项值串，得到已选择的选项描述串
	 *	Inputs:items表示总的字典串，如：值1=描述1|值2=描述2|值3=描述3...,
	 *   selectedItems 表示已选择的选项值串，如： 值2|值3
	 *	Returns:  已选择的选项描述串， 如： 描述2|描述3
	 */
function getSelectStr(items, selectedItems){
	allDescStr = "";
	arr = items.split("|");
	selArr = selectedItems.split("|");
	for(i=0; i<arr.length; i++){
		oneItem = arr[i];
		ind = oneItem.indexOf("=");
		value=oneItem.substr(0, ind);
		desc = oneItem.substr(ind+1);
		flag = false;

		for(j = 0; j < selArr.length; j++){
			sel = selArr[j];
			if (value == sel){
				flag = true;
				break;
			}
		}

		if (flag == true){
			allDescStr = allDescStr + "|" + desc;
		}

	}
	return allDescStr;
} 

function changState(tab){

	if(tab.state!='on'){
		tab.editstate='no';
	} else {
		tab.editstate ='yes';
	}
}

function tabSubmit(tab,div){		
	if(tab.state = 'on') {
		if( tab.editstate !='yes'){		
			document.allTab.DefDiv.value=div;
			document.allTab.submit();
		} 
	} else{
		if(tab.editstate =='no'){
			document.allTab.DefDiv.value=div;
			document.allTab.submit();
		} 	
	}
}


//????form??????
function expandIt(parent){
		allChildren = document.getElementsByTagName("div");
		//alert(allChildren.length + " parent=" + parent);
		for (i = 0; i < allChildren.length; i ++){
			child = allChildren[i];
			//alert("id=" + child.id + " name=" + child.name);
			if (child.name=="Child"){
				if(child.id==parent){
					if(child.style.display==""){
						//alert ("no!!!");
						child.style.display="none";
					}else {
					//alert ("yes!!!");
					child.style.display="";
				}
					
					
					
				}
			}
		}
	}
	
	
	
	/*
	*流程合并页面权限控制
	*完成页面显示控制，提交信息的设置
	*
	*/
	function WFcontrol(actionID,prInsdID,editID,upID){
		allDiv = document.getElementsByTagName("div");
		allElements = document.aform.elements;
		tmp2 = "";
		tmp3="";
		//alert(editID);
		//alert(upID);
		k=0;
		if(editID==''||editID=='null'){
			editID = actionID;
		}
		wkcommit.ACTIONID.value=editID;
		while(actionID !== ""){
			index = actionID.indexOf("|");
			if(index >0){
				actID=actionID.substring(0,index);
				len = actionID.length; 
				actionID=actionID.substring(index+1,len);
			}else{
				actID = actionID;
				actionID="";
			}
			
			
			
			//页面显示控制
			for(i = 0 ; i < allDiv.length; i++){
				div = allDiv[i];
				if(div.name =="wf_act_div"){
					if(div.id == actID){
						if(div.style.display=="none"){
							div.style.display="";
						}
					}
				}
			}
		}
		
		while(editID !==""){
			index = editID.indexOf("|");
			if(index >0){
				editActID=editID.substring(0,index);
				len = editID.length; 
				editID=editID.substring(index+1,len);
			}else{
				editActID = editID;
				editID="";
			}
			//alert("editActID=" + editActID);
			tmp = upID;
			//提交信息的设置
			if(prInsdID == 'null' ){
				for(j = 0; j < allElements.length ; j ++){
			
			
				
					if(allElements[j].name == editActID + "_commitIDs_insert"){
				
						if(k==0){ 
							aform.commitConfDefIDs.value +=  allElements[j].value;
							k++;
						}else{
							aform.commitConfDefIDs.value += "|" +  allElements[j].value;
						}
					}
				}	
			}else{
				flg = false;
			
				while(tmp !== ""){
					index = tmp.indexOf("|");
					if(index >0){
						tmp1=tmp.substring(0,index);
						len = tmp.length; 
						tmp=tmp.substring(index+1,len);
						//alert("tmp===21212" + tmp);
					}else{
						tmp = tmp1;
						tmp="";
					}
					
					if(editActID!=="" && tmp1 !=="" &&tmp1 == editActID){
						tmp2  +=  tmp1 + "|";
						flg = true;
						break ;
					}
			 	}
			 	if(flg ){
			 		flg = false;
			 		continue;
			 	}
			 	
			 	//
			 	while(tmp !== ""){
					index = tmp.indexOf("|");
					if(index >0){
						tmp1=tmp.substring(0,index);
						len = tmp.length; 
						tmp=tmp.substring(index+1,len);
						//alert("tmp===21212" + tmp);
					}else{
						tmp = tmp1;
						tmp="";
					}
					
					 if(editActID!=="" && tmp1 !=="" &&tmp1 !== editActID){
						tmp3 += tmp1 + "|";
						flg = true;
						break ;
					}
			 	}
			 	if(flg ){
			 		flg = false;
			 		continue;
			 	}
			 	//
			 	
			 	
			}
		}
		//alert("tmp2===" + tmp2);
	 	while(tmp2 !== "" && tmp2 !=="|"){
			index = tmp2.indexOf("|");
			
			if(index >0){
				tmp1=tmp2.substring(0,index);
				len = tmp2.length; 
				tmp2=tmp2.substring(index+1,len);
				//alert("tmp===21212" + tmp);
			}else{
				tmp2 = tmp1;
				tmp2="";
			}
			for(j=0 ;j < allElements.length ; j ++){                                                                                               
				if(allElements[j].name == tmp1 + "_commitIDs_update" ){            
					//alert("tmp1===2565652" + tmp1);                                                  
					if(k==0){                                                                      
						aform.commitConfDefIDs.value +=  allElements[j].value;                 
						k++;                                                                   
					}else{                                                                         
						aform.commitConfDefIDs.value += "|" +  allElements[j].value;           
					}
				} 
			}           
		}
		//alert("tmp3===" + tmp3);
		while(tmp3 !== "" && tmp3!=="|"){
			index = tmp3.indexOf("|");
			
			if(index >0){
				tmp1=tmp3.substring(0,index);
				len = tmp3.length; 
				tmp3=tmp3.substring(index+1,len);
				//alert("tmp===21212" + tmp);
			}else{
				tmp3 = tmp1;
				tmp3="";
			}
			for(j=0 ;j < allElements.length ; j ++){                                                                                               
				if(allElements[j].name == tmp1 + "_commitIDs_update" ){            
					//alert("tmp1===2565652" + tmp3);                                                  
					if(k==0){                                                                      
						aform.commitConfDefIDs.value +=  allElements[j].value;                 
						k++;                                                                   
					}else{                                                                         
						aform.commitConfDefIDs.value += "|" +  allElements[j].value;           
					}
				} 
			}           
		}
		//alert("wkcommit.ACTIONID.value=" + wkcommit.ACTIONID.value);	
		//alert("aform.commitConfDefIDs.value==222" + aform.commitConfDefIDs.value);	
	}
	/*
	*流程合并页面权限控制
	*完成页面显示可否编辑控制
	*
	*/
	function WFeditControl(actionID){
		allDiv = document.getElementsByTagName("div");
		while(actionID !== ""){
			index = actionID.indexOf("|");
			if(index >0){
			actID=actionID.substring(0,index);
			len = actionID.length; 
			actionID=actionID.substring(index+1,len);
			}else{
				actID = actionID;
				actionID="";
			}
			for(i = 0 ; i < allDiv.length; i++){
					div = allDiv[i];
					if(div.name =="wf_act_div"){
						if(div.id == actID){
							allElements=div.getElementsByTagName("input");
								
							for(j = 0; j < allElements.length; j++){
								//alert("allElements====" +allElements[i].name );
								allElements[j].disabled='true';
							}
							allElements=div.getElementsByTagName("textarea");
							for(j = 0; j < allElements.length; j++){
							//alert("allElements====" +allElements[i].name );
								allElements[j].disabled='true';
							}
							allElements=div.getElementsByTagName("chekbox");
							for(j = 0; j < allElements.length; j++){
							//alert("allElements====" +allElements[i].name );
								allElements[j].disabled='true';
							}
							allElements=div.getElementsByTagName("radio");
							for(j = 0; j < allElements.length; j++){
							//alert("allElements====" +allElements[i].name );
								allElements[j].disabled='true';
							}
							allElements=div.getElementsByTagName("select");
							for(j = 0; j < allElements.length; j++){
							//alert("allElements====" +allElements[i].name );
								allElements[j].disabled='true';
							}
						}
					}
				}
		}
	}
	/*
	*流程提交的后续任务名称与接收人的组成
	*产生的结果用于提交
	*任务提交的时候调用
	*/
	
	function transActAcepter(formName){
		//alert("formName==" + formName);
		eval(" var SelectName = document." + formName + ".transitionSelect;");
		var SelectName = SelectName.value;
		//alert("SelectName==="+ SelectName);
		var accepter = "";
		var transAct = "";
		var i=0;
		while(SelectName !== ""){
			index = SelectName.indexOf("_");
			if(index > 0){
				tmp = SelectName.substring(0,index);
				len = SelectName.length;
				SelectName=SelectName.substring(index+1,len);	
			}else{
				tmp=SelectName;
				SelectName ="";
				
			}
			tmp +=  "_";
			eval(" var tmpAct = document." + formName + "."+tmp+";");
			tmp += "accepterID";
			eval(" var tmpAccept = document." + formName + "."+tmp+";");
			if(((tmpAct.value ==null) || tmpAct.value=="" || tmpAct.value =='null')
			||((tmpAccept.value == null) || tmpAccept.value=="" || tmpAccept.value =='null')){
				alert("请选择下一环节或接收人!");
				
				   return false;
				 
			}
			tansAct = tmpAct.value  + "|";
			
			accepter +=tmpAccept.value+ "|";
			
		}
		eval(" var obj = document." + formName + ";");
		obj.accepter.value = accepter;
		obj.tansAct.value = tansAct;
		//alert("obj.accepter.value==="+ obj.accepter.value);
		//alert("obj.tansAct.value==="+ obj.tansAct.value);
		return true;
		
		
		
	}
	
	// 显示隐藏表格
	function showTable(imgId,tableId){
	   var  tableDivObj = document.getElementById(tableId);
	   tableDivObj.style.display = (tableDivObj.style.display=="none"?"block":"none");
	}
	
	
	
	/*
	*author gcs
	*完成页面显示可否编辑控制
	*使页面只读
	*/
	function ElementsReadOnly(aform){
		var obj = document.aform
		allDiv = document.getElementsByTagName("div");
		for(i=0; i <allDiv.length; i++){
			div = allDiv[i];
			//alert("div=="+div.id);
			if(div.id =="01"){
				div.style.display="none";
			}
		}
		allElements=obj.getElementsByTagName("input");
			
		for(j = 0; j < allElements.length; j++){
			//alert("allElements====" +allElements[i].name );
			allElements[j].disabled='true';
		}
		allElements=obj.getElementsByTagName("textarea");
		for(j = 0; j < allElements.length; j++){
		//alert("allElements====" +allElements[i].name );
			allElements[j].disabled='true';
		}
		allElements=obj.getElementsByTagName("chekbox");
		for(j = 0; j < allElements.length; j++){
		//alert("allElements====" +allElements[i].name );
			allElements[j].disabled='true';
		}
		allElements=obj.getElementsByTagName("radio");
		for(j = 0; j < allElements.length; j++){
		//alert("allElements====" +allElements[i].name );
			allElements[j].disabled='true';
		}
		allElements=obj.getElementsByTagName("select");
		for(j = 0; j < allElements.length; j++){
		//alert("allElements====" +allElements[i].name );
			allElements[j].disabled='true';
		}
	}
	
	function loadBar(fl)
//fl is show/hide flag
{
  var x,y;
  if (self.innerHeight)
  {// all except Explorer
    x = self.innerWidth;
    y = self.innerHeight;
  }
  else 
  if (document.documentElement && document.documentElement.clientHeight)
  {// Explorer 6 Strict Mode
   x = document.documentElement.clientWidth;
   y = document.documentElement.clientHeight;
  }
  else
  if (document.body)
  {// other Explorers
   x = document.body.clientWidth;
   y = document.body.clientHeight;
  }

    var el=document.getElementById('loader');
        if(null!=el)
        {
                var top = (y/2) - 50;
                var left = (x/2) - 150;
                if( left<=0 ) left = 10;
                el.style.visibility = (fl==1)?'visible':'hidden';
                el.style.display = (fl==1)?'block':'none';
                el.style.left = (document.body.clientWidth-loader.clientWidth)/2;
                el.style.top = (document.body.clientHeight-loader.clientHeight)/2
                el.style.zIndex = 2;
        }
        alert("dasdaasd");
}
	
