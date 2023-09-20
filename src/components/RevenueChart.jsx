
import { BarChart } from '@mui/x-charts/BarChart';
import Box from '@mui/material/Box'


const revenueByYearData = ["24.20","131.85","481.40",]
const xLabels =[
    '2019',
    '2021',
    '2022',
]
export default function RevenueChart(){
  const barStyle = {backgroundColor:"#DCDCDC" }
  return (
  <Box  style={barStyle}>
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


