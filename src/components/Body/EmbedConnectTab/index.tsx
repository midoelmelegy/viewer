import {
  Button,
  Box,
  Center,
  Spacer,
  HStack,
  FormControl,
  Input,
  Text,
  useDisclosure,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import SupportedDapps from "./SupportedDapps";
import AppUrlLabel from "./AppUrlLabel";
import ShareModal from "./ShareModal";

interface EmbedConnectTabParams {
  networkId: number;
  initEmbed: (_inputAppUrl?: string | undefined) => Promise<void>;
  inputAppUrl: string | undefined;
  setInputAppUrl: (value: string | undefined) => void;
  appUrl: string | undefined;
  isEmbedLoading: boolean;
  setIsEmbedLoading: (value: boolean) => void;
  embedKey: number;
  embedRef: React.RefObject<HTMLEmbedElement> | null;
  showAddress: string;
}

function EmbedConnectTab({
  networkId,
  initEmbed,
  setInputAppUrl,
  inputAppUrl,
  isEmbedLoading,
  appUrl,
  embedKey,
  embedRef,
  setIsEmbedLoading,
  showAddress,
}: EmbedConnectTabParams) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <FormControl my={4}>
        <HStack>
          <AppUrlLabel />
          <Spacer />
          <SupportedDapps
            networkId={networkId}
            initEmbed={initEmbed}
            setInputAppUrl={setInputAppUrl}
          />
        </HStack>
        <HStack mt="2">
          <InputGroup>
            <Input
              pr="3.5rem"
              bg={"brand.lightBlack"}
              placeholder="https://app.uniswap.org/"
              aria-label="dapp-url"
              autoComplete="off"
              value={inputAppUrl}
              onChange={(e) => setInputAppUrl(e.target.value)}
            />
            {inputAppUrl && (
              <InputRightElement px="1rem" mr="0.5rem">
                <Button
                  h="1.75rem"
                  size="sm"
                  onClick={() => {
                    setInputAppUrl("");
                  }}
                >
                  <DeleteIcon />
                </Button>
              </InputRightElement>
            )}
          </InputGroup>
          {appUrl && (
            <>
              <Button onClick={onOpen}>
                <HStack>
                  <FontAwesomeIcon icon={faShareAlt} />
                  <Text>Share</Text>
                </HStack>
              </Button>
              <ShareModal
                isOpen={isOpen}
                onClose={onClose}
                appUrl={appUrl}
                showAddress={showAddress}
              />
            </>
          )}
        </HStack>
      </FormControl>
      <Center>
        <Button onClick={() => initEmbed()} isLoading={isEmbedLoading}>
          Connect
        </Button>
      </Center>
      <Center
        mt="1rem"
        ml={{ base: "-385", sm: "-315", md: "-240", lg: "-60" }}
        px={{ base: "10rem", lg: 0 }}
        w="70rem"
      >
        {appUrl && (
          <Box
            as="embed"
            w={{
              base: "22rem",
              sm: "45rem",
              md: "55rem",
              lg: "1500rem",
            }}
            h={{ base: "33rem", md: "35rem", lg: "38rem" }}
            title="app"
            src={appUrl}
            key={embedKey}
            borderWidth="1px"
            borderStyle={"solid"}
            borderColor="white"
            bg="white"
            ref={embedRef}
            onLoad={() => setIsEmbedLoading(false)}
          />
        )}
      </Center>
    </>
  );
}

export default EmbedConnectTab;
