function lower (str) {
	if (!str) return;
	url = encodeURIComponent(str);
	var colon = url.replace(/(\%3)A/, '$1a');
	var diagonal = colon.replace(/(%2)F/g, '$1f'); 
	var qsmark = diagonal.replace(/(%3)F/g, '$1f'); 
	var equal = qsmark.replace(/(%3)D/g, '$1d');
	return equal;
}
var res = lower('http://i.meituan.com/awp/h5/trip/search-dest/flight-hotel/index.html?source=mt&name=chenqi');
console.log(res);
