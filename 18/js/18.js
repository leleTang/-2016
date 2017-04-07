var operation = document.getElementById("operation");
var operationButton=operation.getElementsByTagName("button");
var a="";
for(var i = 0; i < operationButton.length; i++) {
	a.onclick=operationButton[i].value;
}
console.log(a)



function leftOut() {
	var leftOut = document.getElementById("operation-leftOut-button");

}

function rightOut() {
	var rightOut = document.getElementById("operation-RightOut-button");
}

function leftInto() {
	var leftInto = document.getElementById("operation-leftInto-button");
}

function rightInit() {
	var rightInto = document.getElementById("operatin-rightInto-button");
}
//初始化函数
function init() {
	leftOut();
	rightOut();
	leftInto();
	rightInit();
}
init();