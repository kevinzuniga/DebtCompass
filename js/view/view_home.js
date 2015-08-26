/**
 * Created by root on 23/08/15.
 */
var viewHome={
    showLoginPage: function(){
        $('body').html(viewConfig.get('top_panel')+viewConfig.get('center_panel')).promise().done(function(){
            //your callback logic / code here
            $('.center_panel').html('Bienvenido '+logicConfig.currentUser.getUsername());
        });
        this.activateEvents();
    },
    activateEvents: function(){

    }
}