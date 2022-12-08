const fs = require('fs')

fs.stat(__filename, (err, stats) => {
    if(err){
        console.log(err)
    }else{
        console.log("É um arquivo:", stats.isFile() ? "Sim" : "Não")
        console.log("É um diretório:", stats.isDirectory() ? "Sim" : "Não")
    }
});


let subDiretorios = process.cwd().split("\\")
console.log(subDiretorios)