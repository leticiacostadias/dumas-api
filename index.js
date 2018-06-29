const Hapi = require('hapi')
const mongoose = require('mongoose')

const server = Hapi.server({
  port: 3000,
  host: 'localhost'
})
const init = async () => {
  server.ext('onRequest', function (request, reply) {
    console.log(`Request received: ${request.path}`)
    return reply.continue
  })

  mongoose.connect('mongodb://dumasuser:Lcd98649911@ds121871.mlab.com:21871/dumas')
  mongoose.connection.once('open', async () => {
    console.log('Connected to dumas database!')
    await server.start()
    console.log(`Server running at: ${server.info.uri}`)
  })
}
const routes = require('./api/routes')

server.route(routes)

process.on('unhandledRejection', (err) => {
  console.log(err)
  process.exit(1)
})

init()
