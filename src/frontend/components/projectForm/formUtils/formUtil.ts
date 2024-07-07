import { projectDetailDataType } from "../../../../backend/sampleData/projectData/projectDetailData";

export  class formUtile {
  constructor(
    public input: projectDetailDataType,
    public field: "title" | "overview" | "date" | "recruitment", // 項目
    public name: string = "", // 項目の中の変更箇所
    public value: string | number | string[] = "", // 変更された値
    public index: number = 0, // fieldの配列番号
    public otherSkillsIndex: number = 0, // その他のスキルの配列番号
    public option: string = "" // 
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