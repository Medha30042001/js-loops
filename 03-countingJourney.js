//my approach

function countingJourney(N){
  let result = "";
  for(let i=N; i>0; i--){
    result += i + " ";
  }
  return result;
}
function main(){
  const N = require('fs').readFileSync(0, 'utf-8').trim();
  console.log(countingJourney(parseInt(N)));
}

main();
