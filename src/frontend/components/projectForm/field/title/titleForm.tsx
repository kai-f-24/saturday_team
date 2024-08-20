import { Box, FormErrorMessage, Input } from "@chakra-ui/react";
import { handleChangeInputType } from "../../types/types";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { ProjectDetail } from "../../zod/zod";

// 型継承したほうが保守性が高い？
interface TitleFormProps {
  handleChangeInput: handleChangeInputType;
  register: UseFormRegister<ProjectDetail>;
  errors: FieldErrors<ProjectDetail>;
}

const TitleForm: React.FC<TitleFormProps> = ({
  handleChangeInput,
  register,
  errors,
}) => {
  return (
    <Box w={"90%"} mt={6} mb={4}>
      <Input
        id="title"
        placeholder="プロジェクトタイトル"
        w={"60%"}
        // onChange={(e) => handleChangeInput(e, "title")}
        {...register("title")}
      />
      <FormErrorMessage>{ errors.title?.message}</FormErrorMessage>
    </Box>
  );
};

export default TitleForm;
