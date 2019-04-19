var TFilterBoxMenu = {
	menuNumDate: [{
			text: "est"
		},
		{
			text: "n'est pas"
		},
		{
			text: "est supérieur à"
		},
		{
			text: "est inférieur à"
		},
		{
			text: "est supérieur ou égal à"
		},
		{
			text: "est inférieur ou égal à"
		}
	],
	menuKeywords: [{
		text: "Contient au moins un des mots"
	}, {
		text: "Contient tous ces mots"
	}, {
		text: "ne contient pas ces mots"
	}],
	menuBoolean: [{
			text: "est vrai"
		},
		{
			text: "est faux"
		}
	],
	menuChoix: [{
			text: "est"
		},
		{
			text: "n'est pas"
		}
	],
	menuTexte: [{
			text: "contient"
		},
		{
			text: "ne contient pas"
		},
		{
			text: "est"
		},
		{
			text: "n'est pas"
		},
		{
			text: "commence par"
		},
		{
			text: "se termine par"
		}
	]
};

var TFilterBoxAdd = function (p, s, obj) {
	var me = p;
	var panel = Ext.create('Ext.ux.FilterItems', {
		showOperand: s
	});

	p.items.add(panel);
	p.scrollBy(0, 999999, true);

	var orand = panel.items.items[0];
	orand.menu.on('click', function (x, e) {
		x.up().setText(e.text);
	});
	var launch = panel.items.items[16];
	launch.on('click', function () {
		var objs = [];

		for (var i = 0; i < p.items.items.length; i++) {
			var ff = {};
			var filter = p.items.items[i];

			var title = filter.items.items[3];

			var item = "";
			for (var j = 0; j < p.fields.length; j++) {
				if (title.getText() == p.fields[j].name) item = p.fields[j].field;
			};
			ff.name = item;

			var option = filter.items.items[5];

			if (option.getText() == "est") ff.value = " = \"ITEM\" ";
			if (option.getText() == "n'est pas") ff.value = " <> \"ITEM\" ";
			if (option.getText() == "est supérieur à") ff.value = " > \"ITEM\" ";
			if (option.getText() == "est inférieur à") ff.value = " < \"ITEM\" ";
			if (option.getText() == "est supérieur ou égal à") ff.value = " >= \"ITEM\" ";
			if (option.getText() == "est inférieur ou égal à") ff.value = " <= \"ITEM\" ";
			if (option.getText() == "est vrai") ff.value = " = 1 ";
			if (option.getText() == "est faux") ff.value = " = 0 ";
			if (option.getText() == "contient") ff.value = " LIKE \"%ITEM%\" ";
			if (option.getText() == "ne contient pas") ff.value = " NOT LIKE \"%ITEM%\" ";
			if (option.getText() == "commence par") ff.value = " LIKE \"ITEM%\" ";
			if (option.getText() == "se termine par") ff.value = " LIKE \"%ITEM\" ";

			if (option.getText() == "Contient au moins un des mots") ff.value = "KW=ITEM";
			if (option.getText() == "Contient tous ces mots") ff.value = "KW+ITEM";
			if (option.getText() == "ne contient pas ces mots") ff.value = "KW-ITEM";

			var value = filter.items.items[7];
			var nvalue = filter.items.items[9];
			var my_value = "";

			if (nvalue.xtype == "datefield") {
				var d = nvalue.getValue();
				//.toISOString().slice(0, 19).split('T')[0];
				var curr_date = d.getDate();
				var curr_month = d.getMonth() + 1;
				var curr_year = d.getFullYear();
				var my_value = curr_year + '-' + curr_month + '-' + curr_date;
			} else my_value = nvalue.getValue();
			try {
				if (value.isVisible()) {
					ff.value = ff.value.replace(/ITEM/g, value.getValue());
				} else {
					ff.value = ff.value.replace(/ITEM/g, my_value);
				};
				if (i > 0) {
					if (filter.items.items[0].getText() == "ET") ff.operator = " AND ";
					else ff.operator = " OR ";
				};
				objs.push(ff);
			} catch (e) {

			};

		};

		p.store.getProxy().extraParams.quest = JSON.stringify(objs);
		p.store.load();
	});
	var addbtn = panel.items.items[12];
	addbtn.on('click', function () {
		var old = p.items.items[p.items.items.length - 1];
		old.items.items[12].hide();
		old.items.items[14].hide();
		old.items.items[16].hide();
		TFilterBoxAdd(p, true);
	});
	var removebtn = panel.items.items[14];
	removebtn.on('click', function () {
		var old = p.items.items[p.items.items.length - 2];
		old.items.items[12].show();
		old.items.items[16].show();

		if (p.items.items.length == 2)
			old.items.items[14].hide();
		else
			old.items.items[14].show();
		p.remove(p.items.items[p.items.items.length - 1]);
	});
	for (var i = 0; i < me.fields.length; i++) {
		panel.items.items[3].menu.add({
			text: me.fields[i].name,
			_operand: me.fields[i].type,
			_handler: me.fields[i].handler,
			model: me.fields[i].model,
			value: me.fields[i].value,
			display: me.fields[i].display,
			listeners: {
				click: function (x, e) {
					x.up().up().setText(x.text);
					var cbo_operand = panel.items.items[5];
					cbo_operand.menu.removeAll();
					cbo_operand.setText('');
					/*
					type: text
					*/
					if (x._operand == "text") {
						for (var j = 0; j < TFilterBoxMenu.menuTexte.length; j++) {
							var btn = Ext.create('Ext.menu.Item', {
								text: TFilterBoxMenu.menuTexte[j].text,
								listeners: {
									click: function (z, e) {
										z.up().up().setText(z.text);
									}
								}
							});
							cbo_operand.menu.add(btn);
						};

						panel.items.items[7].show();
						if (x._handler) {
							panel.items.items[7].getEl().dom.addEventListener('click', function () {
								if (window[x._handler]) window[x._handler](panel.items.items[7]);
								else alert(x._handler + ' not found!');
							});
						}

						panel.items.items[9].hide();
					};
					/*
					type: keywords
					*/
					if (x._operand == "keywords") {
						for (var j = 0; j < TFilterBoxMenu.menuKeywords.length; j++) {
							var btn = Ext.create('Ext.menu.Item', {
								text: TFilterBoxMenu.menuKeywords[j].text,
								listeners: {
									click: function (z, e) {
										z.up().up().setText(z.text);
									}
								}
							});
							cbo_operand.menu.add(btn);
						};

						panel.items.items[7].show();
						if (x._handler) {
							panel.items.items[7].getEl().dom.addEventListener('click', function () {
								if (window[x._handler]) window[x._handler](panel.items.items[7]);
								else alert(x._handler + ' not found!');
							});
						}

						panel.items.items[9].hide();
					};
					/*
					type: boolean
					*/
					if (x._operand == "boolean") {
						for (var j = 0; j < TFilterBoxMenu.menuBoolean.length; j++) {
							var btn = Ext.create('Ext.menu.Item', {
								text: TFilterBoxMenu.menuBoolean[j].text,
								listeners: {
									click: function (z, e) {
										z.up().up().setText(z.text);
									}
								}
							});
							cbo_operand.menu.add(btn);
						};
						panel.items.items[7].hide();
						panel.items.items[9].hide();
					};
					/*
					type: date
					*/
					if (x._operand == "date") {
						for (var j = 0; j < TFilterBoxMenu.menuNumDate.length; j++) {
							var btn = Ext.create('Ext.menu.Item', {
								text: TFilterBoxMenu.menuNumDate[j].text,
								listeners: {
									click: function (z, e) {
										z.up().up().setText(z.text);
									}
								}
							});
							cbo_operand.menu.add(btn);
						};
						panel.items.items[7].hide();
						panel.remove(panel.items.items[9]);
						panel.insert(9, {
							xtype: "datefield",
							width: 247,
							hidden: false
						});
						if (Ext.getVersion().major >= 5) panel.updateLayout();
						else panel.doLayout();
						panel.items.items[9].show();

					};
					/*
					type: tagfield
					*/
					if (x._operand == "tagfield") {
						for (var j = 0; j < TFilterBoxMenu.menuChoix.length; j++) {
							var btn = Ext.create('Ext.menu.Item', {
								text: TFilterBoxMenu.menuChoix[j].text,
								listeners: {
									click: function (z, e) {
										z.up().up().setText(z.text);
									}
								}
							});
							cbo_operand.menu.add(btn);
						};
						panel.remove(panel.items.items[9]);
						panel.insert(9, {
							xtype: "tagfield",
							selectOnFocus: false,
							editable: false,
							queryMode: 'local',
							width: 247,
							store: App.store.create(x.model, {
								autoLoad: true
							}),
							displayField: x.display,
							valueField: x.value,
							hidden: false
						});
						if (Ext.getVersion().major >= 5) panel.updateLayout();
						else panel.doLayout();
						panel.items.items[9].show();
						panel.items.items[7].hide();
					};
					/*
					type: choice
					*/
					if (x._operand == "choice") {
						for (var j = 0; j < TFilterBoxMenu.menuChoix.length; j++) {
							var btn = Ext.create('Ext.menu.Item', {
								text: TFilterBoxMenu.menuChoix[j].text,
								listeners: {
									click: function (z, e) {
										z.up().up().setText(z.text);
									}
								}
							});
							cbo_operand.menu.add(btn);
						};
						panel.remove(panel.items.items[9]);
						panel.insert(9, {
							xtype: "combo",
							editable: false,
							queryMode: 'local',
							width: 247,
							store: App.store.create(x.model, {
								autoLoad: true
							}),
							displayField: x.display,
							valueField: x.value,
							hidden: false
						});
						if (Ext.getVersion().major >= 5) panel.updateLayout();
						else panel.doLayout();
						panel.items.items[9].show();
						panel.items.items[7].hide();
					};
				}
			}
		});
	};
	if (obj) {
		if (obj.field) {
			panel.items.items[3].menu.up().setText(obj.field);
			for (var k = 0; k < panel.items.items[3].menu.items.items.length; k++) {
				var element = panel.items.items[3].menu.items.items[k];
				if (element.text == obj.field) {
					panel.items.items[3].menu.items.items[k].fireEvent('click', panel.items.items[3].menu.items.items[k]);
					var cbo_operand = panel.items.items[5];
					cbo_operand.setText(obj.operand);
					cbo_operand.fireEvent('click', cbo_operand);

					if (element._operand == "text") {
						panel.items.items[7].setValue(obj.value);
					};
					if (element._operand == "choice") {
						panel.items.items[9].getStore().on('load', function (s) {
							panel.items.items[9].setValue(obj.value);
						});


					};
					if (element._operand == "date") {
						panel.items.items[9].setValue(obj.value);
					};
					if (element._operand == "boolean") {

					};

				}
			};
		};

	};

	if (Ext.getVersion().major >= 5) p.updateLayout();
	else p.doLayout();
};

