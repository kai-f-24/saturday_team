import { Box, Input, Textarea, VStack, useTheme } from "@chakra-ui/react";
import TitleBlock from "../../../assets/title/title";
import { NextButton } from "../../../assets/button/buttons";
import {
  handleAddOrRemoveFieldOrBlockType,
  handleChangeInputType,
} from "../types/types";
import { projectDetailDataType } from "../../../../backend/sampleData/projectData/projectDetailData";

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
  const theme = useTheme();
  return (
    <>
      <Box w={"90%"} mb={4}>
        <TitleBlock value="プロジェクト概要" />
        <VStack>
          <Textarea
            w={"90%"}
            height={"280px"}
            resize={"none"}
            bg={"white"}
            onChange={(e) => handleChangeInput(e, "overview", "text")}
            placeholder="プロジェクトの概要を入力"
          />
        </VStack>
      </Box>
      {inputs.overview.slice(1).map((input, index) => {
        const adjustIndex = index + 1;
        return (
          <Box key={index} w={"90%"} mb={4}>
            <Box
              borderLeftWidth={"7px"}
              borderColor={theme.colors.green[450]}
              pl={"10px"}
              my={2}
            >
              <Input
                // value={input.title}
                w={"40%"}
                onChange={(e) =>
                  handleChangeInput(e, "overview", "title", adjustIndex)
                }
              />
            </Box>
            <VStack>
              <Textarea
                w={"90%"}
                height={"280px"}
                resize={"none"}
                bg={"white"}
                // value={input.text}
                placeholder="プロジェクトの概要を入力"
                onChange={(e) =>
                  handleChangeInput(e, "overview", "text", adjustIndex)
                }
              />
              <NextButton
                value="削除"
                customStyles={{ colorScheme: "red" }}
                onClick={() =>
                  handleRemoveFieldOrBlock("overview", undefined, index)
                }
              />
            </VStack>
          </Box>
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
