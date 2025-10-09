//my approach

function countingEvenNumbers(N){
  let count=0;
  for(let i=1; i<=N; i++){
    if(i%2==0){
      count++;
    }
  }
  return count;
}

function main(){
  const N = require('fs').readFileSync(0, 'utf-8').trim();
  console.log(countingEvenNumbers(parseInt(N, 10)));
}

main();
