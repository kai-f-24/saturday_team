import {
  Box,
} from "@chakra-ui/react";
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
        <RecruitmentComponent
          handleChangeInput={handleChangeInput}
          handleAddFieldOrBlock={handleAddFieldOrBlock}
          handleRemoveFieldOrBlock={handleRemoveFieldOrBlock}
          maximumNumberOfPeople={inputs.recruitment[0].maximumNumberOfPeople}
          skillsArray={inputs.recruitment[0].skills}
          otherSkills={inputs.recruitment[0].otherSkills}
        />

        {inputs.recruitment.slice(1).map((input, index) => {
          const adjustIndex = index + 1;
          return (
            <RecruitmentComponent
              handleChangeInput={handleChangeInput}
              handleAddFieldOrBlock={handleAddFieldOrBlock}
              handleRemoveFieldOrBlock={handleRemoveFieldOrBlock}
              index={adjustIndex}
              maximumNumberOfPeople={
                inputs.recruitment[adjustIndex].maximumNumberOfPeople
              }
              skillsArray={inputs.recruitment[adjustIndex].skills}
              otherSkills={inputs.recruitment[adjustIndex].otherSkills}
            />
          );
        })}
      </Box>
      <NextButton
        value="追加"
        onClick={() => handleAddFieldOrBlock("recruitment")}
      />
    </>
  );
};

export default RecruitmentForm;
