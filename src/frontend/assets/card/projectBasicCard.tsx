import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Heading,
  Stack,
  Flex,
  useTheme,
} from "@chakra-ui/react";
import { sampleProjectBasicDataType } from "../../../backend/sampleData/projectData/projectBasicData";
import { NextButton } from "../button/buttons";

interface projectBasicCardProps {
  projects: sampleProjectBasicDataType[];
}

const ProjectBasicCard = ({ projects }: projectBasicCardProps) => {
  const theme = useTheme();
  return (
    <Stack spacing={4}>
      {projects.map((project) => (
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
                {project.title}
              </Heading>
              <NextButton value="詳細" />
            </Flex>

            <Heading
              size="md"
              pl='10px'
              mb='6px'
              borderLeftWidth="7px"
              borderColor={theme.colors.green[450]}
            >
              {project.description.name}
            </Heading>
            <Flex justifyContent="center">
              <Text w="88%" mb="12px">
                {project.description.text}
              </Text>
            </Flex>
          </CardBody>
        </Card>
      ))}
    </Stack>
  );
};

export default ProjectBasicCard;
