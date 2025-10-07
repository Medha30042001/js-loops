//my approach

function loop1toN(num) {
    for(let i=0; i<num; i++){
      console.log(i+1);
    }
}
function main(){
  const num = require('fs').readFileSync(0, 'utf-8').trim();
  loop1toN(num);
}

main();
