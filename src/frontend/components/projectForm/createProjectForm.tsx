import { Flex } from "@chakra-ui/react";

import { projectDetailDataType } from "../../../backend/sampleData/projectData/projectDetailData";

import {
  handleAddOrRemoveFieldOrBlockType,
  handleChangeInputType,
} from "./types/types";
import DateForm from "./field/date/dateForm";
import TitleForm from "./field/title/titleForm";
import OverviewForm from "./field/overview/overviewForm";
import RecruitmentForm from "./field/recruitment/recruitmentForm";

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

      <RecruitmentForm
        inputs={inputs}
        handleChangeInput={handleChangeInput}
        handleAddFieldOrBlock={handleAddFieldOrBlock}
        handleRemoveFieldOrBlock={handleRemoveFieldOrBlock}
      />
    </Flex>
  );
};

export default CreateProjectForm;
