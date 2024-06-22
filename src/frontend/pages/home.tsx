import { Flex } from "@chakra-ui/react";

import Header from "../components/header/header";
import ProjectTab from "../assets/tabs/tabs";

import { sampleProjectBasicDataList } from "../../backend/sampleData/projectData/projectBasicData";

const recruitmentProjectBasicDataList = sampleProjectBasicDataList;
const participationProjectBasicDataList = sampleProjectBasicDataList;


// アイコン情報

function Home() {
  return (
    <>
      <Header />
      <Flex className="justify-center">
      <ProjectTab
        participationProjects={participationProjectBasicDataList}
        recruitmentProjects={recruitmentProjectBasicDataList}
      />
      </Flex>
    </>
  );
}

export default Home;
