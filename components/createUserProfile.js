import redis from "redis";
import client from "../redis.client.js";

const CreateuserProfile = (data, res) => {
  const { country, skills, username, id } = data;

  
  client
    .HGETALL(id, redis.print)
    .then((result) => {
      client.lRange(id + "_Skills", 0, -1).then((result) => {
        skills.forEach((element) => {
          if (result.includes(element)) {
          } else {
            client.lPush(id + "_Skills", element, redis.print);
          }
        });
      });
      client.hSet(id + "_Country", country, redis.print);
      client
        .hSet(
          id,
          "username",
          username,
          "skills",
          id + "_Skills",
          "country",
          id + "_Country",

          redis.print
        )
        .then((result) => {
          res.send({
            status: true,
            message: "UserProfile created successfully",
          });
        })
        .catch((err) => {
          res.send({
            status: false,
            message: "unable to create userprofile",
          });
        });
    })
    .catch((err) => {
      res.send({
        status: false,
        message: "unable to create userprofile",
      });
    });
};

export default CreateuserProfile;
