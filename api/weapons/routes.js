const Weapon = require('./model')

const routes = [{
  method: 'GET',
  path: '/weapons',
  handler: (request) => {
    const { query, limit, sort } = request.mongo

    return Weapon
      .find(query)
      .sort(sort)
      .limit(limit)
  }
}, {
  method: 'POST',
  path: '/weapons',
  handler: (request, reply) => {
    const weapon = new Weapon(request.payload)

    return weapon.save()
  }
}]

module.exports = routes
