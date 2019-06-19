window.addEventListener("load", function(){
	var menuIn=document.querySelector("nav > ul");
	var menuLi=null;
	var menuSub=null;
	var menuLiHTML="";
	var menuSubHTML="";
	var num=0;
	
	var requestURL="data/menu.json";
	var request=new XMLHttpRequest();
	
	function init(){
		setTimeout(function(){
			request.open("GET", requestURL, true);
			request.responseType="json";
			request.send();
			request.addEventListener("load", function(){
				var data=request.response;
				for(key1 in data){
					menuLiHTML+='<li class="menu">'+'\n';
					menuLiHTML+='<a href="#">'+key1+'</a>'+'\n';
					menuLiHTML+='<ul class="sub">'+'\n';
					menuLiHTML+='</ul>'+'\n';
					menuLiHTML+='</li>'+'\n';
				}
				menuIn.innerHTML=menuLiHTML;
				menuLi=document.querySelectorAll("nav > ul > li");
				
				for(key1 in data){
					for(key2 in data[key1]){
						menuSubHTML+='<li>'+'\n';
						menuSubHTML+='<a href="#">'+data[key1][key2]+'</a>'+'\n';
						menuSubHTML+='</li>'+'\n';
					}
					menuLi[num].children[1].innerHTML=menuSubHTML;
					num++;
				}
			});
			

			for(var i=0;i<menuLi.length;i++){
				console.log(menuLi[i]);
				menuLi[i].addEventListener("mouseenter", function(e){
					e.currentTarget.parentElement.classList.add("over");
				});
				menuLi[i].addEventListener("mouseleave", function(e){
					e.currentTarget.parentElement.classList.remove("over");
				});
				
				menuLi[i].index=i;
				
				menuLi[i].children[0].addEventListener("focusin", function(){
					e.target.classList.add("over");
					var n=e.currentTarget.parentNode.index;
					
					if(n==0){
						menuLi.classList.add("over");
					}
				});
				
				menuLi[i].children[1].lastElementChild.addEventListener("focusout", function(e){
					e.currentTarget.parentElement.previousElementSibling.classList.remove("over");
				});
				menuLi[0].children[0].addEventListener("focusin", function(e){
					e.target.parentElement.parentElement.classList.add("over");
				});
				menuLi[menuLi.length-1].children[1].lastElementChild.addEventListener("focusout", function(e){
					e.currentTarget.parentElement.parentElement.parentElement.classList.remove("over");
				});
			}
		}, 10);
	}
	init();
	/*
	
	*/
});