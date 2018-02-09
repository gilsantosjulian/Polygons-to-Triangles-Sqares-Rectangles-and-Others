/**
 * Read a text file containing a item of flat polygons represented as one polygon per line. 
 * Each line contains a comma-separated list of side lengths (for example “3,4,8,5,7”). 
 * Write a function to classify the item of polygons into four mutually exclusive subitems: 
 * triangles, rectangles, squares, and everything else. The union of all four subitems should 
 * be the original item of polygons. All the sides of the polygons are connected and the angles 
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
        polygonsArray.map((item) => {
            let array = item.split(',');
            let length = array.length;

            length === 3
                ? isTriangle(array)
                    ? triangles.push(array)
                    : null

                : length === 4
                    ? isSquare(array)
                        ? squares.push(array)
                        : null
                    : isRectangle(array)
                        ? rectangles.push(array)
                        : others.push(array)
        })
        console.log('polygonsArray')
        console.log(polygonsArray)
        console.log('triangles')
        console.log(triangles)
        console.log('squares')
        console.log(squares)
        console.log('rectangles')
        console.log(rectangles)
        console.log('others')
        console.log(others)
    })
    .catch(() => {

    });

function isTriangle(item) {
    var a = parseInt(item[0]);
    var b = parseInt(item[1]);
    var c = parseInt(item[2]);
    return (((a + b) > c) && ((a + c) > b) && ((b + c) > a)) ? true : false
}

function isSquare(item) {
    var equal = item.reduce((sum, val) => {
        return val === item[0];
    });
    return equal ? equal : false;
}

function isRectangle(item) {
    var a = parseInt(item[0]);
    var b = parseInt(item[1]);
    var c = parseInt(item[2]);
    var d = parseInt(item[3]);

    (((countInArray(item, a) == 2) && (countInArray(item, b) == 2))
        || ((countInArray(item, c) == 2) && (countInArray(item, d) == 2))
        || ((countInArray(item, a) == 2) && (countInArray(item, c) == 2))
        || ((countInArray(item, a) == 2) && (countInArray(item, d) == 2))
        || ((countInArray(item, b) == 2) && (countInArray(item, d) == 2))
        || ((countInArray(item, b) == 2) && (countInArray(item, c) == 2)))
        ? true
        : false;
}

function countInArray(array, side) {
    return array.filter(item => item == side).length;
}
