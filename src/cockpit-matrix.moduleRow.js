import React from "react";

const Row = (props) => {
  const matrix = props.dataList.matrix;
  const statusList = props.dataList.statusList;

  const filterByStatus = () => {
    let sortedByStatus = {};
    for (let i = 0; i < statusList.length; i++) {
      var statusKey = statusList[i].id;
      sortedByStatus[statusKey] = matrix.filter(
        (item) => item.status === statusKey
      );
    }
    return sortedByStatus;
  };

  const byHour = (arr) => {
    let qtdExpireHour = {
      "hour>-3": 0,
      "hour-3": 0,
      "hour-2": 0,
      "hour-1": 0,
      hour0: 0,
      hour1: 0,
      hour2: 0,
      hour3: 0,
      "hour>3": 0,
    };
    let curHour = new Date();
    for (let i = 0; i < arr.length; i++) {
      let timeDference = (curHour - arr[i].expirationDate) / (1000 * 60 * 60);
      if (timeDference > -1 && timeDference < 0) {
        qtdExpireHour["hour0"]++;
      } else if (timeDference > -2 && timeDference < -1) {
        qtdExpireHour["hour1"]++;
      } else if (timeDference > -3 && timeDference < -2) {
        qtdExpireHour["hour2"]++;
      } else if (timeDference > -4 && timeDference < -3) {
        qtdExpireHour["hour3"]++;
      } else if (timeDference < -3) {
        qtdExpireHour["hour>3"]++;
      } else if (timeDference < 2 && timeDference > 1) {
        qtdExpireHour["hour-1"]++;
      } else if (timeDference < 3 && timeDference > 2) {
        qtdExpireHour["hour-2"]++;
      } else if (timeDference < 4 && timeDference > 3) {
        qtdExpireHour["hour-3"]++;
      } else if (timeDference > 3) {
        qtdExpireHour["hour>-3"]++;
      }
    }
    return qtdExpireHour;
  };

  const priority = (arr) => {
    const total = arr.length;
    const sortedHour = byHour(arr);
    return { total, ...sortedHour };
  };

  let sortedByStatus = filterByStatus();

  let rowData = statusList.map((status) => {
    return priority(sortedByStatus[status.id]);
  });

  return rowData.map((row) => {
    return (
      <tr>
        <th className="row">{row["hour>-3"]}</th>
        <th className="row">{row["hour-3"]}</th>
        <th className="row">{row["hour-2"]}</th>
        <th className="row">{row["hour-1"]}</th>
        <th className="row">{row["hour0"]}</th>
        <th className="row">{row["hour1"]}</th>
        <th className="row">{row["hour2"]}</th>
        <th className="row">{row["hour3"]}</th>
        <th className="row">{row["hour>3"]}</th>
        <th className="nTotal">{row.total}</th>
      </tr>
    );
  });
};

export default Row;
