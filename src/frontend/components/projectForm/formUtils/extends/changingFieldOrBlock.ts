import {
  initialInput,
  projectDetailDataType,
  recruitmentType,
} from "../../../../../backend/sampleData/projectData/projectDetailData";
import { formUtile } from "../formUtil";


export class changingFieldOrBlock extends formUtile {
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
    switch (this.field) {
      case "overview":
      case "recruitment":
        newProjectData = this.remover(
          this.field,
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
