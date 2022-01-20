const proce = require("./rabbitprocess");
const config = require("config");
var q = "Cockxing";
var rbser = config.get("rabbitser");
var open = require("amqplib").connect(rbser);
// "amqps://wjvztyfu:PduWqK9C2GVbCIYMASqSuteTFglqAlDa@puffin.rmq2.cloudamqp.com/wjvztyfu"
//var open = require("amqplib").connect("amqp://codegene:codegene@localhost");
var connection;
// Publisher
open
  .then(function (conn) {
    connection = conn;
    return conn.createChannel();
  })
  .then(async function (ch) {
    await ch.prefetch(1);
    await ch.qos(1);
    return ch.assertQueue(q, { maxPriority: 10 }).then(function (ok) {
      return ch.consume(q, async function (msg) {
        if (msg !== null) {
          const content = JSON.parse(msg.content);
          const type = content.type;
          if (type === "BetGame") {
            proce.betGame(JSON.parse(msg.content));
            setTimeout(() => {
              ch.ack(msg);
            }, 500);
          } else if (type === "PrizeAdd") {
            proce.prizeAdd(JSON.parse(msg.content));
            setTimeout(() => {
              ch.ack(msg);
            }, 1000);
          } else if (type === "RefundAdd") {
            proce.refundAdd(JSON.parse(msg.content));
            setTimeout(() => {
              ch.ack(msg);
            }, 1000);
          } else if (type === "RefComm") {
            proce.refcommAdd(JSON.parse(msg.content));
            setTimeout(() => {
              ch.ack(msg);
            }, 1000);
          } else if (type === "Transuper") {
            proce.tranSuper(JSON.parse(msg.content));
            setTimeout(() => {
              ch.ack(msg);
            }, 1000);
          } else if (type === "Tranmast") {
            proce.tranMaster(JSON.parse(msg.content));
            setTimeout(() => {
              ch.ack(msg);
            }, 1000);
          } else if (type === "Tranuser") {
            proce.tranUser(JSON.parse(msg.content));
            setTimeout(() => {
              ch.ack(msg);
            }, 1000);
          } else if (type === "Transtouser") {
            proce.tranusrtoUser(JSON.parse(msg.content));
            setTimeout(() => {
              ch.ack(msg);
            }, 1000);
          } else if (type === "Cashousuper") {
            proce.cashoutSuper(JSON.parse(msg.content));
            setTimeout(() => {
              ch.ack(msg);
            }, 1000);
          } else if (type === "Cashouagent") {
            proce.cashouAgent(JSON.parse(msg.content));
            setTimeout(() => {
              ch.ack(msg);
            }, 1000);
          } else if (type === "Cashouuser") {
            proce.cashoutUser(JSON.parse(msg.content));
            setTimeout(() => {
              ch.ack(msg);
            }, 1000);
          } else if (type === "CancelRefundAdd") {
            proce.cancelrefundAdd(JSON.parse(msg.content));
            setTimeout(() => {
              ch.ack(msg);
            }, 1000);
          } else {
            ch.ack(msg);
          }
        }
      });
    });
    // .then(function () {
    //   setTimeout(function () {
    //     connection.close();
    //   }, 1500);
    // });
  })

  .catch(console.warn);
