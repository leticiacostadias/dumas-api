const mongoose = require('mongoose')
const { Schema } = mongoose
const { ObjectId } = Schema.Types

const ItemSchema = new Schema({
  name: String,
  price: String,
  weight: {
    kg: Number,
    lb: Number
  },
  desc: String,
  contains: [ObjectId],
  page: String,
})

module.exports = mongoose.model('Item', ItemSchema)
