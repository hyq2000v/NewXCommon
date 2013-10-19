function openIt(theURL,wname,W,H){ 
this.theURL=theURL; 
this.wname=wname; 
this.W=W; 
this.H=H; 

//下面开始设置CW窗口的各种属性
//theURL="service.htm" //显示主要内容的文件
//wname ="51JS" //窗口的名字
//W=500; //窗口的宽度
//H=160; //窗口的高度
windowCERRARa = "../images/close_a.gif"  //关闭窗口的图片_a
windowCERRARd = "../images/close_d.gif"
windowCERRARo = "../images/close_o.gif"
windowNONEgrf = "../images/vficon.gif" //标题栏的图标
windowCLOCK = "../iamges/clock.gif" //时钟图片
windowREALtit = "------| Chromeless Windows V2.1 |" 
windowTIT = "<font style=\"font-size:12px;font-family:新宋体\">------| 信息 |</font>" //标题文字
windowBORDERCOLOR = "#000000" //边框颜色
windowBORDERCOLORsel = "#111111" //按下标题栏进行拖动时边框的颜色
windowTITBGCOLOR = "#D7DCD9" //标题栏的底色
windowTITBGCOLORsel = "#FFFFFF" //按下标题栏进行拖动标题栏的底色

//设置完毕

openchromeless(theURL, wname, W, H, windowCERRARa, windowCERRARd, windowCERRARo, windowNONEgrf, windowCLOCK, windowTIT, windowREALtit , windowBORDERCOLOR, windowBORDERCOLORsel, windowTITBGCOLOR, windowTITBGCOLORsel)
}

function openIt2(theURL,wname){ 
W=500; //窗口的宽度
H=400; //窗口的高度
this.theURL=theURL; 
this.wname=wname; 
this.W=W; 
this.H=H; 

//下面开始设置CW窗口的各种属性
//theURL="service.htm" //显示主要内容的文件
//wname ="51JS" //窗口的名字
//W=500; //窗口的宽度
//H=160; //窗口的高度
windowCERRARa = "../images/close_a.gif"  //关闭窗口的图片_a
windowCERRARd = "../images/close_d.gif"
windowCERRARo = "../images/close_o.gif"
windowNONEgrf = "../images/vficon.gif" //标题栏的图标
windowCLOCK = "../iamges/clock.gif" //时钟图片
windowREALtit = "------| Chromeless Windows V2.1 |" 
windowTIT = "<font style=\"font-size:12px;font-family:新宋体\">------| 帮助 |</font>" //标题文字
windowBORDERCOLOR = "#000000" //边框颜色
windowBORDERCOLORsel = "#111111" //按下标题栏进行拖动时边框的颜色
windowTITBGCOLOR = "#D7DCD9" //标题栏的底色
windowTITBGCOLORsel = "#FFFFFF" //按下标题栏进行拖动标题栏的底色

//设置完毕

openchromeless(theURL, wname, W, H, windowCERRARa, windowCERRARd, windowCERRARo, windowNONEgrf, windowCLOCK, windowTIT, windowREALtit , windowBORDERCOLOR, windowBORDERCOLORsel, windowTITBGCOLOR, windowTITBGCOLORsel)
}


function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) 
  x.src=x.oSrc;
  }
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
  var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; 
  i++)
  if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
  }
function MM_findObj(n, d) { //v3.0
  var p,i,x; if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) 
  {
  d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) 
  x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document); 
  return x;
  }
function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
  if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; 
  x.src=a[i+2];}
  }
