import React from "react";

function Herocontent() {

  return (

    <section className=" Herocontent">
      <div className="Heroheader">
      <h1 style={{marginLeft: "5rem"}}>The future</h1>
      <h1>of health</h1>
      <h1 style={{fontStyle:"italic", marginLeft:"5rem", display:"flex", alignItems:"center",justify:"center", gap:"5px" }}>	<div className="Dash"></div> is clear.</h1>
      </div>
      <button><a href="#">Shop All</a></button>
    </section>


  );
}

export default Herocontent;
