function colorLog(type, string){
    // var colors = ["\x1b[31m", "\x1b[33m", "\x1b[32m", "\x1b[34m", "\x1b[35m"];
    var colorerror = ["\x1b[31m"];
    var colorwarn = ["\x1b[33m"];
    var colornormal = ["\x1b[32m"];
    var reset = "\x1b[0m";
    var output = "";
    
    
    if (type == "error") {
        output += colorerror + string
    } else if (type == "warning"){
        output += colorwarn + string
    } else {
        output += colornormal + string
    }
    console.log(output + reset);
}
colorLog("error", "test")

module.exports = colorLog;