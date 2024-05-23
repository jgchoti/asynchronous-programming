import { labeledLogger } from '../../../lib/labeled-logger.js';
import { fetchUserById } from '../../../lib/fetch-user-by-id/index.js';

const { log, error } = labeledLogger();

/* inline callbacks

  you can also write your callbacks inside .then()

*/

// --- fetch users ---

log('fetching user 1'); //1
fetchUserById(1)
    .then((user) => log(user)) //5
    .catch((err) => error(err));

log('fetching user 5'); //2
fetchUserById(5)
    .then((user) => log(user)) // 7
    .catch((err) => error(err));

log('fetching user 10'); //3
fetchUserById(10)
    .then((user) => log(user)) //6
    .catch((err) => error(err));

log('= = = =  the call stack is empty  = = = ='); //4
