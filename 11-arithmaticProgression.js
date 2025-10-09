//my approach

function arithmeticProgression(A,D,N){
  let str = '';
  for(let i=1; i<=N; i++){
    str += A + ' ';
    A += D;
  }
  return str;
}
function main(){
  const input = require('fs').readFileSync(0, 'utf-8').trim();
  let a = input.split(' ').map(Number);
  console.log(arithmeticProgression(a[0],a[1],a[2]));
}

main();
