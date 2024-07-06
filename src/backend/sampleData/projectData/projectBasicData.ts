export interface sampleProjectBasicDataType {
  id: string; //mongodbによる自動採番
  title: string;
  startDate: string;
  endDate: string;
  description: description;
}

interface description {
  name: string;
  text: string;
}

const sampleTextBase = "サンプルデータの(必須入力)プロジェクト概要";
const sampleText = sampleTextBase.repeat(20);

export const sampleProjectBasicDataList: sampleProjectBasicDataType[] = [
  {
    id: "123456789abcdefghijk",
    title: "サンプルデータ１",
    startDate: "2024/06/01",
    endDate: "2024/10/21",
    description: {
      name: "(必須入力)プロジェクト概要1",
      text: sampleText,
    },
  },
  {
    id: "abcdefghijk123456789",
    title: "サンプルデータ2",
    startDate: "2024/04/01",
    endDate: "2024/12/21",
    description: {
      name: "(必須入力)プロジェクト概要",
      text: sampleText,
    },
  },
  {
    id: "abcdk1234efghij56789",
    title: "サンプルデータ3",
    startDate: "2024/07/01",
    endDate: "2024/8/31",
    description: {
      name: "(必須入力)プロジェクト概要",
      text: sampleText,
    },
  },
];
