

import Button from '@mui/material/Button';
import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function App() {

  const [advice, setAdvice] = useState('');

  function fetchAdvice() {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        const { advice } = response.data.slip;

        // console.log(response.data.slip);
        setAdvice(advice)
      })
      .catch((error) => {
        setAdvice("Everything happens for good reason.")
        console.log(error);
      });

  }


  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <>
      <div>
      <Grid container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="full-screen-background"

      >

        <Grid item xs={12} sm={6} md={8} style={{ justifyContent: 'center', alignItems: 'center', marginTop: "13rem" ,marginLeft:"1rem",marginRight:"1rem"}}>


          <Card style={{ borderRadius: '0.5rem' }}>
            <CardContent>
              <h3>{advice}</h3>
            </CardContent>
          </Card>

          <center>
            <Button onClick={fetchAdvice} style={{
              marginTop: '1rem',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '0.9rem',
              color: 'black',
              
              backgroundColor: 'white',  // Set your default background color
              transition: 'background-color 0.50s ease',  // Add a smooth transition effect
              ':hover': {
                transform: 'translateX(-2rem)',  // Move the button 10 pixels to the left on hover
                backgroundColor: 'red',  // Set the background color for the hover state
              },
            }}>
              GIVE ME ADVICE!
            </Button>
   
           
          </center>


        </Grid>

      </Grid>
    
      <center>
      <footer style={{ color: "white", backgroundColor: "black",textAlign:"center",marginTop:'13rem',fontFamily:"-moz-initial"}}>
         &copy; 2024 Priya. All rights reserved.<br></br>
         <hr></hr>
         *What is the goal of the app?
         The goal of  app is to inspire and uplift users by providing a daily dose of motivational quotes.<br></br>
         <hr></hr> 
      </footer>
      </center>


      </div> 
    </>
  );
}

export default App;
