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
import FieldComponents from "./fieldComponet";

interface PositionFormProps {
  inputs: projectDetailDataType;
  handleChangeInput: handleChangeInputType;
  handleAddFieldOrBlock: handleAddOrRemoveFieldOrBlockType;
  handleRemoveFieldOrBlock: handleAddOrRemoveFieldOrBlockType;
}

const PositionForm: React.FC<PositionFormProps> = ({
  inputs,
  handleChangeInput,
  handleAddFieldOrBlock,
  handleRemoveFieldOrBlock,
}) => {

  return (
    <>
      <Box w={"90%"} mb={4}>
        <TitleBlock value="募集ポジション" />
        <FieldComponents
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
            <FieldComponents
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

export default PositionForm;
