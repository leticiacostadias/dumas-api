const mongoose = require('mongoose')
const { Schema } = mongoose
const { ObjectId } = Schema.Types

const SubclassSchema = new Schema({
  name: String,
  subclass_group: String,
  desc: [String],
  features: [ObjectId]
})

module.exports = mongoose.model('Subclass', SubclassSchema)
