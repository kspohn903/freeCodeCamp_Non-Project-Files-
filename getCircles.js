const hDist = (p1,p2) => Math.hypot(...p1.map((e, i) => e-p2[i]))/2;
const pAng = (p1,p2) => Math.atan(p1.map((e,i) => e-p2[i]).reduce(
(p, c) => c/p, 1));
const solveF = (p,r) => t => [r*Math.cos(t)+p[0], r*Math.sin(t)+p[1]];
const diamPts = (p1,p2) => p1.map((e,i) => e+(p2[i]-e)/2); 
const getCircles = (...args) => {
  const [p1,p2,s] = args;
  const solve = solveF(p1,s), halfDist = hDist(p1,p2);
  let debugMsg = `p1: ${p1}, p2: ${p2}, r:${s}`;
  console.log(`${debugMsg}`);
  let msg = `Result: `, dCheck = Math.sign(s-halfDist), newArr = [];
  if (dCheck == 0){
      s ? newArr.push(diamPts(p1,p2)) : (msg='Radius Zero');
     } else if (dCheck ==1) {
       if (!halfDist) {
        msg = 'Coincident point. Infinite solutions';
      } else {
        let theta = pAng(p1,p2), theta2 = Math.acos(halfDist/s);
        [1,-1].map(e => solve(theta + e*theta2)).forEach(e => 
        newArr.push(e));
      } } else if(dCheck == -1) {
      msg ='No intersection. Points further apart than circle diameter';
      }
    let nA1 = newArr.map((el) => el = [(Math.round(el[0]*10000)/10000),(Math.round(el[1]*10000)/10000) ]);
    let consoleStrDebug = `nA1:`;
    if(nA1.length > 1) {consoleStrDebug += '['; }
    for(let i=0; i < nA1.length; i++) {
      let finalChar = (i < nA1.length-1) ? ', ':'';
     consoleStrDebug +=`[${nA1[i][0]},${nA1[i][1]}]${finalChar}`;
    }
    if(nA1.length > 1) {consoleStrDebug += ']'; }
    console.log(`${consoleStrDebug}\n`);
    return (msg !=`Result: `) ? (msg): nA1; 
};