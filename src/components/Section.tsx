import { Box, Text } from "@chakra-ui/react";
import React from "react";

interface SectionProps {
  title: string;
}

export const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <Box
      p={5}
      shadow="md"
      flex="1"
      bgColor="#F6F6F6"
      borderRadius="sm"
    >
      <Text fontSize="2xl" fontFamily="mono">
        {title}
      </Text>
      <br></br>
      {children}
    </Box>
  );
};
