// Determine browser type.

var isIE = (navigator.appName == "Microsoft Internet Explorer") ? 1 : 0;
var isNS = (navigator.appName == "Netscape") ? 1 : 0;
var isNS4 = (navigator.appName == "Netscape" && parseInt(navigator.appVersion) < 5);
var isOpera = (navigator.appName == "Opera") ? 1 : 0;


// Check to make sure the mouse doesn't move off the page

if (isIE)
	document.onmouseout = offPage;

// Edited to work with Netscape 4.x
if (isNS && !isNS4)
	document.addEventListener("mouseout", offPage, true);

if (isOpera)
	document.addEventListener("mouseout", offPage, true);

function mOver()
{
	//处理select被层挡住的问题
	/*
	if((document.forms.length == 1)||(document.forms[0] != null))
	{
		var len = document.forms[0].elements.length;		
	
		for(var loop_index=0;loop_index<len;loop_index++)
		{
			var type = document.forms[0].elements[loop_index].type;
			if(type=="select-one")			
			{
				document.forms[0].elements[loop_index].style.visibility = 'hidden';			
			}
		}
	}
	*/
}

function mOut()
{
	//处理select被层挡住的问题
	/*
	if((document.forms.length == 1)||(document.forms[0] != null))
	{
		var len = document.forms[0].elements.length;
	
		for(var loop_index=0;loop_index<len;loop_index++)
		{
			var type = document.forms[0].elements[loop_index].type;
			if(type=="select-one")
			{
				document.forms[0].elements[loop_index].style.visibility = 'visible';			
			}
		}
	}
	*/
}

// Should the mouse go off the document window hide all menus
function offPage(event)
{
	var offScreen;
	if (isIE) offScreen = (window.event.clientY < 5) ? 1 : 0;
	if (isNS) offScreen = (event.pageY < 5) ? 1 : 0;
	if (isOpera) offScreen = (event.pageY < 5) ? 1 : 0;
	if (offScreen) hideOthers(10,10);
}

function hideOthers(column, row)
{
	if((isNS || isIE || isOpera) && !isNS4)
	{
		// Hide all of the sub-menus except the one that should be showing and its super-menus.

		for(column_count = 0; document.getElementById("subMenu" + column_count + "0") != null; column_count++)
		{
			//window.alert("tada!");
			if ( column == column_count )
			{
				var hide = false;
				for (row_count = 0; document.getElementById("subMenu" + column_count + row_count) != null; row_count++)
				{
					if (row_count == row) hide = true;
					if (hide)
					{
						var rowCount = row;
						while(rowCount !=0 )
						{
							var e = document.getElementById("subMenu"+column_count+rowCount);
							e.style.visibility = "hidden";
							rowCount--;
						}
						var currentElement = document.getElementById("subMenu"+column_count+row_count);
						 currentElement.style.visibility = "hidden";
					}
				}
			}

			if ( column != column_count )
			{
				for (row_count = 0; document.getElementById("subMenu" + column_count + row_count) != null; row_count++)
				{
					document.getElementById("subMenu"+column_count+row_count).style.visibility = "hidden";
				}
			}
		}


		// Hide any special menus down here.
		var currentElement = document.getElementById("clearAll");
		if(currentElement != null) currentElement.style.visibility = "hidden";
	}
}


// Hide all the menus
function hide(id)
{
	if(isNS4)
	{
		document.layers[id].visibility = "hide";
	}

	if((isNS || isIE || isOpera) && !isNS4)
	{
		// Very poorly done, however works...need to glamorize this later
		var currentElement = document.getElementById(id);
		if(currentElement != null) currentElement.style.visibility = "hidden";
	}
}

