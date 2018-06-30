const mongoose = require('mongoose')
const { Schema } = mongoose

const MagicSchoolSchema = new Schema({
  name: String,
  desc: String,
  page: String
})

module.exports = mongoose.model('MagicSchool', MagicSchoolSchema)
