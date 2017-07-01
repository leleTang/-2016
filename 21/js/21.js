/************************************页面初始化开始***********************************/
window.onload = function() {

}
/************************************页面初始化结束***********************************/
/*******常量开始**********/

/*******常量结束**********/
/*******函数开始**********/
//键盘响应事件
function check() {
	var key = event.keyCode;
	if(key == 13 || key == 188 || key == 32) {
		addTag();
	}
}

function addTag() {
	var tagInput = document.getElementById("tagInput"); //tag输入框
	var tagContent = document.getElementById("tagContent"); //tag内容框
	var tagSpan = document.createElement("span");
	tagSpan.className = "tagSpan";
	tagSpan.setAttribute("data-tooltip","删除");
	if(tagInput.value == null || tagInput.value == undefined || tagInput.value == '') {
		alert("请输入有效值")
	} else {
		if(tagContent.childNodes.length <= 10) {
			tagSpan.innerHTML = tagInput.value;
			tagContent.prepend(tagSpan);
		}
		if(tagContent.childNodes.length > 10) {
			tagContent.removeChild(tagContent.lastChild);
		}
	}
	tagInput.value = null;
}
/*******函数结束**********/