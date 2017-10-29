i18n_framework = {};
i18n = {};

_ = function(x)
{
	try {
		return i18n[App.DEFAULT_LANG][x];
	} catch(ex) {
		return x;
	}
};

App.apply(App,{
	getAcceptedLangs: function(cb) {
		App.request({url:Settings.REMOTE_API+'/i18n'},function(e,r) {
			// fallback to navigator
			if (e) cb(navigator.language || navigator.userLanguage); else {
				cb(r);
			}
		});
	},
	loadLang: function(lang,cb) {
		var _LANG=[];
		function loadLang(urls,i,cb) {
			if (!urls[i]) return cb();
			var url=urls[i];
			var lang=App.DEFAULT_LANG.split('|')[1].split(',');
			var url0=url.replace(/{lang}/g,lang[0]);
			if (lang[1]) var url1=url.replace(/{lang}/g,lang[1]); else url1=-1;
			function addLang () {
				_LANG.push(this.response);
				return loadLang(urls,i+1,cb);
			};	
			function failed() {
				return loadLang(urls,i+1,cb);
			};
			var XHR = new XMLHttpRequest();
			var params = "url0="+url0+"&url1="+url1;
			XHR.addEventListener( 'load' , addLang,false );
			XHR.addEventListener( "error" , failed, false);
			XHR.open( 'POST', Settings.REMOTE_API+'/i18n' );
			XHR.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			XHR.send(params);	
		};	
		var current="";
		if (window.localStorage['LANG']) App._lang=window.localStorage['LANG'];
		if (!App._lang) {
			for (var i=0;i<Settings.LANGS.length;i++) {
				if (lang.indexOf(Settings.LANGS[i].toLowerCase())>-1) current=Settings.LANGS[i]+'|'+lang;
			};
		} else {
			if (App._lang.indexOf('-')>-1) {
				current=App._lang+'|'+App._lang;				
			} else {
				current=App._lang+'|'+App._lang+','+App._lang+'-'+App._lang.toUpperCase();	
			};			
		};
		/* Fallback to current */
		if (current=="") {
			if (Settings.LANGS[0].indexOf('-')>-1) {
				App.DEFAULT_LANG=Settings.LANGS[0]+'|'+Settings.LANGS[0];				
			} else {
				App.DEFAULT_LANG=Settings.LANGS[0]+'|'+Settings.LANGS[0]+','+Settings.LANGS[0]+'-'+Settings.LANGS[0].toUpperCase();	
			};
		} else App.DEFAULT_LANG=current;
		if (Settings.DEBUG) {
			// in DEBUG, we load it dynamically
			Settings['i18n'].push(Settings.REMOTE_API+'/Contents/Culture/'+App.DEFAULT_LANG.split('|')[0]+'.js');
			loadLang(Settings['i18n'],0,function() {
				App.DEFAULT_LANG=App.DEFAULT_LANG.split('|')[0];
				window.eval( 'i18n_framework["'+App.DEFAULT_LANG+'"]=function(){'+_LANG.join(' ')+'};' );
				i18n_framework[App.DEFAULT_LANG]();		
				cb();
			});		
		} else {
			// in PROD, It's always binded to source code
			i18n_framework[App.DEFAULT_LANG]();
			cb();
		}
	}
});