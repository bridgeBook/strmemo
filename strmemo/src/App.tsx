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
      <button
        className="m-10 text-white bg-blue-500 hover:bg-blue-400 font-medium rounded-lg text-sm px-4 py-1.5 me-2 mb-2"
        onClick={AddStrmemo}
      >
        メモを追加する
      </button>
      <div>
        {Object.keys(strCount).map(() => (
          <div className="ml-10">
            <div className="flex-col mt-10">
              <div className="flex mb-1">
                <StrUnit />
                <button className="focus:outline-none text-white bg-red-500 hover:bg-red-400 font-medium rounded-lg text-sm ml-20 px-4 py-1.5 me-2">
                  削除
                </button>
              </div>
              <Memo />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
