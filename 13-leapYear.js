//my approach

function leapYear(M,N){
  let str = '';
  for(let i=M; i<=N; i++){
    if((i%4==0 && i%100!=0) || i%400==0){
      str += i + ' ';
    }
  }
  return str;
}

function main(){
  const input = require('fs').readFileSync(0, 'utf-8').trim();
  let a = input.split(' ').map(Number);
  console.log(leapYear(a[0], a[1]));
}

main();
