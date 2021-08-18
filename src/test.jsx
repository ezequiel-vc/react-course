import React from "react";
import Priority from "./matriz";
import "./test.css";

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
    expirationDate: new Date('2021-08-18T11:24:00'),
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
    expirationDate: new Date('2021-08-18T10:24:00'),
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
    expirationDate: new Date('2021-08-18T08:24:00'),
  },
];

const matriz = {
  open: [],
  onCotation: [],
  onOption: [],
};

matriz.open = items.filter((item) => item.status === "aberto");
matriz.onCotation = items.filter((item) => item.status === "cotacao");
matriz.onOption = items.filter((item) => item.status === "opcao");

function Row(props) {
  return (
    <tr>
      <th className="row">{props.teste[1]["hour>-3"]}</th>
      <th className="row">{props.teste[1]["hour-3"]}</th>
      <th className="row">{props.teste[1]["hour-2"]}</th>
      <th className="row">{props.teste[1]["hour-1"]}</th>
      <th className="row">{props.teste[1]["hour0"]}</th>
      <th className="row">{props.teste[1]["hour1"]}</th>
      <th className="row">{props.teste[1]["hour2"]}</th>
      <th className="row">{props.teste[1]["hour3"]}</th>
      <th className="row">{props.teste[1]["hour>3"]}</th>
      <th className="nTotal">{props.teste[0]}</th>
    </tr>
  );
}

function Header() {
  return (
    <thead>
      <tr className="header">
        <th className="hour first">{"<-3"}</th>
        <th className="hour">-3</th>
        <th className="hour">-2</th>
        <th className="hour">-1</th>
        <th className="hour">0</th>
        <th className="hour">1</th>
        <th className="hour">2</th>
        <th className="hour">3</th>
        <th className="hour last">{">3"}</th>
        <th>Total</th>
      </tr>
    </thead>
  );
}

class Message extends React.Component {
  render() {
    return (
      <div className="table">
        <div className="side-table">
          <h3>Status</h3>
          <div className="rows-title">
            <h4>Aberto</h4>
            <h4>Em cotação</h4>
            <h4>Em opção</h4>
          </div>
        </div>
        <table>
          <Header />
          <tbody>
            <Row teste={Priority(matriz.open)}></Row>
            <Row teste={Priority(matriz.onCotation)}></Row>
            <Row teste={Priority(matriz.onOption)}></Row>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Message;
