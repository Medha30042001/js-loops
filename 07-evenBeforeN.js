//my approach

function evenSumBelowN(num) {
  let sum = 0;
    for(let i=1; i<=num; i++){
      if(i%2==0){
        sum += i;
      }
    }
  return sum;
}

function main(){
  const num = require('fs').readFileSync(0, 'utf-8').trim();
  console.log(evenSumBelowN(parseInt(num, 10)));
}

main();
