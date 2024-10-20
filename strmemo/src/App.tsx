import "./index.css";
import StrUnit from "./component/StrUnit";
import Memo from "./component/Memo";
import { useState } from "react";

function App() {
  const [testaaa, setTestaaa] = useState({
    1: 1,
  });

  const test = () => {
    // const newadd = [...testaaa];
  };

  return (
    <>
      {/* <textarea className="flex addFusen flex-wrap m-10"></textarea> */}
      <button className="addButton m-10" onClick={test}>
        追加
      </button>
      <div>
        {Object.keys(testaaa).map(() => (
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
