/**
 * Created by root on 05/08/15.
 */
var Loader = function () { }
Loader.prototype = {
    require: function (scripts,pathJs,stylesheets,pathCss, callback) {
        var that = this;
        this.pathJs= pathJs;
        this.pathCss = pathCss;
        this.loadCountJs      = 0;
        this.totalRequiredJs  = scripts.length;
        this.loadCountCss      = 0;
        this.totalRequiredCss  = stylesheets.length;
        this.callback       = callback;

        that.writeScript(scripts);
        that.writeStyleSheet(stylesheets);
    },
    loadedJs: function (evt,scripts) {
        this.loadCountJs++;
        if (this.loadCountJs == this.totalRequiredJs){
            if (typeof this.callback == 'function') this.callback.call();
        } else {
            this.writeScript(scripts);
        }
    },
    loadedCss: function (evt,stylesheets) {
        this.loadCountCss++;
        if (this.loadCountCss < this.totalRequiredCss){
            this.writeStyleSheet(stylesheets);
        }
    },
    writeScript: function (scripts) {
        var self = this;
        var s = document.createElement('script');
        s.type = "text/javascript";
        s.async = true;
        s.src = self.pathJs + scripts[self.loadCountJs];
        console.log('self.pathJs: '+self.pathJs);
        var head = document.getElementsByTagName('head')[0];
        head.appendChild(s);
        s.addEventListener('load', function (e) { self.loadedJs(e,scripts); }, false);
    },
    writeStyleSheet: function (stylesheets) {
        var self = this;
        var head  = document.getElementsByTagName('head')[0];
        var link  = document.createElement('link');
        //link.id   = cssId;
        link.rel  = 'stylesheet';
        link.async = true;
        link.type = 'text/css';
        link.href = self.pathCss+stylesheets[self.loadCountCss];
        console.log('self.pathCss: '+self.pathCss);
        link.media = 'all';
        head.appendChild(link);
        link.addEventListener('load', function (e) { self.loadedCss(e,stylesheets); }, false);
    }
}
var App={
    router: null,
    cssPath: 'css/',
    jsPath: '',
    cssFiles: ['global.css'],
    jsFiles: ['http://code.jquery.com/jquery-1.11.3.min.js',
        'http://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.5.2/underscore-min.js',
        'http://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.0.0/backbone-min.js',
        'http://www.parsecdn.com/js/parse-1.5.0.min.js',
        'js/view/view_config.js',
        'js/view/view_login.js',
        'js/logic/logic_config.js',
        'js/logic/logic_login.js',
        'js/router.js'],
    init: function(){
        //startBackbone();
        Parse.initialize("jo4UTDjv1B89QUuFm5gQFtPoYqNVZlMGPjSzgkVt", "5EdtQcRzulKcGD8tTfvsGNkbgsUIhEgK9SMxN8rZ");
        App.router = new Router();
        Backbone.history.start();
    }
}
window.onload = function() {
    var l = new Loader();
    l.require(App.jsFiles,App.jsPath,App.cssFiles,App.cssPath,
        function() {
            // Callback
            console.log('All Scripts and StyleSheets Loaded');
            viewConfig.loadTemplates(viewConfig.templates,function(){
                App.init();
            });
        });
};