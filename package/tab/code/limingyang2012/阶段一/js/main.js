var aLi = document.getElementsByTagName("li");
var contents = document.getElementById("contents");
var contentChild = contents.getElementsByTagName("div");

var len = aLi.length;

function tab(){
	for(var i=0;i<len;i++){
		aLi[i].index = i;
		aLi[i].onclick = function(){
			for(var j=0;j<len;j++){
				aLi[j].className = "";
				contentChild[j].style.display = "none";
			}
			this.className = "active";
			contentChild[this.index].style.display = "block";
		}
	}
}

tab();