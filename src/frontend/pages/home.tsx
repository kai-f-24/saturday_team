import Header from "../components/header/header";
import ProjectTab from "../assets/tabs/tabs";

import { sampleProjectBasicDataList } from "../../backend/sampleData/projectData/projectBasicData";

const recruitmentProjectBasicDataList = sampleProjectBasicDataList;
const participationProjectBasicDataList = sampleProjectBasicDataList;

const cardList = [
  {
    cardCategory: "募集中のプロジェクト",
    cardInfoList: recruitmentProjectBasicDataList,
  },
  {
    cardCategory: "参加中のプロジェクト",
    cardInfoList: participationProjectBasicDataList,
  },
];

// アイコン情報

function Home() {
  return (
    <>
      <Header />
      <ProjectTab cardList={cardList} />
    </>
  );
}

export default Home;
