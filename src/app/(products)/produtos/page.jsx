import { getProdutos } from "@/lib/produtos";
import Link from "next/link";

export default async function ProdutosPage() {
  const produtos = await getProdutos();

  return (
    <section className="all-content">
      <main className="content-page">
        <h1>Todos os produtos</h1>

        {produtos.map((p) => (
          <div key={p.slug}>
            <Link href={`/produtos/${p.slug}`}>{p.nome}</Link>
          </div>
        ))}
      </main>
    </section>
  );
}
