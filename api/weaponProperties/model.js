const mongoose = require('mongoose')
const { Schema } = mongoose

const WeaponPropertySchema = new Schema({
  name: String,
  desc: String,
  page: String,
})

module.exports = mongoose.model('WeaponProperty', WeaponPropertySchema)