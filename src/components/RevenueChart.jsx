
import { BarChart } from '@mui/x-charts/BarChart';



const revenueByYearData = ["24.20","131.85","481.40",]
const xLabels =[
    '2019',
    '2021',
    '2022',
]
export default function RevenueChart(){
  return (
  <BarChart
        width={500}
        height={300}
        series={[
        { data: revenueByYearData, label: "revenue by year" , id: 'revId' },
        ]}
        xAxis={[{ data: xLabels, scaleType: 'band' }]}
  />
);
}


