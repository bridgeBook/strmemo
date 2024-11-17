import { useState, useContext } from "react";
import "../index.css";
import { StrCountContext } from "../App";

function StrUnit(props: any) {
  const strData = useContext(StrCountContext);
  const [strActive1, setstrActive1] = useState(true);
  const [strActive2, setstrActive2] = useState(true);
  const [strActive3, setstrActive3] = useState(true);
  const [strActive4, setstrActive4] = useState(true);
  const [strActive5, setstrActive5] = useState(true);

  // 入力値が変わるたびに状態を更新
  const handleChange = (event: any) => {
    strData.strCount[props.num].str = event;
    strData?.setstrCount(strData.strCount);
  };

  const Str = () => {
    console.log(strData);
    return (
      <div className="flex cursor-pointer text-xl">
        <div
          className={strActive1 ? "text-black" : "text-amber-300"}
          onClick={str1}
        >
          <span className="">★</span>
        </div>
        <div
          className={strActive2 ? "text-black" : "text-amber-300"}
          onClick={str2}
        >
          <span className="">★</span>
        </div>
        <div
          className={strActive3 ? "text-black" : "text-amber-300"}
          onClick={str3}
        >
          <span className="">★</span>
        </div>
        <div
          className={strActive4 ? "text-black" : "text-amber-300"}
          onClick={str4}
        >
          <span className="">★</span>
        </div>
        <div
          className={strActive5 ? "text-black" : "text-amber-300"}
          onClick={str5}
        >
          <span className="">★</span>
        </div>
      </div>
    );
  };

  const str1 = () => {
    if (!strActive1 && strActive2) {
      setstrActive1(true);
      setstrActive2(true);
      setstrActive3(true);
      setstrActive4(true);
      setstrActive5(true);
      handleChange(0);
    } else {
      setstrActive1(false);
      setstrActive2(true);
      setstrActive3(true);
      setstrActive4(true);
      setstrActive5(true);
      handleChange(1);
    }
  };
  const str2 = () => {
    if (!strActive2 && strActive3) {
      setstrActive1(true);
      setstrActive2(true);
      setstrActive3(true);
      setstrActive4(true);
      setstrActive5(true);
      handleChange(0);
    } else {
      setstrActive1(false);
      setstrActive2(false);
      setstrActive3(true);
      setstrActive4(true);
      setstrActive5(true);
      handleChange(2);
    }
  };
  const str3 = () => {
    if (!strActive3 && strActive4) {
      setstrActive1(true);
      setstrActive2(true);
      setstrActive3(true);
      setstrActive4(true);
      setstrActive5(true);
      handleChange(0);
    } else {
      setstrActive1(false);
      setstrActive2(false);
      setstrActive3(false);
      setstrActive4(true);
      setstrActive5(true);
      handleChange(3);
    }
  };
  const str4 = () => {
    if (!strActive4 && strActive5) {
      setstrActive1(true);
      setstrActive2(true);
      setstrActive3(true);
      setstrActive4(true);
      setstrActive5(true);
      handleChange(0);
    } else {
      setstrActive1(false);
      setstrActive2(false);
      setstrActive3(false);
      setstrActive4(false);
      setstrActive5(true);
      handleChange(4);
    }
  };
  const str5 = () => {
    if (!strActive5) {
      setstrActive1(true);
      setstrActive2(true);
      setstrActive3(true);
      setstrActive4(true);
      setstrActive5(true);
      handleChange(0);
    } else {
      setstrActive1(false);
      setstrActive2(false);
      setstrActive3(false);
      setstrActive4(false);
      setstrActive5(false);
      handleChange(5);
    }
  };

  return <Str />;
}

export default StrUnit;
