const mong = require('mongoose')
require('dotenv').config()

module.exports.mongooseInit = async () => {
    try {
        await mong.connect(process.env.DB_CONN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
    }catch (e){
        throw new Error(e)
    }
}
