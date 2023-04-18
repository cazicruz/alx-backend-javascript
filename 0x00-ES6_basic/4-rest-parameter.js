export default function returnHowManyArguments(...args) {
  let numOfArgs = 0;
  for (let i in args){
    numOfArgs += 1;
  }
  return numOfArgs;
}
