const usuario = {
  nome: "Ana Silva",
  idade: 30,
  habilidades: ["JavaScript", "React", "Node.js"],
  ativo: true
};
const jsonString = JSON.stringify(usuario);//transforma em texto (formato JSON).
console.log(jsonString);
const usuarioRecuperado = JSON.parse(jsonString);//transforma o texto JSON de volta em objeto JavaScript.
console.log(usuarioRecuperado);


