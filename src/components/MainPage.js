import React from "react";
import Mwindow from "./Mwindow";
import Docks from "./Docks";
const MainPage = () => {
  return (
    <div className="App">
      <nav>Nav</nav>
      <div className="Mwin1">
        <Mwindow />
      </div>
      <div className="Mwin2">
        <Mwindow />
      </div>

      <Docks />
    </div>
  );
};
export default MainPage;
