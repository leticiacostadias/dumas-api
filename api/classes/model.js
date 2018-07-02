const mongoose = require('mongoose')
const { Schema } = mongoose
const { ObjectId } = Schema.Types

const ClassSchema = new Schema({
  name: String,
  page: String,
  hit_dice: Number,
  proficiencies: {
    armors: [ObjectId],
    weapons: [ObjectId],
    saving_throws: [String],
    tools: {
      default: [ObjectId],
      choose: [{
        _id: false,
        from: [ObjectId],
        quantity: Number
      }]
    },
    skills: [{
      _id: false,
      from: [ObjectId],
      quantity: Number
    }]
  },
  equipment: {
    default: [ObjectId],
    choose: [{
      _id: false,
      from: [ObjectId],
      quantity: Number
    }]
  },
  subclasses: [ObjectId],
  features: [{
    _id: false,
    title: String,
    desc: [String],
    page: String
  }]
  /* class_levels: [{}] */
})

module.exports = mongoose.model('Class', ClassSchema)
