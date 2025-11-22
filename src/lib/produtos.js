export async function getProdutos() {
  const query = `
  {
    produtos {
      nodes {
        slug
        camposDeProduto {
          nome
          descricao
          sobre
          ingredientes
          informacoesNutricionais
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

  const response = await fetch("https://new.doriana.com.br/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
    cache: "no-store",
  });

  const { data } = await response.json();

  function parseNutricional(texto) {
    if (!texto) return [];

    const linhas = texto
      .split("\n")
      .map((l) => l.trim())
      .filter(Boolean);

    return linhas.map((linha) => {
      const [left, right] = linha.split("— VD");

      const titulo = left.split(":")[0].trim();
      const quantidade = left.split(":")[1]?.trim() || "";
      const vd = right?.trim() || "";

      return { titulo, quantidade, vd };
    });
  }

  function mapProduto(p) {
    const acf = p.camposDeProduto ?? {};

    return {
      slug: p.slug,
      nome: acf.nome || "",
      descricao: acf.descricao || "",
      sobre: acf.sobre || "",
      ingredientes: acf.ingredientes || "",
      nutricionalItens: parseNutricional(acf.informacoesNutricionais || ""),
      imagem: acf.imagem?.node?.mediaItemUrl ?? "/placeholder.png",
    };
  }

  return data?.produtos?.nodes?.map(mapProduto) ?? [];
}





// export const produtos = [
  
//   {
//     slug: "doriana-cremosa-com-sal-250g",
//     nome: "Doriana Cremosa com Sal 250g",
//     descricao: "A receita garante mais sabor e cremosidade para as suas refeições.",
//     imagem: "/produtos/pote-cremosa-sal-250.png",

//     sobre: `
// A receita garante mais sabor e cremosidade para as suas refeições. 
// Em opções com sal e sem sal, disponíveis em todo o país.
// `,

//     ingredientes: `
// Óleos vegetais líquidos e interesterificados (contém óleo de soja*), água, sal, leite em pó desnatado, 
// emulsificantes mono e diglicerídeos de ácidos graxos e lecitina de soja*, conservador sorbato de potássio, 
// acidulante ácido cítrico, aromatizante, antioxidantes BHT e EDTA cálcio dissódico e corantes betacaroteno 
// e natural de urucum e cúrcuma. 
// *(geneticamente modificado a partir de Streptomyces viridochromogenes e/ou Agrobacterium tumefaciens 
// e/ou Bacillus thuringiensis).

// ALÉRGICOS: CONTÉM DERIVADOS DE SOJA E LEITE.  
// CONTÉM LACTOSE.  
// NÃO CONTÉM GLÚTEN.
// `,

//     nutricional: `
// Porção de 10g (1 colher de sopa)

// Valor energético: 72 kcal — VD 4%  
// Carboidratos: 0 g — VD *  
// Açúcares totais: 0 g — VD *  
// Açúcares adicionados: 0 g — VD *  
// Proteínas: 0 g — VD *  
// Gorduras totais: 8 g — VD 12%  
// Gorduras saturadas: 2,3 g — VD 12%  
// Gorduras trans: 0,1 g — VD *  
// Fibras alimentares: 0 g — VD *  
// Sódio: 55 mg — VD 3%
// `,

//     nutricionalItens: [
//       { titulo: "Valor energético", quantidade: "72 kcal", vd: "4%" },
//       { titulo: "Carboidratos", quantidade: "0 g", vd: "*" },
//       { titulo: "Açúcares totais", quantidade: "0 g", vd: "*" },
//       { titulo: "Açúcares adicionados", quantidade: "0 g", vd: "*" },
//       { titulo: "Proteínas", quantidade: "0 g", vd: "*" },
//       { titulo: "Gorduras totais", quantidade: "8 g", vd: "12%" },
//       { titulo: "Gorduras saturadas", quantidade: "2,3 g", vd: "12%" },
//       { titulo: "Gorduras trans", quantidade: "0,1 g", vd: "*" },
//       { titulo: "Fibra alimentar", quantidade: "0 g", vd: "*" },
//       { titulo: "Sódio", quantidade: "55 mg", vd: "3%" },
//     ],
//   },


//   {
//     slug: "doriana-cremosa-com-sal-500g",
//     nome: "Doriana Cremosa com Sal 500g",
//     descricao: "A receita garante mais sabor e cremosidade para as suas refeições.",
//     imagem: "/produtos/pote-cremosa-sal-500.png",

//     sobre: `
// A receita garante mais sabor e cremosidade para as suas refeições. 
// Em opções com sal e sem sal, disponíveis em todo o país.
// `,

//     ingredientes: `
// Óleos vegetais líquidos e interesterificados (contém óleo de soja*), água, sal, leite em pó desnatado, 
// emulsificantes mono e diglicerídeos de ácidos graxos e lecitina de soja*, conservador sorbato de potássio, 
// acidulante ácido cítrico, aromatizante, antioxidantes BHT e EDTA cálcio dissódico e corantes betacaroteno 
// e natural de urucum e cúrcuma.

// ALÉRGICOS: CONTÉM DERIVADOS DE SOJA E LEITE.  
// CONTÉM LACTOSE.  
// NÃO CONTÉM GLÚTEN.
// `,

//     nutricional: `
// Porção de 10g (1 colher de sopa)

// Valor energético: 72 kcal — VD 4%  
// Carboidratos: 0 g — VD *  
// Açúcares totais: 0 g — VD *  
// Açúcares adicionados: 0 g — VD *  
// Proteínas: 0 g — VD *  
// Gorduras totais: 8 g — VD 12%  
// Gorduras saturadas: 2,3 g — VD 12%  
// Gorduras trans: 0,1 g — VD *  
// Fibras alimentares: 0 g — VD *  
// Sódio: 55 mg — VD 3%
// `,

//     nutricionalItens: [
//       { titulo: "Valor energético", quantidade: "72 kcal", vd: "4%" },
//       { titulo: "Carboidratos", quantidade: "0 g", vd: "*" },
//       { titulo: "Açúcares totais", quantidade: "0 g", vd: "*" },
//       { titulo: "Açúcares adicionados", quantidade: "0 g", vd: "*" },
//       { titulo: "Proteínas", quantidade: "0 g", vd: "*" },
//       { titulo: "Gorduras totais", quantidade: "8 g", vd: "12%" },
//       { titulo: "Gorduras saturadas", quantidade: "2,3 g", vd: "12%" },
//       { titulo: "Gorduras trans", quantidade: "0,1 g", vd: "*" },
//       { titulo: "Fibra alimentar", quantidade: "0 g", vd: "*" },
//       { titulo: "Sódio", quantidade: "55 mg", vd: "3%" },
//     ],
//   },


//   {
//     slug: "doriana-cremosa-com-sal-1kg",
//     nome: "Doriana Cremosa com Sal 1kg",
//     descricao: "A receita garante mais sabor e cremosidade para as suas refeições.",
//     imagem: "/produtos/pote-cremosa-sal-1kg.png",

//     sobre: `
// A receita garante mais sabor e cremosidade para as suas refeições. 
// Em opções com sal e sem sal, disponíveis em todo o país.
// `,

//     ingredientes: `
// Óleos vegetais líquidos e interesterificados (contém óleo de soja*), água, sal, leite em pó desnatado, 
// emulsificantes mono e diglicerídeos de ácidos graxos e lecitina de soja*, conservador sorbato de potássio, 
// acidulante ácido cítrico, aromatizante, antioxidantes BHT e EDTA cálcio dissódico e corantes betacaroteno 
// e natural de urucum e cúrcuma.

// ALÉRGICOS: CONTÉM DERIVADOS DE SOJA E LEITE.  
// CONTÉM LACTOSE.  
// NÃO CONTÉM GLÚTEN.
// `,

//     nutricional: `
// Porção de 10g (1 colher de sopa)

// Valor energético: 72 kcal — VD 4%  
// Carboidratos: 0 g — VD *  
// Açúcares totais: 0 g — VD *  
// Açúcares adicionados: 0 g — VD *  
// Proteínas: 0 g — VD *  
// Gorduras totais: 8 g — VD 12%  
// Gorduras saturadas: 2,3 g — VD 12%  
// Gorduras trans: 0,1 g — VD *  
// Fibras alimentares: 0 g — VD *  
// Sódio: 55 mg — VD 3%
// `,

//     nutricionalItens: [
//       { titulo: "Valor energético", quantidade: "72 kcal", vd: "4%" },
//       { titulo: "Carboidratos", quantidade: "0 g", vd: "*" },
//       { titulo: "Açúcares totais", quantidade: "0 g", vd: "*" },
//       { titulo: "Açúcares adicionados", quantidade: "0 g", vd: "*" },
//       { titulo: "Proteínas", quantidade: "0 g", vd: "*" },
//       { titulo: "Gorduras totais", quantidade: "8 g", vd: "12%" },
//       { titulo: "Gorduras saturadas", quantidade: "2,3 g", vd: "12%" },
//       { titulo: "Gorduras trans", quantidade: "0,1 g", vd: "*" },
//       { titulo: "Fibra alimentar", quantidade: "0 g", vd: "*" },
//       { titulo: "Sódio", quantidade: "55 mg", vd: "3%" },
//     ],
//   },


//   {
//     slug: "doriana-cremosa-sem-sal-250g",
//     nome: "Doriana Cremosa Sem Sal 250g",
//     descricao: "A receita garante mais sabor e cremosidade para as suas refeições.",
//     imagem: "/produtos/pote-cremosa-sem-sal-250.png",

//     sobre: `
// A receita garante mais sabor e cremosidade para as suas refeições. 
// Em opções com sal e sem sal, disponíveis em todo o país.
// `,

//     ingredientes: `
// Óleos vegetais líquidos e interesterificados (contém óleo de soja*), água, leite desnatado em pó, 
// emulsificantes mono e diglicerídeos de ácidos graxos e lecitina de soja*, conservador sorbato de potássio, 
// acidulante ácido cítrico, aromatizante, antioxidantes BHT e EDTA cálcio dissódico e corantes betacaroteno 
// e natural de urucum e cúrcuma.

// ALÉRGICOS: CONTÉM DERIVADOS DE SOJA E LEITE.  
// CONTÉM LACTOSE.  
// NÃO CONTÉM GLÚTEN.
// `,

//     nutricional: `
// Porção de 10g (1 colher de sopa)

// Valor energético: 72 kcal — VD 4%  
// Carboidratos: 0 g — VD *  
// Açúcares totais: 0 g — VD *  
// Açúcares adicionados: 0 g — VD *  
// Proteínas: 0 g — VD *  
// Gorduras totais: 8 g — VD 12%  
// Gorduras saturadas: 2,1 g — VD 11%  
// Gorduras trans: 0 g — VD *  
// Fibras alimentares: 0 g — VD *  
// Sódio: 0 mg — VD *
// `,

//     nutricionalItens: [
//       { titulo: "Valor energético", quantidade: "72 kcal", vd: "4%" },
//       { titulo: "Carboidratos", quantidade: "0 g", vd: "*" },
//       { titulo: "Açúcares totais", quantidade: "0 g", vd: "*" },
//       { titulo: "Açúcares adicionados", quantidade: "0 g", vd: "*" },
//       { titulo: "Proteínas", quantidade: "0 g", vd: "*" },
//       { titulo: "Gorduras totais", quantidade: "8 g", vd: "12%" },
//       { titulo: "Gorduras saturadas", quantidade: "2,1 g", vd: "11%" },
//       { titulo: "Gorduras trans", quantidade: "0 g", vd: "*" },
//       { titulo: "Fibra alimentar", quantidade: "0 g", vd: "*" },
//       { titulo: "Sódio", quantidade: "0 mg", vd: "*" },
//     ],
//   },


//   {
//     slug: "doriana-cremosa-sem-sal-500g",
//     nome: "Doriana Cremosa Sem Sal 500g",
//     descricao: "A receita garante mais sabor e cremosidade para as suas refeições.",
//     imagem: "/produtos/pote-cremosa-sem-sal-500.png",

//     sobre: `
// A receita garante mais sabor e cremosidade para as suas refeições. 
// Em opções com sal e sem sal, disponíveis em todo o país.
// `,

//     ingredientes: `
// Óleos vegetais líquidos e interesterificados (contém óleo de soja*), água, leite desnatado em pó, 
// emulsificantes mono e diglicerídeos de ácidos graxos e lecitina de soja*, conservador sorbato de potássio, 
// acidulante ácido cítrico, aromatizante, antioxidantes BHT e EDTA cálcio dissódico e corantes betacaroteno 
// e natural de urucum e cúrcuma.

// ALÉRGICOS: CONTÉM DERIVADOS DE SOJA E LEITE.  
// CONTÉM LACTOSE.  
// NÃO CONTÉM GLÚTEN.
// `,

//     nutricional: `
// Porção de 10g (1 colher de sopa)

// Valor energético: 72 kcal — VD 4%  
// Carboidratos: 0 g — VD *  
// Açúcares totais: 0 g — VD *  
// Açúcares adicionados: 0 g — VD *  
// Proteínas: 0 g — VD *  
// Gorduras totais: 8 g — VD 12%  
// Gorduras saturadas: 2,1 g — VD 11%  
// Gorduras trans: 0 g — VD *  
// Fibras alimentares: 0 g — VD *  
// Sódio: 0 mg — VD *
// `,

//     nutricionalItens: [
//       { titulo: "Valor energético", quantidade: "72 kcal", vd: "4%" },
//       { titulo: "Carboidratos", quantidade: "0 g", vd: "*" },
//       { titulo: "Açúcares totais", quantidade: "0 g", vd: "*" },
//       { titulo: "Açúcares adicionados", quantidade: "0 g", vd: "*" },
//       { titulo: "Proteínas", quantidade: "0 g", vd: "*" },
//       { titulo: "Gorduras totais", quantidade: "8 g", vd: "12%" },
//       { titulo: "Gorduras saturadas", quantidade: "2,1 g", vd: "11%" },
//       { titulo: "Gorduras trans", quantidade: "0 g", vd: "*" },
//       { titulo: "Fibra alimentar", quantidade: "0 g", vd: "*" },
//       { titulo: "Sódio", quantidade: "0 mg", vd: "*" },
//     ],
//   },


//   {
//     slug: "doriana-cremosa-sem-sal-1kg",
//     nome: "Doriana Cremosa Sem Sal 1kg",
//     descricao: "A receita garante mais sabor e cremosidade para as suas refeições.",
//     imagem: "/produtos/pote-cremosa-sem-sal-1kg.png",

//     sobre: `
// A receita garante mais sabor e cremosidade para as suas refeições. 
// Em opções com sal e sem sal, disponíveis em todo o país.
// `,

//     ingredientes: `
// Óleos vegetais líquidos e interesterificados (contém óleo de soja*), água, leite desnatado em pó, 
// emulsificantes mono e diglicerídeos de ácidos graxos e lecitina de soja*, conservador sorbato de potássio, 
// acidulante ácido cítrico, aromatizante, antioxidantes BHT e EDTA cálcio dissódico e corantes betacaroteno 
// e natural de urucum e cúrcuma.

// ALÉRGICOS: CONTÉM DERIVADOS DE SOJA E LEITE.  
// CONTÉM LACTOSE.  
// NÃO CONTÉM GLÚTEN.
// `,

//     nutricional: `
// Porção de 10g (1 colher de sopa)

// Valor energético: 72 kcal — VD 4%  
// Carboidratos: 0 g — VD *  
// Açúcares totais: 0 g — VD *  
// Açúcares adicionados: 0 g — VD *  
// Proteínas: 0 g — VD *  
// Gorduras totais: 8 g — VD 12%  
// Gorduras saturadas: 2,1 g — VD 11%  
// Gorduras trans: 0 g — VD *  
// Fibras alimentares: 0 g — VD *  
// Sódio: 0 mg — VD *
// `,

//     nutricionalItens: [
//       { titulo: "Valor energético", quantidade: "72 kcal", vd: "4%" },
//       { titulo: "Carboidratos", quantidade: "0 g", vd: "*" },
//       { titulo: "Açúcares totais", quantidade: "0 g", vd: "*" },
//       { titulo: "Açúcares adicionados", quantidade: "0 g", vd: "*" },
//       { titulo: "Proteínas", quantidade: "0 g", vd: "*" },
//       { titulo: "Gorduras totais", quantidade: "8 g", vd: "12%" },
//       { titulo: "Gorduras saturadas", quantidade: "2,1 g", vd: "11%" },
//       { titulo: "Gorduras trans", quantidade: "0 g", vd: "*" },
//       { titulo: "Fibra alimentar", quantidade: "0 g", vd: "*" },
//       { titulo: "Sódio", quantidade: "0 mg", vd: "*" },
//     ],
//   },


//   {
//     slug: "doriana-light-500g",
//     nome: "Doriana Light 500g",
//     descricao: "Mais leveza e sabor no preparo dos seus pratos. Sempre com a cremosidade da Doriana.",
//     imagem: "/produtos/pote-light-500.png",

//     sobre: `
// Mais leveza e sabor no preparo dos seus pratos. Sempre com a cremosidade da Doriana.
// `,

//     ingredientes: `
// Água, óleos vegetais líquidos e interesterificados (contém óleo de soja*), sal, cloreto de potássio,
// emulsificantes: mono e diglicerídeos de ácidos graxos e ésteres de poliglicerídeos de ácidos graxos,
// conservador sorbato de potássio, aromatizante, acidulante ácido láctico, antioxidantes: EDTA cálcio
// dissódico, BHT e ácido cítrico e corante natural de urucum e cúrcuma.

// NÃO CONTÉM GLÚTEN.  
// ALÉRGICOS: CONTÉM DERIVADOS DE SOJA. PODE CONTER LEITE.
// `,

//     nutricional: `
// Porção de 10g (1 colher de sopa)

// Valor energético: 32 kcal — VD 2%  
// Carboidratos: 0 g — VD *  
// Açúcares totais: 0 g — VD *  
// Açúcares adicionados: 0 g — VD *  
// Proteínas: 0 g — VD *  
// Gorduras totais: 3,5 g — VD 5%  
// Gorduras saturadas: 1 g — VD 5%  
// Gorduras trans: 0,4 g — VD *  
// Fibras alimentares: 0 g — VD *  
// Sódio: 55 mg — VD 3%
// `,

//     nutricionalItens: [
//       { titulo: "Valor energético", quantidade: "32 kcal", vd: "2%" },
//       { titulo: "Carboidratos", quantidade: "0 g", vd: "*" },
//       { titulo: "Açúcares totais", quantidade: "0 g", vd: "*" },
//       { titulo: "Açúcares adicionados", quantidade: "0 g", vd: "*" },
//       { titulo: "Proteínas", quantidade: "0 g", vd: "*" },
//       { titulo: "Gorduras totais", quantidade: "3,5 g", vd: "5%" },
//       { titulo: "Gorduras saturadas", quantidade: "1 g", vd: "5%" },
//       { titulo: "Gorduras trans", quantidade: "0,4 g", vd: "*" },
//       { titulo: "Fibra alimentar", quantidade: "0 g", vd: "*" },
//       { titulo: "Sódio", quantidade: "55 mg", vd: "3%" },
//     ],
//   },
// ];
