function operarion() {
	var operation = document.getElementById("operation");
	var operationButton = operation.getElementsByTagName("button");
	//	var operationTextarea=document.getElementById("operation-textarea");
	for(var i = 0; i < operationButton.length; i++) {
		operationButton[i].onclick = function() {
			var operationButtonValue = this.value;
			console.log(operationButtonValue);
		}
	}

}

//初始化函数
function init() {
	operarion();
}
init();