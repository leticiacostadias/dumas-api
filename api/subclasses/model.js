const mongoose = require('mongoose')
const { Schema } = mongoose

const SubclassSchema = new Schema({
  name: String,
  subclass_group: String,
  page: String,
  desc: [String],
  features: [{
    _id: false,
    title: String,
    level: Number,
    page: String,
    desc: [String]
  }]
})

module.exports = mongoose.model('Subclass', SubclassSchema)
