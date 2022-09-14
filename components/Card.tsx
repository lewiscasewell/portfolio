import React, { useCallback } from "react";

import {
  Box,
  IconButton,
  Tag,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { IoLogoGithub, IoMdOpen } from "react-icons/io";
import { Project } from "../interfaces/index";

interface Props {
  project: Project;
}

export const Card: React.FC<Props> = ({ project }) => {
  const openLinkInNewTab = useCallback((url: string) => {
    window.open(url, "_blank");
  }, []);

  const tagTextColor = useColorModeValue("white", "navy.lighter");
  const textColor = useColorModeValue("navy.light", "slate.lighter");
  return (
    <>
      <Box
        bg="gray.900"
        borderRadius="md"
        px={5}
        pt={5}
        pb={8}
        position="relative"
        transition="0.2s ease-in"
        shadow="lg"
      >
        <Box justifyContent="space-between" display="flex">
          <Box>
            <IconButton
              variant="link"
              color="gray.400"
              _hover={{
                color: "white",
              }}
              _focus={{
                borderColor: "",
              }}
              aria-label="Open github link"
              icon={<IoLogoGithub size={30} />}
              onClick={() => openLinkInNewTab(project.url)}
            />
            <IconButton
              variant="link"
              color="gray.400"
              _hover={{
                color: "white",
              }}
              _focus={{
                borderColor: "transparent",
              }}
              aria-label="Open website"
              icon={<IoMdOpen size={30} />}
              onClick={() =>
                openLinkInNewTab(
                  project.homepageUrl ? project.homepageUrl : project.url
                )
              }
            />
          </Box>
          <Text>{project.primaryLanguage.name}</Text>
        </Box>
        <Text
          bgGradient="linear(to-br, #63FFD5, #D3FE84)"
          bgClip="text"
          fontSize="xl"
          fontWeight="bold"
          mt={4}
        >
          {project.name}
        </Text>
        <Text color={textColor} fontWeight="light" mt={3} noOfLines={3}>
          {project.description}
        </Text>
        <Box>
          {project.repositoryTopics.edges.map((topic, idx) => (
            <Tag
              key={idx}
              mr={2}
              mt={4}
              bg="gray.300"
              color={tagTextColor}
              borderRadius="full"
            >
              {topic.node.topic.name}
            </Tag>
          ))}
        </Box>
      </Box>
    </>
  );
};
