import React from "react";
import priority from "./matriz";
import "./cockpit-matrix.component.css";

const status = [
  {aberto: 'Aberto'},
  {cotacao: 'Em cotação'},
  {opcao: 'Em opção'},
  {reservar: 'A reservar'},
  {autorizacao: 'Em autorização'},
  {emissao: 'Em emissão'},
  {erroEmissao: 'Erro na emissão'},
  {semConfirmacao: 'Sem confirmação'},
  {emitidos: 'Emitidos'},
  {cancelados: 'Cancelados'}
]

const statusKeys = getKeys();
 function getKeys() {
  let keys = [];
  for(let key of status){
    keys.push(Object.keys(key))
  }
  return keys;
}

const statusValues = getValue();
function getValue() {
  let value = [];
  for(let i = 0; i < statusKeys.length; i++){
    value.push(status[i][statusKeys[i]])
  }
  return value;
}



class Table extends React.Component {
  constructor(props){
    super(props);
    this.state = {   
      matriz: this.filterstatus(this.props.tableItems)
    }
  }


  render() {
    return (
      <div className="table">
        <div className="side-table">
          <h3>Status</h3>
          <div className="rows-title">
            {statusValues.map( (value) => <h4>{value}</h4>)}
          </div>
        </div>
        <table>
          <this.Header />
          <tbody>
            {statusKeys.map((status) => <this.Row statusAtr={priority(this.state.matriz[status[0]])}></this.Row>)}
          </tbody>
        </table>
      </div>
    );
  }

  filterstatus (list) {
    const matriz = {}
    for(let i = 0; i < statusKeys.length; i++){
      var theStatus = statusKeys[i];
      matriz[theStatus[0]] = list.filter((item) => item.status === theStatus[0]);
    }
    return matriz;
  }

  Header() {
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

  Row(props) {
    return (
      <tr>
        <th className="row">{props.statusAtr[1]["hour>-3"]}</th>
        <th className="row">{props.statusAtr[1]["hour-3"]}</th>
        <th className="row">{props.statusAtr[1]["hour-2"]}</th>
        <th className="row">{props.statusAtr[1]["hour-1"]}</th>
        <th className="row">{props.statusAtr[1]["hour0"]}</th>
        <th className="row">{props.statusAtr[1]["hour1"]}</th>
        <th className="row">{props.statusAtr[1]["hour2"]}</th>
        <th className="row">{props.statusAtr[1]["hour3"]}</th>
        <th className="row">{props.statusAtr[1]["hour>3"]}</th>
        <th className="nTotal">{props.statusAtr[0]}</th>
      </tr>
    );
  }

}

export default Table;
