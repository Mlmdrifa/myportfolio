/* eslint-disable react/no-string-refs */
/* eslint-disable @next/next/no-img-element */
import { Section } from "./Section";
import { Code } from "./Code";
import {
  SiJavascript,
  SiTypescript,
  SiVite,
  SiMongodb,
  SiNetlify,
} from "react-icons/si";
import Link from "next/link";

export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full p-4 flex flex-col gap-2">
        <h2 className="font-caption text-5xl text-primary">Drifa MALOUM</h2>
        <h3 className="text-3xl font-caption">Développeuse Web/Mobile</h3>
        <p className="text-base">
          Développeuse web front-end spécialisée en
          <Link href={"https://reactnative.dev/"}>
            <Code>React Native.</Code>
          </Link>
          Mon parcours est axé sur la création d&apos;expériences utilisateur
          fluides et engageantes pour les applications mobiles. Passionnée par
          l&apos;innovation technologique, j&apos;explore constamment de
          nouvelles approches pour offrir des solutions créatives et efficaces.
        </p>

        <p className="mb-1 mt-1">Technologies que j&apos;utilise :</p>
        <span className="flex space-x-2 inline">
          <Code className="inline-flex items-center gap-1">
            <SiJavascript /> Javascript
          </Code>
          <Code className="inline-flex items-center gap-1">
            <SiTypescript />
            Typescript
          </Code>
          <Code className="inline-flex items-center gap-1">
            <SiVite />
            Vite
          </Code>
          <Code className="inline-flex items-center gap-1">
            <SiMongodb />
            Mongodb
          </Code>
          <Code className="inline-flex items-center gap-1">
            <SiNetlify />
            Netlify
          </Code>
        </span>

        <p>
          N&apos;hésitez pas à explorer et à me contacter pour collaborer ou en
          savoir plus.
        </p>
      </div>
      <div className="flex-[2] max:md-m-auto ml-auto">
        <img
          src="https://media.licdn.com/dms/image/D4E03AQEK6Ohy0pCMRA/profile-displayphoto-shrink_400_400/0/1704585988656?e=1718236800&v=beta&t=G-pOosowLK12fU8zbl0oqp4h9STmiuxEjuhjvLK5CSg"
          className=" w-26 max-w-xs max-md-w-56 rounded-full"
          alt="Image de Profil"
        />
      </div>
    </Section>
  );
};