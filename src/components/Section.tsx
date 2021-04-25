import { Box, Text } from "@chakra-ui/react";
import React from "react";

interface SectionProps {
  title: string;
}

export const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <Box p={5} shadow="2xl" flex="1" borderRadius="2xl">
      <Text fontSize="2xl" fontFamily="mono">
        {title}
      </Text>
      <br></br>
      {children}
    </Box>
  );
};
