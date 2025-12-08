import { getProdutos } from "@/lib/produtos";
import { ProductsContent } from "@/components/products";

export default async function ProdutoPage({ params }) {
  const resolvedParams = await params; 
  const produtos = await getProdutos();

  const produto = produtos.find((p) => p.slug === resolvedParams.slug);

  if (!produto)
    return <h1 className="text-center">Produto não encontrado</h1>;

  return <ProductsContent produto={produto} />;
}
