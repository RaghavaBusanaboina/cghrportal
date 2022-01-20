const proce = require("./rabbitprocess");
const config = require("config");
const Queue = require("bull");

const processQueue = new Queue("process", {
  redis: {
    host: config.get("redishost"),
    port: config.get("redisport"),
    password: config.get("redissecret"),
  },
  limiter: {
    max: 1,
    duration: 300,
  },
});

processQueue.process(async (job) => {
  const msg = job.data;

  if (msg.data !== null) {
    const content = JSON.parse(msg.data);
    const type = content.type;

    if (type === "BetGame") {
      proce.betGame(content);
    } else if (type === "PrizeAdd") {
      proce.prizeAdd(content);
    } else if (type === "RefundAdd") {
      proce.refundAdd(content);
    } else if (type === "RefComm") {
      proce.refcommAdd(content);
    } else if (type === "Transuper") {
      proce.tranSuper(content);
    } else if (type === "Tranmast") {
      proce.tranMaster(content);
    } else if (type === "Tranuser") {
      proce.tranUser(content);
    } else if (type === "Transtouser") {
      proce.tranusrtoUser(content);
    } else if (type === "Cashousuper") {
      proce.cashoutSuper(content);
    } else if (type === "Cashouagent") {
      proce.cashouAgent(content);
    } else if (type === "Cashouuser") {
      proce.cashoutUser(content);
    } else if (type === "CancelRefundAdd") {
      proce.cancelrefundAdd(content);
    }
  }
});
