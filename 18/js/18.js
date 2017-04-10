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
			}
		}

	}

}

function leftInto() {
	var operationInputValue = document.getElementById("operation-input").value;
	var contentFirstChild = contentFrame.firstChild;
	if(operationInputValue == "") {
		alert("要输入数据哦~");
	} else {
		var contentDiv = document.createElement("div");
		contentDiv.innerHTML = operationInputValue;
		contentFrame.insertBefore(contentDiv, contentFirstChild);
		console.log(operationInputValue)
	}
}

function rightInto() {
	var operationInputValue = document.getElementById("operation-input").value;
	var contentFirstChild = contentFrame.lastChild;
	if(operationInputValue == "") {
		alert("要输入数据哦~");
	} else {
		var contentDiv = document.createElement("div");
		contentDiv.innerHTML = operationInputValue;
		contentFrame.insertBefore(contentDiv, contentFirstChild);
	}
}

function leftOut() {
	var operationInputValue = document.getElementById("operation-input").value;
	if(contentFrame.childNodes.length<=0){
		alert("没有东西可以删啦~");
	}else{
		var contentFirstChild = contentFrame.firstChild;
		contentFrame.removeChild(contentFirstChild);
	}
}

function rightOut() {
	var operationInputValue = document.getElementById("operation-input").value;
	if(contentFrame.childNodes.length<=0){
		alert("没有东西可以删啦~");
	}else{
		var contentFirstChild = contentFrame.lastChild;
		contentFrame.removeChild(contentFirstChild);
	}
}
//全局变量
	var contentFrame = document.getElementsByClassName("content-frame")[0];
//初始化函数
function init() {
	operarion();
}
init();