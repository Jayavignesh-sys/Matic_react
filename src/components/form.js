import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Center,
  Input,
  theme,
  Container,
} from '@chakra-ui/react';

import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';

import { Textarea } from '@chakra-ui/react';

import { Button, ButtonGroup } from '@chakra-ui/react';

export default function Form() {
  return (
    <Container padding="4">
      <Box w="100%" pt={4} pb={4}>
        Property Size:
      </Box>
      <NumberInput bg="white">
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Box w="100%" pt={4} pb={4}>
        Price:
      </Box>
      <NumberInput bg="white">
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Box w="100%" pt={4} pb={4}>
        Address:
      </Box>
      <Textarea placeholder="Enter your Address here..." />
      <Box w="100%" pt={4} b={4} color="white"></Box>
      <Input variant="filled" placeholder="image link" />
      <Center w="100%" pt={4} pb={4} color="white">
        <Button colorScheme="blue" isFullWidth="true">
          Submit
        </Button>
      </Center>
    </Container>
  );
}
