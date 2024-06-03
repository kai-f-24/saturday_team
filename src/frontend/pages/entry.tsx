import { useEffect, useState } from "react";
import axios from "axios";

function Entry() {
  const [success, setSuccess] = useState<string>("");
  const [text1, setText1] = useState<string>("");
  const [text2, setText2] = useState<string>("");

  useEffect(() => {
    axios
      .get("http://localhost:4000/apiTest")
      .then((response) => {
        setSuccess(response.data.success);
        setText1(response.data.text1);
        setText2(response.data.text2);
        console.log('response内容 : ',response);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <h1>EntryPage</h1>
      <p>ログイン・サインインページ</p>
      <p>すでにログイン済みならば、home.tsxに自動遷移させたい</p>
      <h2>{ success }</h2>
      <p> { text1 }</p>
      <p> { text2 }</p>
    </>
  );
}

export default Entry;