Ext.define("Ext.ux.FilterItems", {
	extend: 'Ext.Panel',
	alias: 'widget.FilterItems',
	initComponent: function () {
		this.layout = "hbox";
		this.padding = 5;
		this.border = false;
		this.frame = false;
		this.height = 30;
		this.bodyStyle = 'background:transparent;';
		this.items = [{
				xtype: "splitbutton",
				height: 22,
				width: 50,
				itemId: "FilterNext",
				hidden: !this.showOperand,
				menu: new Ext.menu.Menu({
					items: [{
							text: 'ET'
						},
						{
							text: 'OU'
						}
					]
				})
			},
			{
				html: "&nbsp;",
				border: false,
				width: 50,
				hidden: this.showOperand,
				bodyStyle: 'background:transparent;'
			},
			{
				html: "&nbsp;",
				border: false,
				bodyStyle: 'background:transparent;'
			},
			{
				xtype: "splitbutton",
				height: 22,
				width: 150,
				itemId: "FilterId",
				menu: new Ext.menu.Menu({
					items: [

					]
				})
			},
			{
				html: "&nbsp;",
				border: false,
				frame: false,
				bodyStyle: 'background:transparent;'
			},
			{
				xtype: "splitbutton",
				height: 22,
				width: 180,
				itemId: "FilterOperand",
				menu: new Ext.menu.Menu({
					items: []
				})
			},
			{
				html: "&nbsp;",
				border: false,
				bodyStyle: 'background:transparent;'
			},
			{
				xtype: "textfield",
				width: 250
			},
			{
				html: "&nbsp;",
				border: false,
				bodyStyle: 'background:transparent;'
			},
			{
				xtype: "combo",
				editable: false,
				queryMode: 'local',
				width: 247,
				hidden: true
			},
			{
				html: "&nbsp;",
				border: false,
				bodyStyle: 'background:transparent;'
			},
			{
				html: "&nbsp;",
				border: false,
				bodyStyle: 'background:transparent;'
			},
			{
				xtype: "button",
				text: "Ajouter",
				itemId: "FilterAdd",
				height: 22
			},
			{
				html: "&nbsp;",
				border: false,
				bodyStyle: 'background:transparent;'
			},
			{
				xtype: "button",
				text: "Supprimer",
				hidden: !this.showOperand,
				itemId: "FilterMinus",
				height: 22
			},
			{
				html: "&nbsp;",
				border: false,
				bodyStyle: 'background:transparent;'
			},
			{
				xtype: "button",
				text: "Exécuter",
				hidden: false,
				itemId: "FilterLaunch",
				height: 22
			}
		];
		this.callParent(arguments);
	}
});

