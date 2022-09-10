import React from 'react'

const About = () => {
  return (
    <Box py={3} bgcolor="white">
    <Box mx={5}>
      <Grid container alignItems='center' spacing={2}>
          <Grid item xs={2}>
          <Link to='/'> <Box fontSize={"2rem"} fontStyle='italic' color='#1976d2'>333 Cars</Box> </Link>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={6}>
            <Grid container spacing={20}>
              <Grid item xd={3}>
                <Link to='/'>Home</Link>
              </Grid>
              <Grid item xd={3}>
                <Link to='/cars'>Cars</Link>
              </Grid>
              <Grid item xd={3}>
                <Link to='/contact'>Contact</Link>
              </Grid>
              <Grid item xd={3}>
                <Link to='/about'>About</Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={2}>
            <Link to='/cars'><Button variant="contained"> Find Your Car</Button></Link> 
          </Grid>
      </Grid>
    </Box>
</Box>
  )
}

export default About