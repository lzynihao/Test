/**
 * Created by zyli on 7/28/15.
 * app.js
 */
var readline = require('readline');
var calc = require("./calc");
var rl = readline.createInterface({
    input: process.stdin
});

var W = {};
var P = {};
var E = {};
var result = [];

rl.on('line', function (cmd) {
    if (cmd.indexOf("Result") != -1) {
        var resultArray = cmd.split(":");
        var numberOne = resultArray[1];
        var numberTwo = resultArray[2];
        var numberThree = resultArray[3];

        var eNumbers = numberOne + "," + numberTwo;

        calc.calcWE(W, numberOne, 0.15);
        calc.calcP(P, resultArray.slice(1), 0.12);
        calc.calcWE(E, eNumbers, 0.18);
    } else {
        if (cmd.indexOf("W") != -1) {
            var housNum = cmd.split(":")[2];
            var betMoney = cmd.split(":")[3];
            var array = [betMoney];
            if (W.hasOwnProperty(housNum)) {
                W[housNum].push(betMoney);
            } else {
                W[housNum] = array;
            }
        } else if (cmd.indexOf("P") != -1) {
            var housNum1 = cmd.split(":")[2];
            var betMoney1 = cmd.split(":")[3];
            var array1 = [betMoney1];
            if (P.hasOwnProperty(housNum1)) {
                P[housNum1].push(betMoney1);
            } else {
                P[housNum1] = array1;
            }
        } else if (cmd.indexOf("E") != -1) {
            var key = cmd.split(":")[2];
            var betMoney2 = cmd.split(":")[3];

            if (E.hasOwnProperty(key)) {
                E[key].push(betMoney2);
            } else {
                E[key] = [betMoney2];
            }
        }
    }
});