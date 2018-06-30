const MagicSchool = require('./model')

const routes = [{
  method: 'GET',
  path: '/magic-schools',
  handler: (request, reply) => {
    return MagicSchool.find()
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
