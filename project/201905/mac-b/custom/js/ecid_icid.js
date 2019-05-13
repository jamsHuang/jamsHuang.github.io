var ecidVal = getQueryVariable('ecid');
var icidVal = getQueryVariable('icid');
$('.targetLink').each(function(){
	var targetLink = $(this).attr('href');
	if(targetLink.indexOf('?')!=-1){
		$(this).attr('href',targetLink);
	}else{
		if ((ecidVal !== undefined) || (icidVal !== undefined)) {
			//網址有帶ecid/icid
			if ((ecidVal !== undefined) && (icidVal !== undefined)) {
				//ecid/icid二個值都有
				targetLink = targetLink + '?ecid=' + ecidVal + '&' + 'icid=' + icidVal;
			} else {
				//ecid/icid只有其中一個值
				var urlParam = '';
				(ecidVal !== undefined) ? urlParam = ('ecid=' + ecidVal) : urlParam = ('icid=' + icidVal);
				targetLink = targetLink + '?' + urlParam;
			}
			$(this).attr('href',targetLink);
		}
		else {
			//網址沒有帶ecid/icid
			$(this).attr('href',targetLink);
		}
	}
});

function getQueryVariable(variable) {
	var query = window.location.search.substring(1);
	var vars = query.split('&');
	for (var i = 0; i < vars.length; i++) {
	    var pair = vars[i].split('=');
	    if (decodeURIComponent(pair[0]) == variable) {
	        return decodeURIComponent(pair[1]);
	    }
	}
}
