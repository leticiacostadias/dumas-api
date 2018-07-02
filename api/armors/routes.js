const Armor = require('./model')

const routes = [{
  method: 'GET',
  path: '/armors',
  handler: (request) => {
    const { query, limit, sort } = request.mongo

    return Armor
      .find(query)
      .sort(sort)
      .limit(limit)
  }
}, {
  method: 'POST',
  path: '/armors',
  handler: (request) => {
    const armor = new Armor(request.payload)

    return armor.save()
  }
}]

module.exports = routes
