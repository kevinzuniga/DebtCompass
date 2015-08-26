/**
 * Created by root on 17/08/15.
 */
var viewLogin={
    showLoginPage: function(){
        $('body').html(viewConfig.get('login'));
        this.activateEvents();
    },
    activateEvents: function(){
        viewConfig.errors.currentHtmlElement = $('.login_errors');
        $('.login_page input[type="submit"]').click(function(){
            var email=$('.login_page input[name="email"]').val()
            var password=$('.login_page input[name="password"]').val()
            logicLogin.login(email,password);
        });
    }
}