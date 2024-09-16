window.onload = function(){
	
	var scrolled;
	var timer;


	document.getElementById('top').onclick = function(){
		scrolled = document.documentElement.scrollTop;
		
		scrollToTop();
	}
	function scrollToTop(){
		if (scrolled > 0) {
			window.scrollTo(0, scrolled);
			scrolled = scrolled - 50; 
			timer = setTimeout(scrollToTop, 100);
		}
		else {
			clearTimeout(timer);
			window.scrollTo(0,0);
		}
	}
	
$(document).ready(function(){
    $('a.disabled').on('click', false); 
});	





// clock
window.setInterval(function(){
		var now = new Date();
		var clock = document.getElementById("clock");
		clock.innerHTML ="У Києві: "+ now.toLocaleTimeString();
	}, 1000);
	
	//data
$(document).ready(function (){
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();

var d=today.toLocaleString('uk', {weekday: 'long'})
var ndata = document.getElementById("ndata");
ndata.innerHTML ="Сьогодні "+ d+', ' + dd + ' / ' + mm + ' / ' + yyyy;;	
	
	
});

function thisDay(){
	var today = new Date();
var d=today.toLocaleString('en', {weekday: 'short'});
console.log(d);
if(d=='Mon'){var elements = document.getElementsByClassName('mo1');
 for (i = 0; i < elements.length; i++) {
        elements[i].style.background = '#ddd'; 

    }};
if(d=='Tue'){var elements = document.getElementsByClassName('tu1');
 for (i = 0; i < elements.length; i++) {
        elements[i].style.background = '#ddd'; 

    }};
if(d=='Wed'){var elements = document.getElementsByClassName('we1');
 for (i = 0; i < elements.length; i++) {
        elements[i].style.background = '#ddd'; 

    }};

if(d=='Thu'){

var elements = document.getElementsByClassName('th1');
 for (i = 0; i < elements.length; i++) {
        elements[i].style.background = '#ddd'; 

    }
};

if(d=='Fri'){var elements = document.getElementsByClassName('fr1');
 for (i = 0; i < elements.length; i++) {
        elements[i].style.background = '#ddd'; 

    }};


}

thisDay();

}