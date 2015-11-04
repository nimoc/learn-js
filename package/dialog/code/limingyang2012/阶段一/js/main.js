var mask = document.getElementById("mask");
var dialog = document.querySelectorAll(".dialog")[0];
var btn = document.querySelectorAll("input")[0];
var close = document.querySelectorAll(".close")[0];

btn.onclick = function(){
	mask.style.display = "block";
	dialog.style.display = "block";
}

close.onclick = function(){
	mask.style.display = "none";
	dialog.style.display = "none";
}