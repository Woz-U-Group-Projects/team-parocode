const passport = require('passport');
const localStrategy = require('passport-local').Strategy
const mongoose = require('mongoose');

var User = mongoose.model('User');

passport.use('login',
    new localStrategy({ usernameField: 'email', passwordField: 'password' },
        (username, password, done) => {
            console.log(username, password);
            User.findOne({ email: username }, 
                (err, user) => {
                    console.log(user);
                    if (err)
                        return done(err);
                    //unknown user
                    else if (!user)
                        return done(null, false, { message: 'Email is not registered' });
                    //wrong password
                    else if (!user.verifyPassword(password))
                        return done(null, false, { message: 'Wrong password.' });
                    //authentication succeeded
                    else
                        return done(null, user);
                });
        })
);
