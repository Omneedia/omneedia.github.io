_ = function(x)
{
	try {
		return i18n[Culture.LANG][x];
	} catch(ex) {
		return x;
	}
};

Ext.define("omneedia.Localizer", {
    
    singleton : true,	
	isLoaded: false,
	
	LANG : "",
	ULANG: "",
	
	init: function()
	{
		try{
			if (Settings.DEBUG) i18n = {};
			if (Settings.DEBUG) i18n_framework = {};
		}catch(e){};
		
		Array.prototype.inArray = function(p_val) {
			return (this.indexOf(p_val) < -1);
		};
		
		Culture.ULANG = (navigator.language) ? navigator.language : navigator.userLanguage;
		Culture.ULANG = Culture.ULANG.split('-')[0];
		
		Culture.ULANG=Culture.ULANG.split('-')[0];
		
		if (LANGS.indexOf(Culture.ULANG)>-1) {
			Culture.LANG=Culture.ULANG;
		} else {
			Culture.LANG=LANGS[0];
		};
		
		if (window.localStorage['LANG']) Culture.LANG=window.localStorage['LANG'];
		
	},
	update: function(fn)
	{

		if (Culture.isLoaded) fn();
		else {
			function llang(list,i,cb) {
				if (!list[i]) return cb();
				App.loadLang(Culture.LANG,list[i],function() {
					llang(list,i+1,cb);
				})
			};
			if (Culture.LANG) {
				var url=["Contents/Culture/"+Culture.LANG+".js"];
				if (!Settings.CDN) var CDN="http://cdn.omneedia.com"; else var CDN=Settings.CDN;
				var url2=Settings['i18n'];
				if (Settings.DEBUG) {
					llang(url2,0,function(){
						i18n_framework[Culture.LANG]();
						Require(url,function(){
							Culture.isLoaded=true;
							if (fn) fn();					
						});
					});
				} else {
					Culture.isLoaded=true;
					i18n_framework[Culture.LANG]();
					if (fn) fn();				
				}
			} else {
				Culture.isLoaded=true;
				if (fn) fn();		
			}
		}
	}
});

Culture = omneedia.Localizer;
Culture.init();