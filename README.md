# Atividade2Parte2

**1. Converta o seguinte objeto JavaScript para uma string JSON e depois recupere-o:**
```js
const usuario = {
nome: "Ana Silva",
idade: 30,
habilidades: ["JavaScript", "React", "Node.js"],
ativo: true
```
*primeiro vamos converter o objeto para string JSON , e para isso vamos usar JSON.stringify*
```js
const jsonString = JSON.stringify(usuario);
console.log(jsonString);
```
*sua saida sera !*
```js
{"nome":"Ana Silva","idade":30,"habilidades":["JavaScript","React","Node.js"],"ativo":true}
```
*vamos converter de volta para objeto JavaScript , usando JSON.parse*
```js
const usuarioRecuperado = JSON.parse(jsonString);
console.log(usuarioRecuperado);
```
*onde sua saida sera !*
```js
{
  nome: "Ana Silva",
  idade: 30,
  habilidades: ["JavaScript", "React", "Node.js"],
  ativo: true
}
```
****
**2. Dado o JSON abaixo, extraia todos os emails e concatene-os em uma string separada por vírgulas:**
```js
const jsonString = `{
"usuarios": [
{"nome": "Carlos", "email": "carlos@email.com"},
{"nome": "Maria", "email": "maria@email.com"},
{"nome": "João", "email": "joao@email.com"}
]
}`;
```
*primeiro vamos converter o texto JSON em objeto JavaScript*
```js
const dados = JSON.parse(jsonString);
```
*extrair os e-mails*
```js
const emails = dados.usuarios.map(usuario => usuario.email);
```
*por fim concatenar os emails em uma única string separada por vírgulas*
```js
const emailsConcatenados = emails.join(", ");
```
*onde por final o codigo ficara assim*
```js
const jsonString = `{
  "usuarios": [
    {"nome": "Carlos", "email": "carlos@email.com"},
    {"nome": "Maria", "email": "maria@email.com"},
    {"nome": "João", "email": "joao@email.com"}
  ]
}`;

const dados = JSON.parse(jsonString);
const emailsConcatenados = dados.usuarios.map(u => u.email).join(", ");
console.log(emailsConcatenados);//mostrarar (carlos@email.com, maria@email.com, joao@email.com)
```
****
**3. Crie uma função que recebe uma string JSON de produtos e retorna apenas osnomes dos produtos com preço acima de R$ 50:**
```js
const produtosJSON = `{
"produtos": [
{"nome": "Mouse", "preco": 25.90},
{"nome": "Teclado", "preco": 89.90},
{"nome": "Monitor", "preco": 450.00},
{"nome": "Cabo USB", "preco": 15.00}
]
}`;
```
*vamos criar a funçao*
```js
function produtosCaros(jsonString) {
  const dados = JSON.parse(jsonString);  // Converte JSON em objeto
  const nomes = dados.produtos           // Acessa o array de produtos
    .filter(p => p.preco > 50)           // Filtra produtos com preço > 50
    .map(p => p.nome);                   // Pega só os nomes
  return nomes;
}

const resultado = produtosCaros(produtosJSON);
console.log(resultado);
```
****
**Escreva uma função que formate um objeto de endereço em uma string legível usando template strings:**
```js
const endereco = {
rua: "Av. Paulista",
numero: 1000,
cidade: "São Paulo",
cep: "01310-100"
};
```
// Resultado esperado: "Av. Paulista, 1000 - São Paulo - CEP: 01310-100

*vamos para a funçao*
```js
function formatarEndereco(endereco) {
  return `${endereco.rua}, ${endereco.numero} - ${endereco.cidade} - CEP: ${endereco.cep}`;
}

const endereco = {
  rua: "Av. Paulista",
  numero: 1000,
  cidade: "São Paulo",
  cep: "01310-100"
};

console.log(formatarEndereco(endereco)); // saida(Av. Paulista, 1000 - São Paulo - CEP: 01310-100)
```
****
