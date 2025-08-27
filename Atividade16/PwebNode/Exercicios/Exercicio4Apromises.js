function Parte1(){
    console.log('\n-----------------------------------------------------------------------------\n')
    for (let i = 1; i < 10; i++){
        console.log("Primeira parte: " + i)
    }
}

setTimeout(Parte1, 2000);

const fs = require('fs').promises;
fs.readFile('file.txt','utf8')
    .then(data=>{
        const registros = data.split('\n');
        registros.forEach((registro, index)=>{
            console.log("Segunda parte: " + registro);
        });
    })
    .catch(err =>{
        console.log("Erro ao ler o arquivo: ", err);
    })
