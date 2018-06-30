const mongoose = require('mongoose')
const { Schema } = mongoose
const { ObjectId } = Schema.Types

const WeaponSchema = new Schema({
  name: String,
  price: String,
  weight: {
    kg: Number,
    lb: Number
  },
  damage: [{
    dice: String,
    bonus: Number,
    type: String,
    condition: String
  }],
  type: { type: String, match: /simples||marcial/ },
  range: { type: String, match: /corpo-a-corpo||distância/ },
  properties: [ObjectId],
  page: String
})

module.exports = mongoose.model('Weapon', WeaponSchema)
