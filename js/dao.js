var DataAccess = (function() {
//	var _db = new LocalDatabase();
	var API_URL = globals.apiUrl + "Service.ashx";


	function _getNetwork() {
		if(plus.networkinfo.getCurrentType() == plus.networkinfo.CONNECTION_NONE) {
			return false;
		} else {
			return true;
		}
	}

	var access = function() {};

	return access;
})();