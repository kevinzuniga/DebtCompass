/**
 * Created by root on 17/08/15.
 */
Backbone.emulateHTTP = true;
Router = Backbone.Router.extend({
    routes:{                                     // Ejemplos de coincidencias:
        ""           : "index",
        "home"           : "index",
        "debts"      : "debts",
        "new_debt"      : "new_debt",
        "login"      : "login",
        "signup"      : "signup",
        '*path':  'defaultRoute'
    },
    index: function(){
        console.log('index***');
        var currentUser = Parse.User.current();
        if (currentUser) {
            // do stuff with the user
            console.log('current!');
        } else {
            // show the signup or login page
            console.log('not current!');
        }
    },
    debts: function(){
        console.log('debts');
    },
    new_debts: function(){
        console.log('new_debts');
    },
    login: function(){
        console.log('login');
    },
    signup: function(){
        console.log('signup');
    },
    defaultRoute: function(){
        console.log('default');
        App.router.navigate('home', {trigger: true})
    }
});