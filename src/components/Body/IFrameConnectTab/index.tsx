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

interface IFrameConnectTabParams {
  networkId: number;
  initIFrame: (_inputAppUrl?: string | undefined) => Promise<void>;
  inputAppUrl: string | undefined;
  setInputAppUrl: (value: string | undefined) => void;
  appUrl: string | undefined;
  isIFrameLoading: boolean;
  setIsIFrameLoading: (value: boolean) => void;
  iframeKey: number;
  iframeRef: React.RefObject<HTMLIFrameElement> | null;
  showAddress: string;
}

function IFrameConnectTab({
  networkId,
  initIFrame,
  setInputAppUrl,
  inputAppUrl,
  isIFrameLoading,
  appUrl,
  iframeKey,
  iframeRef,
  setIsIFrameLoading,
  showAddress,
}: IFrameConnectTabParams) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <FormControl my={4}>
        <HStack>
          <AppUrlLabel />
          <Spacer />
          <SupportedDapps
            networkId={networkId}
            initIFrame={initIFrame}
            setInputAppUrl={setInputAppUrl}
          />
        </HStack>
        <HStack mt="2">
          <InputGroup>
            <Input
              pr="3.5rem"
              bg={"brand.lightBlack"}
              placeholder="https://pancakeswap.finance/prediction?token=BNB&chain=bsc"
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
        <Button onClick={() => initIFrame()} isLoading={isIFrameLoading}>
          Connect
        </Button>
      </Center>
      <Center
        mt="1rem"
      >
        {appUrl && (
          <Box
            as="iframe"
            w={{
              base: "100%",
              lg: "100%",
            }}
            h={{ base: "43.75rem", md: "43.75rem", lg: "43.75rem" }}
            title="app"
            src={appUrl}
            key={iframeKey}
            borderWidth="1px"
            borderStyle={"solid"}
            borderColor="white"
            bg="white"
            ref={iframeRef}
            onLoad={() => setIsIFrameLoading(false)}
          />
        )}
      </Center>
    </>
  );
}

export default IFrameConnectTab;
