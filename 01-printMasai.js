//my approach

function printMasaiSchool(num) {
  for(let i = 0; i < num; i++){
    console.log('Masai School');
  }
}

function main(){
  const num = require('fs').readFileSync(0, 'utf-8').trim();
  printMasaiSchool(parseInt(num));
}

main();
