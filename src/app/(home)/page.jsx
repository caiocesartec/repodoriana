import { SectionAbout } from "@/components/homepage/section-about";
import { SectionBanner } from "@/components/homepage/section-banner";
import { SectionEquipe } from "@/components/homepage/section-equipe";
import { SectionReceitas } from "@/components/homepage/section-receitas";
import { SectionNews } from "@/components/homepage/section-news";
import { SectionPracticeAreas } from "@/components/homepage/section-pratices-areas";
import {getReceitas } from "@/lib/receitas";
import { FormSection } from "@/components/homepage/section-form";

export const metadata = {
  title: "Doriana",
  description: "Doriana",
  author: "",
  icons: {
    icon: "/",
  },
};
;


const HomePage = async () => {
  const novidades = []
  const receitas = await getReceitas();

  return (
    <section className="all-content">
      <main className="content-pagee">
        <SectionBanner />
        <SectionNews novidades={novidades} />
        <SectionAbout />
        <SectionReceitas receitas={receitas} />
        <SectionEquipe />
        <FormSection />
      </main>
    </section>
  );
};

export default HomePage;
