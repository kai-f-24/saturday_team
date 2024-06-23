import { Flex, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserIcon from "../userIcon/userIcon";
import { sampleUserInfoDataType } from "../../../backend/sampleData/userData/userInfoData";
import { NextButton } from "../../assets/button/buttons";
import SkillTag from "../../assets/skillTag/skillTag";
import { linkMap } from "../../maps/linkMap";

interface ProfileProps {
  user: sampleUserInfoDataType;
}

const ProfileBlock = ({ user }: ProfileProps) => {
  return (
    <Flex justifyContent="center" mt="30px">
      <Stack
        w="700px"
        border="2px"
        padding="26px 40px"
        borderRadius="4px"
        style={{ boxShadow: "6px 6px 6px 0px rgba(0, 0, 0, 0.3)" }}
      >
        <Flex justifyContent="space-between">
          <Flex>
            <UserIcon />
            <VStack>
              <Text>{user.username}</Text>
              <Text>{`@${user.userId}`}</Text>
            </VStack>
          </Flex>
          <NextButton value="編集" />
        </Flex>
        <Flex justifyContent="center" mb="6px">
          <Text w="97%">{user.introduction}</Text>
        </Flex>
        <Flex flexWrap="wrap">
          {user.skillTags.map((skillTag) => (
            <SkillTag isCount={true} skillTag={skillTag} />
          ))}
        </Flex>
        <Flex direction="column">
          {user.links
            .filter((link) => link.url)
            .map((link) => (
              <Flex key={link.id} alignItems="center">
                <FontAwesomeIcon
                  icon={linkMap[link.id].icon}
                  className="mr-[8px]"
                />
                <Text>{linkMap[link.id].name}</Text>
                <Text mx="4px">:</Text>
                <Link href={link.url} isExternal>
                  {link.url}
                </Link>
              </Flex>
            ))}
        </Flex>
      </Stack>
    </Flex>
  );
};

export default ProfileBlock;
