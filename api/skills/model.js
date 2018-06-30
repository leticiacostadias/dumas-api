const mongoose = require('mongoose')
const { Schema } = mongoose

const SkillSchema = new Schema({
  name: String,
  ability: String,
  desc: [String],
  page: String
})

module.exports = mongoose.model('Skill', SkillSchema)
