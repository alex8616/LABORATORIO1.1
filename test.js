const { exec } = require('child_process');
var fs = require('fs');
const clc = require('cli-color');
fs.readdir("./solutions", (err, files) => {
  files.forEach(file => {
    if (file === "sum.js") {
      var f = require("./solutions/" + file);
      var fs = require('fs');
      fs.readFile('./inputs/sum.txt', function (err, data) {
        if (err) {
          throw err;
        }
        checkSolution(f, data.toString().split(/\n/), "sum.txt");
      });
    }
    if (file === "checkPalindrome.js") {
      var f = require("./solutions/" + file);
      var fs = require('fs');
      fs.readFile('./inputs/checkPalindrome.txt', function (err, data) {
        if (err) {
          throw err;
        }
        checkSolution(f, data.toString().split(/\n/), "checkPalindrome.txt");
      });
    }
    if (file === "addTwoDigits.js") {
      var f = require("./solutions/" + file);
      var fs = require('fs');
      fs.readFile('./inputs/checkPalindrome.txt', function (err, data) {
        if (err) {
          throw err;
        }
        checkSolution(f, data.toString().split(/\n/), "checkPalindrome.txt");
      });
    }
    if (file === "candies.js") {
      var f = require("./solutions/" + file);
      var fs = require('fs');
      fs.readFile('./inputs/checkPalindrome.txt', function (err, data) {
        if (err) {
          throw err;
        }
        checkSolution(f, data.toString().split(/\n/));
      });
    }
    if (file === "adjacentElementsProduct.js") {
      var f = require("./solutions/" + file);
      var fs = require('fs');
      fs.readFile('./inputs/checkPalindrome.txt', function (err, data) {
        if (err) {
          throw err;
        }
        checkSolution(f, data.toString().split(/\n/));
      });
    }

  });
});
function checkSolution (fn, inputs, fileouput) {
  var posiblesolutions = [];
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i] != "") {
      if (inputs[i].match(/,/g)) {
        var params = inputs[i].split(",");
        posiblesolutions.push(fn(parseInt(params[0]), parseInt(params[1])));
      } else {
        posiblesolutions.push(fn(inputs[i]));
      }

    }
  }

  fs.readFile("./output/" + fileouput, function (err, data) {
    console.log(clc.yellow("Review") + " " + clc.cyan(fileouput));
    
    var outdata = data.toString().split(/\n/);
    var sol = 0;
    for (var i = 0; i < posiblesolutions.length; i ++) {
      if (outdata[i].toString() == posiblesolutions[i].toString()) {
        sol++;
        console.log(clc.green("True"));
      } else {
        console.log(clc.red("False"));
      }
    }
    if (sol == posiblesolutions.length) {
      console.log(clc.green(fileouput + " " + "Correcto"))
    } else {
      console.log(clc.red(fileouput + " " + "Incorrecto"))
    }
  });
}
