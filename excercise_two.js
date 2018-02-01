/**
 * 2) Write a function to calculate the cumulative TTL of the following set of requests. 
 * (The provided answer is correct and should not be modified. )
 */

// The initial data
let requests = [
    { requestId: 'poiax', startedAt: 1489744808, ttl: 8 },
    { requestId: 'kdfhd', startedAt: 1489744803, ttl: 3 },
    { requestId: 'uqwyet', startedAt: 1489744806, ttl: 12 },
    { requestId: 'qewaz', startedAt: 1489744810, ttl: 1 }
]

let max = 0; // Initialize the max variable variable with value '0'
let min = requests[0].startedAt; // Assign a valur for min variable
let cumulativeTtl = 0;// Initialize the max variable with value '0' 

// This function will be iterate for each item of the request array
requests.forEach(item => {
    let ttl = item.startedAt + item.ttl; // Assign the add of both starteAT and ttl
    min = item.startedAt < min ? item.startedAt : min; // Asign depending it value, a startedAt or min vaiable
    max = ttl > max ? ttl : max; // Asign depending it value, a startedAt or min vaiable
    cumulativeTtl = max - min; // substract max and min variable.
})

// Pirnt the cimilativeTtl variable
console.log('Cumulative Ttl:', cumulativeTtl)