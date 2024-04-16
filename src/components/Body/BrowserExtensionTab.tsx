import {
  Center,
  Box,
  Text,
  chakra,
  HStack,
  Link,
  Image,
} from "@chakra-ui/react";

function BrowserExtensionTab() {
  return (
    <Center flexDir={"column"} mt="3">
      <Box w="full" fontWeight={"semibold"} fontSize={"xl"}>
        <Text>
          🔮 Track PNL with WC or PCS:{" "}
          <chakra.a
            color="blue.200"
            href="https://pancakeswap.finance/prediction?token=BNB&chain=bsc"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            Pancakeswap Dashboard
          </chakra.a>
        </Text>
      </Box>
      <HStack mt="2" w="full" fontSize={"lg"}>
        <Text>View Bot:</Text>
        <Link
          color="cyan.200"
          fontWeight={"semibold"}
          href="https://www.cryptosky.org/"
          isExternal
        >
          Pridict Bot
        </Link>
      </HStack>
      <Image mt="2" src="/extension.png" />
    </Center>
  );
}

export default BrowserExtensionTab;
