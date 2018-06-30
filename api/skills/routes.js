const Skill = require('./model')

const routes = [{
  method: 'GET',
  path: '/skills',
  handler: () => Skill.find()
}, {
  method: 'POST',
  path: './skills',
  handler: (request) => {
    const skill = new Skill(request.payload)

    return skill.save()
  }
}]

module.exports = routes
