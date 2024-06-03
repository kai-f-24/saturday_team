## types
/frontend以下で使用する型を定義するディレクトリ

## pages
各ページファイル

## config
一定の値を定義するディクトリ
例：技術タグなどのフォームのセレクトボタンなどで用いるあらかじめ予想される値

const skillsExample = {
    {
        skillName: "HTML",
        skillColor: "#fff",
        imgPath:"hoge/hoge"
    },
    {
        skillName: "CSS",
        skillColor: "#fff",
        imgPath:"hoge/hoge"
    },
}

## components/shared
複数のページで共通化できるコンポーネントを定義するディレクトリ

## components/pages/
単一のページでのみ用いられるコンポーネントを定義するディレクトリ
まだ作ってないディレクトリがあるので担当者が各自作ってくたださい
ディレクトリ名はfrontend/pages内のファイル名と同じ名前を用いてください