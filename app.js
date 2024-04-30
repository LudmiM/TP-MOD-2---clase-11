//const fs = require("fs");
const importar=require("./collectibles");
/*
const hotToys = importar("hotToys");
const bandai =importar("bandai");
const starWars =importar("starWars");
//const unifiedCollectibles =[...hotToys,...bandai,...starWars];
*/
const unifiedCollectibles =[...importar("hot toys"),...importar("bandai"),...importar("star wars")];

const collectibles ={
    figuras: unifiedCollectibles,
    listFigures: function (array = this.figuras) {
        console.log("-".repeat(25));
        for (const {marca,nombre,precio,stock} of array) {
            console.log(`
                    Marca: ${marca} 
                    Nombre: ${nombre}  
                    Precio: ${precio} 
                    Stock: ${stock}
                    `);
            console.log("-".repeat(25));
        }
    },
    figuresByBrand: function (marca) {
        const filtradas = this.figuras.filter((fig)=> fig.marca.toLowerCase() === marca.toLowerCase());
        //retornar todas aquellas figras que correspondan a la marca recibida por parámetro.
        return filtradas.length === 0 ? "Ups, cometiste un error de tipeo" : filtradas;
        //return filtradas.length === 0 ? "Ups, cometiste un error de tipeo" : this.listFigures(filtradas);
    }
}
console.log(collectibles.figuresByBrand("Bandai"));

module.exports = collectibles;