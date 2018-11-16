const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports.signup = (req, res, next) => {
    var user = new User();
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.email = req.body.email;
    user.password = req.body.password;
    user.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send (['Duplicate E-Mail address found.']);
            else
                return next(err);
        }
    });
}