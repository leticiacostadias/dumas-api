const mongoose = require('mongoose')
const { Schema } = mongoose
const { ObjectId } = Schema.Types

const WeaponSchema = new Schema({
  name: String,
  price: String,
  desc: String,
  weight: {
    kg: Number,
    lb: Number
  },
  damage: [{
    dice: String,
    // bonus: Number,
    damage_type: String,
    condition: String
  }],
  type: { type: String, match: /simples||marcial/ },
  range: { type: String, match: /corpo-a-corpo||distância/ },
  melee_range: {
    meters: Number,
    feets: Number,
    squares: Number
  },
  shoot_range: {
    min: {
      meters: Number,
      feets: Number,
      squares: Number
    },
    max: {
      meters: Number,
      feets: Number,
      squares: Number
    }
  },
  throw_range: {
    min: {
      meters: Number,
      feets: Number,
      squares: Number
    },
    max: {
      meters: Number,
      feets: Number,
      squares: Number
    }
  },
  properties: [ObjectId],
  page: String
})

module.exports = mongoose.model('Weapon', WeaponSchema)