// Shows the submenu for the menu item
function showSubMenu(column, row) 
{
	if(isNS || isIE || isOpera)
	{
		mOver();

		hideOthers(column, row);

		// Make the background layer visible for catching the mouse as it leaves the menu
		var currentElement = document.getElementById("clearAll");
		currentElement.style.visibility = "visible";

		// Show the correct sub-menu
		if(document.getElementById("subMenu"+column+row) != null)
		{
			var currentElement = document.getElementById("subMenu"+column+row);
			currentElement.style.visibility = "visible";
		}
	}
	
}

function show(id) 
{
	// This is for Netscape 4.x only
	if(isNS4)
	{
		for(i = 9; i < 17;i++)
		{
			document.layers[i].visibility = "hide";
		}
		document.layers[id].visibility = "show";
	}
}



function printMenu(rootdir, which) {
	var menuBody = '';

	if ( which.indexOf("\\qywssb\\") >= 0 ) {
	
		menuBody = '' +
		'<DIV id=menuBar style="LEFT: 0px; WIDTH: 100%; POSITION: relative; TOP: 0px">' +
		'<TABLE cellSpacing=0 cellPadding=0 width=100% height=20>' +
		'    <TBODY> ' +
		'    <TR>' +
		'      <TD class=menuButton onmouseover=showSubMenu(0,0); onmouseout=mOut(); width="90"><font color="white" style="cursor:hand">综合申报</font></TD>' +
		'      <TD class=menuButton onmouseover=showSubMenu(1,0); onmouseout=mOut(); width="90"><font color="white" style="cursor:hand">查询系统</font></TD>' +
		'      <TD class=menuButton onmouseover=showSubMenu(2,0); onmouseout=mOut(); width="90"><font color="white" style="cursor:hand">资料下载</font></TD>' +
		'      <TD class=menuButton onmouseover=hideOthers(3,0) onmouseout=mOut(); width="90"><A class=menuLink href="' + rootdir + '\\qywssb\\zlsc\\index.html">资料上传</A></TD>' +
		'      <TD class=menuButton onmouseover=showSubMenu(4,0); onmouseout=mOut(); width="200"><font color="white" style="cursor:hand">离线程序与工具下载</font></TD>' +
		'      <TD class=menuButton onmouseover=hideOthers(5,0) onmouseout=mOut(); width="90"><A class=menuLink href="' + rootdir + '\\qywssb\\mmxg\\mmxg.html">密码修改</A></TD>' +
		'	  <TD class=menuButton onmouseover=hideOthers(6,0) onmouseout=mOut(); width="90"><A class=menuLink href="' + rootdir + '\\qywssb\\zhsb\\zip.zip">使用手册</A></TD>' +
		'	  <TD class=menuButton onmouseover=hideOthers(7,0) onmouseout=mOut(); width="60"><A class=menuLink href="' + rootdir + '\\..\\main.htm">退出</A></TD>' +
		'	</TR>' +
		'    </TBODY> ' +
		'  </TABLE>' +
		'</DIV>' +
		'' +
		'<DIV class=menu id=subMenu00 style="LEFT: 0px; POSITION: absolute; TOP:  menuBar.style.toppx; visibility: hidden">' +
		'' +
		'<TABLE cellSpacing=0 cellPadding=0>' +
		'' +
		'<TBODY>' +
		'' +
		'<TR><TD class=menuItem width="120" onmouseover=mOver();hide("subMenu01"); onmouseout=mOut();><A class=menuLink href="' + rootdir + '\\dgsb\\qywssb\\zhsb\\i_xzcbry_sfz.jsp">新增参保人员</A></TD></TR>' +
		'' +
		'<TR><TD class=menuItem width="120" onmouseover="showSubMenu(0,1)"; onmouseout=mOut();><A class=menuLink href="#">已参保人变更处理</A></TD></TR>' +
		'' +
		'<TR><TD class=menuItem width="120" onmouseover=mOver();hide("subMenu01"); onmouseout=mOut();><A class=menuLink href="' + rootdir + '\\qywssb\\zhsb\\u_syzcrygl.html">所有在册人员管理</A></TD></TR>' +
		'' +
		'<TR><TD class=menuItem width="120" onmouseover=mOver();hide("subMenu01"); onmouseout=mOut();><A class=menuLink href="' + rootdir + '\\qywssb\\zhsb\\u_bysbsjgl.html">本月申报数据管理</A></TD></TR>' +
		'' +
		'</TBODY>' +
		'' +
		'</TABLE>' +
		'' +
		'</DIV>' +
		'' +
		'<DIV class=menu id=subMenu10 style="LEFT: 90px; POSITION: absolute; TOP:  menuBar.style.toppx; visibility: hidden">' +
		'' +
		'<TABLE cellSpacing=0 cellPadding=0>' +
		'' +
		'<TBODY>' +
		'' + 
		'<TR><TD class=menuItem width="140" onmouseover=mOver();hide("subMenu11");hide("subMenu12"); onmouseout=mOut();><A class=menuLink href="' + rootdir + '/action/viewdwxx">单位信息查询</A></TD></TR>' +
		'' +
		'<TR><TD class=menuItem width="140" onmouseover=mOver();hide("subMenu11");hide("subMenu12"); onmouseout=mOut();><A class=menuLink href="' + rootdir + '\\action\\MainAction?ActionType=v_dwzjqkcx_ytz&target=dr_grzl&type=q' + '">单位征缴情况查询</A></TD></TR>' +
		'' +
		'<TR><TD class=menuItem width="140" onmouseover=mOver();hide("subMenu11");hide("subMenu12"); onmouseout=mOut();><A class=menuLink href="' + rootdir + '\\qywssb\\cxxt\\q_grjbxx.html">个人基本信息查询</A></TD></TR>' +
		'' +
		'<TR><TD class=menuItem width="140" onmouseover=mOver();hide("subMenu11");hide("subMenu12"); onmouseout=mOut();><A class=menuLink href="' + rootdir + '\\qywssb\\cxxt\\q_grzhcx_sfz.html">个人账户查询</A></TD></TR>' +
		'' +
		'<TR><TD class=menuItem width="140" onmouseover=mOver();showSubMenu(1,1);hide("subMenu12"); onmouseout=mOut();><A class=menuLink href="#">个人养老待遇查询</A></TD></TR>' +
		'' +
		'<TR><TD class=menuItem width="140" onmouseover=mOver();showSubMenu(1,2);hide("subMenu11"); onmouseout=mOut();><A class=menuLink href="#">医疗保险待遇查询</A></TD></TR>' + 
		'' +
		'<TR><TD class=menuItem width="140" onmouseover=mOver();hide("subMenu11");hide("subMenu12"); onmouseout=mOut();><A class=menuLink href="' + rootdir + '\\qywssb\\cxxt\\v_sydycx.html">生育待遇查询</A></TD></TR>' + 
		'' +
		'<TR><TD class=menuItem width="140" onmouseover=mOver();hide("subMenu11");hide("subMenu12"); onmouseout=mOut();><A class=menuLink href="' + rootdir + '\\qywssb\\cxxt\\q_sydycx_sfz.html">失业待遇查询</A></TD></TR>' +
		'' +
		'</TBODY>' +
		'' +
		'</TABLE>' +
		'' +
		'</DIV>' +
		'' +
		'<DIV class=menu id=subMenu20 style="LEFT: 180px; POSITION: absolute; TOP:  menuBar.style.toppx; visibility: hidden">' +
		'' +
		'<TABLE cellSpacing=0 cellPadding=0>' +
		'' +
		'<TBODY>' +
		'' +
		'<TR><TD class=menuItem width="170" onmouseover=mOver(); onmouseout=mOut();><A class=menuLink href="' + rootdir + '\\qywssb\\zhsb\\zip.zip">全部参保人员(打包下载)</A></TD></TR>' +
		'' +
		'<TR><TD class=menuItem width="170" onmouseover=mOver(); onmouseout=mOut();><A class=menuLink href="' + rootdir + '\\qywssb\\zhsb\\zip.zip">全部参保人员(不打包下载)</A></TD></TR>' +
		'' +
		'<TR><TD class=menuItem width="170" onmouseover=mOver(); onmouseout=mOut();><A class=menuLink href="' + rootdir + '\\qywssb\\zhsb\\zip.zip">申报人员信息反馈(打包下载)</A></TD></TR>' +
		'' +
		'<TR><TD class=menuItem width="190" onmouseover=mOver(); onmouseout=mOut();><A class=menuLink href="' + rootdir + '\\qywssb\\zhsb\\zip.zip">申报人员信息反馈(不打包下载)</A></TD></TR>' +
		'' +
		'</TBODY>' +
		'' +
		'</TABLE>' +
		'' +
		'</DIV>' +
		'' +
		'<DIV class=menu id=subMenu30 style="LEFT: 250px; POSITION: absolute; TOP:  menuBar.style.toppx; visibility: hidden">' +
		'' +
		'<TABLE cellSpacing=0 cellPadding=0>' +
		'' +
		'<TBODY>' +
		'' +
		'<TR><TD class=menuItem width="120" onmouseover=mOver(); onmouseout=mOut();><A class=menuLink href=></A></TD></TR>' +
		'' +
		'<TR><TD class=menuItem width="120" onmouseover=mOver(); onmouseout=mOut();><A class=menuLink href=></A></TD></TR>' +
		'' +
		'<TR><TD class=menuItem width="120" onmouseover=mOver(); onmouseout=mOut();><A class=menuLink href=></A></TD></TR>' +
		'' +
		'</TBODY>' +
		'' +
		'</TABLE>' +
		'' +
		'</DIV>' +
		'' +
		'<DIV class=menu id=subMenu40 style="LEFT: 360px; POSITION: absolute; TOP:  menuBar.style.toppx; visibility: hidden">' +
		'' +
		'<TABLE cellSpacing=0 cellPadding=0>' +
		'' +
		'<TBODY>' +
		'' +
		'<TR><TD class=menuItem width="120" onmouseover=mOver(); onmouseout=mOut();><A class=menuLink href="' + rootdir + '\\qywssb\\zhsb\\zip.zip">客户端程序</A></TD></TR>' +
		'' +
		'<TR><TD class=menuItem width="120" onmouseover=mOver(); onmouseout=mOut();><A class=menuLink href="' + rootdir + '\\qywssb\\zhsb\\zip.zip">工具下载</A></TD></TR>' +
		'' +
		'</TBODY>' +
		'' +
		'</TABLE>' +
		'' +
		'</DIV>' +
		'' +
		'<DIV class=menu id=subMenu50 style="LEFT: 490px; POSITION: absolute; TOP:  menuBar.style.toppx; visibility: hidden">' +
		'' +
		'<TABLE cellSpacing=0 cellPadding=0>' +
		'' +
		'<TBODY>' +
		'' +
		'<TR><TD class=menuItem width="120" onmouseover=mOver(); onmouseout=mOut();><A class=menuLink href=></A></TD></TR>' +
		'' +
		'<TR><TD class=menuItem width="120" onmouseover=mOver(); onmouseout=mOut();><A class=menuLink href=></A></TD></TR>' +
		'' +
		'</TBODY>' +
		'' +
		'</TABLE>' +
		'' +
		'</DIV>' +
		'' +
		'<DIV class=menu id=subMenu60 style="LEFT: 570px; POSITION: absolute; TOP:  menuBar.style.toppx; visibility: hidden">' +
		'' +
		'<TABLE cellSpacing=0 cellPadding=0>' +
		'' +
		'<TBODY>' +
		'' +
		'<TR><TD class=menuItem width="120" onmouseover=mOver(); onmouseout=mOut();><A class=menuLink href=></A></TD></TR>' +
		'' +
		'<TR><TD class=menuItem width="120" onmouseover=mOver(); onmouseout=mOut();><A class=menuLink href=></A></TD></TR>' +
		'' +
		'</TBODY>' +
		'' +
		'</TABLE>' +
		'' +
		'</DIV>' +
		'' +
		'<DIV class=menu id=subMenu70 style="LEFT: 650px; POSITION: absolute; TOP:  menuBar.style.toppx; visibility: hidden">' +
		'' +
		'<TABLE cellSpacing=0 cellPadding=0>' +
		'' +
		'<TBODY>' +
		'' +
		'<TR><TD class=menuItem width="120" onmouseover=mOver(); onmouseout=mOut();><A class=menuLink href=></A></TD></TR>' +
		'' +
		'<TR><TD class=menuItem width="120" onmouseover=mOver(); onmouseout=mOut();><A class=menuLink href=></A></TD></TR>' +
		'' +
		'</TBODY>' +
		'' +
		'</TABLE>' +
		'' +
		'</DIV>' +
		'' +
		'<DIV id="subMenu01" style="LEFT: 130px; POSITION: absolute; TOP:  130px; visibility: hidden">' +
		'' +
		'<TABLE cellSpacing=0 cellPadding=0>' +
		'' +
		'<TBODY>' +
		'' +
		'<TR><TD class=menuItem width="120" onmouseover=mOver(); onmouseout="mOut();"><A class=menuLink href="' + rootdir + '\\qywssb\\zhsb\\u_ycbrydr_sfz.html">已参保人员调入</A></TD></TR>' +
		'' + 
		'<TR><TD class=menuItem width="120" onmouseover=mOver(); onmouseout="mOut();"><A class=menuLink href="' + rootdir + '\\qywssb\\zhsb\\u_tjrycl_sfz.html">停缴人员处理</A></TD></TR>' +
		'' +
		'<TR><TD class=menuItem width="120" onmouseover=mOver(); onmouseout="mOut();"><A class=menuLink href="' + rootdir + '\\qywssb\\zhsb\\u_cbryzlxg_sfz.jsp">参保人员资料修改</A></TD></TR>' +
		'' +
		'<TR><TD class=menuItem width="120" onmouseover=mOver(); onmouseout="mOut();"><A class=menuLink href="' + rootdir + '\\qywssb\\zhsb\\u_jfgzxg_sfz.html">个人缴费工资修改</A></TD></TR>' +
		'' +
		'<TR><TD class=menuItem width="120" onmouseover=mOver(); onmouseout="mOut();"><A class=menuLink href="' + rootdir + '\\qywssb\\zhsb\\u_ndjfgzsb.html">年度缴费工资申报</A></TD></TR>' +
		'' +
		'</TBODY>' +
		'' +
		'</TABLE>' +
		'' + 
		'</DIV>' +
		'' +
		'<DIV id="subMenu11" style="LEFT: 240px; POSITION: absolute; TOP:  175px; visibility: hidden">' +
		'' +
		'<TABLE cellSpacing=0 cellPadding=0>' +
		'' +
		'<TBODY>' +
		'' +
		'<TR><TD class=menuItem width="120" onmouseover=mOver(); onmouseout="mOut();"><A class=menuLink href="' + rootdir + '\\qywssb\\cxxt\\q_txzlcx_sfz.html">退休资料查询</A></TD></TR>' +
		'' + 
		'<TR><TD class=menuItem width="120" onmouseover=mOver(); onmouseout="mOut();"><A class=menuLink href="' + rootdir + '\\qywssb\\cxxt\\q_jbyljcx_sfz.html">基本养老金查询</A></TD></TR>' +
		'' +
		'<TR><TD class=menuItem width="120" onmouseover=mOver(); onmouseout="mOut();"><A class=menuLink href="' + rootdir + '\\qywssb\\cxxt\\q_txswdycx_sfz.html">退休死亡待遇查询</A></TD></TR>' +
		'' +
		'<TR><TD class=menuItem width="120" onmouseover=mOver(); onmouseout="mOut();"><A class=menuLink href="' + rootdir + '\\qywssb\\cxxt\\q_ycxlnjt_sfz.html">一次性老年津贴与个人账户储蓄额查询</A></TD></TR>' +
		'' +
		'</TBODY>' +
		'' +
		'</TABLE>' +
		'' + 
		'</DIV>' +
		'' +
		'<DIV id="subMenu12" style="LEFT: 240px; POSITION: absolute; TOP:  190px; visibility: hidden">' +
		'' +
		'<TABLE cellSpacing=0 cellPadding=0>' +
		'' +
		'<TBODY>' +
		'' +
		'<TR><TD class=menuItem width="120" onmouseover=mOver(); onmouseout="mOut();"><A class=menuLink href="' + rootdir + '\\qywssb\\cxxt\\v_tdmzdycx.html">特定门诊待遇查询</A></TD></TR>' +
		'' + 
		'<TR><TD class=menuItem width="120" onmouseover=mOver(); onmouseout="mOut();"><A class=menuLink href="' + rootdir + '\\qywssb\\cxxt\\v_zydycx.html">住院待遇查询</A></TD></TR>' +
		'' +
		'<TR><TD class=menuItem width="120" onmouseover=mOver(); onmouseout="mOut();"><A class=menuLink href="' + rootdir + '\\qywssb\\cxxt\\v_ydazrycx.html">异地安置人员查询</A></TD></TR>' +
		'' +
		'<TR><TD class=menuItem width="140" onmouseover=mOver(); onmouseout="mOut();"><A class=menuLink href="' + rootdir + '\\qywssb\\cxxt\\v_grzhsyqkcx.html">个人账户使用情况查询</A></TD></TR>' +
		'' +
		'</TBODY>' +
		'' +
		'</TABLE>' +
		'' + 
		'</DIV>';		
	} else if ( document.URL.indexOf("\\grwscx\\") >= 0 ) {
		menuBody = '' +
		'<DIV id=menuBar style="LEFT: 0px; WIDTH: 100%; POSITION: relative; TOP: 0px">' +
		'<TABLE cellSpacing=0 cellPadding=0 width=860 height=20>' +
		'    <TBODY> ' +
		'    <TR>' +
		'      <TD class=menuButton onmouseover=showSubMenu(0,0); onmouseout=mOut(); width="60"><font color="white" style="cursor:hand">查询系统</font></TD>' +
		'	  <TD class=menuButton onmouseover=hideOthers(1,0) onmouseout=mOut(); width="30"><A class=menuLink href="' + rootdir + '\\..\\main.htm">退出</A></TD>' +
		'	  <TD class=menuButton onmouseover=hideOthers(2,0); onmouseout=mOut(); width="770"><font color="white">&nbsp&nbsp</font></TD>' +
		'	</TR>' +
		'    </TBODY> ' +
		'  </TABLE>' +
		'</DIV>' +
		'<DIV class=menu id=subMenu00 style="LEFT: 0px; POSITION: absolute; TOP:  menuBar.style.toppx; visibility: hidden">' +
		'<TABLE cellSpacing=0 cellPadding=0>' +
		'<TBODY>' +
		'<TR><TD class=menuItem width="120" onmouseover=mOver();hide("subMenu01"); onmouseout=mOut();><A class=menuLink href="' + rootdir + '\\grwscx\\cxxt\\q_grjbxx.html">个人基本信息查询</A></TD></TR>' +
		'' +
		'<TR><TD class=menuItem width="120" onmouseover=mOver();hide("subMenu01"); onmouseout=mOut();><A class=menuLink href="' + rootdir + '\\grwscx\\cxxt\\q_txzlcx_sfz.html">退休资料查询</A></TD></TR>' +
		'' +
		'<TR><TD class=menuItem width="120" onmouseover=mOver();hide("subMenu01"); onmouseout=mOut();><A class=menuLink href="' + rootdir + '\\grwscx\\cxxt\\v_jbyljcx.html">基本养老金查询</A></TD></TR>' +
		'' +
		'<TR><TD class=menuItem width="120" onmouseover=mOver();hide("subMenu01"); onmouseout=mOut();><A class=menuLink href="' + rootdir + '\\grwscx\\cxxt\\v_txswdycx.html">退休死亡待遇查询</A></TD></TR>' +
		'' +
		'<TR><TD class=menuItem width="160" onmouseover=mOver();hide("subMenu01"); onmouseout=mOut();><A class=menuLink href="' + rootdir + '\\grwscx\\cxxt\\v_ycxlnjt.html">一次性老年津贴和个人账户储存额查询</A></TD></TR>' +
		'' +
		'<TR><TD class=menuItem width="160" onmouseover=mOver();hide("subMenu01"); onmouseout=mOut();><A class=menuLink href="' + rootdir + '\\grwscx\\cxxt\\v_sydycxmx.html">失业待遇查询</A></TD></TR>' +
		'' +
		'<TR><TD class=menuItem width="140" onmouseover=mOver();showSubMenu(0,1); onmouseout=mOut();><A class=menuLink href="#">医疗保险待遇查询</A></TD></TR>' + 
		'' +
		'<TR><TD class=menuItem width="140" onmouseover=mOver();hide("subMenu01"); onmouseout=mOut();><A class=menuLink href="' + rootdir + '\\grwscx\\cxxt\\v_sydycxmx.html">生育待遇查询</A></TD></TR>' + 
		'' +
		'</TBODY>' +
		'' +
		'</TABLE>' +
		'' +
		'</DIV>' +
		'' +
		'<DIV id="subMenu01" style="LEFT: 180px; POSITION: absolute; TOP:  220px; visibility: hidden">' +
		'' +
		'<TABLE cellSpacing=0 cellPadding=0>' +
		'' +
		'<TBODY>' +
		'' +
		'<TR><TD class=menuItem width="120" onmouseover=mOver(); onmouseout="mOut();"><A class=menuLink href="' + rootdir + '\\grwscx\\cxxt\\v_tdmzdycxmx.html">特定门诊待遇查询</A></TD></TR>' +
		'' +
		'<TR><TD class=menuItem width="120" onmouseover=mOver(); onmouseout="mOut();"><A class=menuLink href="' + rootdir + '\\grwscx\\cxxt\\v_zydycxmx.html">住院待遇查询</A></TD></TR>' +
		'' +
		'<TR><TD class=menuItem width="140" onmouseover=mOver(); onmouseout="mOut();"><A class=menuLink href="' + rootdir + '\\grwscx\\cxxt\\v_grzhsyqkcxmx.html">个人账户使用情况查询</A></TD></TR>' +
		'' +
		'</TBODY>' +
		'' +
		'</TABLE>' +
		'' +
		'</DIV>'
	}

	document.write(menuBody);
}

