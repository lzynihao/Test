process.on('exit', function(code) {
    setTimeout(function() {
        console.log("Code could not be executed");
    }, 0);

    console.log("Exit code is " + code);

});

console.log("Program execute is finish");


process.stdout.write("Hello World " + "\n");

process.argv.forEach(function(val, index, array){
    console.log(index + ':' + val);
});

// get execute path
console.log(process.execPath);

// plat information
console.log(process.platform);


console.log(process.cwd());

console.log(process.version);

console.log(process.memoryUsage());
