import { Image, Tag, Text } from "@chakra-ui/react";
import { skillTagType } from "../../../backend/sampleData/userData/userInfoData";
import { skillTagMap } from "../../maps/skillTagMap";

interface SkillTagProps {
  isClick?: boolean;
  isCount?: boolean;
  skillTag: skillTagType;
}

const SkillTag = ({ isClick, isCount, skillTag }: SkillTagProps) => {
  return (
    <Tag
      w="fit-content"
      bg="white"
      border="1px"
      borderRadius="18px"
      borderColor={skillTagMap[skillTag.id].skillColor}
      px="12px"
      mr="8px"
      mb="8px"
    >
      <Image
        src={skillTagMap[skillTag.id].skillLogoSrc}
        w="16px"
        h="auto"
        mr="4px"
      />
      <Text>{skillTagMap[skillTag.id].skillName}</Text>
      {isCount && (
        <>
          <Text mx="2px" mb="2px">
            :
          </Text>
          <Text>{skillTag.count}</Text>
        </>
      )}
    </Tag>
  );
};

export default SkillTag;
