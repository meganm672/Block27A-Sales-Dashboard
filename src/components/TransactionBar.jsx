
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

export default function TransactionBar (){
  
    const columns = [
        { field: 'txId', headerName: 'ID', width: 90, cellClassName: 'id--cell'},
        {
          field: 'user',
          headerName: 'User',
          width: 150,
          editable: false,
        },
        {
          field: 'date',
          headerName: 'Date',
          width: 100,
          editable: false,
        },
        {
          field: 'cost',
          headerName: 'cost',
          type: 'number',
          width:80,
          editable: false,
          cellClassName: 'total-color--cell'
        },
      ];
      const rows = [
        {
          txId: "01e4dsaa",
          user: "johndoe",
          date: "2021-09-01",
          cost: "43.95",
        },
        {
          txId: "0315dsaa",
          user: "jackdower",
          date: "2022-04-01",
          cost: "133.45",
        },
         {
          txId: "01e4dsaaa",
           user: "aberdohnny",
           date: "2021-09-01",
           cost: "43.95",
         },
        {
          txId: "51034szv",
          user: "goodmanave",
          date: "2022-11-05",
          cost: "200.95",
        },
        {
          txId: "0a123sb",
          user: "stevebower",
          date: "2022-11-02",
          cost: "13.55",
        },
         {
           txId: "01e4dsa",
          user: "aberdohnny",
          date: "2021-09-01",
           cost: "43.95",
         },
        {
          txId: "120s51a",
          user: "wootzifer",
          date: "2019-04-15",
          cost: "24.20",
        },
        {
          txId: "0315dsaa",
          user: "jackdower",
          date: "2022-04-01",
          cost: "133.45",
        },
      ];
    return(
        <Box sx={{ height: 300, width: '35vw', backgroundColor: "#DCDCDC",'& .total-color--cell':{
            backgroundColor: "#66CDAA", borderRadius: "20px", align: "center",
        }, '& .id--cell':{
            color: "#66CDAA", fontSize: "15px"
        }
        }}>
            <Typography variant='h5'>Recent Transactions</Typography>
            <Divider sx={{borderBottomWidth: 5, bgcolor: "black"}}></Divider>
        <DataGrid
          getRowId={(row) => row.txId}
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          />
          </Box>
    )
}