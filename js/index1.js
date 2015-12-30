// JavaScript Document
'use strict'
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
function toChoose(id){	
	var oBj=document.getElementById(id);
	var aLi=oBj.getElementsByTagName('li');
	
	for(var i=0;i<aLi.length;i++){
		(function(index){
			aLi[i].onmouseover=function(){	
				this.className='on';	
			};
			aLi[i].onmouseout=function(){
				this.className='';
			};
		})(i);
	}
}
window.onload=function(){
	tab('banner')	
	toChoose('movie');
	toChoose('telivision');
	toChoose('all_play');
	toChoose('animation');
	toChoose('wechat');
	toChoose('tv_area');
};
