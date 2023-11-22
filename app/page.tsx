import Parallax from "./components/Paralax";
import TextBox from "./components/TextBox";
import Image from "next/image";
import VisitorCounter from "./components/VisitorCounter";
import Timeline from "./components/Timeline";
import Link from 'next/link';

export default function Home() {
  const timelineItems = [
    {
      title: "WaveStone, Cybersecurity challenge",
      date: "2019",
      desc: [
        "Audit de sécurité afin d'identifier les différentes failles au seins de leur plateforme",
      ],
    },
    {
      title: "ENA, Hackaton",
      date: "2019",
      desc: [
        "Recherche et mise en œuvre avec une équipe de hauts fonctionnaires d'une solution à un problème de politique publique.",
      ],
    },
    {
      title: "Lab",
      date: "Oct 2020 - Jan 2021",
      desc: [
        "Application de calcul scientifique en VBA pour minimiser la pollution des navires de fret et des bateaux de croisière.",
      ],
    },
    {
      title: "Freelance",
      date: "2021",
      desc: ["Développeur FullStack"],
    },
    {
      title: "Ingénieur Backend Junior, Fruitz (Bumble Studio)",
      date: "2021 - 2022",
      desc: [
        "Participer au développement de services backend (en Golang)",
        "Améliorer et automatiser des processus tels que les builds, CI/CD et tests",
        "Assurer un exemple de qualité de code par des revues techniques approfondies (Pull requests)",
        "Collaborer sur l'organisation du travail avec le reste l'équipe Product & Engineering",
        "Rédiger de la documentation technique",
      ],
    },
  ];

  return (
    <div>
      <div className="grid-background h-screen flex flex-col justify-center items-center overflow-hidden relative">
        <VisitorCounter
          style={"absolute top-4 right-4 text-white font-bold text-lg px-4 py-2 rounded-full shadow-lg hover:bg-opacity-70 transition ease-in-out duration-300"}
        />
        <Image
          className="rounded h-auto w-auto"
          src="/profile.jpg"
          width={130}
          height={130}
          alt="Hugo Maltese profile"
          priority={true}
        />
        <div>
          <TextBox
            text="Hugo Maltese"
            style="text-white font-custom text-9xl"
            animation={2}
          />
          <div className="flex items-end">
            <TextBox
              text="Développeur Fullstack"
              style="text-white font-custom text-5xl"
              animation={1}
            />
            <span className="ml-1 mb-2 h-[1.5rem] w-[0.2rem] bg-white animate-blink" />
          </div>
        </div>
        <div className="absolute bottom-10 flex space-x-6">
    <a href="https://www.linkedin.com/in/hugo-maltese-02022000hm/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
      <Image src="/linkedin-color.svg" alt="LinkedIn" width={40} height={40} />
    </a>
    <a href="https://github.com/Lybertyxz" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
      <Image src="/github-color.svg" alt="GitHub" width={40} height={40} />
    </a>
    <a href="hugo.maltese@epitech.eu" className="hover:scale-110 transition-transform">
      <Image src="/email-color.svg" alt="Mail" width={40} height={40} />
    </a>
    <a className="px-4 py-2 bg-white text-black rounded-full shadow-lg hover:bg-gray-100 transition-transform hover:scale-110" href="/CV.pdf" download><button>Télécharger le CV</button></a>
  </div>
      </div>
      <Parallax />
      <div className="grid-background">
        <Timeline items={timelineItems} />
      </div>
    </div>
  );
}
