/** @format */
//
const redis = require("redis");
const client = redis.createClient({
  url: "redis://redis-12100.c270.us-east-1-3.ec2.cloud.redislabs.com:12100",
  password: "b2hjj0OeKFipw1KnS2bPkNMB6KgnHoCW",
});

client.on("error", (err) => {
  console.log("Error", err.name);
});
client.on("connect", () => {
  console.log("redis Connected!!");
});
client.connect();
module.exports = {
  test: async () => {
    client.set("welcomee", JSON.stringify("hi from redis"), (err, sucess) => {
      if (err) throw err;
      console.log("sucess-->", sucess);
      client.quit();
    });
  },
  // client
  //   .get("welcomee", (err, sucess) => {
  //     if (err) throw err;
  //     console.log("sucesssss", sucess);
  //     client.quit();
  //   })

  //   .catch((err) => console.error(`${err}`));
};
