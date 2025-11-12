function parseJSONSafe(jsonString) {
  try {
    return JSON.parse(jsonString); 
  } catch (erro) {
    console.error("Erro ao converter JSON:", erro.message); 
    return null; // Retorna null em caso de erro
  }
}

// Teste com JSON inválido
const jsonInvalido = '{nome: "João", "idade": 30}'; // Falta aspas em "nome"
console.log(parseJSONSafe(jsonInvalido));
