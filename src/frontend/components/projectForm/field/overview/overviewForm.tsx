import { NextButton } from "../../../../assets/button/buttons";
import {
  handleAddOrRemoveFieldOrBlockType,
  handleChangeInputType,
} from "../../types/types";
import { projectDetailDataType } from "../../../../../backend/sampleData/projectData/projectDetailData";
import OverviewComponent from "./overviewComponent";
import { UseFormRegister } from "react-hook-form";
import { ProjectDetail } from "../../zod/zod";

interface OverviewFormProps {
  inputs: projectDetailDataType;
  handleChangeInput: handleChangeInputType;
  handleAddFieldOrBlock: handleAddOrRemoveFieldOrBlockType;
  handleRemoveFieldOrBlock: handleAddOrRemoveFieldOrBlockType;
  register: UseFormRegister<ProjectDetail>
}

const OverviewForm: React.FC<OverviewFormProps> = ({
  inputs,
  handleChangeInput,
  handleAddFieldOrBlock,
  handleRemoveFieldOrBlock,
  register
}) => {
  return (
    <>
      {inputs.overview.slice(0).map((input, index) => (
        <OverviewComponent
          key={index}
          handleChangeInput={handleChangeInput}
          handleRemoveFieldOrBlock={handleRemoveFieldOrBlock}
          title={input.title}
          text={input.text}
          index={index}
          register={register}
        />
      ))}
      <NextButton
        value="追加"
        onClick={() => handleAddFieldOrBlock("overview")}
      />
    </>
  );
};

export default OverviewForm;
