/************************************页面初始化开始***********************************/
window.onload = function() {
	var a = document.getElementById("a");
	var tagInput = document.getElementById("tagInput"); //tag输入框
	a.onclick = function() {
		addTag()
	}

}
/************************************页面初始化结束***********************************/
/*******常量开始**********/
var tagList = new Array();
var number = 0;
/*******常量结束**********/
/*******函数开始**********/
function addTag() {
	var tagInput = document.getElementById("tagInput"); //tag输入框
	var tagContent = document.getElementById("tagContent"); //tag内容框
	var tagSpan = document.createElement("span");
	tagSpan.className = "tagSpan";
	console.log()
	if(tagInput.value == "") {
		alert("请输入有效值")
	} else {
		if(tagContent.childNodes.length <= 10) {
			tagList[number] = tagInput.value;
			tagSpan.innerHTML = tagList[number];
			tagContent.prepend(tagSpan);
			number++;
		}
		if(tagContent.childNodes.length > 10) {
			console.log(tagList)
			tagList.pop();
			tagContent.removeChild(tagContent.lastChild);
		}
	}
}
/*******函数结束**********/