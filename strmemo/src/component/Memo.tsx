import { useContext, useState } from "react";
import "../index.css";
import { StrCountContext } from "../App";

function Memo(props: any) {
  // console.log(props);
  // console.log(props.props.num);
  // console.log(props.props.strCount);
  // console.log(props.props.strCount[props.props.num].name);

  // props.props.strCount[props.props.num].name
  // props.props.strCount.name
  // console.log(props);
  const strData = useContext(StrCountContext);
  const [text, setText] = useState("");
  // console.log(strData);

  console.log(strData);

  // 入力値が変わるたびに状態を更新
  const handleChange = (event: any) => {
    setText(event.target.value);
    strData[props.num].body = event.target.value;
  };
  return (
    <>
      <div className="title">{props.strCount[props.num].name}</div>
      <textarea
        className="flex fusen flex-wrap rounded-lg"
        value={text}
        onChange={handleChange}
      />
    </>
  );
}

export default Memo;
