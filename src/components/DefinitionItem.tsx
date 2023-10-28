import React, { ReactNode } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

// we need to know what attribute we are displaying
// we need to know what data to display

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}

const DefinitionItem = ({ term, children }: Props) => {
  return (
    <Box marginY={5}>
      <Heading as="dt" fontSize="md" color="gray.600">
        {term}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
};

export default DefinitionItem;
