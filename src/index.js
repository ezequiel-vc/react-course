import React from "react";
import reactDom from "react-dom";
import Table from "./cockpit-matrix.component";

var items = [
  {
    rv: 325,
    item: 236,
    productType: "Aéreo",
    requester: "Lourenzo Viana",
    date: new Date(),
    traveller: ["Diego Murakami", "Thiago Graf"],
    approver: ["Aldo Caterina"],
    status: "aberto",
    expirationDate: new Date("2021-08-18T11:24:00"),
  },
  {
    rv: 325,
    item: 236,
    productType: "Aéreo",
    requester: "Lourenzo Viana",
    date: new Date(),
    traveller: ["Diego Murakami", "Thiago Graf"],
    approver: ["Aldo Caterina"],
    status: "cotacao",
    expirationDate: new Date("2021-08-18T10:24:00"),
  },
  {
    rv: 325,
    item: 236,
    productType: "Aéreo",
    requester: "Lourenzo Viana",
    date: new Date(),
    traveller: ["Diego Murakami", "Thiago Graf"],
    approver: ["Aldo Caterina"],
    status: "opcao",
    expirationDate: new Date("2021-08-18T08:24:00"),
  },
];

function BookList() {
  return (
    <>
      <Table tableItems={items} />
    </>
  );
}

reactDom.render(<BookList />, document.getElementById("root"));
