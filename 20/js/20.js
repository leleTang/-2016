function operarion() {
	var operation = document.getElementById("operation");
	var operationButton = operation.getElementsByTagName("button");
	//	var operationTextarea=document.getElementById("operation-textarea");
	for(var i = 0; i < operationButton.length; i++) {
		operationButton[i].onclick = function() {
			var operationButtonValue = this.value;
			switch(operationButtonValue){
				case(leftInto):
				
				break;
				case(rightInto):
				break;
				case(leftOut):
				break;
				case(rightOut): 
				break;
				case(search):
				break;
			}
		}
	}

}

//初始化函数
function init() {
	operarion();
}
init();