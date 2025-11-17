export async function getReceitas() {
  await new Promise((r) => setTimeout(r, 200));

  return [
    {
      nome: "Pastel Assado com Carne-seca e Requeijão",
      endereco: "Rua Exemplo, 123 - Centro, São Paulo/SP",
      imagem: { url: "/receitas/pastel.jpg" },
      linkReceita: {url: "https://www.delicia.com.br/receita/pastel-assado-com-carne-seca-e-requeijao/"},
    },
    {
      nome: "Macarrão Gratinado com Cheddar e Bacon",
      endereco: "Av. Placeholder, 456 - Curitiba/PR",
      imagem: { url: "/receitas/macarrao.jpg" },
      linkReceita: {url: "https://www.delicia.com.br/receita/macarrao-gratinado-com-cheddar-e-bacon/"},

    },
    {
      nome: "Enformado de Batata com Lascas de Bacalhau à Portuguesa",
      endereco: "Praça Mock 789 - Belo Horizonte/MG",
      imagem: { url: "/receitas/baca.jpg" },
      linkReceita: {url: "https://www.delicia.com.br/receita/enformado-de-batata-com-lascas-de-bacalhau-a-portuguesa/"},
    },
    {
      nome: "Fiesta Seara Assado com Farofa de Legumes",
      endereco: "Praça Mock 789 - Belo Horizonte/MG",
      imagem: { url: "/receitas/frango.jpg" },
      linkReceita: {url: "https://www.delicia.com.br/receita/fiesta-seara-assado-com-farofa-de-legumes/"},
    },
    {
      nome: "Crespinhos de Batata",
      endereco: "Praça Mock 789 - Belo Horizonte/MG",
      imagem: { url: "/receitas/crespinho.jpg" },
      linkReceita: {url: "https://www.delicia.com.br/receita/crespinhos-de-batata/"},
    },
    {
      nome: "Bolo de Chocolate Delícia",
      endereco: "Praça Mock 789 - Belo Horizonte/MG",
      imagem: { url: "/receitas/bolo.jpg" },
      linkReceita: {url: "https://www.delicia.com.br/receita/bolo-de-chocolate-delicia/"},
    },
    {
      nome: "Hamburguinho com Molho de Alho",
      endereco: "Praça Mock 789 - Belo Horizonte/MG",
      imagem: { url: "/receitas/hamb.jpg" },
      linkReceita: {url: "https://www.delicia.com.br/receita/hamburguinho-com-molho-de-alho/"},
    },
    {
      nome: "Brownie de chocolate",
      endereco: "Praça Mock 789 - Belo Horizonte/MG",
      imagem: { url: "/receitas/brow.jpg" },
      linkReceita: {url: "https://www.delicia.com.br/receita/brownie-de-chocolate/"},
    },
  ];
}
