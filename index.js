const fs = require('fs')
const http = require('http')
const { url } = require('inspector')
const path = process.cwd()
const input = fs.readFileSync(path + "/urls.txt").toString()
let urls = JSON.parse(input)

urls.forEach((url, index) => {
    var base64Data = url.replace(/^data:image\/png;base64,/, "")
    let prefix = "0".repeat(3 - `${index}`.length)
    console.log(`${path}/result/part0/boot${prefix + index}.png`)
    fs.writeFile(`${path}/result/part0/boot${prefix + index}.png`, base64Data, 'base64', error => {})
})