const mongoose = require('mongoose')
const { Schema } = mongoose
const { ObjectId } = Schema.Types

const ClassSchema = new Schema({
  name: String,
  page: String,
  hit_dice: Number,
  proficiency: [ObjectId],
  proficiency_choices: [{
    from: [ObjectId],
    choose: Number
  }],
  saving_throws: [ObjectId],
  starting_equipment: [ObjectId],
  subclasses: [ObjectId],
  features: [ObjectId]
  /* class_levels: [{}] */
})

module.exports = mongoose.model('Class', ClassSchema)
