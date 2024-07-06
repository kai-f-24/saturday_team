import { projectDetailDataType } from "../../../../backend/sampleData/projectData/projectDetailData";

export  class formUtile {
  constructor(
    public input: projectDetailDataType,
    public field: "title" | "overview" | "date" | "recruitment", // 項目をぼる
    public name: string = "", // 項目の中の部分を絞る
    public value: string | number | string[] = "", // e.target.valueを変換しておく
    public index: number = 0, // 概要or募集要項の配列番号
    public otherSkillsIndex: number = 0, // その他のスキルの配列番号
    public option: string = "" // 入力かボタンの追加かを絞る
  ) {
    this.input = input;
    this.field = field;
    this.name = name;
    this.value = value;
    this.index = index;
    this.otherSkillsIndex = otherSkillsIndex;
    this.option = option;
  }
}