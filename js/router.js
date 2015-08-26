/**
 * Created by root on 17/08/15.
 */
Backbone.emulateHTTP = true;
Router = Backbone.Router.extend({
    routes:{                                     // Ejemplos de coincidencias:
        ""           : "index",
        "home"           : "index",
        "product_in"      : "product_in",
        "product_out"      : "product_out",
        "catalogue"      : "catalogue",
        "user_history"      : "user_history",
        "login"      : "login",
        '*path':  'defaultRoute'
    },
    index: function(){
        console.log('index***');
        logicConfig.setFirstConfiguration('index');
    },
    product_in: function(){
        console.log('debts');
    },
    product_out: function(){
        console.log('new_debts');
    },
    login: function(){
        console.log('login');
    },
    user_history: function(){
        console.log('user_history');
    },
    catalogue: function(){
        console.log('catalogue');
    },
    defaultRoute: function(){
        console.log('default');
        App.router.navigate('home', {trigger: true})
    }
});