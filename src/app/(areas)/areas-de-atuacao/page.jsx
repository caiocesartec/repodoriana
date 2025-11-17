import { PraticeAreasCard } from "@/components/areas/areas-cards";
import { AreasContent } from "@/components/areas/content";


export const metadata = {
  title: "Delicia",
  description: "delicia",
  author: "",
  icons: {
    icon: "/",
  },
};
;


const AreasPage = () => {
  return (
    <section className="all-content">
      <main className="content-page">
        <AreasContent />
        <PraticeAreasCard />
      </main>
    </section>
  );
};

export default AreasPage;
