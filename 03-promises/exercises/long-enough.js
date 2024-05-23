import { labeledLogger } from '../../lib/labeled-logger.js';

const { log, error } = labeledLogger();

/* Promise Program

  you can think of consumers as control flow for promises
    if `resolve` is called, .then's callback is executed
    if `reject` is called or an error is thrown, .catch's callback is executed

*/
// const isLongEnoughExecutor = (resolve, reject) => {
//   const userInput = prompt('enter something longer than 5 characters');
//   if (userInput !== null && userInput.length > 5) {
//     resolve('your input is long enough');
//   } else {
//     reject('your input is too short');
//   }
// }

// const logSuccess = (resolvedValue) => {
//   log('resolved value: ', resolvedValue);
// }

// const logFailure = (rejectionValue) => {
//   log('rejected value: ', rejectionValue);
// }

// // resolve/reject based on length of user input
// new Promise(isLongEnoughExecutor)
//   .then(logSuccess)
//   .catch(logFailure);

log('= = = =  the call stack is empty  = = = =');


const isLongEnough = async() => {
  // const userInput = prompt('enter something longer than 5 characters');
  const userInput = 'cattttttt'
  if (userInput !== null && userInput.length > 5) {
    return('your input is long enough');
  } else {
    throw new error('your input is too short');
  }
}

const checkIfLongEnough = async () => {
try {
  const result = await isLongEnough()
  console.log(result)
}
catch {
  console.log('not long enough')
}
}
await checkIfLongEnough()
await setTimeout(checkIfLongEnough, 3000)