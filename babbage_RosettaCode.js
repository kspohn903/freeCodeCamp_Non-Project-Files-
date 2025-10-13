function babbage(babbageNum, endDigits) {
  let n = 519, 
  babIsModular = (babbageNum*babbageNum) % 10000000000 == endDigits;
  ;
  console.log(`Does the Babbage predicted number fit the modular requirements? ${babIsModular? 'Yes': 'No'}, it ${(babIsModular)? 'does': 'does not'}.\n`); //bN*bN % [...] == 269696 
  while((n*n) % 1000000 != endDigits) {n+= 1;}
  console.log(`The final n is ${n}.\n`);

  return Math.min(babbageNum, n);
}
