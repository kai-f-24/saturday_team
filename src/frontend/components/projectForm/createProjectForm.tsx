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
import { NextButton } from "../../assets/button/buttons";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { ProjectDetail } from "./zod/zod";

interface CreateProjectFormProps {
  inputs: projectDetailDataType;
  handleChangeInput: handleChangeInputType;
  handleAddFieldOrBlock: handleAddOrRemoveFieldOrBlockType;
  handleRemoveFieldOrBlock: handleAddOrRemoveFieldOrBlockType;
  register: UseFormRegister<ProjectDetail>;
  errors: FieldErrors<ProjectDetail>
}

const CreateProjectForm: React.FC<CreateProjectFormProps> = ({
  inputs,
  handleChangeInput,
  handleAddFieldOrBlock,
  handleRemoveFieldOrBlock,
  register,
  errors,
}) => {
  function handleSubmit() {
    console.log(inputs);
  }

  return (
    <Flex
      direction={"column"}
      alignItems={"center"}
      border={"2px"}
      borderRadius={"4px"}
      w={"700px"}
    >
      <TitleForm handleChangeInput={handleChangeInput} register={register} errors={errors} />

      <OverviewForm
        inputs={inputs}
        handleChangeInput={handleChangeInput}
        handleAddFieldOrBlock={handleAddFieldOrBlock}
        handleRemoveFieldOrBlock={handleRemoveFieldOrBlock}
        register={register}
      />

      <DateForm handleChangeInput={handleChangeInput} register={register} />

      <RecruitmentForm
        inputs={inputs}
        handleChangeInput={handleChangeInput}
        handleAddFieldOrBlock={handleAddFieldOrBlock}
        handleRemoveFieldOrBlock={handleRemoveFieldOrBlock}
        register={register}
      />

      <NextButton value="募集開始" onClick={handleSubmit} />
    </Flex>
  );
};

export default CreateProjectForm;
