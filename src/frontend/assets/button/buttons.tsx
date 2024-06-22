import { Button } from "@chakra-ui/react";

interface BaseButtonProps {
  value: string; // 出力するテキスト
  customStyles?: Partial<typeof defaultBaseButtonStyles>; // デフォルトCSS
}

const defaultBaseButtonStyles = {
  colorScheme: "green",
  width: "110px",
  tailwind: "px-8 mx-8",
};

export const CreateButton = ({ value, customStyles = {} }: BaseButtonProps) => {
  const styles = { ...defaultBaseButtonStyles, ...customStyles };

  return (
    <Button
      colorScheme={styles.colorScheme}
      width={styles.width}
      className={styles.tailwind}
    >
      {value}
    </Button>
  );
};

interface nextButtonProps {
  value: string;
  customStyles?: Partial<typeof defaultNextButtonStyles>;
}

const defaultNextButtonStyles = {
  colorScheme: "green",
  width: "100px",
  height: "30px",
  tailwind: "px-8 mx-8",
};

export const NextButton = ({ value, customStyles }: nextButtonProps) => {
  const styles = { ...defaultNextButtonStyles, ...customStyles };
  return (
    <Button
      colorScheme={styles.colorScheme}
      width={styles.width}
      height={styles.height}
      className={styles.tailwind}
      variant="outline"
    >
      {value}
    </Button>
  );
};
