exports.calcWE = function (obj, wHouse, rate) {
    var totalWE = 0;
    var winTotal = 0;
    for (var w in obj) {
        var temp = totalWE;
        var array = obj[w];
        for (var i = 0; i < array.length; i++) {
            totalWE += Number(array[i]);
        }
        if (wHouse === w) {
            winTotal = totalWE - temp;
        }
    }
    var winTimes = totalWE * (1 - rate) / winTotal;

    if (wHouse.length > 1) {
        console.log("Exacta:" + wHouse.toString() + ":$" + winTimes.toFixed(2));
    } else {
        console.log("Win:" + wHouse + ":$" + winTimes.toFixed(2));
    }

}

exports.calcP = function (obj, pHouses, rate) {
    var totalP = 0;
    var pTotal = [];
    for (var w in obj) {
        var temp = totalP;
        var array = obj[w];
        for (var i = 0; i < array.length; i++) {
            totalP += Number(array[i]);
        }

        for (var j = 0; j < pHouses.length; j++) {
            if (pHouses[j] === w) {
                pTotal.push(totalP - temp);
                break;
            }
        }
    }

    var length = pTotal.length;
    var singleMoney = totalP * (1 - rate) / length;

    for (var j = 0; j < length; j++) {
        var phouse = pHouses[j];
        var index = Number(phouse) - 1;
        console.log("Place:" + phouse + ":$" + (singleMoney / pTotal[index]).toFixed(2));
    }
}