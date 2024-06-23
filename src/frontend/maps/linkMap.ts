import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faXTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

interface LinkType {
  [key: string]: LinkInfoType;
}

interface LinkInfoType {
  name: string;
  icon: IconDefinition; // 使用するアイコンのソースが増えたら適宜型を追加
}

export const linkMap: LinkType = {
  github: {
    name: "GitHub",
    icon: faGithub,
  },
  x: {
    name: "X",
    icon: faXTwitter,
  },
  instagram: {
    name: "Instagram",
    icon: faInstagram,
  },
};
