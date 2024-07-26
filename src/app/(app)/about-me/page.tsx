export const dynamic = "force-dynamic";
export const revalidate = 3600;

import Text from "@/components/Text";
import Image from "next/image";
import React from "react";
import Portrait from "../assets/portrait.jpg";
import Banner from "../assets/profile_banner.png";
import LinkButton from "@/components/LinkButton";
import AboutMeHero from "@/components/HeroSections/AboutMe";
import Sections from "@/components/AboutMe/Sections";

import config from "@payload-config";
import { getPayloadHMR } from "@payloadcms/next/utilities";
const payload = await getPayloadHMR({ config });

const Page = async () => {
  const { docs } = await payload.find({
    collection: "pages",
    where: {
      name: {
        equals: "About Me",
      },
    },
  });

  const data = docs[0];

  return (
    <>
      <div className="w-full relative min-h-[130px]">
        <Image
          src={Banner}
          alt="Profile Banner"
          className="h-full rounded-12px"
          fill
        />
        <Image
          src={Portrait}
          width={100}
          alt="profile_image"
          className="absolute -left-8px -bottom-24px rounded-full border-inverse border-[4px]"
        />
      </div>

      {/* Intro Section */}
      <div className="flex flex-col gap-12px">
        <div className="flex flex-col gap-0px">
          <Text as="h1" size="heading" weight="medium">
            Hi, I'm Mark
          </Text>
          <Text
            as="span"
            size="body"
            weight="normal"
            multiline
            className="text-subtle"
          >
            Nice to meet me
          </Text>
        </div>

        <div className="flex flex-row gap-12px">
          <LinkButton
            label="LinkedIn"
            href="https://www.linkedin.com/in/mark-noya/"
          />
          <LinkButton
            label="Resume"
            href="https://www.linkedin.com/in/mark-noya/"
          />
        </div>

        {data ? <AboutMeHero data={data.intro} /> : <div>Loading...</div>}
      </div>

      {data ? <Sections data={data.sections} /> : <div>Loading...</div>}
    </>
  );
};

export default Page;
