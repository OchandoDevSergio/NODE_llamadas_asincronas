// Genera un proyecto en NODE que sea capaz de llamar a una API externa mediante una función,
// trayendo sus datos de vuelta a un array que sea su endpoint. A continuación mostrar por 
// console.log aquellos elementos del array que ocupen una posición impar (aclaramos que sus 
//id serán los pares por empezar los arrays por el elemento 0).

const axios = require('axios');

let arrDatosAPI = [];
let arrResultado = [];

const Imparizador = (arr) => {

    for (let i = 0; i < arr.length; i++) {

        if (i % 2 !== 0) {
            arrResultado.push(arr[i]);

        }

    }
    console.log(arrResultado);
}

//LOCALIZACIONES
const buscaLocalizaciones = async () => {
    return await axios.get(`https://rickandmortyapi.com/api/location`);

    
   
}

buscaLocalizaciones()
    .then(
        resultado => {
            arrDatosAPI = resultado.data.results;
            Imparizador(arrDatosAPI);
        }
    )
    .catch(error => console.log(error))

//PERSONAJES
// const buscaPersonajes = async () => {
//         return await axios.get(`https://rickandmortyapi.com/api/character`);

        
       
//     }
    
// buscaPersonajes()
//     .then(
//         resultado => {
//             arrDatosAPI = resultado.data.results;
//             Imparizador(arrDatosAPI);
//         }
//     )
//     .catch(error => console.log(error))

//EPISODIOS
// const buscaEpisodios = async () => {

//         return await axios.get(`https://rickandmortyapi.com/api/episode`) ; 

        
       
//     }
    
// buscaEpisodios()
//     .then(
//         resultado => {
//             arrDatosAPI = resultado.data.results;
//             Imparizador(arrDatosAPI);
//         }
//     )
//     .catch(error => console.log(error))

