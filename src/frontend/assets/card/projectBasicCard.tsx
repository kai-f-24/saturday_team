import {
  Card,
  CardBody,
  Text,
  Heading,
  Stack,
  Flex,
  useTheme,
} from "@chakra-ui/react";
import { sampleProjectBasicDataType } from "../../../backend/sampleData/projectData/projectBasicData";
import { NextButton } from "../button/buttons";

interface projectBasicCardProps {
  cardInfoList: sampleProjectBasicDataType[];
}

const ProjectBasicCard = ({ cardInfoList }: projectBasicCardProps) => {
  const theme = useTheme();
  return (
    <Stack spacing={4}>
      {cardInfoList.map((cardInfo) => (
        <Card className="w-[700px]">
          <CardBody
            className="bg-base"
            borderWidth="2px"
            borderColor="black"
            borderRadius={4}
            style={{ boxShadow: "6px 6px 6px 0px rgba(0, 0, 0, 0.3)" }}
          >
            <Flex justifyContent="space-between">
              <Heading mb="20px" mt="8px" fontSize="36px">
                {cardInfo.title}
              </Heading>
              <NextButton value="詳細" />
            </Flex>

            <Heading
              size="md"
              pl="10px"
              mb="6px"
              borderLeftWidth="7px"
              borderColor={theme.colors.green[450]}
            >
              {cardInfo.description.name}
            </Heading>
            <Flex justifyContent="center">
              <Text w="88%" mb="12px">
                {cardInfo.description.text}
              </Text>
            </Flex>
          </CardBody>
        </Card>
      ))}
    </Stack>
  );
};

export default ProjectBasicCard;
