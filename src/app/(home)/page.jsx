import { SectionAbout } from "@/components/homepage/section-about";
import { SectionAboutTwo } from "@/components/homepage/section-about-two";
import { SectionBanner } from "@/components/homepage/section-banner";
import { SectionEquipe } from "@/components/homepage/section-equipe";
import { SectionReceitas } from "@/components/homepage/section-receitas";
import { SectionTwoTop } from "@/components/homepage/section-two-top";
import { SectionThreeProductShow } from "@/components/homepage/section-three-product-show";
import {getReceitas } from "@/lib/receitas";
import { FormSection } from "@/components/homepage/section-form";
import { SectionRir } from "@/components/homepage/section-rir";

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
        <SectionTwoTop novidades={novidades} />
        <SectionThreeProductShow />
        <SectionAbout />
        <SectionReceitas receitas={receitas} />
        <SectionAboutTwo />
        <SectionEquipe />
        <SectionRir />
        <FormSection />
      </main>
    </section>
  );
};

export default HomePage;
