const fastify = require('fastify')()
const cors = require('cors')
const port = process.env.PORT || 5000

fastify.use(cors())

fastify.listen(port, '0.0.0.0', (err) => {
    if (err) throw err

    console.log(`server listening on ${fastify.server.address().port}`)
})

require('./src/routes')(fastify)