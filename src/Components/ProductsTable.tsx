import React, { FC, useState } from "react";
import { useSelector } from "react-redux";
import { Product, ProductsState } from "../types/types";

import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
const ProductsTable: FC = () => {
  // @ts-ignore
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const { products, isLoading, filteredProducts } = useSelector(
    // @ts-ignore
    (state) => state.products.products
  );
  console.log(products);
  const handleChangePage = () => {
    setPage(1);
    console.log("handlePage");
  };
  const rows = products;
  const handleChangeRowsPerPage = (event: any, newPage: any) => {
    setPage(newPage);
  };
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "First name", width: 130 },
    { field: "year", headerName: "Last name", width: 130 },
  ];
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={products}
        // rowCount={rowCountState}
        loading={isLoading}
        rowsPerPageOptions={[5]}
        pagination
        page={page}
        // pageSize={pageSize}
        paginationMode="server"
        onPageChange={(newPage) => setPage(newPage)}
        // onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        columns={columns}
        // initialState={initialState}
      />
    </div>
  );
};

export default ProductsTable;
