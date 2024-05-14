import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Card.css'
import { useSelector } from 'react-redux';

const MyCard = function ({
    companyName,
    jdLink,
    jdUid,
    jobRole,
    location,
    logoUrl,
    minExp,
    maxJdSalary,
    jobDetails
}) {


    


    return (
        <div>
            <Card  className='MyCard' sx={{ maxWidth: 345,borderRadius:'20px', boxShadow:'2px 2px ' }}>
            <div className='flex-container'>

                <img src={logoUrl} width='50px' height='50px' />

                <div className='right-items'>
                    <h4>{companyName}</h4>
                    <h3>{jobRole.charAt(0).toUpperCase()+jobRole.substring(1)} Engineer</h3>
                    <p>{location}</p>
                </div>



            </div>
            <CardContent>
                <h2>Estimated Salary : {maxJdSalary}USD</h2>
                <div className='about-company'>
                    <Typography variant="body2" color="text.secondary">
                        {jobDetails}
                    </Typography>
                </div>
            </CardContent>
            <CardActions className='card-btn'>
                <Button className='btn' style={{backgroundColor:'rgb(144,230,144'}} variant="contained">Apply</Button>
            </CardActions>
        </Card>
        </div>
    );
}

export default MyCard