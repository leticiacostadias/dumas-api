const mongoose = require('mongoose')
const { Schema } = mongoose

const SpellSchema = new Schema({
  name: String,
  desc: [String],
  higher_level: String,
  page: String,
  range: {
    feets: Number,
    meters: Number,
    squares: Number
  },
  duration: String,
  casting_time: String,
  level: Number,
  school: String,
  ritual: Boolean,
  concentration: Boolean,
  components: [String],
  material: [String],
  classes: [String],
  subclasses: [String]
})

module.exports = mongoose.model('Spell', SpellSchema)
