import { sampleProjectBasicDataType } from "./projectBasicData";

const sampleTextBase = "ユーザーページ(必須入力)プロジェクト概要";
const sampleText = sampleTextBase.repeat(20);

export const sampleUserInfoPageProducingProjectBasicDataList: sampleProjectBasicDataType[] =
  [
    {
      id: "1a2s3d4f5g6h7j",
      title: "製作中プロジェクト１",
      startDate: "2024/06/01",
      endDate: "2024/10/21",
      description: {
        name: "(必須入力)プロジェクト概要1",
        text: sampleText,
      },
    },
    {
      id: "qawsedrfrtgyh",
      title: "製作中プロジェクト2",
      startDate: "2024/04/01",
      endDate: "2024/12/21",
      description: {
        name: "(必須入力)プロジェクト概要1",
        text: sampleText,
      },
    },
  ];

export const sampleUserInfoPageParticipatedProjectBasicDataList: sampleProjectBasicDataType[] =
  [
    {
      id: "adslfhvklkad",
      title: "参加したプロジェクト１",
      startDate: "2024/06/01",
      endDate: "2024/10/21",
      description: {
        name: "(必須入力)プロジェクト概要1",
        text: sampleText,
      },
    },
    {
      id: "adsfnlaiduflm",
      title: "参加したプロジェクト2",
      startDate: "2024/04/01",
      endDate: "2024/12/21",
      description: {
        name: "(必須入力)プロジェクト概要1",
        text: sampleText,
      },
    },
    {
      id: "adsfhpoiadshff",
      title: "参加したプロジェクト3",
      startDate: "2024/06/01",
      endDate: "2024/10/21",
      description: {
        name: "(必須入力)プロジェクト概要1",
        text: sampleText,
      },
    },
    {
      id: "adsfiodausfhf",
      title: "参加したプロジェクト4",
      startDate: "2024/04/01",
      endDate: "2024/12/21",
      description: {
        name: "(必須入力)プロジェクト概要1",
        text: sampleText,
      },
    },
  ];
