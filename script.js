const arrayNumeros = [1, 12, 22, 45, 55, 88];
console.log(`Seu array é ${arrayNumeros}`);

function multiplicaPor3 (array) {
  let novoArray = [];
  for(let numero of array) {
    novoArray.push(numero * 3) 
  }
  return novoArray          //CRIA-SE VARIÁVEL PARA COLOCAR NÚMEROS MULTIPLICADOS
}
console.log("Array multiplicado por 3:")
console.log(multiplicaPor3(arrayNumeros));


function apenasPares (array) {
  let novoArray = [];
  for(let numero of array) {
    if(numero %2 === 0) {
      novoArray.push(numero);
    }
  }
  return novoArray         //CRIA-SE VARIÁVEL PARA ATENDER CONDIÇÕES
}
console.log("Array apenas com pares :")
console.log(apenasPares(arrayNumeros));


function novafuncao (array, funcao) {
  const resultado = funcao(array)
  console.log("Essa é sua funçaõ callback:", resultado);
}
novafuncao(arrayNumeros, apenasPares);     //CRIA-SE VARIÁVEL PARA COLOCAR AS FUNÇÕES

let arrayFinal = [7, 13, 55, 77, 100, 120, 6];

const testandoMap = arrayFinal.map((elemento) => {
  return elemento * 2
});
console.log("Função com MAP: ", testandoMap);


const testandoFilter = arrayFinal.filter((numero) => {
  if(numero %2 === 0){
    return numero
  }
});
console.log("Funçaõ com Filter: ", testandoFilter);


console.log("------------------");

const pokemons = [
  { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
  { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
  { nome: 'Charmander', tipo: 'fogo', vida: 35 },
  { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
  { nome: 'Squirtle', tipo: 'água', vida: 45 },
  { nome: 'Psyduck', tipo: 'água', vida: 25 },
];

function defineVida (pokemon){
  pokemon.vida = 100
};
defineVida(pokemons[2]);
console.log("Definindo vida do Charmander: ");
console.log(pokemons[2]);


const pokemonsVidaCheia = pokemons.map((elemento) => {
  defineVida(elemento)
  return elemento
})
console.log("Definindo vida de todos Pokemons com MAP: ");
console.log(pokemonsVidaCheia);

const pokemonTipoFogo = pokemons.filter((pokemon) =>{
  if(pokemon.tipo === "fogo"){
    return pokemon
  }
});
console.log("Filtrando apenas Pokemons de fogo");
console.log(pokemonTipoFogo);