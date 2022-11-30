import React from "react";
import Table from "./Table";
import Form from "./Form";

function Main() {
  return (
    <div
      style={{ padding: "10rem", paddingLeft: "10rem", paddingRight: "10rem" }}>
      <Form />
      <Table />
    </div>
  );
}

export default Main;
