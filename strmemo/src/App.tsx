import { useState } from "react";
import "./App.css";

function App() {
  const [strActive1, setstrActive1] = useState(false);
  const [strActive2, setstrActive2] = useState(false);
  const [strActive3, setstrActive3] = useState(false);
  const [strActive4, setstrActive4] = useState(false);
  const [strActive5, setstrActive5] = useState(false);

  const Str = () => {
    return (
      <div className="flex cursor-pointer">
        <div
          className={strActive1 ? "text-black" : "text-amber-300"}
          onClick={str1}
        >
          ★
        </div>
        <div
          className={strActive2 ? "text-black" : "text-amber-300"}
          onClick={str2}
        >
          ★
        </div>
        <div
          className={strActive3 ? "text-black" : "text-amber-300"}
          onClick={str3}
        >
          ★
        </div>
        <div
          className={strActive4 ? "text-black" : "text-amber-300"}
          onClick={str4}
        >
          ★
        </div>
        <div
          className={strActive5 ? "text-black" : "text-amber-300"}
          onClick={str5}
        >
          ★
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
    } else {
      setstrActive1(false);
      setstrActive2(true);
      setstrActive3(true);
      setstrActive4(true);
      setstrActive5(true);
    }
  };
  const str2 = () => {
    if (!strActive2 && strActive3) {
      setstrActive1(true);
      setstrActive2(true);
      setstrActive3(true);
      setstrActive4(true);
      setstrActive5(true);
    } else {
      setstrActive1(false);
      setstrActive2(false);
      setstrActive3(true);
      setstrActive4(true);
      setstrActive5(true);
    }
  };
  const str3 = () => {
    if (!strActive3 && strActive4) {
      setstrActive1(true);
      setstrActive2(true);
      setstrActive3(true);
      setstrActive4(true);
      setstrActive5(true);
    } else {
      setstrActive1(false);
      setstrActive2(false);
      setstrActive3(false);
      setstrActive4(true);
      setstrActive5(true);
    }
  };
  const str4 = () => {
    if (!strActive4 && strActive5) {
      setstrActive1(true);
      setstrActive2(true);
      setstrActive3(true);
      setstrActive4(true);
      setstrActive5(true);
    } else {
      setstrActive1(false);
      setstrActive2(false);
      setstrActive3(false);
      setstrActive4(false);
      setstrActive5(true);
    }
  };
  const str5 = () => {
    if (!strActive5) {
      setstrActive1(true);
      setstrActive2(true);
      setstrActive3(true);
      setstrActive4(true);
      setstrActive5(true);
    } else {
      setstrActive1(false);
      setstrActive2(false);
      setstrActive3(false);
      setstrActive4(false);
      setstrActive5(false);
    }
  };

  return (
    <>
      <Str></Str>
    </>
  );
}

export default App;
