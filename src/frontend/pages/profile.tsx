import Header from "../components/header/header";
import ProfileBlock from "../components/profile/profileBlock";
import ProjectTab from "../assets/tabs/tabs";
import { sampleUserInfoDataList } from "../../backend/sampleData/userData/userInfoData";
import {
  sampleUserInfoPageParticipatedProjectBasicDataList,
  sampleUserInfoPageProducingProjectBasicDataList,
} from "../../backend/sampleData/projectData/userInfoPageProjectBasicData";

// 後で関数にする
const cardList = [
  {
    cardCategory: "参加中のプロジェクト",
    cardInfoList: sampleUserInfoPageProducingProjectBasicDataList,
  },
  {
    cardCategory: "参加したプロジェクト",
    cardInfoList: sampleUserInfoPageParticipatedProjectBasicDataList,
  },
];

function Profile() {
  return (
    <>
      <Header />
      <ProfileBlock user={sampleUserInfoDataList[0]} />
      <ProjectTab cardList={cardList} />
    </>
  );
}

export default Profile;
