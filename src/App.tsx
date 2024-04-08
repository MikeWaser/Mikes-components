import "./App.scss";
import Sidebar from "./components/Sidebar/Sidebar";
import Tooltip from "./components/Tooltip/Tooltip";
import Toast from "./components/Toast/Toast";

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
      <Toast message="Success" type="success" />
      <Toast message="Error" type="error" />
      <Toast message="Info" type="info" />
    </>
  );
}

export default App;
