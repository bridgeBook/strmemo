import { useContext } from "react";
import "../index.css";
import { StrCountContext } from "../App";

function Memo(props: any) {
  const strData = useContext(StrCountContext);

  console.log(strData);

  // 入力値が変わるたびに状態を更新
  const handleChange = (event: any) => {
    console.log(strData);
    strData.strCount[props.num].body = event.target.value;
    strData?.setstrCount(strData.strCount);
  };
  return (
    <>
      <div className="title">{props.strCount[props.num].name}</div>
      <textarea
        className="flex fusen flex-wrap rounded-lg"
        onChange={handleChange}
      />
    </>
  );
}

export default Memo;
