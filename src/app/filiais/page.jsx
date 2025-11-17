import { ReceitasContent } from "@/components/homepage/section-receitas/components/receitas-content";
import { getReceitas } from "@/lib/receitas";


export const metadata = {
  title: "Doriana",
  description: "Doriana",
  author: "",
  icons: {
    icon: "/",
  },
};
;


const ReceitasPage = async () => {
  const receitas = await getReceitas();

  return (
    <section className="all-content">
      <main className="content-page">
        <ReceitasContent receitas={receitas} />
      </main>
    </section>
  );
};

export default ReceitasPage;
