init();
/************************************************初始化函数************************************************/
function init() {
	operarion();
}
/************************************************初始化函数 结束************************************************/

/************************************************代码开始************************************************/
function operarion() {
	var operation = document.getElementById("operationDiv"); //操作Div
	var operationTextarea = document.getElementById("operation-textarea"); //输入文本框
	var insertBtn = document.getElementById("insertBtn"); //插入操作
	var selectBtn = document.getElementById("selectBtn"); //查询操作
	var selectInput = document.getElementById("selectInput") //搜索条件
	var selectInputValue = selectInput.value; //查询条件的结果
	var resultDiv = document.getElementById("resultDiv"); //输出的值
	var resultDivTag = resultDiv.getElementsByTagName("span"); //查找标签
	var operationTextareaList = {}; //输入的值存入数组
	var operationTextareaListOther = new Array(); //存储临时值
	insertBtn.onclick = function() {
		if(operationTextarea.value == "") {
			//要插入的值为空时
			alert("请输入值哦~");
		} else {
			//插入的值不为空时
			operationTextareaList = operationTextarea.value.split(/[^0-9a-zA-Z\u4e00-\u9fa5]+/); //正则表达式读取输入的特殊分隔符
			for(var i = 0; i < operationTextareaList.length; i++) {
				var span = "<span class='textSpan'>" + operationTextareaList[i] + "</span>"; //创建新的值
				resultDiv.innerHTML += span; //将新增的标签值加入到页面里
				operationTextareaListOther.push(operationTextareaList[i]); //将值存储到临时数组里
			}
		}
	}
	selectBtn.onclick = function() {
		var selectInputValue = selectInput.value; //读取搜索条件里的值
		var resultDivTagLength = resultDivTag.length; //获取搜索的标签有多少个
		resultDiv.innerHTML = ""; //清空上一个搜索的值
		for(var i = 0; i < operationTextareaListOther.length; i++) {
			//重新填写页面,把前面搜索过的记录清空还原页面
			var span = "<span class='textSpan'>" + operationTextareaListOther[i] + "</span>";
			resultDiv.innerHTML += span;
		}
		for(var i = 0; i < resultDivTagLength; i++) { //开始搜索
			var resultDivTagValue = resultDivTag[i].innerHTML; //每个标签里的值
			var resuleSpan = "<a >" + selectInputValue + "</a>"; //对搜索出来的值进行高亮
			operationTextareaList[i] = resultDivTagValue.replace(new RegExp(selectInputValue, "gm"), resuleSpan); //给高亮值添加标识
			resultDivTag[i].innerHTML = operationTextareaList[i]; //将高亮值写入到页面里
		}

	}
}
/************************************************代码结束************************************************/