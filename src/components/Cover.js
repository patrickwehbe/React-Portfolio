import React from 'react'
import '../components/Cover.css'
import Typography from '@material-ui/core/Typography'
import profile from '../Images/profile.jpeg'
import Grid from '@material-ui/core/Grid'



function Cover() {
    return (
         
        <div className="cover ">
            <Grid container>
                <Grid item xs={2} sm={2}>
                    <img src={profile} alt="Patrick Wehbe"/>
                </Grid>
            <Grid item xs={10} >
            <div className="cover__description ">
                <Typography className="typography"   >
                    Hello, I am <span className="name">Patrick Wehbe</span>, a junior at the American University of Beirut.
                </Typography>
                </div>
                </Grid>
                </Grid>
            </div>
             
            
           
       
        
    )
}

export default Cover
