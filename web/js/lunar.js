var CalendarDate=new Array(20);
var madd=new Array(12);
var day=new Date();
var tgString="甲乙丙丁戊己庚辛壬癸";
var dzString="子丑寅卯辰巳午未申酉戌亥";
var numString="一二三四五六七八九十";
var monString="正二三四五六七八九十冬腊";
var weekString="日一二三四五六";
var sx="鼠牛虎兔龙蛇马羊猴鸡狗猪";
var cYear;
var cMonth;
var cHour;
var cDateString;
var DateString;

function init()
{
	CalendarDate[0]=0x41A95;
	CalendarDate[1]=0xD4A;
	CalendarDate[2]=0xDA5;
	CalendarDate[3]=0x20B55;
	CalendarDate[4]=0x56A;
	CalendarDate[5]=0x7155B;
	CalendarDate[6]=0x25D;  
	CalendarDate[7]=0x92D;   
	CalendarDate[8]=0x5192B; 
	CalendarDate[9]=0xA95; 
	CalendarDate[10]=0xB4A;      
	CalendarDate[11]=0x416AA;  
	CalendarDate[12]=0xAD5;  
	CalendarDate[13]=0x90AB5;
	CalendarDate[14]=0x4BA;
	CalendarDate[15]=0xA5B;
	CalendarDate[16]=0x60A57;
	CalendarDate[17]=0x52B;
	CalendarDate[18]=0xA93;
	CalendarDate[19]=0x40E95;
	
	madd[0]=0
	madd[1]=31
	madd[2]=59
	madd[3]=90
	madd[4]=120
	madd[5]=151
	madd[6]=181
	madd[7]=212
	madd[8]=243
	madd[9]=273
	madd[10]=304
	madd[11]=334
}

function GetBit(m,n)
{
	return(m>>n)&1;
}
/**
 *	Purpose: 转换公历日期到农历 
 *	Inputs: rYear 年,rMonth 月,rDate 日
 *	Returns: 
 */

function e2c(rYear,rMonth,rDate)
{
	var total,m,n,k;
	var isEnd=false;
	if(rYear==undefined||isNull(rYear)){
		rYear=day.getYear();
	}
	if(rMonth==undefined||isNull(rMonth)){
		rMonth=day.getMonth();
	}
	if(rDate==undefined||isNull(rDate)){
		rDate=day.getDate();
	}
	var tmp=rYear;
	if (tmp<1900)
		tmp+=1900;
		total=(tmp-2001)*365+Math.floor((tmp-2001)/4)+madd[rMonth]+rDate-23;
	if (rYear%4==0 && rMonth>1)
		total++;
	for (m=0;m>=0;m++)
	{
		k=(CalendarDate[m]<0xfff)?11:12;
		for (n=k;n>=0;n--)
		{
			if (total<=29+GetBit(CalendarDate[m],n))
			{
				isEnd=true;
				break;
			}
			total=total-29-GetBit(CalendarDate[m],n);
		}
		if (isEnd)
		break;
	}
	cYear=2001+m;
	cMonth=k-n+1;
	cDay=total;
	if (k==12)
	{
		if (cMonth==Math.floor(CalendarDate[m]/0x10000+1))
			cMonth=1-cMonth;
		if (cMonth>Math.floor(CalendarDate[m]/0x10000+1))
			cMonth--;
	}
	//cHour=Math.floor((day.getHours()+3)/2);
}
/**
 *	Purpose: 获取当前日期的农历表示
 *	Inputs: 
 *	Returns: 
 */

function GetcDateString()
{
	var tmp="";
	tmp+=tgString.charAt((cYear-4)%10);//年干
	tmp+=dzString.charAt((cYear-4)%12);//年支
	tmp+="(";
	tmp+=sx.charAt((cYear-4)%12);
	tmp+=")年";
	if (cMonth<1)
	{
		tmp+="闰";
		tmp+=monString.charAt(-cMonth-1);
	}
	else
		tmp+=monString.charAt(cMonth-1);
	tmp+="月";
	tmp+=(cDay<11)?"初":((cDay<20)?"十":((cDay<30)?"甘":"卅"));	
	if (cDay%10!=0||cDay==10)
		tmp+=numString.charAt((cDay-1)%10);
	if (cHour==13)
		tmp+="夜";	
	tmp+=" "	
	//tmp+=dzString.charAt((cHour-1)%12);
	//tmp+="时";
	cDateString=tmp;
}
/**
 *	Purpose: 获取当前日期（弃用）
 *	Inputs: 
 *	Returns: 
 */

function GetDateString()
{
	var today=new Date();//时间循环时一定要是内部变量
	var t1=today.getYear();
	var time
	time=t1+"-"
	time+=(today.getMonth()+1)+"-"
	time+=today.getDate()+" "
	time+="星期"+weekString.charAt(today.getDay())+" "
	time+=today.getHours()+":"
	time+=(today.getMinutes()<10)?"0":""
	time+=today.getMinutes()+":"
	time+=(today.getSeconds()<10)?"0":""
	time+=today.getSeconds()+" "
	time+=(today.getHours()<=12&&today.getHours()>0)?"AM":"PM"
	DateString=time;
	document.time.showtime.value=time;
	setTimeout('GetDateString()', 1000);
}
/**
 *	Purpose: 提示当前日期的农历 
 *	Inputs: 
 *	Returns: 
 */


function chinatime()
{
	alert("现在农历是:"+cDateString);
}
/**
 *	Purpose: 转换输入的公历日期为农历日期 
 *	Inputs: 表单，控件名称
 *	Returns: date（格式：2005-10-2）
 */


function transDateTolunar(aform,check1){
	if(aform==undefined||check1==undefined||isNull(check1)){
		e2c();
	}else{
		eval("var obj00=document."+aform);
		eval("var obj01=obj00."+check1+".value");
		var obj11=new Array();
		obj11=obj01.split("-");
		if(obj11.length<3){
			alert("日期类型错误");
			return -1;
		}
		//alert(obj11[0]+"|"+obj11[1]+"|"+obj11[2]);
		e2c(parseInt(obj11[0],10),parseInt(obj11[1],10)-1,parseInt(obj11[2],10));
	}
	return cYear+"-"+cMonth+"-"+cDay;
}
/**
 *	Purpose: 转换输入的公历日期为农历日期 
 *	Inputs: date（格式：2005-11-3）
 *	Returns: date（格式：2005-10-2）
 */

function CalltransDateTolunar(checkdate){
	if(checkdate==undefined||isNull(checkdate)){
		e2c();
	}else{
		var obj11=new Array();
		obj11=checkdate.split("-");
		if(obj11.length<3){
			alert("日期类型错误");
			return -1;
		}
		//alert(obj11[0]+"|"+obj11[1]+"|"+obj11[2]);
		e2c(parseInt(obj11[0],10),parseInt(obj11[1],10)-1,parseInt(obj11[2],10));
	}
	return cYear+"-"+cMonth+"-"+cDay;
}


init();
e2c();
//GetDateString();
GetcDateString();

