import Card from "./components/Card";
import Parallax from "./components/Paralax";
import TextBox from "./components/TextBox";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="grid-background h-screen flex flex-col justify-center items-center overflow-hidden relative">
        <Image
          className=" rounded"
          src="/profile.jpg"
          width={130}
          height={130}
          alt="Hugo Maltese profile"
        />
        <div>
          <TextBox
            text="Hugo Maltese"
            style="text-white font-custom text-9xl"
            animation={2}
          />
          <div className="flex items-end">
            <TextBox
              text="Développeur fullstack"
              style="text-white font-custom text-5xl"
              animation={1}
            />
            <span className="ml-1 mb-2 h-[1.5rem] w-[0.2rem] bg-white animate-blink" />
          </div>
        </div>
      </div>
      <Parallax />
      <div className="grid-background">
        <div className="max-w-lg space-y-4 mx-auto py-24 text-neutral-300">
          <Card
            title="Ingénieur Backend Junior, Fruitz (Bumble Studio)"
            date="2021 - 2022"
            desc={["Participer au développement de services backend (en Golang)" ,"Améliorer et automatiser des processus tels que les builds, CI/CD et tests" ,"Assurer un exemple de qualité de code par des revues techniques approfondies (Pull requests)" ,"Collaborer sur l'organisation du travail avec le reste des équipes produit et ingénierie Rédiger de la documentation technique"]}
          />
          <Card title="Freelance" date="2021" desc={["Développeur FullStack"]} />
          <Card
            title="Lab"
            date="Oct 2020 - Jan 2021"
            desc={["Application de calcul scientifique en VBA pour minimiser la pollution des navires de fret et des bateaux de croisière."]}
          />
          <Card
            title="ENA, Hackaton"
            date="2019"
            desc={["Recherche et mise en œuvre avec une équipe de hauts fonctionnaires d'une solution à un problème de politique publique."]}
          />
          <Card
            title="WaveStone, Cybersecurity challenge"
            date="2019"
            desc={["Audit de sécurité afin d'identifier les différentes failles au seins de leur plateforme"]}
          />
        </div>
      </div>
    </div>
  );
}
