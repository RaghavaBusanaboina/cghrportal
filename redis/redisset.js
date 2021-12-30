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
    await client.hSet("1", {valuee:"h", hello123:"v"}).catch((err) => {
      console.log(err);
    });
  },
};
