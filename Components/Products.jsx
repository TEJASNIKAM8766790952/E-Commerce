import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'ProductName', headerName: 'Product Name', width: 130 },
  { field: 'Category', headerName: 'Category', width: 130 },
  {field: 'Brand',headerName: 'Brand',width: 160,},
  {field: 'Price',headerName: 'Price',width: 100,},
  {field: 'description',headerName: 'Description',width: 160,},
  {field: 'type',headerName: 'Type',width: 160,},
  {field: 'outOfStock',headerName: 'Out Of Stock',width: 160,},
  {field: 'image',headerName: 'Image',width: 160,},
  {field: 'delete',headerName: 'Delete',width: 160,},
  {field: 'edit',headerName: 'Edit',width: 100,},
  
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const paginationModel = { page: 0, pageSize: 5 };

export default function ProductTable() {
  return (
    <div>
         <Button variant="contained" disableElevation>Product</Button>
    <Paper sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
    </div>
  );
}