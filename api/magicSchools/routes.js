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
    const { name, desc } = request.payload
    const magicSchool = new MagicSchool({ name, desc })

    return magicSchool.save()
  }
}]

module.exports = routes
