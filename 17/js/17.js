/* 数据格式演示
var aqiSourceData = {
  "北京": {
    "2016-01-01": 10,
    "2016-01-02": 10,
    "2016-01-03": 10,
    "2016-01-04": 10
  }
};
*/
var currStage = '天'; //默认是天
// 以下两个函数用于随机模拟生成测试数据
function getDateStr(dat) {
	var y = dat.getFullYear();
	var m = dat.getMonth() + 1;
	m = m < 10 ? '0' + m : m;
	var d = dat.getDate();
	d = d < 10 ? '0' + d : d;
	return y + '-' + m + '-' + d;
}

function randomBuildData(seed) {
	var returnData = {};
	var dat = new Date("2016-01-01");
	var datStr = ''
	for(var i = 1; i < 92; i++) {
		datStr = getDateStr(dat);
		returnData[datStr] = Math.ceil(Math.random() * seed);
		dat.setDate(dat.getDate() + 1);
	}
	return returnData;
}

var aqiSourceData = {
	"北京": randomBuildData(500),
	"上海": randomBuildData(300),
	"广州": randomBuildData(200),
	"深圳": randomBuildData(100),
	"成都": randomBuildData(300),
	"西安": randomBuildData(500),
	"福州": randomBuildData(100),
	"厦门": randomBuildData(100),
	"沈阳": randomBuildData(500)
};

// 用于渲染图表的数据
var chartData = {};

// 记录当前页面的表单选项
var pageState = {
	nowSelectCity: "北京",
	nowGraTime: "day"
}

/**
 * 渲染图表
 */
function renderChart() {
	var aqiChartWrap = document.getElementById("aqi-chart-wrap");
	aqiChartWrap.innerHTML = "";
	for(var key in chartData) {
		color = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
		var rectangleDiv = document.createElement("div");
		rectangleDiv.style.background = color;
		rectangleDiv.style.height = (chartData[key]) + "px";
		rectangleDiv.setAttribute("title", "" + chartData[key]);
		aqiChartWrap.appendChild(rectangleDiv);
	}

}

/**
 * 日、周、月的radio事件点击时的处理函数
 */
function graTimeChange(event) {

	// 确定是否选项发生了变化 
	var timevalue = event.target.defaultValue;

	// 设置对应数据
	switch(timevalue) {
		case 'day':
			pageState.nowGraTime = 'day';
			break;
		case 'week':
			pageState.nowGraTime = 'week';
			break;
		case 'month':
			pageState.nowGraTime = 'month';
			break;
	}
	initAqiChartData();
	// 调用图表渲染函数
	renderChart();
}

/**
 * select发生变化时的处理函数
 */
function citySelectChange(event) {
	// 确定是否选项发生了变化 
	var selectValue = event.target.value;
	// 设置对应数据
	if(selectValue != pageState.nowSelectCity) {

		pageState.nowSelectCity = selectValue;
	}
	initAqiChartData();
	// 调用图表渲染函数
	renderChart();
}

/**
 * 初始化日、周、月的radio事件，当点击时，调用函数graTimeChange
 */
function initGraTimeForm() {
	var timeRadio = document.getElementsByName('gra-time');
	for(var i = 0; i < timeRadio.length; i++) {
		timeRadio[i].onclick = graTimeChange;
	}

}

/**
 * 初始化城市Select下拉选择框中的选项
 */
function initCitySelector() {
	// 读取aqiSourceData中的城市，然后设置id为city-select的下拉列表中的选项
	var citySelect = document.getElementById('city-select');
	citySelect.innerHTML = "";
	for(var key in aqiSourceData) {
		var cityOption = document.createElement("option");
		cityOption.text = key;
		citySelect.appendChild(cityOption);
	}
	// 给select设置事件，当选项发生变化时调用函数citySelectChange
	citySelect.onchange = citySelectChange;
}

/**
 * 初始化图表需要的数据格式
 */
function initAqiChartData() {
	// 将原始的源数据处理成图表需要的数据格式
	var buffer = aqiSourceData[pageState.nowSelectCity];
	var divHeight = "";

	switch(pageState.nowGraTime) {
		case 'day':
			chartData = {};
			divHeight = buffer;
			chartData = divHeight;
			break;
		case 'week':
			chartData = {};
			sum = 0;
			i = 0;
			var week = 0;
			for(item in buffer) {
				sum += buffer[item];
				i++;
				if(new Date(item).getDay() == 6) { //判断是否是周日
					week++;
					chartData['2016年第' + week + '周'] = parseInt(sum / i);
					i = 0;
					sum = 0;
				}
			}
			if(i != 0) {
				week++;
				chartData['2016年第' + week + '周'] = parseInt(sum / i);
			}
			break;
		case 'month':
			chartData = {};
			//			var countSum = 0;
			//			var daySum = 0;
			//			for(var key in buffer) {
			//				var monthKey = key.substring(5, 7);
			//				switch(monthKey) {
			//					case "01":
			//						countSum += buffer[key];
			//						daySum++;
			//						chartData[0] = Math.floor(countSum / daySum);
			//					case "02":
			//						countSum += buffer[key];
			//						daySum++;
			//						chartData[1] = Math.floor(countSum / daySum);
			//					case "03":
			//						countSum += buffer[key];
			//						daySum++;
			//						chartData[2] = Math.floor(countSum / daySum);
			//
			//				}
			//			}
			sum = 0;
			i = 0;
			var mouth = 1;
			for(item in buffer) {
				var date = new Date(item);
				if(date.getMonth() != mouth) {
					mouth = date.getMonth();

					if(sum != 0)
						chartData[date.getFullYear() + '-' + (mouth ? ('0' + mouth) : mouth)] = parseInt(sum / i);
					sum = 0;
					i = 0;
				}
				sum += buffer[item];
				i++;
			}
			if(i != 0) {
				mouth++;
				chartData[date.getFullYear() + '-' + (mouth ? ('0' + mouth) : mouth)] = parseInt(sum / i);
			}
			break;
	}
	// 处理好的数据存到 chartData 中

}

/**
 * 初始化函数
 */
function init() {
	initGraTimeForm()
	initCitySelector();
	initAqiChartData();
	renderChart();
}

init();