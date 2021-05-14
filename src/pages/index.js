import React from "react";
import { Box, Heading, Flex, VStack, Text } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";
import Helmet from "react-helmet";

import { AiOutlineLinkedin } from "react-icons/ai";
import { FiGithub, FiTwitter, FiBookmark } from "react-icons/fi";
import { BsCalendar } from "react-icons/bs";

export default function IndexPage() {
  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Seb Toombs | Frontend Engineer</title>
        <meta
          name="description"
          content="Hey, I'm Seb, a mostly frontend software engineer."
        />
        <link rel="canonical" href="http://hey.sebtoombs.com" />
      </Helmet>
      <Box maxW="2xl" mx="auto" py="10" px="4">
        <Flex mb="10">
          <Box w="6rem" h="6rem" overflow="hidden" borderRadius="9999px">
            <StaticImage
              backgroundColor="#fff"
              src="../images/profile.png"
              alt="A nice picture of Seb"
              placeholder="none"
            />
          </Box>
          <Box pl="10" ml="auto">
            <Heading size="2xl">Hey, I'm Seb</Heading>
            <Heading color="gray.600" fontWeight="500">
              Frontend Software Engineer
            </Heading>
          </Box>
        </Flex>
        <VStack
          justifyContent="flex-start"
          spacing="5"
          mb="10"
          fontSize="xl"
          fontWeight="500"
          bg="white"
          py="6"
          px="8"
          rounded="2rem"
          shadow="lg"
        >
          <p>
            Hi, I'm Seb! I'm a (mostly) frontend software engineer. My preferred
            stack involves React, Node, maybe Next.js or Gatsby, Typescript,
            Graphql and that kind of thing.
          </p>
          <p>
            If you think I'd make a good addition to your team, and the GMT+10
            timezone works for you, I'd love to have a chat!
          </p>
        </VStack>
        <VStack sx={{ "&>*": { minW: "100%" } }} spacing="6" as="ul">
          <Item as="a" href="https://calendly.com/sebtoombs" target="_blank">
            <ItemIcon bg="purple.500" color="white" p="0.6rem">
              <BsCalendar />
            </ItemIcon>
            <ItemContent>
              Let's have a chat!{" "}
              <span role="img" aria-label="Smile emoji">
                😀
              </span>
              <ItemSecondaryText>calendly.com/sebtoombs</ItemSecondaryText>
            </ItemContent>
          </Item>
          <Item
            as="a"
            href="https://www.linkedin.com/in/seb-toombs/"
            target="_blank"
          >
            <ItemIcon bg="brands.linkedin" color="white">
              <AiOutlineLinkedin />
            </ItemIcon>
            <ItemContent>
              Connect on Linkedin{" "}
              <ItemSecondaryText>
                www.linkedin.com/in/seb-toombs/
              </ItemSecondaryText>
            </ItemContent>
          </Item>
          <Item as="a" href="https://github.com/sebtoombs" target="_blank">
            <ItemIcon bg="black" color="white" p="2">
              <FiGithub />
            </ItemIcon>
            <ItemContent>
              View my Github{" "}
              <ItemSecondaryText>github.com/sebtoombs</ItemSecondaryText>
            </ItemContent>
          </Item>
          <Item as="a" href="https://twitter.com/baffledbasti" target="_blank">
            <ItemIcon bg="brands.twitter" color="white" p="2">
              <FiTwitter />
            </ItemIcon>
            <ItemContent>
              Twitter
              <ItemSecondaryText>twitter.com/baffledbasti</ItemSecondaryText>
            </ItemContent>
          </Item>
          <Item as="a" href="https://nimblewebdeveloper.com" target="_blank">
            <ItemIcon bg="rgb(20, 40, 96)" color="white" p="2">
              <FiBookmark />
            </ItemIcon>
            <ItemContent>
              Read my latest posts
              <ItemSecondaryText>nimblewebdeveloper.com</ItemSecondaryText>
            </ItemContent>
          </Item>
        </VStack>
      </Box>
    </main>
  );
}

function Item({ children, ...props }) {
  return (
    <Box as="li" listStyleType="none">
      <Flex
        rounded="full"
        bg="white"
        p="1"
        shadow="lg"
        alignItems="center"
        transition="0.2s all ease"
        _hover={{ shadow: "xl" }}
        {...props}
      >
        {children}
      </Flex>
    </Box>
  );
}

function ItemIcon({ children, ...props }) {
  return (
    <Flex
      rounded="full"
      overflow="hidden"
      w="3rem"
      h="3rem"
      minW="3rem"
      minH="3rem"
      alignItems="center"
      justifyContent="center"
      sx={{ "&>*": { display: "block", w: "100%", h: "100%" } }}
      p="1"
      as="span"
      {...props}
    >
      {children}
    </Flex>
  );
}

function ItemContent({ children }) {
  return (
    <Box fontSize="lg" fontWeight="500" pl="6" pr="6" py="2" as="span">
      {children}
    </Box>
  );
}

function ItemSecondaryText({ children }) {
  return (
    <Text as="span" color="gray.500" ml="2" display="inline-block">
      {children}
    </Text>
  );
}
