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
      shadow="2xl"
      flex="1"
      borderRadius="2xl"
      mr="8"
      maxH="sm"
      fontFamily="mono"
    >
      <Flex mt="4" justifyContent="center">
        <Image
          borderRadius="full"
          boxSize="150"
          src={photo}
          alt={name}
          shadow="2xl"
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
