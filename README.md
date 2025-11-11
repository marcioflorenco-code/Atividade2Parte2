# Atividade2Parte2

1. Converta o seguinte objeto JavaScript para uma string JSON e depois recupere-o:
```js
const usuario = {
nome: "Ana Silva",
idade: 30,
habilidades: ["JavaScript", "React", "Node.js"],
ativo: true
```
#primeiro vamos converter o objeto para string JSON , e para isso vamos usar JSON.stringify
```js
const jsonString = JSON.stringify(usuario);
console.log(jsonString);
```
#sua saida sera !
```js
{"nome":"Ana Silva","idade":30,"habilidades":["JavaScript","React","Node.js"],"ativo":true}
```
#vamos converter de volta para objeto JavaScript , usando JSON.parse
```js
const usuarioRecuperado = JSON.parse(jsonString);
console.log(usuarioRecuperado);
```
#onde sua saida sera !
```js
{
  nome: "Ana Silva",
  idade: 30,
  habilidades: ["JavaScript", "React", "Node.js"],
  ativo: true
}
```
****
