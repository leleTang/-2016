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
					sort();
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

//排序
function sort() {
	var contentDivHeight = [];
	var contentChildNode = contentFrame.childNodes;
	//	先取出div里的值
	for(var oldDivHeight = 0; oldDivHeight < contentChildNode.length; oldDivHeight++) {
		contentDivHeight[oldDivHeight] = contentChildNode[oldDivHeight].innerHTML;
	}
	//	冒泡排序
	for(var i = 0; i < contentDivHeight.length; i++) {
		for(var j = 0; j < contentDivHeight.length; j++) {
			if(parseInt(contentDivHeight[i]) < parseInt(contentDivHeight[j])) {
				var temp = contentDivHeight[i];
				contentDivHeight[i] = contentDivHeight[j];
				contentDivHeight[j] = temp;
			}
			contentChildNode[j].innerHTML = contentDivHeight[j];
			contentChildNode[j].style.height = contentDivHeight[j] + "px";
		}
	}
}
//全局变量
var contentFrame = document.getElementsByClassName("content-frame")[0];
var reg = new RegExp("^[0-9]*$");
//初始化函数
function init() {
	operarion();
}
init();