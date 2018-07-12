const api = require('./controller')

module.exports = (fastify) => {
  fastify.addContentTypeParser('*', (req, done) => {
    let data = ''
    req.on('data', chunk => { data += chunk })
    req.on('end', () => {
      done(data)
    })
  })

  fastify.get('/tracks/:params', api.track)
  // fastify.post('/abc', api.something)
}