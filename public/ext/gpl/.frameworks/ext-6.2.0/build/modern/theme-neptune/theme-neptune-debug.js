Ext.define('Ext.theme.neptune.Component', {
    override: 'Ext.Component'
}, function() {
    Ext.namespace('Ext.theme.is').Neptune = true;
    Ext.theme.name = 'Neptune';
    Ext.theme.getDocCls = function() {
        return Ext.platformTags.desktop ? '' : 'x-big';
    };
});

Ext.define('Ext.theme.neptune.Toolbar', {
    override: 'Ext.Toolbar',
    config: {
        defaultButtonUI: 'action'
    }
});

Ext.define('Ext.theme.neptune.tip.ToolTip', {
    override: 'Ext.tip.ToolTip',
    bodyBorder: false
});