/**输入页码后回车时，修改页码值*/
function setPageTo(defId){
	eSrcObject=event.srcElement;
	var newpage = eSrcObject.value;
    setPageToFor(defId,newpage);
}

/**点击链接时修改页码值*/
function setPageTo1(defId){
   var eSrcObject = document.all[defId+"_pagenum"];
   var newpage = eSrcObject.value;
   setPageToFor(defId,newpage);
}


function setPageToFor(defId,newpage){	
	if(!isInteger(newpage) || newpage==0){
		var eSrcObject = document.all[defId+"_pagenum"];
	  alert("页码只能输入大于0的整数　"); 
	  eSrcObject.value = "";
	  newpage="";
	  return;
	}
    
	var pagenumElms = document.all[defId+"_pagenum"];
	if (pagenumElms.length == null){
		pagenumElms.value=newpage;
	}else{
		for (i=0; i<pagenumElms.length;i++){
		   pagenumElms[i].value=newpage;
		}
	}
	
	var pagetoElms = document.all[defId+"_pageto"];
	/**设置翻页链接的href*/
	if (pagetoElms.length == null){
	  var oldhref = pagetoElms.href;
	  var theIndex = oldhref.indexOf(defId+"_page=");
	  if (theIndex == -1){
	     var newhref = oldhref+"&"+defId+"_page="+(newpage-1);
	     pagetoElms.href=newhref;	  
	  }else {
	     var newhref = oldhref.substring(0,theIndex)+defId+"_page="+(newpage-1);
	     pagetoElms.href=newhref;
	  }
	}else{
		for (j=0; j<pagetoElms.length; j++){
		  var oldhref = pagetoElms[j].href;
		  var theIndex = oldhref.indexOf(defId+"_page=");
		  if (theIndex == -1){
		     var newhref = oldhref+"&"+defId+"_page="+(newpage-1);
		     pagetoElms[j].href=newhref;	  
		  }else {
		     var newhref = oldhref.substring(0,theIndex)+defId+"_page="+(newpage-1);
		     pagetoElms[j].href=newhref;
		  }
		}
	}
}

