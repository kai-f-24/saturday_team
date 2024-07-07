import { Box, Grid, GridItem, Input, Text, VStack } from "@chakra-ui/react";
import TitleBlock from "../../../assets/title/title";
import { handleChangeInputType } from "../types/types";

interface DateFormProps {
  handleChangeInput: handleChangeInputType;
}

const DateForm: React.FC<DateFormProps> = ({ handleChangeInput }) => {
  return (
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
  );
};

export default DateForm;
