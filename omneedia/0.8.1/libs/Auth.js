
Ext.define("omneedia.Auth", {
    singleton: true,
	logout: function()
	{
		$('.omneedia-overlay').show();
		if (Settings.TYPE=="mobile") {
			if (!Settings.REMOTE_AUTH) Settings.REMOTE_AUTH="";
			Auth.window = window.open(Settings.REMOTE_AUTH+"/logout", "_blank","location=no");
			$(Auth.window).on('loadstart', function(e) {
				Auth.window.close();
				//window.location.reload(true);
				//navigator.app.loadUrl('index.html');
			});
		} else {
			if (!Settings.REMOTE_AUTH) Settings.REMOTE_AUTH="";
			var divo=document.createElement('div');
			divo.className="QxOverlay";
			divo.style.zIndex="99999999999999999";
			document.getElementsByTagName('body')[0].appendChild(divo);
			
			Auth.window = window.open(Settings.REMOTE_AUTH+"/logout", "_blank");
			__INTERVAL__=window.setInterval(function(){
				if (Settings.REMOTE_AUTH) var a_auth=Settings.REMOTE_AUTH; else var a_auth="";
				Ext.Ajax.request({
							url: a_auth+"/account",
							method: "POST",
							withCredentials: true,
							useDefaultXhrHeader: false,			
							success: function(response,opts) {				

							},
							failure: function(response,opts) {
								window.clearInterval(__INTERVAL__);
								location.href=location.href;
							}});		
			},1000);			
		}
	},	
	doLogin: function(fn)
	{
	
		var divo=document.createElement('div');
		divo.className="QxOverlay";
		document.getElementsByTagName('body')[0].appendChild(divo);	
				
		$("#appLoadingIndicator").fadeOut('slow');		
		
		var div=document.createElement('div');
		
		if (Settings.TYPE=="mobile") {
			if (App.isPhone)
			div.className="QxLoginBox smartphone animated fadeInDownBig";
			else
			div.className="QxLoginBox tablet animated fadeInDownBig";
		} else div.className="QxLoginBox animated fadeInDownBig";
		document.getElementsByTagName('body')[0].appendChild(div);

		$('<table width="100%" height="100%" border="0"><tr class=CWaitSignOn style="display:none"><td width=100% height=100% valign=middle align="center">En attente des informations d\'identification<br>&nbsp;<br><button class=css_btn_cancel>Annuler</button></td></tr><tr class=CSignOn><td class="QxPassports" width=100% height=100% valign=middle align="center"><div class=qxAboutLogo style="position:absolute;top:10px;width:100%;margin-bottom:10px"></div><br><br></td></tr></table>').appendTo('.QxLoginBox');

		for (var jk=0;jk<Settings.AUTH.passports.length;jk++) {
			if (!Settings.AUTH.passport[Settings.AUTH.passports[jk]]) {
				Settings.AUTH.passport[Settings.AUTH.passports[jk]]={
					caption: "Sign in with "+Settings.AUTH.passports[jk]
				} 
			} else {
				Settings.AUTH.passport[Settings.AUTH.passports[jk]]={
					caption: _(Settings.AUTH.passport[Settings.AUTH.passports[jk]].caption)
				}			
			};
			$('.QxPassports').html($('.QxPassports').html()+'<a class="button_passport '+Settings.AUTH.passports[jk]+'">'+Settings.AUTH.passport[Settings.AUTH.passports[jk]].caption+'</a>');
		};
		$('.css_btn_cancel').click(function() {
			$('.CWaitSignOn').hide();
			$('.CSignOn').show();			
		});
		// twitter
		$('.button_passport.twitter').click(function() {
			$('.CWaitSignOn').show();
			$('.CSignOn').hide();
			
			if (Settings.REMOTE_AUTH)
			var win = window.open(Settings.REMOTE_AUTH+"/auth/twitter", "_blank","location=no");
			else {
				var win = window.open("/auth/twitter", "_blank");
				win.focus();
			};
			__INTERVAL__=window.setInterval(function(){
			
			},1000);		
		});
		// AUTH
		$('.button_passport.letmein').click(function() {
			$('.CWaitSignOn').show();
			$('.CSignOn').hide();
			
			if (Settings.REMOTE_AUTH)
			var win = window.open(Settings.REMOTE_AUTH+"/auth/letmein", "_blank","location=no");
			else {
				var win = window.open("/auth/letmein", "_blank");
				win.focus();
			};
		    document.socket.on('#auth',function(response) {

				Auth.User=JSON.parse(response);
				$('.QxOverlay').remove();
				Auth._vague.unblur();						
				$('.QxLoginBox').addClass('bounceOutDown');
				window.setTimeout(function(){$('.QxLoginBox').remove();},1000);					
				if (Settings.TYPE!="mobile") {
				Ext.getCmp('GlobalMenuUser').setText(Auth.User.mail.split('@')[0]);
					Ext.getCmp('GlobalMenuUser').show();
				};
				if (fn) fn(Auth.User);
				
			});				
		
		});
		// gitlab
		$('.button_passport.gitlab').click(function() {
			
			$('.CWaitSignOn').show();
			$('.CSignOn').hide();
			
			if (Settings.REMOTE_AUTH)
			var win = window.open(Settings.REMOTE_AUTH+"/auth/gitlab", "_blank","location=no");
			else {
				var win = window.open("/auth/gitlab", "_blank");
				win.focus();
			};
			if (document.socket) {
			   document.socket.on('#auth',function(response) {
				   
					Auth.User=JSON.parse(response);
					$('.QxOverlay').remove();
					Auth._vague.unblur();						
					$('.QxLoginBox').addClass('bounceOutDown');
					window.setTimeout(function(){$('.QxLoginBox').remove();},1000);					
					if (Settings.TYPE!="mobile") {
				Ext.getCmp('GlobalMenuUser').setText(Auth.User.mail.split('@')[0]);
						Ext.getCmp('GlobalMenuUser').show();
					};
					if (fn) fn(Auth.User);
				});				
			} else {
				__INTERVAL__=window.setInterval(function(){
					if (Settings.REMOTE_AUTH) var a_auth=Settings.REMOTE_AUTH; else var a_auth="";
					Ext.Ajax.request({
						url: a_auth+"/account",
						method: "POST",
						withCredentials: true,
						useDefaultXhrHeader: false,	
						params: {
							"udid" : App.udid
						},							
						success: function(response,opts) {				
							Auth.User=JSON.parse(response.responseText);
							$('.QxOverlay').remove();
							Auth._vague.unblur();						
							$('.QxLoginBox').addClass('bounceOutDown');														
							window.setTimeout(function(){$('.QxLoginBox').remove();},1000);

							if (Settings.TYPE!="mobile") {
								console.log(Auth.User);
								Ext.getCmp('GlobalMenuUser').setText(Auth.User.mail.split('@')[0]);
								Ext.getCmp('GlobalMenuUser').show();
							};
							window.clearInterval(__INTERVAL__);
							if (fn) fn(Auth.User);				

						},
						failure: function(response,opts) {

						}
					});		
				},1000);				
			}
		
		});		
		// github
		$('.button_passport.github').click(function() {
			
			$('.CWaitSignOn').show();
			$('.CSignOn').hide();
			
			if (Settings.REMOTE_AUTH)
			var win = window.open(Settings.REMOTE_AUTH+"/auth/github", "_blank","location=no");
			else {
				var win = window.open("/auth/github", "_blank");
				win.focus();
			};
			if (document.socket) {
			   document.socket.on('#auth',function(response) {
					Auth.User=JSON.parse(response);
					$('.QxOverlay').remove();
					Auth._vague.unblur();						
					$('.QxLoginBox').addClass('bounceOutDown');
					window.setTimeout(function(){$('.QxLoginBox').remove();},1000);					
					if (Settings.TYPE!="mobile") {
				Ext.getCmp('GlobalMenuUser').setText(Auth.User.mail.split('@')[0]);
						Ext.getCmp('GlobalMenuUser').show();
					};
					if (fn) fn(Auth.User);
				});				
			} else {
				__INTERVAL__=window.setInterval(function(){
					if (Settings.REMOTE_AUTH) var a_auth=Settings.REMOTE_AUTH; else var a_auth="";
					Ext.Ajax.request({
						url: a_auth+"/account",
						method: "POST",
						withCredentials: true,
						useDefaultXhrHeader: false,	
						params: {
							"udid" : App.udid
						},							
						success: function(response,opts) {				
							Auth.User=JSON.parse(response.responseText);
							$('.QxOverlay').remove();
							Auth._vague.unblur();						
							$('.QxLoginBox').addClass('bounceOutDown');														
							window.setTimeout(function(){$('.QxLoginBox').remove();},1000);

							if (Settings.TYPE!="mobile") {
								console.log(Auth.User);
								Ext.getCmp('GlobalMenuUser').setText(Auth.User.mail.split('@')[0]);
								Ext.getCmp('GlobalMenuUser').show();
							};
							window.clearInterval(__INTERVAL__);
							if (fn) fn(Auth.User);				

						},
						failure: function(response,opts) {

						}
					});		
				},1000);				
			}
		
		});		
		// facebook
		$('.button_passport.facebook').click(function() {
			$('.CWaitSignOn').show();
			$('.CSignOn').hide();
			
			if (Settings.REMOTE_AUTH)
			var win = window.open(Settings.REMOTE_AUTH+"/auth/facebook", "_blank","location=no");
			else {
				var win = window.open("/auth/facebook", "_blank");
				win.focus();
			};
			__INTERVAL__=window.setInterval(function(){
			
			},1000);
		});
		
		// cas
		$('.button_passport.cas').click(function() {
			$('.CWaitSignOn').show();
			$('.CSignOn').hide();
			
			if (Settings.REMOTE_AUTH)
			var win = window.open(Settings.REMOTE_AUTH+"/auth/cas", "_blank","location=no");
			else {
				var win = window.open("/auth/cas", "_blank");
				win.focus();
			};
			if (document.socket) {
			   document.socket.on('#auth',function(response) {
				   document.socket.off('#auth');
					Auth.User=JSON.parse(response);
					$('.QxOverlay').remove();
					Auth._vague.unblur();						
					$('.QxLoginBox').addClass('bounceOutDown');
					window.setTimeout(function(){$('.QxLoginBox').remove();},1000);					
					if (Settings.TYPE!="mobile") {
				Ext.getCmp('GlobalMenuUser').setText(Auth.User.mail.split('@')[0]);
						Ext.getCmp('GlobalMenuUser').show();
					};
					if (fn) fn(Auth.User);
				});				
			} else {
				__INTERVAL__=window.setInterval(function(){
					if (Settings.REMOTE_AUTH) var a_auth=Settings.REMOTE_AUTH; else var a_auth="";
					Ext.Ajax.request({
						url: a_auth+"/account",
						method: "POST",
						withCredentials: true,
						useDefaultXhrHeader: false,	
						params: {
							"udid" : App.udid
						},							
						success: function(response,opts) {				
							Auth.User=JSON.parse(response.responseText);
							$('.QxOverlay').remove();
							Auth._vague.unblur();						
							$('.QxLoginBox').addClass('bounceOutDown');														
							window.setTimeout(function(){$('.QxLoginBox').remove();},1000);

							if (Settings.TYPE!="mobile") {
								console.log(Auth.User);
								Ext.getCmp('GlobalMenuUser').setText(Auth.User.mail.split('@')[0]);
								Ext.getCmp('GlobalMenuUser').show();
							};
							window.clearInterval(__INTERVAL__);
							if (fn) fn(Auth.User);				

						},
						failure: function(response,opts) {

						}
					});		
				},1000);				
			}

		});
		$('.button_passport.google').click(function() {

			$('.CWaitSignOn').show();
			$('.CSignOn').hide();
			
			if (Settings.REMOTE_AUTH)
			Auth.window = window.open(Settings.REMOTE_AUTH+"/auth/google", "_blank","location=no");
			else Auth.window = window.open("/auth/google", "_blank");

			__INTERVAL__=window.setInterval(function(){
				if (Settings.REMOTE_AUTH) var a_auth=Settings.REMOTE_AUTH; else var a_auth="";
				Ext.Ajax.request({
							url: a_auth+"/account",
							method: "POST",
							withCredentials: true,
							useDefaultXhrHeader: false,		
							params: {
								"udid" : App.udid
							},								
							success: function(response,opts) {
								Auth.User=JSON.parse(response.responseText);
								$('.QxOverlay').remove();
								Auth._vague.unblur();
								$('.QxLoginBox').addClass('bounceOutDown');						
								$('.x-panel').addClass('QxSharp');
								if (Settings.TYPE=="mobile") $('.x-container').addClass('QxSharp');
								window.setTimeout(function(){$('.QxLoginBox').remove();},1000);
								if (Settings.TYPE!="mobile") {
									Ext.getCmp('GlobalMenuUser').setText(Auth.User.mail.split('@')[0]);
									Ext.getCmp('GlobalMenuUser').show();
								};
								window.clearInterval(__INTERVAL__);
								Auth.window.close();
								if (fn) fn(Auth.User);				

							},
							failure: function(response,opts) {
								
							}});		
			},1000);

		});

	},
	user: function(cb)
	{
		if (Settings.REMOTE_AUTH) var a_auth=Settings.REMOTE_AUTH; else var a_auth="";
		Ext.Ajax.request({
			url: a_auth+"/account",
			method: "POST",
			params: {
				"udid" : App.udid
			},			
			withCredentials: true,
			useDefaultXhrHeader: false,			
			success: function(response,opts) {				
				Auth.User=JSON.parse(response.responseText);
				cb(Auth.User);
			},
			failure: function(response,opts) {
				//Auth.doLogin();
			}
		});
	},
	User: {},
	login: function(fn)
	{
		if (Settings.REMOTE_AUTH) var a_auth=Settings.REMOTE_AUTH; else var a_auth="";
		Auth._vague=$('.x-panel').Vague();
		Auth._vague.blur({
			intensity:      3,
			forceSVGUrl:    false,
			animationOptions: {
				duration: 1000,
				easing: 'linear'
			}
		});		
		Ext.Ajax.request({
			url: a_auth+"/account",
			method: "POST",
			params: {
				"udid" : App.udid
			},								
			withCredentials: true,
            useDefaultXhrHeader: false,			
			success: function(response,opts) {
				Auth.User=JSON.parse(response.responseText);
				$('.QxOverlay').remove();
				Auth._vague.unblur();
				$('.QxLoginBox').addClass('bounceOutDown');						
				$('.x-panel').addClass('QxSharp');
				if (Settings.TYPE=="mobile") $('.x-container').addClass('QxSharp');
				window.setTimeout(function(){$('.QxLoginBox').remove();},1000);
				if (Settings.TYPE!="mobile") {
					Ext.getCmp('GlobalMenuUser').setText(Auth.User.mail.split('@')[0]);
					Ext.getCmp('GlobalMenuUser').show();
				};
				if (fn) fn(Auth.User);
			},
			failure: function(response,opts) {
				Auth.doLogin(fn);
			}
		});
	}
});

Auth = omneedia.Auth;