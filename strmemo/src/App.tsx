import "./index.css";
import StrUnit from "./component/StrUnit";
import Memo from "./component/Memo";
import { useContext, useState, createContext } from "react";
useContext;

type TestCount = {
  id: number;
  name: string;
  body: string;
};

export const StrCountContext = createContext<TestCount[]>([]);

function App() {
  const [strCount, setstrCount] = useState<TestCount[]>([]);
  const [name, setName] = useState("");

  const AddStrmemo = () => {
    setstrCount([
      ...strCount,
      {
        id: strCount.length,
        name: name,
        body: "",
      },
    ]);
    // console.log(strCount)
  };

  return (
    <>
      <StrCountContext.Provider value={strCount}>
        <div className="header w-screen h-24 text-4xl text-white font-extrabold flex items-center pl-12">
          StarMemo
        </div>
        <div className="flex">
          <input
            className="m-10 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg text-sm px-4 py-1.5 me-2 mb-2 w-64"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <button
            className="mt-10 text-white bg-blue-500 hover:bg-blue-400 font-medium rounded-lg text-sm px-4 py-1.5 me-2 mb-2"
            onClick={AddStrmemo}
          >
            メモを追加する
          </button>
        </div>

        <div>
          {Object.keys(strCount).map((num) => (
            <div className="ml-10">
              <div className="flex-col mt-10">
                <div className="flex mb-1">
                  <StrUnit />
                  <button className="focus:outline-none text-white bg-red-500 hover:bg-red-400 font-medium rounded-lg text-sm ml-20 px-4 py-1.5 me-2">
                    削除
                  </button>
                </div>
                <Memo strCount={strCount} num={num} />
              </div>
            </div>
          ))}
        </div>
      </StrCountContext.Provider>
    </>
  );
}

export default App;
