//asynchronation and synchronization in javascript

// time intverval
// setTimeout
// setInterval
// setinserted
//callback function
//setimout(function, delay)
//try/catch/finally error handling

console.log("Start");

setTimeout(() => {
    console.log("This is executed after 2 seconds");
}, 2000);

console.log("End");

let count = 0;
const intervalId = setInterval(() => {
    count++;
    console.log(`Interval count: ${count}`);
    if (count === 5) {
        clearInterval(intervalId);
        console.log("Interval cleared after 5 counts");
    }
}, 1000);

function Operation(callback) {
    console.log("operationstarted");
    setTimeout(() => {
        console.log("operation completed");
        callback();
    }, 3000);   

}