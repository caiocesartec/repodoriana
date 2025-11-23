import { AboutContent } from "@/components/about/content";

export const metadata = {
  title: "Doriana",
  description: "Doriana",
  icons: {
    icon: "/",
  },
};

const AboutPage = () => {
  return (
    <section className="all-content">
      <main className="content-page">
        <AboutContent />
      </main>
    </section>
  );
};

export default AboutPage;
