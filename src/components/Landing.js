import React from 'react';
import { Grid ,makeStyles } from '@material-ui/core';

import UpSite from './UpSite';
import LeftBar from './LeftBar';
import RightBar from './RightBar';

const useStyles= makeStyles((theme)=>({
    
}))

const Landing = () => {

    const classes= useStyles()

    return (
        <div>

            <Grid container>

                <Grid item xs={12} sm={12}>

                    <UpSite />

                    <Grid container >

                        <Grid item xs={12} >
                            <LeftBar />
                        </Grid>

                        {/* <Grid item sm={4}>
                            <RightBar />
                        </Grid> */}


                    </Grid>
                </Grid>

            </Grid>
            
        </div>
    );
};

export default Landing;