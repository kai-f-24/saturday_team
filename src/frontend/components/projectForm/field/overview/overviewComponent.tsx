import { Box, Textarea, VStack } from "@chakra-ui/react";
import {
  handleAddOrRemoveFieldOrBlockType,
  handleChangeInputType,
} from "../../types/types";
import { NextButton } from "../../../../assets/button/buttons";
import OverviewDefaultTitle from "./overviewDefaultTitle";
import OverviewInputTitle from "./overviewInputTitle";

interface OverviewComponentProps {
  handleChangeInput: handleChangeInputType;
  handleRemoveFieldOrBlock: handleAddOrRemoveFieldOrBlockType;
  title?: string;
  text: string;
  index?: number;
}

const OverviewComponent: React.FC<OverviewComponentProps> = ({
  handleChangeInput,
  handleRemoveFieldOrBlock,
  title = "",
  text,
  index = 0,
}) => {
  return (
    <Box w={"90%"} mb={4}>
      {index === 0 ? (
        <OverviewDefaultTitle />
      ) : (
        <OverviewInputTitle
          handleChangeInput={handleChangeInput}
          index={index}
          title={title}
        />
      )}
      <VStack>
        <Textarea
          w={"90%"}
          height={"280px"}
          resize={"none"}
          bg={"white"}
          value={text}
          onChange={(e) => handleChangeInput(e, "overview", "text", index)}
          placeholder="プロジェクトの概要を入力"
        />
        {index !== 0 ? (
          <NextButton
            value="削除"
            customStyles={{ colorScheme: "red" }}
            onClick={() =>
              handleRemoveFieldOrBlock("overview", undefined, index)
            }
          />
        ) : (
          <></>
        )}
      </VStack>
    </Box>
  );
};

export default OverviewComponent;
