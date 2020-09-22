const fs = require('fs')
fs.readFile('demo-file.html', 'utf-8', function (err, content) {
if (err) {
return console.log(err)
}
console.log(content)
})
