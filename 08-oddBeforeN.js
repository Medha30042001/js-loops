//my approach

function oddSumBelowN(num) {
    let sum = 0;
    for(let i=1; i<=num; i++){
      if(i%2!=0){
        sum += i;
      }
    }
  return sum;
    
}

function main(){
  const num = require('fs').readFileSync(0, 'utf-8').trim();
  console.log(oddSumBelowN(parseInt(num, 10)));
}

main();
