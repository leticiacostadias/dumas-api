const MagicSchool = require('./model')

const routes = [{
  method: 'GET',
  path: '/magic-schools',
  handler: (request) => {
    const { query, limit, sort } = request.mongo

    return MagicSchool
      .find(query)
      .sort(sort)
      .limit(limit)
  }
}, {
  method: 'POST',
  path: '/magic-schools',
  handler: (request, reply) => {
    const magicSchool = new MagicSchool(request.payload)

    return magicSchool.save()
  }
}, {
  method: 'PUT',
  path: '/magic-schools/{id}',
  handler: (request, reply) => {
    return MagicSchool.findOneAndUpdate(
      { _id: request.params.id },
      request.payload
    )
  }
}]

module.exports = routes
