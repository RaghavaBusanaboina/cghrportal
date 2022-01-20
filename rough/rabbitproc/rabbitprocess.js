require("../helpers/log")();
//require("../helpers/mongodb")();
const rediscon = require("../redis/rediscon");

const amw = require("../middleware/async");
const { History } = require("../models/history");
const { Register } = require("../models/register");
const { Refhistory } = require("../models/refhistory");
const { alert_Developers } = require("../helpers/telegram");
const winston = require("winston");
const tige = require("../middleware/tigerbalm");
const push = require("../middleware/push");
const teleg = require("../helpers/telegram");
const { getExactLength } = require("cg_number_format");
const gensalt = require("../middleware/genid");
const pay = require("../helpers/payout");
const { Sabong } = require("../models/game");
const settlement = require("../helpers/settlement");
const { Agent } = require("../models/admin/agent");
const { Transfer } = require("../models/transfer");
const { AdminReg } = require("../models/admin/adreg");
const { Cashout } = require("../models/cashout");
const stat = require("../helpers/statsfunc");

module.exports = {
  betGame: amw(async (betdata) => {
    try {
      var { amount, username, hid, gameid, bettype } = betdata;

      var chuser = await Register.findOne({ username: username });
      if (chuser.balance >= amount) {
        var baln = parseFloat(chuser.balance) - parseFloat(amount);
        baln = getExactLength(baln, 2);

        winston.info(
          " Bet Placed for game : " +
            gameid +
            "Bet Amount : " +
            amount +
            "User balnce Before Balance:" +
            chuser.balance +
            "User balnce After Balance:" +
            baln +
            ", For User " +
            username
        );
        // user balance update
        await Register.findOneAndUpdate(
          { username: username },
          { balance: baln }
        );
        await rediscon.userprofile(chuser.username);

        // bet adding to game
        var obj = {
          date: Date.now(),
          user: username,
          betid: gensalt("SABET"),
          amount: amount,
        };

        await Sabong.findOneAndUpdate(
          { gameid: gameid },
          { $push: { [`${bettype}`]: obj } }
        );
        var gamenew = await Sabong.findOne({ gameid: gameid });
        var betcou = gamenew[`${bettype}`];

        var sumbetamount =
          +parseFloat(gamenew.totalbetamt[`${bettype}`]) + +parseFloat(amount);

        var str = `betcount.${bettype}`;
        var totalstr = `totalbetamt.${bettype}`;
        await Sabong.findOneAndUpdate(
          { gameid: gameid },
          { $set: { [str]: betcou.length }, [totalstr]: sumbetamount }
        );
        await rediscon.Sabong();
        await rediscon.Arena(gamenew.arenaid);
        await rediscon.userBets(chuser.userid);
        //history
        var objhist = {
          userid: chuser.userid,
          username: chuser.username,
          gameid: gameid,
          amount: amount,
          date: Date.now(),
          hid: hid,
          betid: obj.betid,
          type: "Bet",
          comment: "Bet Placed on : " + bettype,
          status: "Success",
        };

        const hy = await new History(objhist);
        await hy.save();
        await pay.payoutadd(gameid);
      }
    } catch (error) {
      await teleg.alert_Dev(error);
      //throw new Error(error);d
    }
  }),
  prizeAdd: amw(async (commdata) => {
    try {
      var { bet, gameid } = commdata;

      const user = await Register.findOne({ username: bet.user });
      const game = await Sabong.findOne({ gameid: gameid, status: "finished" });
      if (user) {
        var histcheck = await History.findOne({
          betid: bet.betid,
          type: "Prize",
        });
        if (!histcheck && bet.settle === "pending") {
          var winnr = game.winner;
          var payou = game.payoutper[`${winnr}`];

          var amountper = getExactLength(
            parseFloat(bet.amount) * parseFloat(payou),
            2
          );
          var balnce = getExactLength(
            parseFloat(user.balance) + parseFloat(amountper),
            2
          );

          winston.info(
            " Prize Money Added for game : " +
              gameid +
              "Amount: " +
              getExactLength(amountper, 2) +
              "User balnce Before Balance:" +
              user.balance +
              "User balnce After Balance:" +
              balnce +
              ", For User " +
              bet.user
          );
          var upbaln = await Register.updateOne(
            { username: bet.user },
            { balance: balnce }
          );

          //redis update

          var hid = gensalt("HIST");
          var objhist = {
            userid: user.userid,
            username: user.username,
            gameid: gameid,
            amount: amountper,
            date: Date.now(),
            hid: hid,
            betid: bet.betid,
            type: "Prize",
            comment: "Prize money added for game : " + gameid,
            status: "Success",
          };
          const hy = await new History(objhist);
          await hy.save();

          if (game.winner === "red") {
            await Sabong.updateOne(
              { gameid: gameid, "red.betid": bet.betid },
              { $set: { "red.$.settle": "settled" } }
            );
          } else if (game.winner === "white") {
            await Sabong.updateOne(
              { gameid: gameid, "white.betid": bet.betid },
              { $set: { "white.$.settle": "settled" } }
            );
          }
          await rediscon.userprofile(bet.user);
        }
      }
    } catch (error) {
      await teleg.alert_Dev(error);
      // throw new Error(error);
    }
  }),

  cancelrefundAdd: amw(async (commdata) => {
    try {
      var { gameid, bet, name } = commdata;
      const user = await Register.findOne({ username: bet.user });
      if (user) {
        var histcheck = await History.findOne({
          betid: bet.betid,
          type: "Refund",
        });
        if (!histcheck) {
          var balnce = getExactLength(
            parseFloat(user.balance) + parseFloat(bet.amount),
            2
          );
          winston.info(
            " Refund Added for game : " +
              gameid +
              "Amount: " +
              bet.amount +
              "User balnce Before Balance:" +
              user.balance +
              "User balnce After Balance:" +
              balnce +
              ", For User " +
              bet.user
          );
          await Register.updateOne({ username: bet.user }, { balance: balnce });
          //redis update

          await rediscon.userprofile(bet.user);
          if (name === "white") {
            await Sabong.updateOne(
              { gameid: gameid, "white.betid": bet.betid },
              { $set: { "white.$.settle": "refund" } }
            );
          } else if (name === "red") {
            await Sabong.updateOne(
              { gameid: gameid, "red.betid": bet.betid },
              { $set: { "red.$.settle": "refund" } }
            );
          }

          var hid = gensalt("HIST");
          var objhist = {
            userid: user.userid,
            username: user.username,
            gameid: gameid,
            amount: bet.amount,
            date: Date.now(),
            hid: hid,
            betid: bet.betid,
            type: "Refund",
            comment: "Refund for game : " + gameid,
            status: "Success",
          };

          const hy = await new History(objhist);
          await hy.save();
        }
      }
    } catch (error) {
      await teleg.alert_Dev(error);
      // throw new Error(error);
    }
  }),
  refcommAdd: amw(async (refcom) => {
    try {
      var {
        level1,
        level2,
        level3,
        level1com,
        level2com,
        level3com,
        gameid,
        user,
        betid,
      } = refcom;
      //agentcomm
      var rref1 = await Agent.findOne({ agentid: level1 });
      if (rref1) {
        var histcheck = await Refhistory.findOne({
          betid: betid,
          agentid: rref1.agentid,
          type: "Refcom",
        });
        if (!histcheck) {
          var baln = +parseFloat(rref1.balance) + +parseFloat(level1com);
          baln = getExactLength(baln, 2);
          winston.info(
            " Commission Added for game : " +
              gameid +
              "Amount: " +
              level1com +
              "Agent balance Before Balance:" +
              rref1.balance +
              "Agent balance After Balance:" +
              baln +
              ", For Agent " +
              tige.decrypt(rref1.email)
          );
          await Agent.findOneAndUpdate({ agentid: level1 }, { balance: baln });
          // await rediscon.userprofile(rref1.phone);
          var usr = await Register.findOne({ username: user });
          var hid = gensalt("REHIST");
          var objhist = {
            agentid: rref1.agentid,
            email: tige.decrypt(rref1.email),
            agentname: rref1.agentname,
            master: usr.masteragent,
            agent: usr.agent,
            fromusername: usr.username,
            fromuserid: usr.userid,
            gameid: gameid,
            amount: getExactLength(level1com, 2),
            hid: hid,
            betid: betid,
            date: Date.now(),
            comment: "Referral Commission Added",
            status: "Success",
            type: "Refcom",
          };

          const hy = await new Refhistory(objhist);
          await hy.save();
        }
      }
      //masteragent
      var rref2 = await Agent.findOne({ agentid: level2 });
      if (rref2) {
        var histcheck1 = await Refhistory.findOne({
          betid: betid,
          agentid: rref2.agentid,
          type: "Refcom",
        });

        if (!histcheck1) {
          var baln1 = +parseFloat(rref2.balance) + +parseFloat(level2com);
          baln1 = getExactLength(baln1, 2);
          winston.info(
            " Commission Added for game : " +
              gameid +
              "Amount: " +
              level2com +
              "Masteragent balance Before Balance:" +
              rref2.balance +
              "Masteragent balance After Balance:" +
              baln +
              ", For Masteragent " +
              tige.decrypt(rref2.email)
          );
          await Agent.findOneAndUpdate(
            { agentid: rref2.agentid },
            { balance: baln1 }
          );

          // await rediscon.userprofile(rref2.phone);
          var usr = await Register.findOne({ username: user });
          var hid1 = gensalt("REHIST");
          var objhist1 = {
            agentid: rref2.agentid,
            email: tige.decrypt(rref2.email),
            agentname: rref2.agentname,
            master: usr.masteragent,
            agent: usr.agent,
            fromusername: usr.username,
            fromuserid: usr.userid,
            gameid: gameid,
            amount: getExactLength(level2com, 2),
            hid: hid1,
            betid: betid,
            date: Date.now(),
            comment: "Referral Commission Added",
            status: "Success",
            type: "Refcom",
          };

          const hy = await new Refhistory(objhist1);
          await hy.save();
        }
      }
      //super agent
      var rref3 = await Agent.findOne({ agentid: level3 });
      if (rref3) {
        var histcheck2 = await Refhistory.findOne({
          betid: betid,
          agentid: rref3.agentid,
          type: "Refcom",
        });

        if (!histcheck2) {
          var baln3 = +parseFloat(rref3.balance) + +parseFloat(level3com);
          baln3 = getExactLength(baln3, 2);
          winston.info(
            " Commission Added for game : " +
              gameid +
              "Amount: " +
              level3com +
              "Superagent balance Before Balance:" +
              rref3.balance +
              "Superagent balance After Balance:" +
              baln +
              ", For Superagent " +
              tige.decrypt(rref3.email)
          );
          await Agent.findOneAndUpdate({ agentid: level3 }, { balance: baln3 });

          // await rediscon.userprofile(rref2.phone);
          var usr = await Register.findOne({ username: user });
          var hid = gensalt("REHIST");
          var objhist2 = {
            agentid: rref3.agentid,
            email: tige.decrypt(rref3.email),
            agentname: rref3.agentname,
            master: usr.masteragent,
            agent: usr.agent,
            fromusername: usr.username,
            fromuserid: usr.userid,
            gameid: gameid,
            amount: getExactLength(level3com, 2),
            hid: hid,
            betid: betid,
            date: Date.now(),
            comment: "Referral Commission Added",
            status: "Success",
            type: "Refcom",
          };

          const hy = await new Refhistory(objhist2);
          await hy.save();
        }
      }
    } catch (error) {
      await teleg.alert_Dev(error);
      //throw new Error(error);
    }
  }),

  tranSuper: amw(async (data) => {
    try {
      var { sender, receiver, amount, comment } = data;
      const adsend = await AdminReg.findOne({ adminid: sender });
      const userch = await Agent.findOne({ agentid: receiver });
      if (userch) {
        if (amount > 0) {
          var baln = getExactLength(
            parseFloat(amount) + parseFloat(userch.balance),
            2
          );
          await Agent.findOneAndUpdate(
            { agentid: receiver },
            { balance: baln }
          );
          //add hist
          var hid = gensalt("TRAN");
          var objhist = {
            userid: userch.agentid,
            from: adsend.adminid,
            to: userch.agentid,
            fromname: adsend.name,
            toname: userch.agentname,
            amount: amount,
            hid: hid,
            date: Date.now(),
            comment: "Transfer Amount",
            usercomment: `${comment}`,
            status: "Success",
            type: "Deposit",
          };

          const hy = await new Transfer(objhist);
          await hy.save();
          await stat.updateStats("cashout", amount);
        }
      }
    } catch (error) {
      await teleg.alert_Dev(error);
      // throw new Error(error);
    }
  }),
  tranMaster: amw(async (data) => {
    try {
      var { sender, receiver, amount, comment } = data;

      const adsend = await Agent.findOne({ agentid: sender });
      const userch = await Agent.findOne({ agentid: receiver });
      if (userch) {
        if (amount > 0) {
          if (adsend.balance >= amount) {
            //add balnce to receiver
            var baln = getExactLength(
              parseFloat(amount) + parseFloat(userch.balance),
              2
            );
            await Agent.findOneAndUpdate(
              { agentid: userch.agentid },
              { balance: baln }
            );
            var hid = gensalt("TRAN");
            var objhist = {
              userid: userch.agentid,
              from: adsend.agentid,
              to: userch.agentid,
              fromname: adsend.agentname,
              toname: userch.agentname,
              amount: amount,
              hid: hid,
              date: Date.now(),
              comment: "Transfer Amount",
              usercomment: `${comment}`,
              status: "Success",
              type: "Deposit",
            };
            const hy1 = await new Transfer(objhist);
            await hy1.save();
            //deduct balance to sender
            var baln2 = getExactLength(
              parseFloat(adsend.balance) - parseFloat(amount),
              2
            );
            await Agent.findOneAndUpdate(
              { agentid: adsend.agentid },
              { balance: baln2 }
            );
            //add hist
            var hid = gensalt("TRAN");
            var objhist = {
              userid: adsend.agentid,
              from: adsend.agentid,
              to: userch.agentid,
              fromname: adsend.agentname,
              toname: userch.agentname,
              amount: amount,
              hid: hid,
              date: Date.now(),
              comment: "Transfer Amount",
              usercomment: `${comment}`,
              status: "Success",
              type: "Withdraw",
            };
            const hy = await new Transfer(objhist);
            await hy.save();
          }
        }
      }
    } catch (error) {
      await teleg.alert_Dev(error);
      // throw new Error(error);
    }
  }),
  tranUser: amw(async (data) => {
    try {
      var { sender, receiver, amount, comment } = data;
      const adsend = await Agent.findOne({ agentid: sender });
      const userch = await Register.findOne({ userid: receiver });
      if (userch) {
        if (amount > 0) {
          if (adsend.balance >= amount) {
            //add balnce to receiver
            var baln = getExactLength(
              parseFloat(amount) + parseFloat(userch.balance),
              2
            );
            await Register.findOneAndUpdate(
              { userid: receiver },
              { balance: baln }
            );
            var hid = gensalt("TRAN");
            var objhist = {
              userid: userch.userid,
              from: adsend.agentid,
              to: userch.userid,
              fromname: adsend.agentname,
              toname: userch.username,
              amount: amount,
              hid: hid,
              date: Date.now(),
              comment: "Transfer Amount",
              usercomment: `${comment}`,
              status: "Success",
              type: "Deposit",
            };
            const hy1 = await new Transfer(objhist);
            await hy1.save();
            await rediscon.userprofile(userch.username);
            //deduct balance to sender
            var baln2 = getExactLength(
              parseFloat(adsend.balance) - parseFloat(amount),
              2
            );
            await Agent.findOneAndUpdate(
              { agentid: adsend.agentid },
              { balance: baln2 }
            );

            //add hist
            var hid = gensalt("TRAN");
            var objhist = {
              userid: adsend.agentid,
              from: adsend.agentid,
              to: userch.userid,
              fromname: adsend.agentname,
              toname: userch.username,
              amount: amount,
              hid: hid,
              date: Date.now(),
              comment: "Transfer Amount",
              usercomment: `${comment}`,
              status: "Success",
              type: "Withdraw",
            };
            const hy = await new Transfer(objhist);
            await hy.save();
          }
        }
      }
    } catch (error) {
      await teleg.alert_Dev(error);
      // throw new Error(error);
    }
  }),
  tranusrtoUser: amw(async (data) => {
    try {
      var { sender, receiver, amount, comment, hid } = data;
      const adsend = await Register.findOne({ userid: sender });
      const userch = await Register.findOne({ userid: receiver });
      if (userch) {
        if (amount > 0) {
          if (adsend.balance >= amount) {
            //add balnce to receiver
            var baln = getExactLength(
              parseFloat(amount) + parseFloat(userch.balance),
              2
            );
            await Register.findOneAndUpdate(
              { userid: receiver },
              { balance: baln }
            );
            var objhist = {
              userid: userch.userid,
              from: adsend.userid,
              to: userch.userid,
              fromname: adsend.username,
              toname: userch.username,
              amount: amount,
              hid: hid,
              date: Date.now(),
              comment: "Transfer Amount",
              usercomment: `${comment}`,
              status: "Success",
              type: "Deposit",
            };
            const hy1 = await new Transfer(objhist);
            await hy1.save();
            await rediscon.userprofile(userch.username);
            //deduct balance to sender
            var baln2 = getExactLength(
              parseFloat(adsend.balance) - parseFloat(amount),
              2
            );
            await Register.findOneAndUpdate(
              { userid: adsend.userid },
              { balance: baln2 }
            );
            //add hist
            var hid = gensalt("TRAN");
            var objhist = {
              userid: adsend.userid,
              from: adsend.userid,
              to: userch.userid,
              fromname: adsend.username,
              toname: userch.username,
              amount: amount,
              hid: hid,
              date: Date.now(),
              comment: "Transfer Amount",
              usercomment: `${comment}`,
              status: "Success",
              type: "Withdraw",
            };
            const hy = await new Transfer(objhist);
            await hy.save();
            await rediscon.userprofile(adsend.username);
          }
        }
      }
    } catch (error) {
      await teleg.alert_Dev(error);
      // throw new Error(error);
    }
  }),
  //cashout super to admin
  cashoutSuper: amw(async (data) => {
    try {
      var { sender, amount, comment } = data;
      const userch = await Agent.findOne({ agentid: sender });
      if (userch) {
        if (amount > 0) {
          var baln = getExactLength(
            parseFloat(userch.balance) - parseFloat(amount),
            2
          );
          await Agent.findOneAndUpdate({ agentid: sender }, { balance: baln });
          //add hist
          var hid = gensalt("TRAN");
          var objhist = {
            agentid: userch.agentid,
            fromname: userch.agentname,
            amount: amount,
            hid: hid,
            date: Date.now(),
            comment: `${comment}`,
            status: "Un-Paid",
            type: "Cashout",
          };

          const hy = await new Cashout(objhist);
          await hy.save();
          await stat.updateStats("cashin", amount);
        }
      }
    } catch (error) {
      await teleg.alert_Dev(error);
      // throw new Error(error);
    }
  }),

  //cashout agent to agent
  cashouAgent: amw(async (data) => {
    try {
      var { sender, receiver, amount, comment } = data;
      const adsend = await Agent.findOne({ agentid: sender });
      const userch = await Agent.findOne({ agentid: receiver });
      if (userch) {
        if (amount > 0) {
          if (adsend.balance >= amount) {
            //add balnce to receiver
            var baln = getExactLength(
              parseFloat(amount) + parseFloat(userch.balance),
              2
            );
            await Agent.findOneAndUpdate(
              { agentid: receiver },
              { balance: baln }
            );
            var hid = gensalt("TRAN");
            var objhist = {
              userid: userch.agentid,
              from: adsend.agentid,
              to: userch.agentid,
              fromname: adsend.agentname,
              toname: userch.agentname,
              amount: amount,
              hid: hid,
              date: Date.now(),
              comment: "Transfer Amount",
              usercomment: `${comment}`,
              status: "Success",
              type: "Cashout-Deposit",
            };
            const hy1 = await new Transfer(objhist);
            await hy1.save();
            //deduct balance to sender
            var baln2 = getExactLength(
              parseFloat(adsend.balance) - parseFloat(amount),
              2
            );
            await Agent.findOneAndUpdate(
              { agentid: adsend.agentid },
              { balance: baln2 }
            );
            //add hist
            var hid = gensalt("TRAN");
            var objhist = {
              userid: adsend.agentid,
              from: adsend.agentid,
              to: userch.agentid,
              fromname: adsend.agentname,
              toname: userch.agentname,
              amount: amount,
              hid: hid,
              date: Date.now(),
              comment: "Transfer Amount",
              usercomment: `${comment}`,
              status: "Success",
              type: "Cashout-Withdraw",
            };
            const hy = await new Transfer(objhist);
            await hy.save();
          }
        }
      }
    } catch (error) {
      await teleg.alert_Dev(error);
      // throw new Error(error);
    }
  }),
  //cashout user to agent
  cashoutUser: amw(async (data) => {
    try {
      var { sender, receiver, amount, comment } = data;
      const userch = await Agent.findOne({ agentid: receiver });
      const adsend = await Register.findOne({ userid: sender });
      if (userch) {
        if (amount > 0) {
          if (adsend.balance >= amount) {
            //add balnce to receiver agent
            var baln = getExactLength(
              parseFloat(amount) + parseFloat(userch.balance)
            );
            await Agent.findOneAndUpdate(
              { agentid: receiver },
              { balance: baln }
            );
            var hid = gensalt("TRAN");
            var objhist = {
              userid: userch.agentid,
              to: userch.agentid,
              from: adsend.userid,
              toname: userch.agentname,
              fromname: adsend.username,
              amount: amount,
              hid: hid,
              date: Date.now(),
              comment: "Transfer Amount",
              usercomment: `${comment}`,
              status: "Success",
              type: "Cashout-Deposit",
            };
            const hy1 = await new Transfer(objhist);
            await hy1.save();

            //deduct balance to sender
            var baln2 = getExactLength(
              parseFloat(adsend.balance) - parseFloat(amount),
              2
            );
            await Register.findOneAndUpdate(
              { userid: sender },
              { balance: baln2 }
            );

            //add hist
            var hid = gensalt("TRAN");
            var objhist = {
              userid: adsend.userid,
              to: userch.agentid,
              from: adsend.userid,
              toname: userch.agentname,
              fromname: adsend.username,
              amount: amount,
              hid: hid,
              date: Date.now(),
              comment: "Transfer Amount",
              usercomment: `${comment}`,
              status: "Success",
              type: "Cashout-Withdraw",
            };
            const hy = await new Transfer(objhist);
            await hy.save();
            await rediscon.userprofile(adsend.username);
          }
        }
      }
    } catch (error) {
      await teleg.alert_Dev(error);
      // throw new Error(error);
    }
  }),
};
