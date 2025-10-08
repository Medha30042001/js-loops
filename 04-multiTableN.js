//my approach

function multiplicationTableN(input){
  
}

function main(){
  const num = parseInt((require('fs').readFileSync(0, 'utf-8').trim()), 10);
  
  for(let i = 1; i <= 10; i++){
    console.log(i*num);
  }
}

main();
