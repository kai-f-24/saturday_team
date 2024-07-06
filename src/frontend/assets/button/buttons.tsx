import { Button } from "@chakra-ui/react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

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
  value?: string;
  customStyles?: Partial<typeof defaultNextButtonStyles>;
  onClick?: () => void;
  icon?: "plus" | "trash"
}

const defaultNextButtonStyles = {
  colorScheme: "green",
  width: "100px",
  height: "30px",
  tailwind: "px-8 mx-8",
};

export const NextButton = ({
  value,
  customStyles,
  onClick,
  icon,
}: nextButtonProps) => {
  const styles = { ...defaultNextButtonStyles, ...customStyles };

  let iconValue;
  switch(icon){
    case "plus":
      iconValue = faPlus;
      break;
    case "trash":
      iconValue = faTrash;
      break
    default:
      iconValue = faPlus;
  }

  return (
    <Button
      colorScheme={styles.colorScheme}
      width={styles.width}
      height={styles.height}
      className={styles.tailwind}
      variant="outline"
      onClick={onClick}
    >
      {icon &&  <FontAwesomeIcon icon={iconValue} />}
      {value && <span>{value}</span>}
    </Button>
  );
};
