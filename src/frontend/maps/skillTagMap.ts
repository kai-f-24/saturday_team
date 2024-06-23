interface SkillTagMapType {
  [key: string]: Skill;
}

interface Skill {
  skillName: string;
  skillColor: string;
  skillLogoSrc: string;
}
export const skillTagMap: SkillTagMapType = {
  html: {
    skillName: "HTML",
    skillColor: "#F16529",
    skillLogoSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  },
  css: {
    skillName: "CSS",
    skillColor: "#40A2E3",
    skillLogoSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  },
  javascript: {
    skillName: "JavaScript",
    skillColor: "#F7DF1E",
    skillLogoSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  php: {
    skillName: "PHP",
    skillColor: "#777BB4",
    skillLogoSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
  },
  python: {
    skillName: "Python",
    skillColor: "#306998",
    skillLogoSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  nodejs: {
    skillName: "Node.js",
    skillColor: "#68A063",
    skillLogoSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
  },
  docker: {
    skillName: "Docker",
    skillColor: "#0db7ed",
    skillLogoSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  },
  prisma: {
    skillName: "Prisma",
    skillColor: "#0C344B",
    skillLogoSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
  },
  java: {
    skillName: "Java",
    skillColor: "#007396",
    skillLogoSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  },
  typescript: {
    skillName: "TypeScript",
    skillColor: "#007ACC",
    skillLogoSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  mongodb: {
    skillName: "MongoDB",
    skillColor: "#47A248",
    skillLogoSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  },
  mysql: {
    skillName: "MySQL",
    skillColor: "#4479A1",
    skillLogoSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
  },
  sequelize: {
    skillName: "Sequelize",
    skillColor: "#52B0E7",
    skillLogoSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sequelize/sequelize-original.svg",
  },
  figma: {
    skillName: "Figma",
    skillColor: "#F24E1E",
    skillLogoSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
  },
  sqlalchemy: {
    skillName: "SQLAlchemy",
    skillColor: "#CB171E",
    skillLogoSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlalchemy/sqlalchemy-original.svg",
  },
};
