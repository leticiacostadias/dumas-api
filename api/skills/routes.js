const Skill = require('./model')

const routes = [{
  method: 'GET',
  path: '/skills',
  handler: (request) => {
    const { query, limit, sort } = request.mongo

    return Skill
      .find(query)
      .sort(sort)
      .limit(limit)
  }
}, {
  method: 'POST',
  path: '/skills',
  handler: (request) => {
    const skill = new Skill(request.payload)

    return skill.save()
  }
}]

module.exports = routes
