var ecidVal = getQueryVariable('ecid');
var icidVal = getQueryVariable('icid');
var targetLink = $('.targetLink').attr('href');
if ((ecidVal !== undefined) || (icidVal !== undefined)) {
	//轉跳
	if ((ecidVal !== undefined) && (icidVal !== undefined)) {
	  targetLink = targetLink + '?ecid=' + ecidVal + '&' + 'icid=' + icidVal;
	} else {
	  var urlParam = '';
	  (ecidVal !== undefined) ? urlParam = ('ecid=' + ecidVal) : urlParam = ('icid=' + icidVal);
	  targetLink = targetLink + '?' + urlParam;
	}
	$('.targetLink').attr('href',targetLink);
	// document.location.href = targetLink;
}
else {
	$('.targetLink').attr('href',targetLink);
		// document.location.href = targetLink;	
}


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
