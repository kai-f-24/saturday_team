import {
  initialInput,
  overviewType,
  projectDetailDataType,
  recruitmentType,
} from "../../../backend/sampleData/projectData/projectDetailData";

class formUtile {
  constructor(
    public input: projectDetailDataType,
    public value: string | number | string[], // e.target.valueを変換しておく
    public title: "title" | "overview" | "date" | "recruitment", // 項目をぼる
    public name: string, // 項目の中の部分を絞る
    // public option: string, // 入力かボタンの追加かを絞る
    public index: number, // 概要or募集要項の配列番号
    public otherSkillsIndex: number // その他のスキルの配列番号
  ) {
    this.input = input;
    this.value = value;
    this.title = title;
    this.name = name;
    // this.option = option;
    this.index = index;
    this.otherSkillsIndex = otherSkillsIndex;
  }

  // プロジェクトタイトルタイトル変更
  changeTitle() {
    let newProjectData;
    // newInput = String(this.value);
    newProjectData = {
      ...this.input,
      title: String(this.value),
    };
    return newProjectData;
  }

  // プロジェクト概要変更
  changeOverView() {
    let newProjectData;
    // const newInput = this.input;
    // console.log(38, newInput);
    // switch文に書き換える！
    newProjectData = {
      ...this.input,
      overview: this.input.overview.map((item, i) => {
        if (this.name === "title") {
          return i === this.index ? { ...item, title: String(this.value) } : item;
        } else {
          return i === this.index ? { ...item, text: String(this.value) } : item;
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
            startDate: this.name === "startDate" ? this.value as string : this.input.date.startDate,
            endDate: this.name === "endDate" ? this.value as string : this.input.date.endDate,
        }
    }

    return newProjectData;
  }

  // 募集役職変更
  changeRecruitment() {
    // const newInput = this.input;
    // switch文に書き換える！
    let newProjectData: projectDetailDataType = { ...this.input };

    if (this.name === "position") {
      //   newInput.recruitment[this.index].title = String(this.value);
      newProjectData = {
        ...this.input,
        recruitment: this.input.recruitment.map((item, i) =>
          i === this.index ? { ...item, title: String(this.value) } : item
        ),
      };
    } else if (this.name === "maximumNumberOfPeople") {
      //   newInput.recruitment[this.index].maximumNumberOfPeople = Number(
      //     this.value
      //   );
      newProjectData = {
        ...this.input,
        recruitment: this.input.recruitment.map((item, i) =>
          i === this.index
            ? { ...item, maximumNumberOfPeople: Number(this.value) }
            : item
        ),
      };
    } else if (this.name === "skills") {
      console.log(this.index);
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
class changingBlockFormUnit extends formUtile {
  constructor(
    public input: projectDetailDataType,
    public title: "title" | "overview" | "date" | "recruitment", // 項目をぼる
    public name: string = "", // 項目の中の部分を絞る
    public value: string | number | string[] = "", // e.target.valueを変換しておく
    public index: number = 0, // 概要or募集要項の配列番号
    public otherSkillsIndex: number = 0, // その他のスキルの配列番号
    public option: string = "" // 入力かボタンの追加かを絞る
  ) {
    super(
      input,
      value, // e.target.valueを変換しておく
      title, // 項目をぼる
      name, // 項目の中の部分を絞る
      index, // 概要or募集要項の配列番号
      otherSkillsIndex // その他のスキルの配列番号
    );
    this.option = option;
  }

  // プロジェクト概要へのブロック追加関数
  addOverviewField(): projectDetailDataType {
    let newProjectData;
    switch (this.option) {
      case "":
        newProjectData = {
          ...this.input,
          overview: [...this.input.overview, initialInput.overview[0]],
        };
        break;
      default:
        throw new Error("optionが設定されてないよー");
    }

    return newProjectData;
  }

  // 募集役職へのブロック追加関数
  addRecruitmentField(): projectDetailDataType {
    let newProjectData;
    // let initialBlock;
    switch (this.name) {
      case "":
        newProjectData = {
          ...this.input,
          recruitment: [...this.input.recruitment, initialInput.recruitment[0]],
        };
        break;
      case "otherSkill":
        console.log(this.index);
        newProjectData = {
          ...this.input,
          recruitment: this.input.recruitment.map((item, i) =>
            i === this.index
              ? { ...item, otherSkills: [...item.otherSkills, ""] }
              : item
          ),
        };
        break;
      default:
        throw new Error("optionが設定されてないよー");
    }

    return newProjectData;
  }

  deleteArrayItem(item: recruitmentType, optionIndex: number) {
    const newItem = {
      ...item,
      otherSkills: item.otherSkills.filter((_, i) => i !== optionIndex),
    };
    return newItem;
  }

  remover(
    field: "overview" | "recruitment",
    index: number,
    name: string,
    optionIndex: number
  ): projectDetailDataType {
    switch (name) {
      case "otherSkill":
        return {
          ...this.input,
          recruitment: this.input.recruitment.map((item, i) =>
            i === index
              ? this.deleteArrayItem(item, this.otherSkillsIndex)
              : item
          ),
        };
      default:
        return {
          ...this.input,
          [field]: (this.input[field] as any[]).filter((_, i) => i !== index),
        };
    }
  }

  // プロジェクト概要ブロック削除関数
  removeFieldOrBlock(): projectDetailDataType {
    let newProjectData;
    switch (this.title) {
      case "overview":
      case "recruitment":
        newProjectData = this.remover(
          this.title,
          this.index,
          this.name,
          this.otherSkillsIndex
        );
        break;
      default:
        throw new Error("titleが設定されてないよー");
    }

    return newProjectData;
  }

  // 募集役職ブロック削除関数
  removeRecruitmentField() {
    const newProjectData = this.input;
    switch (this.name) {
      case "":
        newProjectData.recruitment.splice(this.index, 1);
        break;
      case "otherSkill":
        newProjectData.recruitment[this.index].otherSkills.splice(
          this.index,
          1
        );
        break;
      default:
        throw new Error("optionが設定されてないよー");
    }

    return newProjectData;
  }
}
