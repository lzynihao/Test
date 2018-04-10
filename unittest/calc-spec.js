var calc = require("../calc");

describe("calc suit", function() {
  it("calcWE test1", function() {  
  	var data = {"1":[3,4,5],"2":[2,4,6],"3":[5,4,2]};
  	calc.calcWE(data,"2",0.15);
  });
  
  it("calcWE test2", function() {
  	var data = {"1,2":[3,4,5],"2,3":[2,4,6],"3,2":[5,4,2]};
  	calc.calcWE(data,"2,3",0.18);
  });

  it("calcP test3", function() {
  	var data = {"1":[3,4,5],"2":[2,4,6],"3":[5,4,2],"4":[5,7,9]};
  	calc.calcP(data,["2","3","1"],0.12);
  });

  it("calcWE test4", function() {
  	var data = {"1":["3","16","42"],"2":["4","8","98"],"3":["5","22","63"],"4":["5","57","15"]};
  	calc.calcWE(data,"2",0.15);
  });
  
  it("calcP test5", function() {
  	var data = {"1":["31","40","18"],"2":["89","16","74"],"3":["28","82","39"],"4":["72","52","105"]};
  	calc.calcP(data,["2","3","1"],0.12);
  });
  
  it("calcWE test6", function() {
  	var data = {"1":["31","40","18"],"2":["89","16","74"],"3":["28","82","39"],"4":["72","52","105"]};
  	calc.calcP(data,"2,3",0.18);
  });
});