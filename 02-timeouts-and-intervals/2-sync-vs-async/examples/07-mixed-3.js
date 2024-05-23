import { labeledLogger } from '../../../lib/labeled-logger.js';
import { synchronousTimeout } from '../../../lib/synchronous-timeout.js';

const { log } = labeledLogger();

const callback1 = () => {
    log('+ execute async  1000 ms');
};
log('+ schedule async 1000 ms'); //1
setTimeout(callback1, 1000); //9

const callback2 = () => {
    log('- end synchronous 500 ms');
};
log('- begin synchronous 500 ms'); //2
synchronousTimeout(callback2, 500); //3

const callback3 = () => {
    log('+ execute async  0 ms');
};
log('+ schedule async 0 ms'); //4
setTimeout(callback3, 0); //8

const callback4 = () => {
    log('- end synchronous 0 ms');
};
log('- begin synchronous 0 ms'); //5
synchronousTimeout(callback4, 0); //6

log('= = = =  the call stack is empty  = = = ='); //7
