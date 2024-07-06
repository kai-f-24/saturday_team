import { projectDetailDataType } from "../../../../../backend/sampleData/projectData/projectDetailData";
import { formUtile } from "../formUtil";

export class changingValue extends formUtile {
  constructor(
    public input: projectDetailDataType,
    public field: "title" | "overview" | "date" | "recruitment", // 項目をぼる
    public name: string = "", // 項目の中の部分を絞る
    public value: string | number | string[] = "", // e.target.valueを変換しておく
    public index: number = 0, // 概要or募集要項の配列番号
    public otherSkillsIndex: number = 0, // その他のスキルの配列番号
    public option: string = "" // 入力かボタンの追加かを絞る
  ) {
    super(
      input,
      field, // 項目をしぼる
      name, // 項目の中の部分を絞る
      value, // e.target.valueを変換しておく
      index, // 概要or募集要項の配列番号
      otherSkillsIndex,
      option
    );
  }
  // プロジェクトタイトルタイトル変更
  changeTitle() {
    let newProjectData;
    newProjectData = {
      ...this.input,
      title: String(this.value),
    };
    return newProjectData;
  }

  // プロジェクト概要変更
  changeOverView() {
    let newProjectData;
    newProjectData = {
      ...this.input,
      overview: this.input.overview.map((item, i) => {
        if (this.name === "title") {
          return i === this.index
            ? { ...item, title: String(this.value) }
            : item;
        } else {
          return i === this.index
            ? { ...item, text: String(this.value) }
            : item;
        }
      }),
    };
    return newProjectData;
  }

  // 制作期間変更
  changeDate() {
    let newProjectData;
    newProjectData = {
      ...this.input,
      date: {
        ...this.input.date,
        startDate:
          this.name === "startDate"
            ? (this.value as string)
            : this.input.date.startDate,
        endDate:
          this.name === "endDate"
            ? (this.value as string)
            : this.input.date.endDate,
      },
    };

    return newProjectData;
  }

  // 募集役職変更
  changeRecruitment() {
    let newProjectData: projectDetailDataType = { ...this.input };

    if (this.name === "position") {
      newProjectData = {
        ...this.input,
        recruitment: this.input.recruitment.map((item, i) =>
          i === this.index ? { ...item, title: String(this.value) } : item
        ),
      };
    } else if (this.name === "maximumNumberOfPeople") {
      newProjectData = {
        ...this.input,
        recruitment: this.input.recruitment.map((item, i) =>
          i === this.index
            ? { ...item, maximumNumberOfPeople: Number(this.value) }
            : item
        ),
      };
    } else if (this.name === "skills") {
      if (Array.isArray(this.value)) {
        newProjectData = {
          ...this.input,
          recruitment: this.input.recruitment.map((item, i) =>
            i === this.index
              ? { ...item, skills: this.value as string[] }
              : item
          ),
        };
      }
    } else {
      newProjectData = {
        ...this.input,
        recruitment: this.input.recruitment.map((item, i) =>
          i === this.index
            ? {
                ...item,
                otherSkills: item.otherSkills.map(
                  (otherSkill, otherSkillIndex) =>
                    otherSkillIndex === this.otherSkillsIndex
                      ? String(this.value)
                      : otherSkill
                ),
              }
            : item
        ),
      };
    }

    return newProjectData;
  }
}
