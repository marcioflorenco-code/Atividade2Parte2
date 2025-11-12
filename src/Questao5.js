function resumoPedidos(jsonString) {
  const dados = JSON.parse(jsonString); // Converte JSON em objeto
  
  const entregues = dados.pedidos.filter(p => p.status === "entregue").length;
  const processando = dados.pedidos.filter(p => p.status === "processando").length;
  
  const total = dados.pedidos.reduce((soma, p) => soma + p.total, 0);
  
  return `${entregues} pedidos entregues, ${processando} em processamento. Valor total: R$ ${total.toFixed(2).replace('.', ',')}`;
}

const pedidosJSON = `{
  "pedidos": [
    {"id": 1, "cliente": "Fernanda", "total": 120.50, "status": "entregue"},
    {"id": 2, "cliente": "Roberto", "total": 89.90, "status": "processando"},
    {"id": 3, "cliente": "Carla", "total": 45.30, "status": "entregue"}
  ]
}`;

console.log(resumoPedidos(pedidosJSON)); //saida = '2 pedidos entregues, 1 em processamento. Valor total: R$ 255,70'
