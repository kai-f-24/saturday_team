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
  recruitmentProjects: sampleProjectBasicDataType[];
  participationProjects: sampleProjectBasicDataType[];
}

const ProjectTab = ({
  recruitmentProjects,
  participationProjects,
}: projectTabProps) => {
  const theme = useTheme();
  return (
    <div className="bg-base">
      <Tabs position="relative" variant="unstyled">
        <Flex className="justify-center">
          <TabList>
            <Tab className="mr-8" color={theme.colors.blue[250]} fontWeight="bold">
              募集中のプロジェクト
            </Tab>
            <Tab className="ml-8" color={theme.colors.blue[250]} fontWeight="bold">
              参加中のプロジェクト
            </Tab>
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
          <TabPanel>
            <ProjectBasicCard projects={recruitmentProjects} />
          </TabPanel>
          <TabPanel>
            <ProjectBasicCard projects={participationProjects} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default ProjectTab;
