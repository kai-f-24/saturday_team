import { Box, Input, useTheme } from "@chakra-ui/react";
import { handleChangeInputType } from "../../types/types";

interface OverviewInputTitleProps {
    handleChangeInput: handleChangeInputType;
    index: number
    title: string;
}

const OverviewInputTitle: React.FC<OverviewInputTitleProps> = ({
    handleChangeInput,
    index,
    title
}) => {

    const theme = useTheme();

    return (
        <Box
          borderLeftWidth={"7px"}
          borderColor={theme.colors.green[450]}
          pl={"10px"}
          my={2}
        >
          <Input
            value={title}
            w={"40%"}
            onChange={(e) => handleChangeInput(e, "overview", "title", index)}
          />
        </Box>
    )
}

export default OverviewInputTitle;