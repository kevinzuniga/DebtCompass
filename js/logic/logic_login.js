/**
 * Created by root on 17/08/15.
 */
var logicLogin= {
    login: function(username,password){
        viewConfig.cleanErrors();
        Parse.User.logIn(username, password, {
            success: function(user) {
                // Do stuff after successful login.
                console.log(user);
            },
            error: function(user, error) {
                // The login failed. Check error to see why.
                logicConfig.errors.queue.push(error.message);
            }
        });
    }
}