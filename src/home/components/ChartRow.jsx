import React from "react";

export const ChartRow = (props) => {
  let date = new Date(props.at).toLocaleDateString();

  return (
    <>
      <tr>
        <td>{props.symbol}</td>
        <td>{props.quoteAsset}</td>
        <td>{props.openPrice}</td>
        <td>{props.lowPrice}</td>
        <td>{props.highPrice}</td>
        <td>{props.lastPrice}</td>
        <td>{date}</td>
      </tr>
    </>
  );
};
