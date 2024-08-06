const {Client} = require('pg')

const client = new Client({
    host: 'localhost',
    user: 'postgres',
    port: 5432,
    password: 'Inthiyaz9293',
    database: 'testDB',
})

client.connect((err) => {
    if (err) {
        console.log('connect error', err.stack)
    } else {
        console.log('connected')
    }
})

module.exports = client;