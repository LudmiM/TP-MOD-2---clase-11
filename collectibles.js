const fs=require("fs");

const importar = (nombreMarca) =>{
    const figuras=["hot toys","bandai","star wars"];
    return figuras.indexOf(nombreMarca.toLowerCase())>=0 ? JSON.parse(fs.readFileSync(`./datos/figuras${figuras.indexOf(nombreMarca)+1}.json`,"utf-8")) : "Ups, cometio un error de tipeo";
}

module.exports =importar;