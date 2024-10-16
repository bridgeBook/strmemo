import "./index.css";
import StrUnit from "./component/StrUnit";
import Memo from "./component/Memo";

function App() {
  return (
    <>
      <div className="ml-10">
        <div className="flex-col mt-10">
          <StrUnit />
          <Memo />
        </div>
        <div className="flex-col mt-10">
          <StrUnit />
          <Memo />
        </div>
      </div>
    </>
  );
}

export default App;
