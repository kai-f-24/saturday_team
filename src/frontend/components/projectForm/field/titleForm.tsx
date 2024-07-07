import { Box, Input } from "@chakra-ui/react";
import { handleChangeInputType } from "../types/types";

// 型継承したほうが保守性が高い？
interface TitleFormProps {
  handleChangeInput: handleChangeInputType;
}

const TitleForm: React.FC<TitleFormProps> = ({ handleChangeInput }) => {
  return (
    <Box w={"90%"} mt={6} mb={4}>
      <Input
        placeholder="プロジェクトタイトル"
        w={"60%"}
        onChange={(e) => handleChangeInput(e, "title")}
      />
    </Box>
  );
};

export default TitleForm;
