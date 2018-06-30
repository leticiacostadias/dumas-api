const Weapon = require('./model')

const routes = [{
  method: 'GET',
  path: '/weapons',
  handler: () => Weapon.find()
}, {
  method: 'POST',
  path: '/weapons',
  handler: (request, reply) => {
    const weapon = new Weapon(request.payload)

    return weapon.save()
  }
}]

module.exports = routes
