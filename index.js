const Hapi = require('hapi')
const mongoose = require('mongoose')

const config = require('./config')
const { queryHandler } = require('./utils')

const server = Hapi.server({
  port: 3000,
  host: 'localhost'
})

const init = async () => {
  mongoose.connect('mongodb://dumasuser:Lcd98649911@ds121871.mlab.com:21871/dumas')
  mongoose.connection.once('open', async () => {
    console.log('Connected to dumas database!')

    server.ext({
      type: 'onRequest',
      method: (request, reply) => {
        if (request.method === 'get') {
          queryHandler(request)
        }

        return reply.continue
      }
    })

    await server.register({
      plugin: require('good'),
      options: config.good
    })
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
