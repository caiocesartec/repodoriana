import { TeamContent } from "@/components/team";


export const metadata = {
 title: "Doriana NOVO",
  description: "Doriana",
  author: "",
  icons: {
    icon: "/",
  },
};
;


const TeamPage = async () => {
  const profissionais = []
  return (
    <section className="all-content">
      <main className="content-page">
        <TeamContent profissionais={profissionais} />
      </main>
    </section>
  );
};

export default TeamPage;