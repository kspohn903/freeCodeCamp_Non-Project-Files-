function primeSummation(n) {
  let nums = [];
  const upperBound = Math.ceil(Math.sqrt(n));
  for (let i = 0; i < n; i++){ 
       nums.push(i); 
  }
  nums[1] = 0;
  let sieve = (arr, uB) => {  
    for (let i = 2; i <= uB; i++){
      if (arr[i] !== 0){
        for (let j = i*i; j < n; j += i) {
          if (arr[j] % i == 0) { 
		      arr[j] = 0; 
	      }
        } 
	  } 
	}
    return arr; 
  };   
  sieve(nums, upperBound);
  let sum = nums.reduce((el, tot) => { tot += el; return tot; });
  return sum;
}
primeSummation(2000000);