var App = (function() {
	var access = function() {
		this.openWindow = function(id, href) {
			mui.openWindow({
				url: href,
				id: id,
				show: {
					aniShow: 'pop-in'
				},
				waiting: {
					autoShow: true, //自动显示等待框，默认为true
					title: '正在加载...', //等待对话框上显示的提示内容
				}

			});
		}

		this.openWindowWhitData = function(id, href, data) {
			mui.openWindow({
				url: href,
				id: id,
				show: {
					aniShow: 'pop-in'
				},
				waiting: {
					autoShow: true, //自动显示等待框，默认为true
					title: '正在加载...', //等待对话框上显示的提示内容
				},
				extras: {
					datas: data //扩展参数
				},

			});
		}
	};
	return access;
})();