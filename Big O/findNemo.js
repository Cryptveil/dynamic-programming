const nemo = ['nemo'];

const large = new Array(100000).fill('nemo');

function findNemo(array) {
    let t0 = performance.now()
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'nemo') {
            console.log('Found NEMO!');
        }
    }
    let t1 = performance.now()
    console.log('Call to find nemo took ' + (t1-t0) + 'milliseconds');
}

findNemo(nemo); // O(n) --> linear