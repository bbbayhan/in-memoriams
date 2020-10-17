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
        {props.data.murderer}
        <br />
        {/* <b>Korunma talebi:</b>
        {props.data.request_of_protection}
        <br />
        <b>Öldürülme şekli:</b>
        {props.data.way}
        <br /> */}
        <b>Failin durumu:</b>
        {props.data.status_of_murderer}
      </p>
    </div>
  );
};
