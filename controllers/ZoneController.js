var Zone = require('../models/Zone');

module.exports = {
    find: function(params, callback){
        Zone.find(params, (err, zones) => {
            if(err){
                callback(err, null);
                return;
            }

            callback(null, zones);
        })
    },

    findById: function(id, callback){
        Zone.findById(id, (err, zone) => {
            if(err){
                callback(err, null);
                return;
            }

            callback(null, zone);
        })
    },

    create: function(params, callback){
        var zips = params['zipCodes'].split(',');
        var newZips = [];
        zips.forEach(zip => {
            newZips.push(zip.trim());
        });

        params['zipCodes'] = newZips;

        Zone.create(params, (err, zone) => {
            if(err){
                callback(err, null);
                return;
            }

            callback(null, zone);
        })
    },

    update: function(id, params, callback){
        Zone.findByIdAndUpdate(id, params, {new:true}, (err, zone) => {
            if(err){
                callback(err, null);
                return;
            }

            callback(null, zone);
        })
    },

    delete: function(id, callback){
        Zone.findByIdAndRemove(id, (err, zone) => {
            if(err){
                callback(err, null);
                return;
            }

            callback(null, null);
        })
    }
}