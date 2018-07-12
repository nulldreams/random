let request = require('./request')

exports.track = async function (params) {
    let { body, response } = await request.get(`https://focusmusic.fm/api/tracks.php?offset=${params.offset}&channel=${params.channel}`)

    if (response.statusCode !== 200) {
        return { sucesso: false }
    }
    let track = JSON.parse(body)

    return new Promise((resolve, reject) => {
        return resolve(track)
    })
}