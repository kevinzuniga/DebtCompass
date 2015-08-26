/**
 * Created by root on 17/08/15.
 */
var logicConfig={
    errors:{
        queue: [],
        initialize: function() {
            console.log('initialize!');
            this.queue.push = function (){
                //Do what you want here...
                viewConfig.addError(arguments[0]);
                return Array.prototype.push.apply(this,arguments);
            }
        }
    },
    currentUser:false,
    setFirstConfiguration: function(argument){
        this.activateEvents();
        if (this.verifySession()){
            viewConfig.showPage('home');
        }else{
            viewConfig.showPage('login');
        }
    },
    activateEvents: function(){
        //this.errors.initialize();
        this.errors.queue.push = function (){
            //Do what you want here...
            viewConfig.addError(arguments[0]);
            return Array.prototype.push.apply(this,arguments);
        }
    },
    verifySession: function(){
        if (this.currentUser) return true
        else {
            this.currentUser = Parse.User.current();
            if (this.currentUser) return true
            else return false;
        }
    }
}