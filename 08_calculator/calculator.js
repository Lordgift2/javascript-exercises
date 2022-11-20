
let input1=4;
let input2=3;
let arr=[2,4,6,8,10,12,14];
let n=10;
const add = function add() {
  return input1+input2;
};

const subtract = function subtract() {
  return input1-input2;
};
	

const sum = function Sum() {
  let Sum =0;
  for(i=0;i<arr.length;i++){
  Sum+=arr[i];
  }
  return Sum;
	
};

const multiply = function multiply() {
  let Multiplier =1;
  for(i=0;i<arr.length;i++){
  Multiplier*=arr[i];
  }
  return Multiplier;

};

const power = function power() {
  return input1**input2;

	
};

const factorial = function factorial(n) {
  let answer=1;
  if(n===0 || n===1){
    return answer
  }
  else{
    for(let i=n;i>=1;i--)
    answer*=i;
  }
	return answer;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
