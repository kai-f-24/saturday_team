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
  useTheme,
} from "@chakra-ui/react";
import TitleBlock from "../../../assets/title/title";
import { NextButton } from "../../../assets/button/buttons";
import { projectDetailDataType } from "../../../../backend/sampleData/projectData/projectDetailData";
import {
  handleAddOrRemoveFieldOrBlockType,
  handleChangeInputType,
} from "../types/types";
import { skillTagMap } from "../../../maps/skillTagMap";

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

  const theme = useTheme();

  return (
    <>
      <Box w={"90%"} mb={4}>
        <TitleBlock value="募集ポジション" />
        {/* <Stack> */}
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
                    handleChangeInput(e, "recruitment", "position")
                  }
                />
              </Box>
            </GridItem>

            <GridItem colSpan={2}>
              <Box>
                <Text>人数</Text>
                <Input
                  w={"70px"}
                  value={inputs.recruitment[0].maximumNumberOfPeople}
                  onChange={(e) =>
                    handleChangeInput(e, "recruitment", "maximumNumberOfPeople")
                  }
                />
              </Box>
            </GridItem>

            <GridItem colSpan={3}>
              <Box>
                <Text>スキルを選択</Text>
                <Collapse in={true}>
                  <CheckboxGroup
                    value={inputs.recruitment[0].skills}
                    onChange={(e: string[]) =>
                      handleChangeInput(e, "recruitment", "skills")
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
              {/* map関数を追加 */}
              <Box key={0}>
                <Text>スキル:1</Text>
                <Input
                  w="160px"
                  placeholder={"その他のスキル:1"}
                  onChange={(e) =>
                    handleChangeInput(
                      e,
                      "recruitment",
                      "otherSkills",
                      undefined,
                      0
                    )
                  }
                />
              </Box>
              <VStack>
                {inputs.recruitment[0].otherSkills
                  .slice(1)
                  .map((otherSkill, otherSkillIndex) => {
                    const adjustOtherSkillIndex = otherSkillIndex + 1;
                    return (
                      <Box key={otherSkillIndex} mt={3}>
                        <Flex
                          justifyContent={"center"}
                          alignItems={"center"}
                          mb={2}
                        >
                          <Text>スキル: {adjustOtherSkillIndex + 1} </Text>
                          <NextButton
                            icon="trash"
                            customStyles={trashStyle}
                            onClick={() =>
                              handleRemoveFieldOrBlock(
                                "recruitment",
                                "otherSkill",
                                undefined,
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
                              undefined,
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
                    handleAddFieldOrBlock("recruitment", "otherSkill")
                  }
                />
              </VStack>
            </GridItem>
          </Grid>
        </VStack>
        {inputs.recruitment.slice(1).map((input, index) => {
          const adjustIndex = index + 1;
          return (
            <>
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
                        w="160px"
                        placeholder="役職名を入力"
                        onChange={(e) =>
                          handleChangeInput(
                            e,
                            "recruitment",
                            "position",
                            adjustIndex
                          )
                        }
                      />
                    </Box>
                  </GridItem>

                  <GridItem colSpan={2}>
                    <Box>
                      <Text>人数</Text>
                      <Input
                        w={"70px"}
                        value={input.maximumNumberOfPeople}
                        onChange={(e) =>
                          handleChangeInput(
                            e,
                            "recruitment",
                            "maximumNumberOfPeople",
                            adjustIndex
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
                          value={input.skills}
                          onChange={(e: string[]) =>
                            handleChangeInput(
                              e,
                              "recruitment",
                              "skills",
                              adjustIndex
                            )
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
                    {/* map関数を追加 */}
                    <Box key={0}>
                      <Text>その他のスキル: 1</Text>
                      <Input
                        w="160px"
                        // value={input.otherSkills[0]}
                        onChange={(e) =>
                          handleChangeInput(
                            e,
                            "recruitment",
                            "otherSkills",
                            adjustIndex
                          )
                        }
                      />
                    </Box>
                    <VStack>

                    {inputs.recruitment[adjustIndex].otherSkills
                      .slice(1)
                      .map((otherSkill, otherSkillIndex) => {
                        const adjustOtherSkillIndex = otherSkillIndex + 1;
                        return (
                          <Box key={otherSkillIndex}>
                            <Flex>
                              <Text>その他のスキル:{otherSkillIndex + 2} </Text>
                              <NextButton
                                icon="trash"
                                customStyles={trashStyle}
                                onClick={() =>
                                  handleRemoveFieldOrBlock(
                                    "recruitment",
                                    "otherSkill",
                                    adjustIndex,
                                    adjustOtherSkillIndex
                                  )
                                }
                              />
                            </Flex>
                            <Input
                              w="160px"
                              value={otherSkill}
                              onChange={(e) =>
                                handleChangeInput(
                                  e,
                                  "recruitment",
                                  "otherSkills",
                                  adjustIndex,
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
                        handleAddFieldOrBlock(
                          "recruitment",
                          "otherSkill",
                          adjustIndex
                        )
                      }
                    />
                    </VStack>
                  </GridItem>
                </Grid>
                <NextButton
                  value="削除"
                  customStyles={{ colorScheme: "red" }}
                  onClick={() =>
                    handleRemoveFieldOrBlock(
                      "recruitment",
                      undefined,
                      adjustIndex
                    )
                  }
                />
              </VStack>
            </>
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
