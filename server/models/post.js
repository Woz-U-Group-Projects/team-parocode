const mongoose = require('mongoose');

var Post = mongoose.model('Post', {
    title: {
        type: String
    },
    body: {
        type: String
    }
});

//post.associate = function(models) {
//    post.hasMany(models.users,{
//        foreignKey:'_id'
//    });
//};
module.exports = { Post };