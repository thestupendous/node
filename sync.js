const fs=require('fs')

let content
try {
    content = fs.readFileSync('demo-file.html','utf-8')
}catch(ex){
    console.log(ex)
}

console.log(content)
