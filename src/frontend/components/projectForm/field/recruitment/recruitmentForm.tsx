import { Box } from "@chakra-ui/react";
import TitleBlock from "../../../../assets/title/title";
import { NextButton } from "../../../../assets/button/buttons";
import { projectDetailDataType } from "../../../../../backend/sampleData/projectData/projectDetailData";
import {
  handleAddOrRemoveFieldOrBlockType,
  handleChangeInputType,
} from "../../types/types";
import RecruitmentComponent from "./recruitmentComponent";

interface RecruitmentFormProps {
  inputs: projectDetailDataType;
  handleChangeInput: handleChangeInputType;
  handleAddFieldOrBlock: handleAddOrRemoveFieldOrBlockType;
  handleRemoveFieldOrBlock: handleAddOrRemoveFieldOrBlockType;
}

const RecruitmentForm: React.FC<RecruitmentFormProps> = ({
  inputs,
  handleChangeInput,
  handleAddFieldOrBlock,
  handleRemoveFieldOrBlock,
}) => {
  return (
    <>
      <Box w={"90%"} mb={4}>
        <TitleBlock value="募集ポジション" />
        {inputs.recruitment.slice(0).map((input, index) => (
          <RecruitmentComponent
            key={index}
            handleChangeInput={handleChangeInput}
            handleAddFieldOrBlock={handleAddFieldOrBlock}
            handleRemoveFieldOrBlock={handleRemoveFieldOrBlock}
            index={index}
            position={input.title}
            maximumNumberOfPeople={input.maximumNumberOfPeople}
            skillsArray={input.skills}
            otherSkills={input.otherSkills}
          />
        ))}
      </Box>
      <NextButton
        value="追加"
        onClick={() => handleAddFieldOrBlock("recruitment")}
      />
    </>
  );
};

export default RecruitmentForm;
