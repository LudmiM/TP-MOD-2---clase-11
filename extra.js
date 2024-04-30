const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
/* //SE pierden los valores  2 y 4 POS[1][3]
const [cero,,dos,,cuatro,...elResto] = numeros;
console.log(elResto);
*/
const [cero, uno, dos, tres, cuatro, ...elResto] = numeros;
//Agrego  los numero  2y 4 al nuevo array
const newArray = [uno, tres, ...elResto];
console.log(newArray);

const mascotas = [
  {
    nombre: "Max",
    tipoMascota: "Perro",
    color: "Marrón",
    raza: "Labrador Retriever",
  },
  {
    nombre: "Luna",
    tipoMascota: "Gato",
    color: "Gris",
    raza: "Siamese",
  },
];
const mostarMascotas=function (mascotas) {
    mascotas.forEach(({nombre,tipoMascota,color,raza}) => {
    console.log(`
                Hola les presento a mi mascota su nombre es: ${nombre}, 
                es un hermoso ${tipoMascota}, de color: ${color} 
                y su raza es: ${raza}. 
                `);
    });
}
mostarMascotas(mascotas);
