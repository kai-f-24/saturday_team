import { Flex } from "@chakra-ui/react";

import { projectDetailDataType } from "../../../backend/sampleData/projectData/projectDetailData";

import {
  handleAddOrRemoveFieldOrBlockType,
  handleChangeInputType,
} from "./types/types";
import DateForm from "./field/dateForm";
import TitleForm from "./field/titleForm";
import OverviewForm from "./field/overviewForm";
import PositionForm from "./field/position/positionForm";

interface CreateProjectFormProps {
  inputs: projectDetailDataType;
  handleChangeInput: handleChangeInputType;
  handleAddFieldOrBlock: handleAddOrRemoveFieldOrBlockType;
  handleRemoveFieldOrBlock: handleAddOrRemoveFieldOrBlockType;
}

const CreateProjectForm: React.FC<CreateProjectFormProps> = ({
  inputs,
  handleChangeInput,
  handleAddFieldOrBlock,
  handleRemoveFieldOrBlock,
}) => {
  return (
    <Flex
      direction={"column"}
      alignItems={"center"}
      border={"2px"}
      borderRadius={"4px"}
      w={"700px"}
    >
      <TitleForm handleChangeInput={handleChangeInput} />

      <OverviewForm
        inputs={inputs}
        handleChangeInput={handleChangeInput}
        handleAddFieldOrBlock={handleAddFieldOrBlock}
        handleRemoveFieldOrBlock={handleRemoveFieldOrBlock}
      />

      <DateForm handleChangeInput={handleChangeInput} />

      <PositionForm
        inputs={inputs}
        handleChangeInput={handleChangeInput}
        handleAddFieldOrBlock={handleAddFieldOrBlock}
        handleRemoveFieldOrBlock={handleRemoveFieldOrBlock}
      />
    </Flex>
  );
};

export default CreateProjectForm;
