/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};
/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
	var aqiCityInput = document.getElementById('aqi-city-input').value;
	var aqiValueInput = document.getElementById('aqi-value-input').value;
	aqiData[aqiCityInput] = aqiValueInput;
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
	var aqiTable = document.getElementById('aqi-table');
	var Html = "<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";
	var contextHtml = " <tr><td>{city}</td><td>{data}</td><td><button>删除</button></td></tr>"

	for(e in aqiData) {
		Html += contextHtml.replace("{city}", e).replace("{data}", aqiData[e]);
	}

	aqiTable.innerHTML = Html;

}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
	addAqiData();
	renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(e) {
	// do sth.
	//按钮的父，父节点为tr，然后tr的第一个子节点为城市代表的节点，即取得要删除的城市名称
	var city = e.target.parentNode.parentNode.firstChild.innerHTML;
	delete aqiData[city];
	renderAqiList();
}

function init() {

	// 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
	var addBtn = document.getElementById('add-btn');
	addBtn.onclick = addBtnHandle;
	// 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
	var delBtn = document.getElementById('aqi-table');
	delBtn.onclick = delBtnHandle;

}
init();