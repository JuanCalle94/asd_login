import { useContext } from "react";

import { Paginate } from "../../ui/components/Paginate";
import { Chart } from "../components/Chart";
import { DataContext } from "../context/DataContext";

export const Home = () => {
  const { dataLength, paginate, dataPerPage } = useContext(DataContext);
  return (
    <>
      <Chart />
      <Paginate
        dataPerPage={dataPerPage}
        totalData={dataLength}
        paginate={paginate}
      />
    </>
  );
};
