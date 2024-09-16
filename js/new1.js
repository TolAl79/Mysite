window.onload = function(){

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