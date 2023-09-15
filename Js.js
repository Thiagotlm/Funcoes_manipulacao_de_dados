//manipulação de listas 
//forEach
/*
const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
lista.forEach((value) => {
    console.log(value)
})

//Filter

const listaDeNumerosPares = lista.filter((element) =>{
    return (element % 2 === 0)
})

console.log(lista)
console.log(listaDeNumerosPares)
*/
//map

class Pessoa {
    constructor(name) {
        this.name = name
    }
}

const lista = [new Pessoa('Thiago'), new Pessoa('Andresa'), new Pessoa('Vitor'), new Pessoa('José')]
const listaNomes = lista.map((element) => {
    return
        <li>
            ${element.name}
        </li>
})
