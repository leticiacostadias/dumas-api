const WeaponProperty = require('./model')

const routes = [{
  method: 'GET',
  path: '/weapon-properties',
  handler: () => WeaponProperty.find()
}, {
  method: 'POST',
  path: '/weapon-properties',
  handler: (request) => {
    const weaponProperty = new WeaponProperty(request.payload)

    return weaponProperty.save()
  }
}]

module.exports = routes
