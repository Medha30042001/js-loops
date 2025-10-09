//my approach

function modeof10(num) {
    for(let i = 1; i<=num; i++){
      console.log(i%10);
    }
}
function main(){
  const num = require('fs').readFileSync(0, 'utf-8').trim();
  modeof10(num);
}

main();
