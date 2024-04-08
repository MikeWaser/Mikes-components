import "./App.scss";
import Tooltip from "./components/Tooltip/Tooltip";

function App() {
  return (
    <>
      <h1 className="Mike">Mikes components</h1>
      <div className="componentGrid">
        <Tooltip title="This is a tooltip!" position="top">
          <button className="tooltipBtn">Tooltip Button</button>
        </Tooltip>
      </div>
    </>
  );
}

export default App;
