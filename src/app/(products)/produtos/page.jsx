import { produtos } from "@/lib/produtos";
import Link from "next/link";

function ProdutosPage() {
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

export default ProdutosPage;
