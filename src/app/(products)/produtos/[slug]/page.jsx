import { getProdutos } from "@/lib/produtos";
import { ProductsContent } from "@/components/products";

export default async function ProdutoPage({ params }) {
  const produtos = await getProdutos();
  const produtoisMapeados = produtos.find((p) => p.slug === params.slug);

  if (!produtoisMapeados) return <h1>Produto não encontrado</h1>;

  return <ProductsContent produto={produtoisMapeados} />;
}
