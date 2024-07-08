import { NextButton } from "../../../../assets/button/buttons";
import {
  handleAddOrRemoveFieldOrBlockType,
  handleChangeInputType,
} from "../../types/types";
import { projectDetailDataType } from "../../../../../backend/sampleData/projectData/projectDetailData";
import OverviewComponent from "./overviewComponet";

interface OverviewFormProps {
  inputs: projectDetailDataType;
  handleChangeInput: handleChangeInputType;
  handleAddFieldOrBlock: handleAddOrRemoveFieldOrBlockType;
  handleRemoveFieldOrBlock: handleAddOrRemoveFieldOrBlockType;
}

const OverviewForm: React.FC<OverviewFormProps> = ({
  inputs,
  handleChangeInput,
  handleAddFieldOrBlock,
  handleRemoveFieldOrBlock,
}) => {
  return (
    <>
      <OverviewComponent
        handleChangeInput={handleChangeInput}
        handleRemoveFieldOrBlock={handleRemoveFieldOrBlock}
        text={inputs.overview[0].text}
      />
      {inputs.overview.slice(1).map((input, index) => {
        const adjustIndex = index + 1;
        return (
          <>
            <OverviewComponent
              handleChangeInput={handleChangeInput}
              handleRemoveFieldOrBlock={handleRemoveFieldOrBlock}
              title={input.title}
              text={input.text}
              index={adjustIndex}
            />
          </>
        );
      })}
      <NextButton
        value="追加"
        onClick={() => handleAddFieldOrBlock("overview")}
      />
    </>
  );
};

export default OverviewForm;
