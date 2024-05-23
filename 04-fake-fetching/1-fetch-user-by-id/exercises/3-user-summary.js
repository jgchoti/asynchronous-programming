import { labeledLogger } from '../../../lib/labeled-logger.js';
import { fetchUserById } from '../../../lib/fetch-user-by-id/index.js';

const { log, error } = labeledLogger();

/* User Summary */

// --- declare some callbacks ---

const createSummary = (user) => {
    // write me!
    let useSummary = {
      name : user.name,
      city: user.address.city,
       companyName: user.company.name
    }
  return useSummary
};

const handleError = (err) => error(err);

// --- use the callbacks ---

log('fetching and processing user 5');
/*  {
      name: 'Chelsey Dietrich',
      city: 'Roscoeview',
      companyName: 'Keebler LLC'
    } */
fetchUserById(5).then(createSummary).then(log).catch(handleError)

log('fetching and processing user 1');
/*  {
      name: 'Leanne Graham',
      city: 'Gwenborough',
      companyName: 'Romaguera-Crona',
    } */
fetchUserById(1).then(createSummary).then(log).catch(handleError)

log('fetching and processing user 10');
/*  {
      name: 'Clementina DuBuque',
      city: 'Lebsackbury',
      companyName: 'Hoeger LLC',
    } */
fetchUserById(10).then(createSummary).then(log).catch(handleError)

log('fetching and processing user -1');
// 404
fetchUserById(-1).then(createSummary).then(log).catch(handleError)

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
