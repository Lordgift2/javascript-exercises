let  string="";
const num = Math.floor(Math.random() * 1000);
const repeatString = function (string,num){
if (num ===-1){return "ERROR"};
    return string.repeat(num)
};

// Do not edit below this line
module.exports = repeatString;
