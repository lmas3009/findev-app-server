import redis from "redis"
import client from "../redis.client.js"

const getSkills = (data,res) => {
    const {id} = data;

    client.lRange(id+"_Skills",0,-1,redis.print).then((result)=>{
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

export default getSkills;