
const ftoc = function ftoc() {
  let F=-100
  const subt=(F-32);
  let C=subt*0.555555556;
  if (C===0){return C}
  else {return Math.round(C*10)/10};


};

const ctof = function Fehrant() {
  let C=-10
  let step1=9*C;
  let step2=step1/5;
let F=32+step2;
if (F===0){return F}
else {return Math.round(F*10)/10}
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
