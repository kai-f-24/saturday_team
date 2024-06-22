import UserIcon from "../userIcon/userIcon";
import { CreateButton } from "../../assets/button/buttons";

// customStylesを使用するコメントアウト
// const tailwind: string = "px-2 mx-2";

// プロジェクト関数

function Header() {
  return (
    <div className="flex justify-between items-center bg-base py-2">
      <h1 className="text-mainGreen text-4xl font-bold ml-12">
        土曜日チームアプリ
      </h1>
      <div className="flex justify-between items-center mr-12">
        <CreateButton value="Create" />
        {/* <CreateButton value="Create" customStyles={{tailwind}}/> */}
        <UserIcon />
      </div>
    </div>
  );
}

export default Header;
