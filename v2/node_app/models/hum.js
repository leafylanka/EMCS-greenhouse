var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var h_data = new Schema({

  time : { type: String},
  val: { type: String}

});

module.exports = mongoose.model('hum_data', h_data);
