var LocalDatabase = (function() {
	var KEY_USER = '$USER';
	var KEY_SETTING = '$SETTING';
	var KEY_ATTACHMENTS = '$ATTACHMENTS';
	var KEY_FAULT = '$FAULT';
	var KEY_FAULT_DEVICES = '$FAULT_DEVICES';
	var KEY_DICTIONARY = '$DICTIONARY';
	var KEY_WAY_SECTIONS = '$WAY_SECTIONS';
	var KEY_WAY_SECTIONS_COMPANY = '$WAY_SECTIONS_COMPANY';
	var KEY_INSPECT_LOCATION = "$KEY_INSPECT_LOCATION";
	var KEY_CLEAN_LOCATION = "$KEY_CLEAN_LOCATION";
	var KEY_FORM_CHECK = "$KEY_FORM_CHECK";
	var KEY_TEMPORAYR_INSPECTION = "$KEY_TEMPORAYR_INSPECTION"; //临时修改巡检情况的保存
	function _getDatas(KEY) {
		var jsonText = localStorage.getItem(KEY) || "[]";
		var datas = JSON.parse(jsonText);
		return datas;
	}

	function _setDatas(KEY, datas) {
		localStorage.setItem(KEY, JSON.stringify(datas));
	}

	function _getData(KEY) {
		var jsonText = localStorage.getItem(KEY) || "{}";
		var datas = JSON.parse(jsonText);
		return datas;
	}

	function _setData(KEY, data) {
		localStorage.setItem(KEY, JSON.stringify(data));
	}

	function _getPagination(datas, pageSize, currentPageIndex) {
		//总记录数
		var recordCount = datas.length;
		//开始索引
		var start = pageSize * (currentPageIndex - 1); //0
		var end = pageSize * currentPageIndex;
		//总页数
		var pageCount = recordCount % pageSize == 0 ? recordCount / pageSize : Math.ceil(recordCount / pageSize);
		if(end > recordCount) {
			end = recordCount;
		}
		var ret = [];
		for(var i = start; i < end; i++) {
			ret.push(datas[i]);
		}
		return {
			isEnd: (currentPageIndex >= pageCount),
			pageSize: pageSize,
			currentPageIndex: currentPageIndex,
			recordCount: recordCount,
			pageCount: pageCount,
			data: ret
		};
	}
	//获得一个数据字典列表
	function _getDictionarys(category) {
		var datas = _getDatas(KEY_DICTIONARY);
		var ret = [];
		for(var i = 0; i < datas.length; i++) {
			if(datas[i].key == category) {
				ret = datas[i].value;
				break;
			}
		}
		return ret;
	}
	//设置一个数据字典列表
	function _setDictionarys(category, dicts) {
		var datas = _getDatas(KEY_DICTIONARY);
		var isExists = false;
		for(var i = 0; i < datas.length; i++) {
			if(datas[i].key == category) {
				datas[i].value = dicts;
				isExists = true;
				break;
			}
		}
		if(!isExists) {
			datas.push({
				key: category,
				value: dicts
			});
		}
		_setDatas(KEY_DICTIONARY, datas);
	}

	var db = function() {
		//设置本地用户信息
		this.setUser = function(user) {
			_setData(KEY_USER, user || {});
		};
		//获取本地用户信息
		this.getUser = function() {
			return _getData(KEY_USER);
		};
		//保存用户配置
		this.setSetting = function(setting) {
			_setData(KEY_SETTING, setting || {});
		};
		//获取用户配置
		this.getSetting = function() {
			return _getData(KEY_SETTING);
		};

	}
	return db;
})();