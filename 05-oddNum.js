//my approach

function oddNumberAdventure(N){
  let result = "";
  for(let i = 1; i <= N; i++){
    if(i%2 != 0){
      result += i + ' ';
    }
  }
  return result;
}

function main(){
  const N = require('fs').readFileSync(0, 'utf-8').trim();
  console.log(oddNumberAdventure(parseInt(N)));
}

main();
