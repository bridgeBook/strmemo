import "./index.css";
import StrUnit from "./component/StrUnit";
import Memo from "./component/Memo";
import { useState } from "react";

type TestCount = {
  id: number;
};

function App() {
  const [strCount, setstrCount] = useState<TestCount[]>([]);

  const AddStrmemo = () => {
    console.log(strCount);
    setstrCount([
      ...strCount,
      {
        id: strCount.length,
      },
    ]);
  };

  return (
    <>
      <button className="addButton m-10" onClick={AddStrmemo}>
        追加
      </button>
      <div>
        {Object.keys(strCount).map(() => (
          <div className="ml-10">
            <div className="flex-col mt-10">
              <StrUnit />
              <Memo />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
