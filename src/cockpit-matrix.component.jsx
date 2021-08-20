import React from "react";
import "./cockpit-matrix.component.css";
import Row from "./cockpit-matrix.moduleRow";

const statusList = [
  { id: "aberto", status: "Aberto" },
  { id: "cotacao", status: "Em cotação" },
  { id: "opcao", status: "Em opção" },
  { id: "reservar", status: "A reservar" },
  { id: "autorizacao", status: "Em autorização" },
  { id: "emissao", status: "Em emissão" },
  { id: "erroEmissao", status: "Erro na emissão" },
  { id: "semConfirmacao", status: "Sem confirmação" },
  { id: "emitidos", status: "Emitidos" },
  { id: "cancelados", status: "Cancelados" },
];

const Table = (props) => {
  const matrix = props.tableItems;

  const Header = () => {
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
  };

  return (
    <section className="table">
      <div className="side-table">
        <h3>Status</h3>
        <div className="rows-title">
          {statusList.map((item) => {
            return <h4 key={item.id}>{item.status}</h4>;
          })}
        </div>
      </div>
      <div>
        <table>
          <Header></Header>
          <tbody>
            <Row dataList={{ matrix, statusList }}></Row>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Table;
