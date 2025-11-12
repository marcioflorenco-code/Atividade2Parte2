const produtosJSON = `{
"produtos": [
{"nome": "Mouse", "preco": 25.90},
{"nome": "Teclado", "preco": 89.90},
{"nome": "Monitor", "preco": 450.00},
{"nome": "Cabo USB", "preco": 15.00}
]
}`;
function produtosCaros(jsonString) {
  const dados = JSON.parse(jsonString); // Converte JSON em objeto
  const nomes = dados.produtos           // Acessa o array de produtos
    .filter(p => p.preco > 50)           // Filtra produtos com preço > 50
    .map(p => p.nome);                   // Pega só os nomes
  return nomes;
}

const resultado = produtosCaros(produtosJSON);
console.log(resultado); //saida = 'Teclado', 'Monitor'
