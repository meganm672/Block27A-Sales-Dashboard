import { BarChart } from '@mui/x-charts/BarChart';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

const revenueByYearData = [24.20,131.85,481.40]
const xLabels =[
    '2019',
    '2021',
    '2022',
]
export default function RevenueChart(){
  const barStyle = {backgroundColor:"#DCDCDC" }
  const titleStyle={ paddingLeft: "10px"}
  const totalStyle ={color: '#66CDAA', paddingLeft: "20px", fontSize: "25px"}
  
  return (
  <Box  style={barStyle}>
    <Typography style={titleStyle}variant="h5">Revenue Generated</Typography>
    <Divider sx={{borderBottomWidth: 5, bgcolor: "black"}}></Divider>
    <Typography style={totalStyle}>$637.45</Typography>
      <BarChart
            width={500}
            height={300}
            series={[
            { data: revenueByYearData, label: "revenue by year" , id: 'revId' },
            ]}
            xAxis={[{ data: xLabels, scaleType: 'band' }]}
      />
  </Box>
);
}


