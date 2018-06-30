const mongoose = require('mongoose')
const { Schema } = mongoose

const ArmorSchema = new Schema({
  name: String,
  price: String,
  weigth: {
    kg: Number,
    lb: Number
  },
  type: { type: String, match: /leve||média||pesada||escudo/ },
  desc: String,
  armor_class: {
    base: Number,
    dexterity: Boolean,
    max: Number
  },
  min_strength: Number,
  stealth_disadvantage: { type: Boolean, default: false },
  page: String,
})

module.exports = mongoose.model('Armor', ArmorSchema)
