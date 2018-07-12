let scrap = require('./scrap')

exports.track = async (req, reply) => {
    let params = req.query
    
    let track = await scrap.track(params)

    reply.code(200).send(track)
}