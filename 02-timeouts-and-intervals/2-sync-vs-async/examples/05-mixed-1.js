import { labeledLogger } from '../../../lib/labeled-logger.js';
import { synchronousTimeout } from '../../../lib/synchronous-timeout.js';

const { log } = labeledLogger();

const callback1 = () => {
    log('- end synchronous 1000 ms');
};
log('- begin synchronous 1000 ms'); //1
synchronousTimeout(callback1, 1000); //2

const callback2 = () => {
    log('- end synchronous 0 ms');
};
log('- begin synchronous 0 ms'); //3
synchronousTimeout(callback2, 0); //4

const callback3 = () => {
    log('+ execute async  1000 ms');
};
log('+ schedule async 1000 ms'); //5
setTimeout(callback3, 1000); //9

const callback4 = () => {
    log('+ execute async  0 ms');
};
log('+ schedule async 0 ms');//6
setTimeout(callback4, 0); //8

log('= = = =  the call stack is empty  = = = ='); //7
