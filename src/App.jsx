import Table from "./components/Table";
import data from "./data/db.json";
import config1 from "./data/config1.json";
import config2 from "./data/config2.json";
import config3 from "./data/config3.json";

function App() {
  return (
    <>
      <Table data={data} config={config1} />
      <Table data={data} config={config2} />
      <Table data={data} config={config3} />
    </>
  );
}

export default App;
