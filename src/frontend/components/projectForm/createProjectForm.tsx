import {
  Box,
  Flex,
  Input,
  Textarea,
  Heading,
  useTheme,
  VStack,
  Grid,
  GridItem,
  Text,
  Checkbox,
  Stack,
  Collapse,
  CheckboxGroup,
} from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";
import { NextButton } from "../../assets/button/buttons";
import { Title } from "@mantine/core";
import TitleBlock from "../../assets/title/title";
import {
  initialInput,
  projectDetailDataType,
} from "../../../backend/sampleData/projectData/projectDetailData";

import { handleAddOrRemoveFieldOrBlockType, handleChangeInputType } from "./types/types";


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
  handleRemoveFieldOrBlock
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
  };

  const theme = useTheme();

  return (
    <Flex
      direction="column"
      alignItems={"center"}
      border={"2px"}
      borderRadius={"4px"}
      w={"700px"}
    >
      <Box w={"90%"}>
        {/* title */}
        <Input
          placeholder="プロジェクトタイトル"
          w={"40%"}
          onChange={(e) => handleChangeInput(e, "title")}
        />
      </Box>
      {/* overview */}
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
                onClick={() => handleRemoveFieldOrBlock("overview", undefined, index)}
              />
            </VStack>
          </Box>
        );
      })}
      <NextButton value="追加" onClick={() => handleAddFieldOrBlock("overview")} />

      <Box w={"90%"} mb={4}>
        <TitleBlock value="制作期間" />
        <VStack>
          <Grid
            templateRows="repeat(2 1fr)"
            templateColumns={"repeat(3, 1fr)"}
            h="70px"
          >
            <GridItem>開始日</GridItem>
            <GridItem></GridItem>
            <GridItem>終了日</GridItem>
            <GridItem>
              <Input
                placeholder="Select Date"
                size="md"
                type={"date"}
                onChange={(e) => handleChangeInput(e, "date", "startDate")}
              />
            </GridItem>
            <GridItem
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Text>〜</Text>
            </GridItem>
            <GridItem>
              <Input
                placeholder="Select Date"
                size="md"
                type={"date"}
                onChange={(e) => handleChangeInput(e, "date", "endDate")}
              />
            </GridItem>
          </Grid>
        </VStack>
      </Box>
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
                    // value={inputs.recruitment[0].skills}
                    onChange={(e: string[]) =>
                      handleChangeInput(e, "recruitment", "skills")
                    }
                  >
                    <Flex w="350px" wrap="wrap">
                      <Checkbox value="javascript" mr={2} mb={2}>
                        JavaScript
                      </Checkbox>
                      <Checkbox value="python" mr={2} mb={2}>
                        Python
                      </Checkbox>
                      <Checkbox value="java" mr={2} mb={2}>
                        Java
                      </Checkbox>
                      <Checkbox value="csharp" mr={2} mb={2}>
                        C#
                      </Checkbox>
                      <Checkbox value="golang" mr={2} mb={2}>
                        Go
                      </Checkbox>
                      <Checkbox value="typescript" mr={2} mb={2}>
                        TypeScript
                      </Checkbox>
                      <Checkbox value="php" mr={2} mb={2}>
                        PHP
                      </Checkbox>
                      <Checkbox value="flutter" mr={2} mb={2}>
                        Flutter
                      </Checkbox>
                    </Flex>
                  </CheckboxGroup>
                </Collapse>
              </Box>
            </GridItem>

            <GridItem colSpan={1}>
              {/* map関数を追加 */}
              <Box key={0}>
                <Text>その他のスキル:1</Text>
                <Input
                  w="160px"
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
              {inputs.recruitment[0].otherSkills
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
                              undefined,
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
                onClick={() => handleAddFieldOrBlock("recruitment", "otherSkill")}
              />
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
                        value={input.title}
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
                            <Checkbox value="javascript" mr={2} mb={2}>
                              JavaScript
                            </Checkbox>
                            <Checkbox value="python" mr={2} mb={2}>
                              Python
                            </Checkbox>
                            <Checkbox value="java" mr={2} mb={2}>
                              Java
                            </Checkbox>
                            <Checkbox value="csharp" mr={2} mb={2}>
                              C#
                            </Checkbox>
                            <Checkbox value="golang" mr={2} mb={2}>
                              Go
                            </Checkbox>
                            <Checkbox value="typescript" mr={2} mb={2}>
                              TypeScript
                            </Checkbox>
                            <Checkbox value="php" mr={2} mb={2}>
                              PHP
                            </Checkbox>
                            <Checkbox value="flutter" mr={2} mb={2}>
                              Flutter
                            </Checkbox>
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
                        handleAddFieldOrBlock("recruitment", "otherSkill", adjustIndex)
                      }
                    />
                  </GridItem>
                </Grid>
                <NextButton
                  value="削除"
                  customStyles={{ colorScheme: "red" }}
                  onClick={() =>
                    handleRemoveFieldOrBlock("recruitment", undefined, adjustIndex)
                  }
                />
              </VStack>
            </>
          );
        })}
        <NextButton
          value="追加"
          onClick={() => handleAddFieldOrBlock("recruitment")}
        />
      </Box>
    </Flex>
  );
};

export default CreateProjectForm;
