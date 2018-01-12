var Comment = require('../models/Comment');

module.exports = {
    find: function(params, callback){
        Comment.find(params, (err, comments) => {
            if(err){
                callback(err, null);
                return;
            }

            callback(null, comments);
        })
    },

    findById: function(id, callback){
        Comment.findById(id, (err, comment) => {
            if(err){
                callback(err, null);
                return;
            }

            callback(null, comment);
        })
    },

    create: function(params, callback){

        Comment.create(params, (err, comment) => {
            if(err){
                callback(err, null);
                return;
            }

            callback(null, comment);
        })
    },

    update: function(id, params, callback){
        Comment.findByIdAndUpdate(id, params, {new:true}, (err, comment) => {
            if(err){
                callback(err, null);
                return;
            }

            callback(null, comment);
        })
    },

    delete: function(id, callback){
        Comment.findByIdAndRemove(id, (err, comment) => {
            if(err){
                callback(err, null);
                return;
            }

            callback(null, null);
        })
    }
}