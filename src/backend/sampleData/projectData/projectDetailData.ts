export interface projectDetailDataType {
  title: string;
  overview: overviewType[];
  date: dateType;
  recruitment: recruitmentType[];
}

export interface overviewType {
  title: string;
  text: string;
}

interface dateType {
  title: string;
  startDate: string;
  endDate: string;
}

export interface recruitmentType {
  title: string;
  maximumNumberOfPeople: number;
  numberOfParticipants: number;
  skills: string[];
  otherSkills: string[];
}

export const initialInput: projectDetailDataType = {
  title: "",
  overview: [
    {
      title: "",
      text: "",
    },
  ],
  date: {
    title: "",
    startDate: "",
    endDate: "",
  },
  recruitment: [
    {
      title: "",
      maximumNumberOfPeople: 0,
      numberOfParticipants: 0,
      skills: [],
      otherSkills: [""],
    },
  ],
};

// export const sampleProjectDetailData: projectDetailDataType[] = [
//   {
//     overview: {
//       title: "サンプルデータ概要1",
//       text: "サンプルデータ概要1",
//     },
//   },
//   {
//     overview: {
//       title: "サンプルデータ概要2",
//       text: "サンプルデータ概要2",
//     },
//   },
//   {
//     overview: {
//       title: "サンプルデータ概要3",
//       text: "サンプルデータ概要3",
//     },
//   },
//   {
//     date: {
//       title: "制作期間",
//       startDate: "2024-01-01",
//       endDate: "2024-12-31",
//     },
//   },
//   {
//     recruitment: [
//       {
//         title: "要件定義",
//         maximumNumberOfPeople: 2,
//         numberOfParticipants: 1,
//         skillId: [],
//       },
//       {
//         title: "デザイン",
//         maximumNumberOfPeople: 1,
//         numberOfParticipants: 0,
//         skillId: ["figma"],
//       },
//       {
//         title: "フロントエンド",
//         maximumNumberOfPeople: 4,
//         numberOfParticipants: 2,
//         skillId: ["html", "css", "javascript"],
//       },
//       {
//         title: "バックエンド",
//         maximumNumberOfPeople: 2,
//         numberOfParticipants: 1,
//         skillId: ["nodejs", "prisma"],
//       },
//       {
//         title: "データベース",
//         maximumNumberOfPeople: 1,
//         numberOfParticipants: 1,
//         skillId: ["mysql", "mongodb", "prisma"],
//       },
//       {
//         title: "プレゼン資料作成",
//         maximumNumberOfPeople: 1,
//         numberOfParticipants: 0,
//         skillId: ["figma"],
//       },
//     ],
//   },
// ];

const newInput = {...initialInput, recruitment:[{
  ...initialInput.recruitment[0],
  title:"123"
}]};
console.log(120, newInput);