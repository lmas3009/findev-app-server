import redis from "redis"
import dotenv from "dotenv"

dotenv.config();

const client = redis.createClient({
    socket: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT
    },
    password: process.env.REDIS_PASSWORD
});

client.on('error', (err) => console.log('Redis Client Error', err));

await client.connect();

export default client;