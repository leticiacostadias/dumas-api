const Item = require('./model')

const routes = [{
  method: 'GET',
  path: '/items',
  handler: (request) => {
    console.log('On the handler:')
    console.log(request.query)
    return Item.find(request.query)
  }
}, {
  method: 'POST',
  path: '/items',
  handler: (request) => {
    const item = new Item(request.payload)

    return item.save()
  }
}]

module.exports = routes
