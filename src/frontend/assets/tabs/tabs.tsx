import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
  Flex,
  useTheme,
} from "@chakra-ui/react";
import ProjectBasicCard from "../card/projectBasicCard";
import { sampleProjectBasicDataType } from "../../../backend/sampleData/projectData/projectBasicData";

interface projectTabProps {
  cardList: CardListType[];
}

interface CardListType {
  cardCategory: string;
  cardInfoList: sampleProjectBasicDataType[];
}

const ProjectTab = ({ cardList }: projectTabProps) => {
  const theme = useTheme();
  return (
    <Flex className="justify-center bg-base">
      <Tabs position="relative" variant="unstyled">
        <Flex className="justify-center">
          <TabList>
            {cardList.map((card) => (
              <Tab
                className="mr-8"
                color={theme.colors.blue[250]}
                fontWeight="bold"
              >
                {card.cardCategory}
              </Tab>
            ))}
          </TabList>
        </Flex>
        <TabIndicator
          mt="-1.5px"
          height="2px"
          bg="blue.500"
          borderRadius="1px"
          background={theme.colors.blue[250]}
        />
        <TabPanels>
          {cardList.map((card) => (
            <TabPanel>
              <ProjectBasicCard cardInfoList={card.cardInfoList} />
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Flex>
  );
};

export default ProjectTab;
