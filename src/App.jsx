// export default App;
import React, { useState } from "react";
import ReactDOM from "react-dom";
import "regenerator-runtime/runtime";
import Header from "./components/Header.jsx";
import AllCalls from "./components/AllCalls.jsx";
import Archived from "./components/Archived.jsx";
import Footer from "./components/Footer.jsx";
import useFetchData from "./hooks/useFetchData.js";

const App = () => {
  const [selectedButton, setSelectedButton] = useState(1);
  const [data, setData] = useFetchData();

  const handleSelectedButton = (type) => {
    setSelectedButton(type);
  };

  return (
    <div className="container">
      <Header />
      <div className="container-view">
        <div>{selectedButton === 1 && <button>Archive all</button>}</div>
        <div>{selectedButton === 2 && <button>Unarchive all</button>}</div>
      </div>
      <div className="button">
        <button
          onClick={() => handleSelectedButton(1)}
          className={selectedButton === 1 ? "selected" : ""}
        >
          All Calls({data.filter((el) => el.is_archived === false).length})
        </button>
        <button
          onClick={() => handleSelectedButton(2)}
          className={selectedButton === 2 ? "selected" : ""}
        >
          Archived Calls({data.filter((el) => el.is_archived === true).length})
        </button>
      </div>
      <div className="main">
        {selectedButton === 1 && (
          <AllCalls
            data={data.filter((el) => el.is_archived === false)}
            setData={setData}
          />
        )}
        {selectedButton === 2 && (
          <Archived data={data.filter((el) => el.is_archived === true)} setData={setData} />
        )}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
