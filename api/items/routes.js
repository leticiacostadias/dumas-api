const Item = require('./model')

const routes = [{
  method: 'GET',
  path: '/items',
  handler: () => Item.find()
}, {
  method: 'POST',
  path: '/items',
  handler: (request) => {
    const item = new Item(request.payload)

    return item.save()
  }
}]

module.exports = routes
