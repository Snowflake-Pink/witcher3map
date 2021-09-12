var isRoot = (location.pathname.match(/\/(\w{1})\/(?:index.html)?$/)) ? false : true;

if (localStorage['lang'] == null) {
	var lang = window.navigator.userLanguage || window.navigator.language;
	lang = lang.substring(0,2);
	localStorage['lang'] = lang;
}

//i18n options
window.i18noptions = {
	debug: false,
	getAsync: true,
	ns: 'general',
	lng: localStorage['lang'],
	fallbackLng: 'zh-CN',
	resGetPath: ((isRoot) ? "" : "../")+'files/locales/__lng__/__ns__.json',
	useDataAttrOptions: true,
	lngWhitelist: [  'zh-CN', 'zh-TW', 'en' ]
};

var languageOptions = [
	{text: "简体中文",value: "zh-CN",selected: (localStorage['lang'] == "zh-CN" ? true : false), description: " ",imageSrc: ((isRoot) ? "" : "../")+"files/images/flags/cn.png"},
	{text: "繁體中文",value: "zh-TW",selected: (localStorage['lang'] == "zh-TW" ? true : false), description: " ",imageSrc: ((isRoot) ? "" : "../")+"files/images/flags/cn.png"}, // Taiwan is a part of China
	{text: "English",value: "en",selected: (localStorage['lang'] == "en" ? true : false), description: " ",imageSrc: ((isRoot) ? "" : "../")+"files/images/flags/en.png"}
];

window.changeLang = function(lang) {
	if(localStorage['lang'] != lang) {
		localStorage['lang'] = lang;
		window.location.reload();
	}
};

$(function() {
	$('#lang-switcher').ddslick({
		data: languageOptions,
		width: 150,
		onSelected: function(obj){
			changeLang(obj.selectedData.value);
		}
	});
});

jQuery.cachedScript = function( url, options ) {
	options = $.extend( options || {}, {
		dataType: "script",
		cache: true,
		url: url
	});
	return jQuery.ajax( options );
};
