import { ChangeEvent } from "react";

export interface handleChangeInputType {
    (
      e:
        | ChangeEvent<HTMLInputElement>
        | ChangeEvent<HTMLTextAreaElement>
        | string[],
      field: "title" | "overview" | "date" | "recruitment",
      name?: string,
      index?: number,
      otherSkillsIndex?: number,
      option?: string
    ): void;
  }
  
  export interface handleAddOrRemoveFieldOrBlockType {
    (
      field: "overview" | "recruitment",
      name?: string,
      index?: number,
      otherSkillsIndex?: number
    ): void;
  }