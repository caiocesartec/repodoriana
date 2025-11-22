export async function getReceitas() {
  const query = `
    {
      receitas {
        nodes {
          acf {
            nomeDaReceita
            linkDaReceita
            imagem {
              node {
                mediaItemUrl
              }
            }
          }
        }
      }
    }
  `;

  function mapReceita(receita) {
    const acf = receita?.acf ?? {};

    return {
      nome: acf?.nomeDaReceita ?? "",
      imagem: {
        url: acf?.imagem?.node?.mediaItemUrl || "/placeholder.png",
      },
      linkReceita: {
        url: acf?.linkDaReceita || "",
      },
    };
  }

  const response = await fetch("https://new.doriana.com.br/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
    cache: "no-store",
  });

  const { data } = await response.json();

  return data?.receitas?.nodes?.map(mapReceita) ?? [];
}



// export async function getReceitas() {
//   await new Promise((r) => setTimeout(r, 200));

//   return [
//     {
//       nome: "Canjica Cremosa",
//       endereco: "Rua Exemplo, 123 - Centro, São Paulo/SP",
//       imagem: { url: "/receitas/canjica.jpg" },
//       linkReceita: {url: "https://www.doriana.com.br/receitas/canjica-cremosa/"},
//     },
//     {
//       nome: "Farofa de Banana",
//       endereco: "Av. Placeholder, 456 - Curitiba/PR",
//       imagem: { url: "/receitas/farofa-de-banana.jpg" },
//       linkReceita: {url: "https://www.doriana.com.br/receitas/farofa-de-banana/"},

//     },
//     {
//       nome: "Panqueca de Frango",
//       endereco: "Praça Mock 789 - Belo Horizonte/MG",
//       imagem: { url: "/receitas/panqueca-de-frango-com-milho.jpeg" },
//       linkReceita: {url: "https://www.doriana.com.br/receitas/panqueca-de-frango/"},
//     },
//     {
//       nome: "Lasanha de Frango com Molho Branco",
//       endereco: "Praça Mock 789 - Belo Horizonte/MG",
//       imagem: { url: "/receitas/lasanha-de-frango-com-molho-branco-1.jpeg" },
//       linkReceita: {url: "https://www.doriana.com.br/receitas/lasanha-de-frango-com-molho-branco/"},
//     },
//     {
//       nome: "Fricassê de Frango",
//       endereco: "Praça Mock 789 - Belo Horizonte/MG",
//       imagem: { url: "/receitas/fricasse-de-frango.jpeg" },
//       linkReceita: {url: "https://www.doriana.com.br/receitas/fricasse-de-frango/"},
//     },
//     {
//       nome: "Brigadeiro",
//       endereco: "Praça Mock 789 - Belo Horizonte/MG",
//       imagem: { url: "/receitas/brigadeiro-gourmet.jpeg" },
//       linkReceita: {url: "https://www.doriana.com.br/receitas/brigadeiro/"},
//     },
//     {
//       nome: "Sorvete de Milho Verde Cremoso",
//       endereco: "Praça Mock 789 - Belo Horizonte/MG",
//       imagem: { url: "/receitas/sorvete-de-milho-verde.jpeg" },
//       linkReceita: {url: "https://www.doriana.com.br/receitas/sorvete-de-milho-verde-cremoso/"},
//     },
//     {
//       nome: "Fondue de Chocolate",
//       endereco: "Praça Mock 789 - Belo Horizonte/MG",
//       imagem: { url: "/receitas/fondue-de-chocolate.jpeg" },
//       linkReceita: {url: "https://www.doriana.com.br/receitas/fondue-de-chocolate/"},
//     },
//   ];
// }
