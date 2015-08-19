/**
 * Created by root on 17/08/15.
 */
var viewConfig={
    templates:['login'],
    htmlTemplates: {},
    loadTemplates:function(templates,callback){
        $.each(templates, function( index, name ) {
            //$.get('views/' + name + '.html', function(data) {
            //    viewConfig.htmlTemplates[name] = data;
            //})
            $.get('views/' + name + '.html', function(data) {
                console.log( "success" );
                viewConfig.htmlTemplates[name] = data;
            })
                .done(function() {
                    console.log( "second success" );
                    if ((index+1) == templates.length) callback();

                })
                .fail(function() {
                    console.log( "error" );
                })
                .always(function() {
                    console.log( "finished" );
                });
        });
    },
    get: function(name) {
        return this.htmlTemplates[name];
    }
}