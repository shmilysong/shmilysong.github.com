// JavaScript Document
'use strict'
//tab
function tab(id){
	var Box=document.getElementById(id);
	var Div1=Box.getElementsByTagName('div')[0];
	var aImg=Div1.getElementsByTagName('li');
	var Div2=Box.getElementsByTagName('div')[1];
	var aBtn=Div2.getElementsByTagName('li');
	
	for(var i=0;i<aBtn.length;i++){
		(function(index){
			aBtn[index].onmouseover=function(){
				for(var i=0;i<aBtn.length;i++){
					aBtn[i].className='';
					aImg[i].className='';	
				}	
				aBtn[index].className='on';
				aImg[index].className='show';
			};	
		})(i)	
	}	
}
//tomouse
function toChoose(id){	
	var oBj=document.getElementById(id);
	var aLi=oBj.getElementsByTagName('li');
	var aI = oBj.getElementsByTagName('i');
	 for(var i=0;i<aLi.length; i++){
	   aLi[i].index = i;
	   aLi[i].onmouseover = function(){ 
		  aI[this.index].style.display='block';
	   }
	   aLi[i].onmouseout = function(){
		  aI[this.index].style.display='none';
	   }
	 }
}
//totab1
function tab1(num){
	var oTlt =document.getElementById('moive_title');
	var aMoiveA = oTlt.getElementsByTagName('a');
	var oItem = document.getElementById('moiveItem');
	var AMoiveUl = oItem.getElementsByTagName('ul');
	for(var i=0;i<aMoiveA.length;i++){
		(function(index){
			aMoiveA[i].onmouseover=function(){	
				for(var i = 0;i<aMoiveA.length;i++){
					aMoiveA[i].className='';
					AMoiveUl[i].className='moiveBox';	
				}
				this.className='on';
				AMoiveUl[index].className='moiveBox show';
			};
		})(i);
	}
	var aMoiveLi = AMoiveUl[num].getElementsByTagName('li');
		for(var i = 0;i<aMoiveLi.length;i++){
			aMoiveLi[i].onmouseover=function(){
				for(var i = 0;i<aMoiveLi.length;i++){
					aMoiveLi[i].className='cfix';	
				}
				this.className='cfix show';
			};
		}
}
//right tab
function fnList(id1,tag1,id2,tag2){
	var oBj1=document.getElementById(id1);
	var aA=oBj1.getElementsByTagName(tag1);
	var oBj2=document.getElementById(id2);
	var aUl=oBj2.getElementsByTagName(tag2);
	for(var i=0;i<aA.length;i++){
		(function(index){
			aA[i].onmouseover=function(){
				for(var j=0;j<aA.length;j++){
					aUl[j].className='clearfix '+id2+'_list';
				}
				aUl[index].className='clearfix '+id2+'_list'+' on';
			};
		})(i);
	}
}
window.onload=function(){
		
	tab1(0);
	tab1(1);
	tab1(2);
	tab1(3);
	tab('banner')	
	toChoose('movieMouse');
	toChoose('telivision');
	toChoose('all_play');
	toChoose('animation');
	toChoose('wechat');
	fnList('menu1','a','movie','ul');
	fnList('menu2','a','telivision','ul');
	fnList('menu3','a','all_play','ul');
	fnList('menu4','a','animation','ul');
	fnList('menu5','a','wechat','ul');
	
//autotab
(function(){
	function tab2(list,shat,shatof){
	var oDiv=document.getElementById(list);
	var aBtn=oDiv.getElementsByTagName('i');
	var aUl=oDiv.getElementsByTagName('ul');
	var oA=document.getElementById(shat);
	var oShat=document.getElementById(shatof);
	var count=0;
	var timer=null;
	for(var i=0;i<aBtn.length;i++){
		(function(index){
			aBtn[i].onmouseover=function(){
				count=index;
				tick()
			};
		})(i)
	}
	function tick(){
		for(var i=0;i<aBtn.length;i++){
			aBtn[i].className='';
			aUl[i].className='hide';
		}
		aBtn[count].className='on';
		aUl[count].className='show';
	}
	function next(){
		count++;
		if(count==aBtn.length){
			count=0;
		}
        tick()
	}
	timer=setInterval(next,800);
	oDiv.onmouseover=function(){
		clearInterval(timer);
	}
	oDiv.onmouseout=function(){
		timer=setInterval(next,800);		
	}
	oA.onclick=function(){
		if(oShat.style.display=='none'){
			oShat.style.display='block';
			oA.innerHTML='+';
		}else{
			oShat.style.display='none';
			oA.innerHTML='-';	
		}
	};
}
	tab2('tnews_list1','shat1','shatof1');

	tab2('tnews_list3','shat3','shatof3');
})();

(function(){
	var oHistory = document.getElementById('History');
	var oDl = oHistory.getElementsByTagName('dl')[0];
	var oLinka = oDl.getElementsByTagName('a');
	var oUl = oHistory.getElementsByTagName('ul');
	var oHide = document.getElementById('hide');
	var Showbox = document.getElementById('showbox');
	
	for (var i = 0; i < oLinka.length; i++) {
		oLinka[i].index = i;
		oLinka[i].onmouseover = function(){
			for (var i = 0; i < oLinka.length; i++) {
				oLinka[i].className = '';
				oUl[i].style.display = 'none';
			}
			this.className = 'toactive';
			oUl[this.index].style.display = 'block';

		}
	}
   
   oHide.onclick = function(){
	if (oHide.innerHTML=='+') {
		Showbox.className = 'show';
		oHide.innerHTML='-';
	}
	else{
		Showbox.className="hide";
		oHide.innerHTML = '+';
	}
   }	
})()
};
