import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import {
  chakra, Flex, FormControl, Input, Select, Button, Checkbox, AspectRatio, useBreakpointValue
} from '@chakra-ui/react';

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Social Media Management App</title>
        <meta name="description" content="GarudaHacks 2.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex flexDir={useBreakpointValue({ base: "column", lg: "row" })}>
        <Flex flexDir="column" justifyContent="center" px={{ base: 8, lg: 20 }} mt="17%" mb="17%">
          <chakra.h1 fontSize={{ base: "4xl", md: "4xl", lg: "5xl" }} mb={6}
            fontWeight="bold"
            color="black"
            lineHeight="shorter"
          >
            Get started for free.
          </chakra.h1>
          <FormControl id="email" mb="4">
            <Input placeholder="Email" type="email" isRequired={true} />
          </FormControl>
          <FormControl id="password" mb="4">
            <Input placeholder="Password" type="password" isRequired={true} />
          </FormControl>
          <FormControl id="password" mb="4">
            <Select placeholder="How did you hear about us?">
              <option>Friend</option>
              <option>Family</option>
              <option>Social Media</option>
            </Select>
          </FormControl>
          <Button w="100%" textColor="white" colorScheme="yellow" mb="4">
            Sign Up
          </Button>
          <Checkbox size="sm" colorScheme="yellow" defaultIsChecked>Sign up for our newsletter</Checkbox>
        </Flex>
        <AspectRatio flexDir="column" bg="gray.200" justifyContent="center" w="100%">
          <Image alt="laptop" src="https://source.unsplash.com/random/?laptop" layout="fill"/>
        </AspectRatio>
      </Flex>
    </React.Fragment>
  )
}
