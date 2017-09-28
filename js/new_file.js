//for (var a=1;a<6;a++) {
//	var oBtn[a]=document.getElementsById(btn[a]);
//}

window.onload=function (){ 
	var oOl=document.getElementById('ol');
	var oLi=oOl.getElementsByTagName('li');
	var oUl=document.getElementById('ul');
	var oLi2=oUl.getElementsByTagName('li');
	oLi[0].className='active';
	ol_change();
	img_change();
	auto_change();
	oUl.onmouseover=stop_change();
	oUl.onmouseout=auto_change();
	
	
	var show = document.getElementById("show");
  	setInterval(function() {
   		var time = new Date();
   		var hour=24-time.getHours();
   		var minute=59-time.getMinutes();
   		var second=59-time.getSeconds();
   		var t = hour + ":"+ minute + ":" + second;
   		show.innerHTML = t;
  	}, 1000);
}	
	

function stop_change(){
	clearInterval(Interval);
}
	
	


    


function ol_change(){
	var oA=document.getElementsByTagName('a');
	var oI=document.getElementsByTagName('i')
	for(var i=0;i<oA.length;i++){
	oA[i].onclick=function (){
		for(var j=0;j<oA.length;j++)
		oA[j].className='';
		this.className='active';
		}
	}
}


function img_change(){
	var oOl=document.getElementById('ol');
	var oLi=oOl.getElementsByTagName('li');
	var oUl=document.getElementById('ul');
	var oLi2=oUl.getElementsByTagName('li');
	for(var i=0;i<oLi.length;i++){
		oLi[i].onclick=function(){
			for(var j=0;j<oLi.length;j++){
				oLi2[j].className='dn';
				if(this==oLi[j]){
					a=j;
					oLi2[a].className='db';
				}
//				this.className='db';
			}
		}
	}
}

/*****************************Important*******************************/
function auto_change(){
	var oOl=document.getElementById('ol');
	var oLi=oOl.getElementsByTagName('li');
	var oUl=document.getElementById('ul');
	var oLi2=oUl.getElementsByTagName('li');
	var pos = 0;
    var len = oLi2.length;     
    Interval=setInterval(function(){
        oLi2[pos].className = 'dn';
        oLi[pos].className='';
        pos = ++pos == len ? 0 : pos;
        oLi2[pos].className = 'db';  
        oLi[pos].className='active';
    },2000);
}



//window.setInterval([function(){
//	var oUl=document.getElementById('ul');
//	var oLi2=oUl.getElementsByTagName('li');
//	for(var j=0;j<oLi2.length;j++){
//		if(j!=oLi2.length-1)
//			if(this.className=='db'){
//				for(var i=0;i<oLi2.length-1;i++){
//					if(this==oLi2[i]){
//						a=i;
//						oLi2[a].className='dn';
//						oLi2[a+1].className='db';
//					}
//				}
//			}
//		else{
//			oLi2[j].className='dn';
//			oLi2[0].className='db';
//		}
//	}
//}],[3000])




//var time=function(){
//	var oUl=document.getElementById('ul');
//	var oLi=oUl.getElementsByTagName('li');
//	for(var j=0;j<oLi.length;j++){
//		if(j!=oLi.length-1)
//			if(this.className=='db'){
//				for(var i=0;i<oLi.length-1;i++){
//					if(this==oLi[i]){
//						a=i;
//						oLi[a].className='dn';
//						oLi[a+1].className='db';
//					}
//				}
//			}
//		else{
//			oLi2[j].className='dn';
//			oLi2[0].className='db';
//		}
//	}
//}
//setInterval(time,3000);



//window.onload=function(){
//	var oLi=document.getElementsByTagName('li');
//	var oSec=document.getElementById('sec1');
//	for(var i=0;i<oLi.length;i++){
//		oLi[i].onclick=function(){
//			oSec.className='bg';
//		}
//	}
//}
