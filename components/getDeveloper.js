import redis from "redis"
import client from "../redis.client.js"

const getDevelopers = (res) => {

    client.lRange("Developers",0,-1,redis.print).then((result)=>{
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

export default getDevelopers;