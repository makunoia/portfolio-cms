import Text from "@/components/Text";
import { FeaturedProject } from "@/types";
import FeaturedProjectsClient from "./Client";

import config from "@payload-config";
import { getPayloadHMR } from "@payloadcms/next/utilities";

const getFeaturedProjects = async () => {
  const payload = await getPayloadHMR({ config });
  const { docs } = await payload.find({
    collection: "projects",
    where: {
      isFeatured: {
        equals: true,
      },
    },
  });

  return docs as FeaturedProject[];
};

const FeaturedProjects = async () => {
  const projects = await getFeaturedProjects();

  return (
    <FeaturedProjectsClient projects={projects}>
      <Text as="h2" size="lead">
        Featured Projects
      </Text>
    </FeaturedProjectsClient>
  );
};

export default FeaturedProjects;
