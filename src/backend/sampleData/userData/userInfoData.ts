export interface sampleUserInfoDataType {
  id: number;
  username: string;
  userId: string;
  imgPath: string;
  introduction: string;
  skillTags: skillTagType[];
  links: linkType[];
}

export interface skillTagType {
  id: string;
  count: number;
}

interface linkType {
  id: string;
  url: string;
}

const sampleIntroductionBase = "サンプルユーザー１の自己紹介";
const sampleIntroduction = sampleIntroductionBase.repeat(20);

export const sampleUserInfoDataList: sampleUserInfoDataType[] = [
  {
    id: 1,
    username: "サンプルユーザー1",
    userId: "sample_user_1",
    imgPath: "img/WEBTeamImg.jpeg",
    introduction: sampleIntroduction,
    skillTags: [
      {
        id: "html",
        count: 14,
      },
      {
        id: "css",
        count: 14,
      },
      {
        id: "javascript",
        count: 2,
      },
      {
        id: "php",
        count: 5,
      },
      {
        id: "python",
        count: 5,
      },
      {
        id: "nodejs",
        count: 1,
      },
      {
        id: "docker",
        count: 4,
      },
      {
        id: "prisma",
        count: 10,
      },
      {
        id: "java",
        count: 4,
      },
      {
        id: "typescript",
        count: 2,
      },
      {
        id: "mongodb",
        count: 5,
      },
      {
        id: "mysql",
        count: 5,
      },
      {
        id: "sequelize",
        count: 1,
      },
      {
        id: "figma",
        count: 4,
      },
      {
        id: "sqlalchemy",
        count: 4,
      },
    ],
    links: [
      {
        id: "github",
        url: "https://github.com/ichiro16go/saturday_team",
      },
      {
        id: "x",
        url: "https://twitter.com/WinCircleHpTeam",
      },
      {
        id: "instagram",
        url: "https://www.instagram.com/waseda_winc/",
      },
    ],
  },
  {
    id: 2,
    username: "サンプルユーザー2",
    userId: "sample_user_2,",
    imgPath: "img/WEBTeamImg.jpeg",
    introduction: "",
    skillTags: [
      {
        id: "html",
        count: 14,
      },
      {
        id: "css",
        count: 14,
      },
      {
        id: "javascript",
        count: 2,
      },
      {
        id: "php",
        count: 5,
      },
      {
        id: "python",
        count: 5,
      },
      {
        id: "nodejs",
        count: 1,
      },
      {
        id: "docker",
        count: 4,
      },
    ],
    links: [
      {
        id: "github",
        url: "https://github.com/ichiro16go/saturday_team",
      },
    ],
  },
  {
    id: 3,
    username: "サンプルユーザー3",
    userId: "sample_user_3,",
    imgPath: "img/WEBTeamImg.jpeg",
    introduction: "",
    skillTags: [
      {
        id: "html",
        count: 10,
      },
      {
        id: "css",
        count: 4,
      },
      {
        id: "javascript",
        count: 2,
      },
      {
        id: "php",
        count: 5,
      },
      {
        id: "python",
        count: 5,
      },
      {
        id: "nodejs",
        count: 1,
      },
      {
        id: "docker",
        count: 4,
      },
    ],
    links: [
      {
        id: "github",
        url: "https://github.com/ichiro16go/saturday_team",
      },
    ],
  },
  {
    id: 4,
    username: "サンプルユーザー4",
    userId: "sample_user_4,",
    imgPath: "img/WEBTeamImg.jpeg",
    introduction: "",
    skillTags: [
      {
        id: "html",
        count: 10,
      },
      {
        id: "css",
        count: 4,
      },
      {
        id: "javascript",
        count: 2,
      },
      {
        id: "php",
        count: 5,
      },
      {
        id: "python",
        count: 5,
      },
      {
        id: "nodejs",
        count: 1,
      },
      {
        id: "docker",
        count: 4,
      },
    ],
    links: [
      {
        id: "github",
        url: "https://github.com/ichiro16go/saturday_team",
      },
    ],
  },
  {
    id: 5,
    username: "サンプルユーザー5",
    userId: "sample_user_5,",
    imgPath: "img/WEBTeamImg.jpeg",
    introduction: "",
    skillTags: [
      {
        id: "html",
        count: 10,
      },
      {
        id: "css",
        count: 4,
      },
      {
        id: "javascript",
        count: 2,
      },
      {
        id: "php",
        count: 5,
      },
      {
        id: "python",
        count: 5,
      },
      {
        id: "nodejs",
        count: 1,
      },
      {
        id: "docker",
        count: 4,
      },
    ],
    links: [
      {
        id: "github",
        url: "https://github.com/ichiro16go/saturday_team",
      },
    ],
  },
];
