const fs = require('fs')

files = fs.readdirSync('./');
console.log(files);
console.log('done')

fs.readdir('./',function(err,files){
    if (err) console.log(err);
    else console.log('result',files);
});
