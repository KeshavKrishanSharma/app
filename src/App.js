import "./App.css";

import Header from "./components/header/Header";
import SectionA from "./components/sections/SectionA";
import SectionB from "./components/sections/SectionB";
import SectionC from "./components/sections/SectionC";



function App() {
  return (
    <div className="App ">
     <Header/>
  <SectionA/>
  <SectionB/>
  <SectionC/>
    </div>
  );
}

export default App;
