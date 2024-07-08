import {
  Box,
  Checkbox,
  CheckboxGroup,
  Collapse,
  Flex,
  Grid,
  GridItem,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { NextButton } from "../../../../assets/button/buttons";
import {
  handleAddOrRemoveFieldOrBlockType,
  handleChangeInputType,
} from "../../types/types";
import { skillTagMap } from "../../../../maps/skillTagMap";

interface RecruitmentComponentProps {
  handleChangeInput: handleChangeInputType;
  handleAddFieldOrBlock: handleAddOrRemoveFieldOrBlockType;
  handleRemoveFieldOrBlock: handleAddOrRemoveFieldOrBlockType;
  index?: number;
  maximumNumberOfPeople: number;
  skillsArray: string[];
  otherSkills: string[];
}

const RecruitmentComponent: React.FC<RecruitmentComponentProps> = ({
  handleChangeInput,
  handleAddFieldOrBlock,
  handleRemoveFieldOrBlock,
  index = 0,
  maximumNumberOfPeople,
  skillsArray,
  otherSkills,
}) => {
  const addStyle = {
    height: "30px",
    width: "10px",
    // tailwind: "min-w-[10px]"
  };

  const trashStyle = {
    colorScheme: "red",
    height: "30px",
    width: "10px",
    tailwind: "ml-6 mr-0",
  };

  return (
    <VStack>
      <Grid
        templateRows="80px auto"
        templateColumns="repeat(4, 1fr)"
        gap={2}
        w={"90%"}
      >
        <GridItem colSpan={2}>
          <Box>
            <Text>役職名</Text>
            <Input
              placeholder="役職名を入力"
              w="160px"
              onChange={(e) =>
                handleChangeInput(e, "recruitment", "position", index)
              }
            />
          </Box>
        </GridItem>

        <GridItem colSpan={2}>
          <Box>
            <Text>人数</Text>
            <Input
              w={"70px"}
              value={maximumNumberOfPeople}
              onChange={(e) =>
                handleChangeInput(
                  e,
                  "recruitment",
                  "maximumNumberOfPeople",
                  index
                )
              }
            />
          </Box>
        </GridItem>

        <GridItem colSpan={3}>
          <Box>
            <Text>スキルを選択</Text>
            <Collapse in={true}>
              <CheckboxGroup
                value={skillsArray}
                onChange={(e: string[]) =>
                  handleChangeInput(e, "recruitment", "skills", index)
                }
              >
                <Flex w="350px" wrap="wrap">
                  {Object.keys(skillTagMap).map((skillId) => (
                    <Checkbox value={skillId} mr={2} mb={2}>
                      {skillTagMap[skillId].skillName}
                    </Checkbox>
                  ))}
                </Flex>
              </CheckboxGroup>
            </Collapse>
          </Box>
        </GridItem>

        <GridItem colSpan={1}>
          <Box key={0}>
            <Text>スキル:1</Text>
            <Input
              w="160px"
              placeholder={"その他のスキル:1"}
              onChange={(e) =>
                handleChangeInput(e, "recruitment", "otherSkills", index)
              }
            />
          </Box>
          <VStack>
            {otherSkills.slice(1).map((otherSkill, otherSkillIndex) => {
              const adjustOtherSkillIndex = otherSkillIndex + 1;

              return (
                <Box key={otherSkillIndex} mt={3}>
                  <Flex justifyContent={"left"} alignItems={"center"} mb={2}>
                    <Text>スキル: {adjustOtherSkillIndex + 1} </Text>
                    <NextButton
                      icon="trash"
                      customStyles={trashStyle}
                      onClick={() =>
                        handleRemoveFieldOrBlock(
                          "recruitment",
                          "otherSkill",
                          index,
                          adjustOtherSkillIndex
                        )
                      }
                    />
                  </Flex>
                  <Input
                    w="160px"
                    value={otherSkill}
                    placeholder={`その他のスキル${adjustOtherSkillIndex + 1}`}
                    onChange={(e) =>
                      handleChangeInput(
                        e,
                        "recruitment",
                        "otherSkills",
                        index,
                        adjustOtherSkillIndex
                      )
                    }
                  />
                </Box>
              );
            })}
            <NextButton
              icon="plus"
              customStyles={addStyle}
              onClick={() =>
                handleAddFieldOrBlock("recruitment", "otherSkill", index)
              }
            />
          </VStack>
        </GridItem>
      </Grid>
    </VStack>
  );
};

export default RecruitmentComponent;
