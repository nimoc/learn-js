
function tab(json){
	var newtab = document.querySelector(json.element);
	var triggers = document.querySelectorAll(json.triggers);
	var contents = document.querySelectorAll(json.contents);
	var index = json.activeIndex ? json.activeIndex : 0;
	var len = triggers.length;
	var active = "triggers active";
	var noActive = "triggers";

	triggers[index].className = active;
	contents[index].style.display = "block";

	for(var i=0;i<len;i++){
		triggers[i].index = i;
		triggers[i].onclick = function(){
			for(var j=0;j<len;j++){
				triggers[j].className = noActive;
				contents[j].style.display = "none";
			}
			this.className = active;
			contents[this.index].style.display = "block";
		}
	}

}

tab({
    element: '.newtab',
    triggers: '.triggers',
    contents: '.contents',
    activeIndex: 1
})