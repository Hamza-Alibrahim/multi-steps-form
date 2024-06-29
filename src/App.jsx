import Menu from "./component/Menu";
import Navbar from "./component/Navbar";
import UseForm from "./component/UseForm";
import { useState } from "react";

const App = () => {
  const [progress, setProgress] = useState(1);
  const [menu, setMenu] = useState(false);
  return (
    <div className="relative h-screen select-none">
      <Navbar progress={progress} toggleMenu={() => setMenu((prev) => !prev)} />
      {menu && (
        <Menu progress={progress} updateProgress={(n) => setProgress(n)} />
      )}
      <UseForm progress={progress} updateProgress={(n) => setProgress(n)} />
    </div>
  );
};
export default App;
