export async function getDicas() {
  await new Promise((r) => setTimeout(r, 200));

  return [
    {
      titulo: "Bolo de Chocolate",
      descricao:
        "O verdadeiro segredo do bolo de chocolate está em hidratar o cacau com água bem quente antes de misturar qualquer outro ingrediente. Esse passo desperta o aroma profundo, intensifica a cor e transforma a massa de algo comum para algo marcante, rico e muito mais saboroso.",
      imagem: { url: "/receitas/bolo-chocolate.jpg" },
    },
    {
      titulo: "Farofas",
      descricao:
        "O segredo da farofa marcante começa antes de qualquer tempero: é preciso tostar a farinha lentamente, só ela, até liberar um aroma quente e levemente amanteigado. Depois disso, tudo que entra se transforma, porque a base já está viva, crocante e pronta para absorver sabores como mágica.",
      imagem: { url: "/receitas/acompanhamentos.png" },
    },
    {
      titulo: "Panqueca",
      descricao:
        "A panqueca perfeita nasce de um detalhe que quase ninguém comenta: deixar a massa descansar alguns minutos antes de colocar na frigideira. Esse tempo permite que o glúten relaxe, que o ar se distribua e que a textura fique macia por dentro, dourada por fora e com um sabor caseiro irresistível.",
      imagem: { url: "/receitas/panqueca-frango.jpg" },
    },
  ];
}
