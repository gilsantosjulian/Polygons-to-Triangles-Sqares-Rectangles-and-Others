var fs = require('fs');
var path = 'polygons.txt'

fs.readFile(path, (err, buffer) => {
    try {
        let polygonsArray = buffer.toString().split('\n');
        for (var i in polygonsArray) {

            let length = polygonsArray[i].split(',').length
            console.log(length)


            isTriangle(polygonsArray[i]);
        }
    } catch (error) {
        console.log(error);
    }

});

function isTriangle(a, b, c) {
    (((a + b) > c) && ((a + c) > b) && ((b + c) > a)) ? true : false
}

