const livros = require("./database");
livros.sort((a, b) => a.paginas - b.paginas)

const receberInput = require("readline-sync");

const buscarPorCategoria = receberInput.question("Voce deseja encontrar um livro por categoria?(S/N/)");

if (buscarPorCategoria.toLocaleUpperCase() === "S") {
    console.log("Essas são as categorias disponíveis:");
    console.log("Ficção", "Sci-fi", "Fantasia", "terror");
  
    const qualCategoria = receberInput.question("Qual categoria voce deseja?");
    const categoria = livros.filter(livro => livro.categoria === qualCategoria);
    console.table(categoria);
  } else {
    console.log("Essas sao as categorias disponiveis:  ");
    console.table(livros);
  }

  const recomendando = receberInput.question(
    "Deseja uma recomendacao de leitura? (S/N/)"
  );
  
  if (recomendando.toLocaleUpperCase() === "S") {
    console.log("Aqui suas recomendações: ");
  
    const recomendados = livros.filter(livro => livro.recomenda === true && livro.leu === true);
  
    console.table(recomendados);
  } else {
    console.log("Esses sao os livros disponiveis:  ");
    console.table(livros);
  }
  
  const wishlist = receberInput.question(
    "Deseja acessar os livros nao lidos? (S/N)"
  );
  
  if (wishlist.toLocaleUpperCase() === "S") {
    console.log("Esses são os livros que ainda não foram lidos:");
  
    const deseja = livros.filter(livro => livro.leu === false);
    console.table(deseja);
  } else {
    console.log("Esses sao os livros disponiveis:  ");
    console.table(livros);
  }
