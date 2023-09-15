import ClassRandomNumberGenerator from "./classRandomNumberGenerator/ClassRandomNumberGenerator"
import FunctionalRandomNumberGenerator from "./functionalRandomNumberGenerator/FunctionalRandomNumberGenerator";

import "./App.css"

function App() {
  return (
    <div className="main-container">
      {/* <ClassRandomNumberGenerator/> */}
      <FunctionalRandomNumberGenerator/>
    </div>
  );
}

export default App;
