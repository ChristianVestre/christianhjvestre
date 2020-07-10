const sharp =require('sharp')
const fs = require('fs')
const path = require('path')

const folderPath = process.argv[2]

console.log(folderPath)

fs.readdirSync(folderPath)

const files = fs.readdirSync(folderPath).map(fileName => {
    return path.join(folderPath, fileName)
})

files.forEach(async (path)=>
    await sharp(path).webp().toFile(path.slice(0,path.length-4) +".webp")
)
console.log(files)