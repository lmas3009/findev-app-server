import redis from "redis"
import client from "../redis.client.js"

const getUser = (data,res) => {
    const {id} = data;

    client.hGetAll(id,redis.print).then((result)=>{
        res.send({
            result: result,
            status:true
        })
    }).catch((err)=>{
        res.send({
            status:false,
            message: err
        })
    })
}

export default getUser;