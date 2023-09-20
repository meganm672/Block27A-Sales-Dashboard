import Grid from '@mui/material/Grid';
import Header from './components/header'
import './App.css'
import TransactionBar from './components/TransactionBar'
function App() {

  const hOneStyle={textAlign:"center"}
  return (
    <>
    <Grid container>

         <Header/> 
     <Grid alignContent={"left"}>
         <TransactionBar />
      </Grid>
    </Grid>
    </>
  )
}

export default App
