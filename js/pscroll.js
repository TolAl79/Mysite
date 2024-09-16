window.onload = function(){
	
	var scrolled;
	var timer;

document.getElementById('top1').onclick = function(){
		scrolled = window.pageYOffset;
		
		scrollToTop();
	}

	document.getElementById('top').onclick = function(){
		scrolled = window.pageYOffset;
		
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
	
	(function(d) {
        var createHelpBlock = function(text) {
                var div = d.createElement('div');
                div.appendChild(d.createTextNode(text));
                div.className = 'help';
                return div;
            },
            elems = d.querySelectorAll('[data-help]');
        [].forEach.call(elems, function(self) {
          self.addEventListener('mouseover', function() {
            var helpBlock = this._helpBlock || createHelpBlock(this.dataset.help);
            if(!this._helpBlock) {
                this.parentNode.insertBefore(helpBlock, this.nextSibling);
                this.clientHeight;
                this._helpBlock = helpBlock;
            }
            else clearTimeout(this._helpTimeout);
            helpBlock.classList.add('help-show');
          }, true);
          self.addEventListener('mouseout', function() {
            var self = this;
            this._helpBlock.classList.remove('help-show');
            this._helpTimeout = setTimeout(function() {
              self._helpBlock.remove();
              self._helpBlock = null;
            }, 3E3);
          }, true);
        });
      })(document);



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


}