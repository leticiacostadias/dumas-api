const mongoose = require('mongoose')
const { Schema } = mongoose

const SubclassSchema = new Schema({
  name: String,
  subclass_group: String,
  desc: [String],
  features: [{
    _id: false,
    title: String,
    desc: [String],
    page: String
  }],
  page: String
})

module.exports = mongoose.model('Subclass', SubclassSchema)
