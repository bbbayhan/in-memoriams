import React from "react";
import plantImage from './plantImages/FlueggeaAnatolica .jpeg';

export const PlantData = () => {
  return (
    <>
      <img src={plantImage} width="140px"/>
      <p style={{textAlign:"center", color:"#7A1DC9", fontStyle:"italic"}}>Flueggea Anatolica</p>
    </>
  );
};
