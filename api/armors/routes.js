const Armor = require('./model')

const routes = [{
  method: 'GET',
  path: '/armors',
  handler: () => Armor.find()
}, {
  method: 'POST',
  path: '/armors',
  handler: (request) => {
    const armor = new Armor(request.payload)

    return armor.save()
  }
}]

module.exports = routes
