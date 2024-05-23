import { labeledLogger } from '../../../lib/labeled-logger.js';
import { fetchUserById } from '../../../lib/fetch-user-by-id/index.js';

const { log, error } = labeledLogger();

/* Address */

// --- declare some callbacks ---

const getAddress = (user) => {
    // write me!
    return `${user.id}: ${user.address.street}, ${user.address.city} ${user.address.zipcode}`
};

const handleError = (err) => error(err);

// --- use the callbacks ---

log('fetching and processing user 9');
// "9: Dayna Park, Bartholomebury 76495-3109"
fetchUserById(9).then(getAddress).then(log).catch(handleError)

log('fetching and processing user 8');
// "8: Ellsworth Summit, Aliyaview 45169"
fetchUserById(8).then(getAddress).then(log).catch(handleError)

log('fetching and processing user 2');
// "2: Victor Plains, Wisokyburgh 90566-7771"
fetchUserById(2).then(getAddress).then(log).catch(handleError)

log('fetching and processing user 0');
// 404
fetchUserById(0).then(getAddress).then(log).catch(handleError)

log('= = = =  the call stack is empty  = = = =');



//     name: 'Leanne Graham',
//         username: 'Bret',
//             email: 'Sincere@april.biz',
//                 address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//             city: 'Gwenborough',
//                 zipcode: '92998-3874',
//                     geo: { lat: '-37.3159', lng: '81.1496' }
// },
// phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//         company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//             bs: 'harness real-time e-markets'
