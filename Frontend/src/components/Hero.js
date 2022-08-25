import React from 'react'
import { Box,  Grid  , FormControl, Button , InputAdornment , InputLabel ,OutlinedInput} from '@mui/material';



const Hero = () => {
  return (
    <div className="hero">
      <Box py={3} bgcolor={"whitesmoke"}>
        <Box width="90%" margin="0 auto">
            <Grid container alignItems='center' spacing={2}>
                <Grid item xs={6}>
                  <Box fontSize={"2rem"} fontWeight={"bold"}  display="flex" alignItems={"center"}>
                    <Box fontStyle='italic' color='#1976d2'>333 Cars</Box>
                    <Box  color='#000' pl={2}> YOUR JOURNEY STARTS HERE</Box>
                  </Box>
                  <Box pt={2} width="60%" lineHeight={1.75}>
                  <Box fontStyle='italic' display={"inline"} color='#1976d2'>333 Cars</Box> is a car rental operating under a strict basis which is customer satisfaction and safety. <Box fontStyle='italic' display={"inline"} color='#1976d2'>333 Cars</Box> offers you a wide range of options. The diversity of car models can meet all your needs: holidays, weekends, business trips ...
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <img src="images/1.png" className='w100' alt="Car" />
                </Grid>
            </Grid>
            <FormControl sx={{ m: 1, width: '25ch' }} className='search' variant="outlined">
               <InputLabel htmlFor="outlined-search" >Search</InputLabel>
                <OutlinedInput
                  id="outlined-search"
                  type='search'
                  endAdornment={
                    <InputAdornment className='searchbtn' position="end">
                      <Button variant="contained">Search</Button>
                    </InputAdornment>
                  }
                  label="Search"
               />
            </FormControl>
          </Box>
      </Box>
    </div>
  )
}

export default Hero