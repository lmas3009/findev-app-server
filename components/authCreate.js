import redis from "redis";
import client from "../redis.client.js";
import UID from "../uid.js";

const authCreate = (data, res) => {
  const { imageUrl, email, googleId } = data;

  client.hGetAll(googleId, redis.print).then((result) => {
    if (result.email !== email) {
      client
        .hSet(
          googleId,
          {
            imageUrl,
            email,
            googleId,
            uid: UID()
          },
          redis.print
        )
        .then((result) => {
          client
            .lPush("Developers", googleId, redis.print)
            .then((result) => {
              res.send({
                status: true,
                message: "Developer created successfully",
                token: googleId,
              });
            })
            .catch((err) => {
              res.send({
                status: false,
                message: err,
              });
            });
        })
        .catch((err) => {
          res.send({
            status: false,
            message: err,
          });
        });
    }
    else{
      res.send({
        status: true,
        message: "Developer already exists",
        token: googleId,
      });
    }
  });
};

export default authCreate;
