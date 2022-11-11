import React from "react";
import "./Home.scss";
import Sidebar from "../../components/sidebar/Sidebar";

function Home(props) {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">container</div>
    </div>
  );
}

export default Home;
