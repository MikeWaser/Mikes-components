import "./App.scss";
import Sidebar from "./components/Sidebar/Sidebar";
import Tooltip from "./components/Tooltip/Tooltip";

function App() {
  const items = ["Home", "About", "Services", "Contact"];
  return (
    <>
      <Sidebar items={items} />
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
