import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import React from "react";

interface SideProps {
  photo: string;
  name: string;
  email: string;
  linkedIn: string;
  gitHub: string;
}

export const Side: React.FC<SideProps> = ({
  photo,
  name,
  email,
  linkedIn,
  gitHub,
}) => {
  return (
    <Box
      position="sticky"
      top={8}
      p={5}
      shadow="md"
      flex="1"
      mr="8"
      mb="8"
      maxH="sm"
      fontFamily="mono"
      bgColor="#F6F6F6"
      borderRadius="sm"
    >
      <Flex mt="4" mb="8" justifyContent="center">
        <Image
          borderRadius="full"
          boxSize="150"
          src={photo}
          alt={name}
          shadow="dark-lg"
        />
      </Flex>
      <Box mt="4">
        <Flex justifyContent="center" mb="2">
          <Text fontSize="xl" variant="content">
            {name}
          </Text>
        </Flex>
        <Link href={`mailto:${email}`} color="blue">
          <Text variant="content">{email}</Text>
        </Link>
        <Link href={linkedIn} color="blue" target="_blank">
          <Text variant="content">LinkedIn</Text>
        </Link>
        <Link href={gitHub} color="blue" target="_blank">
          <Text variant="content">Github</Text>
        </Link>
      </Box>
    </Box>
  );
};
