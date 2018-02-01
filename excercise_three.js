/**
 * Read a text file containing a set of flat polygons represented as one polygon per line. 
 * Each line contains a comma-separated list of side lengths (for example “3,4,8,5,7”). 
 * Write a function to classify the set of polygons into four mutually exclusive subsets: 
 * triangles, rectangles, squares, and everything else. The union of all four subsets should 
 * be the original set of polygons. All the sides of the polygons are connected and the angles 
 * between them are irrelevant. Only consider the lengths.
 */

var fs = require('fs')
var path = 'polygons.txt'
var triangles = [], squares = [], rectangles = [], others = [];

var readFile = new Promise((resolve, reject) => {
    fs.readFile(path, (err, buffer) => {
        try {
            resolve(buffer.toString().split(/\r\n|\n/));
        } catch (error) {
            reject(error);
        }
    })
})

readFile
    .then((polygonsArray) => {
        for (var i in polygonsArray) {
            let length = polygonsArray[i].split(',').length;
            let item = polygonsArray[i];

            console.log(isTriangle(item))
            length === 3
                ? isTriangle(item)
                    ? triangles.push(item)
                    : null
                : null
        }

        console.log('triangles')
        console.log(triangles)

    })
    .catch(() => {

    });

function isTriangle(item) {
    console.log(item)
    var a = parseInt(item[0]);
    var b = parseInt(item[1]);
    var c = parseInt(item[2]);
    return (((a + b) > c) && ((a + c) > b) && ((b + c) > a)) ? true : false
}

function isSquare(a, b, c) {
    (((a + b) > c) && ((a + c) > b) && ((b + c) > a)) ? true : false
}