function turnPageTo(defId){
    key=window.event.keyCode; 
    if(key==0xD){
    	//alert("front");
		setPageTo(defId);
		eval("document.all."+defId+"_pageto.focus();");
		eval("document.all."+defId+"_pageto.click();");
		//alert("behind");
		return;
	}
}

//设置每页记录数，输入每页记录数失去焦点后触发的函数
function setPageSize(defId){
	var pageSizeSrcObj=event.srcElement;
	var newpagesize = pageSizeSrcObj.value;
	if(!isInteger(newpagesize) || newpagesize==0 || newpagesize>100){
	  alert("每页记录数只能输入大于0且不超过100的整数　"); 
	  pageSizeSrcObj.value = "";
	  newpagesize="";
	  return;
	}	
	
	var newhref = "";
	var pagetoObject = document.all[defId+"_pageto"];
	var pagesizeObject = document.all[defId+"_pagesize"];
	if(pagetoObject.length == null){
	    var oldhref =  document.all[defId+"_pageto"].href;
	    var thePageSizeIndex = oldhref.indexOf(defId+"_pagesize=");
	    if (thePageSizeIndex == -1){
	        newhref = oldhref+"&"+defId+"_pagesize="+newpagesize;
        }else {
            var len = (defId+"_pagesize=").length;
	        newhref = oldhref.substring(0,thePageSizeIndex)+defId+"_pagesize="+newpagesize;
	        var nextSepInd = oldhref.indexOf("&",thePageSizeIndex);
	        if(nextSepInd != -1){
	            newhref += oldhref.substring(nextSepInd,oldhref.length);
	        }
	    }	
	    pagetoObject.href = newhref;    	
	}else{
	    for(i=0;i<pagetoObject.length;i++){
	        if(pagesizeObject[i]==pageSizeSrcObj){
	            var oldhref =  pagetoObject[i].href;
	            var thePageSizeIndex = oldhref.indexOf(defId+"_pagesize=");
	            if (thePageSizeIndex == -1){
	                newhref = oldhref+"&"+defId+"_pagesize="+newpagesize;
	            }else{
                    var len = (defId+"_pagesize=").length;
	                newhref = oldhref.substring(0,thePageSizeIndex)+defId+"_pagesize="+newpagesize;
	                var nextSepInd = oldhref.indexOf("&",thePageSizeIndex);
        	        if(nextSepInd != -1){
	                    newhref += oldhref.substring(nextSepInd,oldhref.length);
	                }	                
	            }
	            pagetoObject[i].href = newhref;	  
	            break;          
	        }
	    }
	}
	document.location.href = newhref;
}

//设置每页记录数，输入每页记录数回车后触发的函数
function setPageSize1(defId){
    key=window.event.keyCode; 
    if(key==0xD){
      try{
        var pageSizeSrcObj=event.srcElement;
		pageSizeSrcObj.blur();
		//setPageSize(defId);
	  }catch(e){
	  }	
	}
}
