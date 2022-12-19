import { useContext } from "react";
import { DataContext } from "../context/DataContext";

import { ChartRow } from "./ChartRow";

export const Chart = () => {
  const { currentData } = useContext(DataContext);

  console.log(currentData);

  return (
    <>
      <div className="table">
        <table
          id="dataTable"
          width="100%"
          cellSpacing="0"
        >
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Quote Asset</th>
              <th>Price</th>
              <th>Low price</th>
              <th>High price</th>
              <th>Last price</th>
              <th>At</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((row, i) => {
              return <ChartRow {...row} key={i} />;
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
