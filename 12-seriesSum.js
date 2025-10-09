//my approach

function seriesSum(N){
  let sum=0;
  for(let i=1; i<=(2*N-1); i++){
    if(i%2!=0){
      sum+=i;
    }
  }
  return sum;
}

function main(){
  const N = require('fs').readFileSync(0, 'utf-8').trim();
  console.log(seriesSum(parseInt(N, 10)));
}

main();
