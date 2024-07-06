import { Heading } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";

interface TitleProps {
  value: string;
}

const TitleBlock = ({ value }: TitleProps) => {
  const theme = useTheme();
  return (
    <Heading
      size={"md"}
      pl={"10px"}
      mb={"6px"}
      borderLeftWidth={"7px"}
      borderColor={theme.colors.green[450]}
    >
      {value}
    </Heading>
  );
};

export default TitleBlock;
