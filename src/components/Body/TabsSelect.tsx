import { Center, HStack } from "@chakra-ui/react";
import Tab from "./Tab";

const tabs = ["WalletConnect", "View", "Help"];

interface TabsSelectParams {
  selectedTabIndex: number;
  setSelectedTabIndex: (value: number) => void;
}

function TabsSelect({
  selectedTabIndex,
  setSelectedTabIndex,
}: TabsSelectParams) {
  return (
    <Center flexDir="column">
      <HStack
        mt="1rem"
        minH="3rem"
        px="1.5rem"
        spacing={"8"}
        bg={"brand.lightBlack"}
        borderRadius="xl"
      >
        {tabs.map((t, i) => (
          <Tab
            key={i}
            tabIndex={i}
            selectedTabIndex={selectedTabIndex}
            setSelectedTabIndex={setSelectedTabIndex}
            isNew={i === 2}
          >
            {t}
          </Tab>
        ))}
      </HStack>
    </Center>
  );
}

export default TabsSelect;
