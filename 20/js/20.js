function operarion() {
	var operation = document.getElementById("operationDiv"); //操作Div
	var operationTextarea = document.getElementById("operation-textarea"); //输入文本框
	var insertBtn = document.getElementById("insertBtn"); //插入操作
	var selectBtn = document.getElementById("selectBtn"); //查询操作
	var selectInput = document.getElementById("selectInput") //搜索条件
	var selectInputValue = selectInput.value; //查询条件的结果
	var resultDiv = document.getElementById("resultDiv"); //输出的值
	var resultDivTag = resultDiv.getElementsByTagName("span");
	var operationTextareaList = {}; //输入的值存入数组
	insertBtn.onclick = function() {
		operationTextareaList = operationTextarea.value.split(/[^0-9a-zA-Z\u4e00-\u9fa5]+/);
		for(var i = 0; i < operationTextareaList.length; i++) {
			var span = "<span class='textSpan'>" + operationTextareaList[i] + "</span>";
			resultDiv.innerHTML += span;
		}
	}
	selectBtn.onclick = function() {
		var selectInputValue = selectInput.value;
		var resultDivTagValue;
		for(var i = 0; i < resultDivTag.length; i++) {
			resultDivTagValue = resultDivTag[i].innerHTML; //每个标签里的值
			var resuleSpan = "<span>" + selectInputValue + "</span>";
			operationTextareaList[i] = resultDivTagValue.replace(selectInputValue, resuleSpan);
			console.log(operationTextareaList[i])
		}
		resultDiv.innerHTML = "";
		for(var i = 0; i < operationTextareaList.length; i++) {
			resultDiv.innerHTML += "<span class='textSpan'>" + operationTextareaList[i] + "</span>";
		}
	}
}

//初始化函数
function init() {
	operarion();
}
init();