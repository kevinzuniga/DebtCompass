/**
 * Created by root on 17/08/15.
 */
var viewConfig={
    errors:{
        currentHtmlElement: false
    },
    templates:['login','top_panel','center_panel'],
    htmlTemplates: {},
    addError: function(error){
        this.errors.currentHtmlElement.html(
            '<h1>'+error+'</h1>'
        );
        this.errors.currentHtmlElement.show();
    },
    cleanErrors: function(){
        this.errors.currentHtmlElement.hide();
    },
    loadTemplates:function(templates,callback){
        $.each(templates, function( index, name ) {
            //$.get('views/' + name + '.html', function(data) {
            //    viewConfig.htmlTemplates[name] = data;
            //})
            $.get('views/' + name + '.html', function(data) {
                //console.log( "success" );
                viewConfig.htmlTemplates[name] = data;
            })
                .done(function() {
                    //console.log( "second success" );
                    if ((index+1) == templates.length) callback();

                })
                .fail(function() {
                    //console.log( "error" );
                })
                .always(function() {
                    //console.log( "finished" );
                });
        });
    },
    get: function(name) {
        return this.htmlTemplates[name];
    },
    showPage: function(type){
        switch(type) {
            case 'login':
                viewLogin.showLoginPage();
                break;
            case 'home':
                viewHome.showLoginPage();
                break;
        }
    }
}