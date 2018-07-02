const Subclass = require('./model')

const routes = [{
  method: 'GET',
  path: '/subclasses',
  handler: (request) => {
    const { query, sort, limit } = request.mongo

    return Subclass
      .find(query)
      .sort(sort)
      .limit(limit)
  }
}, {
  method: 'POST',
  path: '/subclasses',
  handler: (request) => {
    const subclass = new Subclass(request.payload)

    return subclass.save()
  }
}]

module.exports = routes
