const redis = require('redis')

const client = redis.createClient({
    port: 6379,
    host: "redis"
})

client.on('connect', ()=> {
    console.log("Client Connected to Redis....!!!")
})

client.on('ready', ()=> {
    console.log("Client Connected to Redis and ready to use...!!!")
})


client.on('error', (err) => {
    console.log(err.message)
})

client.on('end', ()=> {
    console.log("Client Disconnected from Redis....!!!")
})

process.on('SIGINT', ()=>{
    client.quit()
})

module.exports = client