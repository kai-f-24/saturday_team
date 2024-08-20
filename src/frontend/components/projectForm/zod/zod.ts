import { z } from "zod";

export type ProjectDetail = z.infer<typeof projectDetailScheme>

const overviewScheme = z.object({
  title: z.string().min(1, { message: "概要のタイトルは必須です" }),
  text: z.string().min(1, { message: "概要のテキストは必須です" }),
});

const dateScheme = z.object({
  title: z.string().min(1, { message: "期間のタイトルは必須です" }),
  startDate: z.string().min(1, { message: "開始時期の設定は必須です" }),
  endDate: z.string().min(1, { message: "終了時期の設定は必須です" }),
});

const recruitmentScheme = z.object({
  title: z.string().min(1, { message: "役職のタイトルは必須です" }),
  maximumNumberOfPeople: z
    .number()
    .int()
    .min(1, { message: "最大人数は1以上でなければなりません" }),
  numberOfParticipants: z
    .number()
    .int()
    .min(0),
  skills: z.array(z.string().min(1, { message: "スキルIDは必須です" })),
  otherSkills: z.array(
    z.string().min(1, { message: "その他のスキルは必須です" })
  ),
});

export const projectDetailScheme = z.object({
    title: z.string().min(1, {message: "プロジェクトタイトルは必須です"}),
    overview: z.array(overviewScheme),
    date: dateScheme,
    recruitment: z.array(recruitmentScheme)
})