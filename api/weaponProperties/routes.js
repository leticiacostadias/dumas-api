const WeaponProperty = require('./model')

const routes = [{
  method: 'GET',
  path: '/weapon-properties',
  handler: (request) => {
    const { query, limit, sort } = request.mongo

    return WeaponProperty
      .find(query)
      .sort(sort)
      .limit(limit)
  }
}, {
  method: 'POST',
  path: '/weapon-properties',
  handler: (request) => {
    const weaponProperty = new WeaponProperty(request.payload)

    return weaponProperty.save()
  }
}]

module.exports = routes
