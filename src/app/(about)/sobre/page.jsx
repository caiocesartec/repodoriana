import { AboutContent } from "@/components/about/content";
import { MissionVisionValues } from "@/components/about/missao-valores-visao";

export const metadata = {
  title: "Doriana",
  description: "Doriana",
  author: "",
  icons: {
    icon: "/",
  },
};

const AboutPage = () => {
  return (
    <section className="all-content">
      <main className="content-page">
        <AboutContent />
        {/* <MissionVisionValues /> */}
      </main>
    </section>
  );
}

export default AboutPage;