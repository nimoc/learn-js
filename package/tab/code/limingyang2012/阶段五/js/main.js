
function tab(json){
	var newtab = document.querySelector(json.element);
	var triggers = document.querySelectorAll(json.triggers);
	var contents = document.querySelectorAll(json.contents);
	var index = json.activeIndex ? json.activeIndex : 0;
	var triggerType = json.triggerType ? "onmouseover" : "onclick";
	var len = triggers.length;
	var active = "triggers active";
	var noActive = "triggers";

	triggers[index].className = active;
	contents[index].style.display = "block";

	for(var i=0;i<len;i++){
		triggers[i].index = i;
		triggers[i][triggerType] =  function(){
			for(var j=0;j<len;j++){
				triggers[j].className = noActive;
				contents[j].style.display = "none";
			}
			this.className = active;
			contents[this.index].style.display = "block";

			json.onSwitch&&json.onSwitch(this.index,len);
		}
	}

	

}

tab({
    element: '.newtab',
    triggers: '.triggers',
    contents: '.contents',
    activeIndex: 1,
    triggerType: 'hover',
    // click 或 hover trigger 时 onSwitch 会执行
   onSwitch: function (index, count) {
        
        /*index 是当前 trigger 的索引
        count 是 trigger 的总数*/
        
       console.log(index+","+count);
    }
})
