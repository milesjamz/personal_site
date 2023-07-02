import {Grid, Typography} from '@mui/material';
import './App.css';
export const App = () => {

  return (
    <Grid container flexDirection={'column'}>
      <Grid container item flexDirection={'column'} gap='32px' margin={'24px auto'} xs={3.5}>
      <Grid item flexDirection={'column'} >
        <Typography variant='h2'>Miles Marillo</Typography>
        <Typography variant='subtitle1'>Full Stack Software Engineer</Typography>
      </Grid>
      <Grid item flexDirection={'column'} >
        <Typography variant='body1'>Hi! I build software at <a href='https://www.inspire-labs.io' target="_blank" rel="noopener noreferrer">Inspire Labs.</a></Typography>
        <Typography variant='body1'>I also like music, writing, and art.</Typography>
      </Grid>
      <Grid item >
        <Grid item><a href="mailto:milesjmarillo@gmail.com">✉️ email</a></Grid>  
        <Grid item><a href='https://www.linkedin.com/in/milesjamz/' target="_blank" rel="noopener noreferrer">👔 linkedin</a></Grid> 
        <Grid item><a href='https://github.com/milesjamz/' target="_blank" rel="noopener noreferrer"> 💻 github </a></Grid>
      </Grid>
      </Grid>
    </Grid>
    );
}