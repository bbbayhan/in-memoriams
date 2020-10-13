import React from "react";
export const ComponentData = (props) => {
  return (
    <div>
      <h3 style={{ textAlign: "center" }}>{props.data.name}</h3>
      <p>
        <b>Yaşı: </b> {props.data.age}
        <b>&nbsp;Tarih: </b> {props.data.date}
        <br />
        <b>Neden öldürdü: </b>
        {props.data.reason}
        <br />
        <b>Kim öldürdü: </b>
        {props.data.killer}
        <br />
        {/* <b>Korunma talebi:</b>
        {props.data.requestOfProtection}
        <br />
        <b>Öldürülme şekli:</b>
        {props.data.waySheDied}
        <br /> */}
        <b>Failin durumu:</b>
        {props.data.statusOfPerpetrator}
      </p>
    </div>
  );
};
