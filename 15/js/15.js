window.onload = function() {
	init();
getData();
};
/**
 * getData方法
 * 读取id为source的列表，获取其中城市名字及城市对应的空气质量
 * 返回一个数组，格式见函数中示例
 */
function getData() {
	/*
	coding here
	*/

	/*
	data = [
	  ["北京", 90],
	  ["北京", 90]
	  ……
	]
	*/
	var source = document.getElementById('source');
	var sourceLi = source.getElementsByTagName('li');
	var data=[];
	for(var i = 0; i < sourceLi.length; i++) {
		data[i]=[];
		data[i][0] = sourceLi[i].innerHTML.slice(0,2);
		data[i][1]=parseInt(sourceLi[i].getElementsByTagName('b')[0].innerHTML);
	}

	return data;

}

/**
 * sortAqiData
 * 按空气质量对data进行从小到大的排序
 * 返回一个排序后的数组
 */
function sortAqiData(data) {
	data.sort(function(a,b){
		return b[1]-a[1];
	});
	return data;
}

/**
 * render
 * 将排好序的城市及空气质量指数，输出显示到id位resort的列表中
 * 格式见ul中的注释的部分
 */
function render(data) {
	var resort=document.getElementById('resort');
	for (var i=0;i<data.length;i++) {
		var resortLi=document.createElement('li');
		resortLi.innerHTML='第'+(i+1)+'名:'+data[i][0]+'空气质量:'+'<b>'+data[i][1]+'</b>';
		resort.appendChild(resortLi);
	}
}

function btnHandle() {
	var aqiData = getData();
	aqiData = sortAqiData(aqiData);
	render(aqiData);
}

function init() {

	// 在这下面给sort-btn绑定一个点击事件，点击时触发btnHandle函数
	var sortBtn = document.getElementById("sort-btn");
	sortBtn.onclick = btnHandle;
}