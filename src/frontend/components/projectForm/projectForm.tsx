import { VStack, Text, Flex } from "@chakra-ui/react";
import {
  initialInput,
  projectDetailDataType,
} from "../../../backend/sampleData/projectData/projectDetailData";
import CreateProjectForm from "./createProjectForm";
import EditProjectForm from "./editProjectForm";
import { ChangeEvent, useState } from "react";
import { changingValue } from "./formUtils/extends/changingValue";
import { changingFieldOrBlock } from "./formUtils/extends/changingFieldOrBlock";

interface ProjectProps {
  projectDetailInfo?: projectDetailDataType;
  formName: string;
}

const ProjectForm = ({ projectDetailInfo }: ProjectProps) => {
  const [inputs, setInput] = useState<projectDetailDataType>(initialInput);

  const handleChangeInput = (
    e:
      | ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLTextAreaElement>
      | string[],
    field: "title" | "overview" | "date" | "recruitment",
    name: string = "",
    index: number = 0,
    otherSkillsIndex: number = 0,
    option: string = ""
  ) => {
    const value = Array.isArray(e) ? e : e.target.value;
    const util = new changingValue(
      inputs,
      field,
      name,
      value,
      index,
      otherSkillsIndex,
      option
    );

    console.log(inputs.recruitment);
    let newProjectData;
    switch (field) {
      case "title":
        newProjectData = util.changeTitle();
        break;
      case "overview":
        newProjectData = util.changeOverView();
        break;
      case "date":
        newProjectData = util.changeDate();
        break;
      case "recruitment":
        newProjectData = util.changeRecruitment();
        break;
      default:
        throw new Error("filedが設定されてないよー");
    }
    console.log(newProjectData);
    setInput(newProjectData);
  };

  const handleAddFieldOrBlock = (
    field: "overview" | "recruitment",
    name: string = "",
    index: number = 0,
    otherSkillsIndex: number = 0
  ) => {
    const util = new changingFieldOrBlock(
      inputs,
      field,
      name,
      undefined,
      index,
      otherSkillsIndex
    );
    let newProjectData;
    switch (field) {
      // プロジェクト概要に関する処理
      case "overview":
        newProjectData = util.addOverviewField();
        break;
      // 募集役職追加
      case "recruitment":
        newProjectData = util.addRecruitmentField();
        break;
      default:
        throw new Error("エラー");
    }
    setInput(newProjectData);
  };

  const handleRemoveFieldOrBlock = (
    field: "overview" | "recruitment",
    name: string = "",
    index: number = 0,
    otherSkillsIndex: number = 0
  ) => {
    const util = new changingFieldOrBlock(
      inputs,
      field,
      name,
      undefined,
      index,
      otherSkillsIndex
    );

    let newProjectData;
    newProjectData = util.removeFieldOrBlock();
    console.log(newProjectData);
    setInput(newProjectData);
  };

  return (
    <VStack>
      <Flex>
        <Text>Create Project</Text>
      </Flex>
      <VStack my={8}>
        {projectDetailInfo ? (
          // 既存プロジェクト情報編集
          <EditProjectForm />
        ) : (
          // 新規プロジェクト情報入力
          <CreateProjectForm
            inputs={inputs}
            handleChangeInput={handleChangeInput}
            handleAddFieldOrBlock={handleAddFieldOrBlock}
            handleRemoveFieldOrBlock={handleRemoveFieldOrBlock}
          />
        )}
      </VStack>
    </VStack>
  );
};

export default ProjectForm;
