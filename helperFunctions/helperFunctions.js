/** @format */

const { round } = require("lodash");

function totalHoursMins(list) {
  // var holiday = "00:00";

  let mins = 0;
  let hours = 0;
  for (var i = 0; i < list.length; i++) {
    hours += eval(list[i].split(":")[0]);
    mins += eval(list[i].split(":")[1]);
  }
  while (mins > 60) {
    mins -= 60;
    hours += 1;
  }
  return `${hours}:${mins}`;
}
function calWorkingHours(start, end) {
  diffmins = 0;
  diffhours = 0;
  var holiday = "00:00";
  if (
    start !== "hoilday" &&
    end !== "hoilday" &&
    start !== "Leave" &&
    end !== "Leave"
  ) {
    starthours = eval(start.split(":")[0]);
    startminsINhours = eval(start.split(":")[1]) / 60;
    endhours = eval(end.split(":")[0]);
    endminsINhours = eval(end.split(":")[1]) / 60;
    if (endhours < starthours)
      throw new Error("out time should be greater than in time");
    t_end = endhours + endminsINhours;
    t_start = starthours + startminsINhours;
    diff = String(t_end - t_start);
    diff = diff.split(".");
    if (diff.length == 2) {
      diffmins = round(eval("0." + diff[1]) * 60, 2);
      diffhours = eval(diff[0]);
      return `${diffhours}:${diffmins}`;
    }
    diffhours = eval(diff[0]);
    return `${diffhours}:${diffmins}`;
  } else return `${diffhours}:${diffmins}`;
}
function empIdGeneration(empid, idCode) {
  let idstring = empid.split(idCode);
  var num = 0;
  let id = `${Number(idstring[1]) + 1}`;
  if (id.length === 1) {
    num = `000${id}`;
  } else if (id.length === 2) {
    num = `00${id}`;
  } else if (id.length === 3) {
    num = `0${id}`;
  } else if (id.length === 4) {
    num = `${id}`;
  }
  return num;
}

exports.totalHoursMins = totalHoursMins;
exports.calWorkingHours = calWorkingHours;
exports.empIdGeneration = empIdGeneration;