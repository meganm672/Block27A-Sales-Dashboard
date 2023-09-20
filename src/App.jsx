
import Header from './components/header'
import './App.css'
import TransactionBar from './components/TransactionBar'
import RevenueChart from './components/RevenueChart';
import Title from './components/title';
import Box from '@mui/material/Box';

function App() {

  return (
    <>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: 1,
          gridTemplateRows: 'auto',
          gridTemplateAreas:`"header title title title title"
          "header . . . ."
          "header chart chart transaction transaction"`,
        }}
      > 
        <Box sx={{gridArea:"header"}}> 
          <Header/> 
        </Box>
        <Box sx={{gridArea: "title"}}>
          <Title/>
        </Box>
        <Box sx={{gridArea: "chart"}}>
            <RevenueChart />
        </Box>
        <Box sx={{gridArea: "transaction"}}>
            <TransactionBar />
        </Box>
      
      </Box>
    </>
  )
}

export default App
