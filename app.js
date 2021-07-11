const livros = require('./database.js')
//console.log(livros)

// se for sim,mostrar as categorias disciplinas,perguntar qual categoria ele escolhe
//se nao mostra todos os livros em ordem por quantidade de paginas


//pegar o input
const readline = require('readline-sync')
const  entradaInicial = readline.question('Deseja buscar um livro? S/N')

if(entradaInicial.toLocaleUpperCase() ==='S'){
    console.log('Essas são as categorias  disponiveis :')
  
    console.log('Produtividade e estilo de vida ' ,'/Histórias Brasileiras','/America','/Estilo de vida ','/Tecnologia')
    const entradaCategoria = readline.question('Qual categoria voçê escolhe : ')
    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

    console.table(retorno)

}else{
   const livrosOrdenados= livros.sort((a,b)=> a.paginas - b.paginas)
    console.log('Essas são todos os livros disponiveis:')
    console.table(livrosOrdenados)
}

