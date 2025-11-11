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
