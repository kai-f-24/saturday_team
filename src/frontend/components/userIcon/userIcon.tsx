import WEBTeamImg from "../../img/WEBTeamImg.jpeg";

function UserIcon() {
  return (
    <div>
      <img
        src={WEBTeamImg}
        alt=""
        style={{ width: "60px", height: "60px", borderRadius: "100px" }}
      />
    </div>
  );
}

export default UserIcon;