Ext.define("Ext.ux.FilterBox", {
	extend: 'Ext.Panel',
	alias: 'widget.FilterBox',
	addFilter: function (item) {
		if (this.items.items.length > 0) {
			var old = this.items.items[this.items.items.length - 1];
			old.items.items[12].hide();
			old.items.items[14].hide();
			old.items.items[16].hide();
			TFilterBoxAdd(this, true, item);
		} else TFilterBoxAdd(this, false, item);
	},
	initComponent: function () {

		//this.region = "north";
		this.layout = "vbox";
		this.bodyCls = "BackgroundSystem";
		this.height = 150;
		this.width = "100%";
		this.setScrollable(true);
		this.items = [];
		var p = this;
		this.tbar = ['->', {
			xtype: "button",
			text: "reset",
			handler: function (me) {
				while (me.up('panel').items.items[0]) {
					me.up('panel').remove(me.up('panel').items.items[0]);
				}
				TFilterBoxAdd(me.up('panel'), false);
			}
		}, {
			xtype: "button",
			iconCls: "download",
			text: "<b>sauvegarder</b>",
			handler: function () {
				var objs = [];
				for (var i = 0; i < p.items.items.length; i++) {
					var ff = {};
					var filter = p.items.items[i];

					var title = filter.items.items[3];

					var item = "";
					for (var j = 0; j < p.fields.length; j++) {
						if (title.getText() == p.fields[j].name) item = p.fields[j].field;
					};
					ff.name = item;

					var option = filter.items.items[5];

					if (option.getText() == "est") ff.value = " = \"ITEM\" ";
					if (option.getText() == "n'est pas") ff.value = " <> \"ITEM\" ";
					if (option.getText() == "est supérieur à") ff.value = " > \"ITEM\" ";
					if (option.getText() == "est inférieur à") ff.value = " < \"ITEM\" ";
					if (option.getText() == "est supérieur ou égal à") ff.value = " >= \"ITEM\" ";
					if (option.getText() == "est inférieur ou égal à") ff.value = " <= \"ITEM\" ";
					if (option.getText() == "est vrai") ff.value = " = 1 ";
					if (option.getText() == "est faux") ff.value = " = 0 ";
					if (option.getText() == "contient") ff.value = " LIKE \"%ITEM%\" ";
					if (option.getText() == "ne contient pas") ff.value = " NOT LIKE \"%ITEM%\" ";
					if (option.getText() == "commence par") ff.value = " LIKE \"ITEM%\" ";
					if (option.getText() == "se termine par") ff.value = " LIKE \"%ITEM\" ";

					if (option.getText() == "Contient au moins un des mots") ff.value = "=";
					if (option.getText() == "Contient tous ces mots") ff.value = "+";
					if (option.getText() == "ne contient pas ces mots") ff.value = "-";

					var value = filter.items.items[7];
					var nvalue = filter.items.items[9];
					var my_value = "";
					if (nvalue.xtype == "datefield") {
						var d = nvalue.getValue();
						//.toISOString().slice(0, 19).split('T')[0];
						var curr_date = d.getDate();
						var curr_month = d.getMonth() + 1;
						var curr_year = d.getFullYear();
						var my_value = curr_year + '-' + curr_month + '-' + curr_date;
					} else my_value = nvalue.getValue();

					if (!ff.value) return;

					if (value.isVisible()) {
						ff.value = ff.value.replace(/ITEM/g, value.getValue());
					} else {
						ff.value = ff.value.replace(/ITEM/g, my_value);
					};
					if (i > 0) {
						if (filter.items.items[0].getText() == "ET") ff.operator = " AND ";
						else ff.operator = " OR ";
					};
					objs.push(ff);
					p.fireEvent('save', objs);
				};
			}
		}];

		this.hidden = true;
		this.callParent(arguments);
		var me = this;
		this.on('show', function (p) {
			function add(obj) {
				var old = p.items.items[p.items.items.length - 1];
				old.items.items[12].hide();
				old.items.items[14].hide();
				old.items.items[16].hide();
				TFilterBoxAdd(p, true);
			};
			p.removeAll();
			if (p.default) {
				TFilterBoxAdd(p, false, p.default);
				add({});
			} else TFilterBoxAdd(p, false);

		});
	}
});