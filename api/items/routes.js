const Item = require('./model')

const routes = [{
  method: 'GET',
  path: '/items',
  handler: (request) => {
    const { query, limit, sort } = request.mongo

    return Item
      .find(query)
      .sort(sort)
      .limit(limit)
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
