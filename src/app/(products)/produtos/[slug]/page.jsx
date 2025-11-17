import { ProductsContent } from "@/components/products";
import { produtos } from "@/lib/produtos";

export default function ProdutoPage({ params }) {
  const produto = produtos.find((p) => p.slug === params.slug);

  if (!produto) return <h1>Produto não encontrado</h1>;

  return <ProductsContent produto={produto} />;
}
