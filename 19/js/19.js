function operarion() {
	var operation = document.getElementById("operation");
	var operationButton = operation.getElementsByTagName("button");
	var operationContent = "";
	for(var i = 0; i < operationButton.length; i++) {
		operationButton[i].onclick = function() {
			operationContent = this.value;
			switch(operationContent) {
				case "leftInto":
					leftInto();
					break;
				case "rightInto":
					rightInto();
					break;
				case "leftOut":
					leftOut();
					break;
				case "rightOut":
					rightOut();
					break;
				case "number":
					numbers();
					break;
				case "sort":
					sortlist();
					break;
			}
		}

	}

}
//左侧入
function leftInto() {
	var operationInputValue = document.getElementById("operation-input").value;
	var contentFirstChild = contentFrame.firstChild;
	var operationChildDiv = contentFrame.getElementsByTagName("div").length;
	if(operationInputValue == "") {
		alert("要输入数据哦~");
	} else if(!(reg.test(operationInputValue))) {
		alert("请输入数字~");
	} else if(operationChildDiv >= 60) {
		alert("最多存入60个哦 ~");
	} else if(operationInputValue < 10 || operationInputValue > 100) {
		alert("请输入10~100的数字");
	} else {
		var contentDiv = document.createElement("div");
		contentDiv.style.height = operationInputValue + "px";
		contentDiv.innerHTML = operationInputValue;
		contentFrame.insertBefore(contentDiv, contentFirstChild);
	}
}
//右侧入
function rightInto() {
	var operationInputValue = document.getElementById("operation-input").value;
	var contentLastChild = contentFrame.lastChild;
	var operationChildDiv = contentFrame.getElementsByTagName("div").length;
	if(operationInputValue == "") {
		alert("要输入数据哦~");
	} else if(!(reg.test(operationInputValue))) {
		alert("请输入数字~");
	} else if(operationChildDiv >= 60) {
		alert("最多存入60个哦 ~");
	} else if(operationInputValue < 10 || operationInputValue > 100) {
		alert("请输入10~100的数字");
	} else {
		var contentDiv = document.createElement("div");
		contentDiv.style.height = operationInputValue + "px";
		contentDiv.innerHTML = operationInputValue;
		contentFrame.insertBefore(contentDiv, contentLastChild);
	}
}
//左侧出
function leftOut() {
	var operationInputValue = document.getElementById("operation-input").value;
	if(contentFrame.childNodes.length <= 0) {
		alert("没有东西可以删啦~");
	} else {
		var contentFirstChild = contentFrame.firstChild;
		contentFrame.removeChild(contentFirstChild);
	}
}
//右侧出
function rightOut() {
	var operationInputValue = document.getElementById("operation-input").value;
	if(contentFrame.childNodes.length <= 0) {
		alert("没有东西可以删啦~");
	} else {
		var contentLastChild = contentFrame.lastChild;
		contentFrame.removeChild(contentLastChild);
	}
}
//生成随机数
function numbers() {
	contentFrame.innerHTML = "";
	for(var i = 0; i < 30; i++) {
		var num = parseInt(Math.random() * ((100 - 10) + 1) + 10);
		var contentDiv = document.createElement("div");
		contentDiv.style.height = num + "px";
		contentDiv.innerHTML = num;
		contentFrame.appendChild(contentDiv);
	}

}
//https://github.com/IFE-ITStudio/IFE-ITStudio.github.io/blob/master/Task2_7/task.js
////冒泡排序
//function sort() {
//
//	var contentChildNode = contentFrame.childNodes;
//	var temp;
//	//	先取出div里的值
//	//	for(var oldDivHeight = 0; oldDivHeight < contentChildNode.length; oldDivHeight++) {
//	//		contentDivHeight[oldDivHeight] = contentChildNode[oldDivHeight].innerHTML;
//	//	}
//	action = setInterval(draw, 15);
//
//	function draw() {
//		for(var i = 0; i < contentChildNode.length; i++) {
//			for(var j = 0; j < contentChildNode.length; j++) {
//				if(parseInt(contentChildNode[i].innerHTML) <parseInt(contentChildNode[j].innerHTML)) {
//					temp = contentChildNode[i].innerHTML;
//					contentChildNode[i].innerHTML = contentChildNode[j].innerHTML;
//					contentChildNode[i].style.height = contentChildNode[j].innerHTML + "px";
//					contentChildNode[j].innerHTML = temp;
//					contentChildNode[j].style.height = temp + "px";
//				}
//			}
//
//		}
//		clearInterval(draw);
//					return;
//	}
//}
//排序
function sortlist() {
	var contentChildNode = contentFrame.childNodes;
	var i = 0;
	var j = 1;
	var len = contentChildNode.length;
	var timer = null;
	timer = setInterval(draw, 10);

	function draw() {
		if(i < len) {
			if(j < len) {
				if(contentChildNode[i].offsetHeight > contentChildNode[j].offsetHeight) {
					value = contentChildNode[i].innerHTML;
					contentChildNode[i].innerHTML = contentChildNode[j].innerHTML;
					contentChildNode[i].style.height = contentChildNode[j].innerHTML + "px";
					contentChildNode[j].innerHTML = value;
					contentChildNode[j].style.height = value + "px";
				}
				j++;
			} else {
				i++;
				j = i + 1;
			}
		} else {
			clearInterval(timer);
			return;
		}
	}
}
//全局变量
var contentDivHeight = [];
var contentFrame = document.getElementsByClassName("content-frame")[0];
var reg = new RegExp("^[0-9]*$");
//初始化函数
function init() {
	operarion();
}
init();