import React, { useEffect, useState } from 'react'
import Navbar from '../../components/nav/Navbar'
import MyCard from '../../components/Card/MyCard';
import axios from 'axios'
import './Home.css'


const Home = () => {

    const [portalData,setPortalData] = React.useState([])

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
        "limit": 20,
        "offset": 0
    });
    


    useEffect(()=>{

    async function getData() {

                const data = await axios.post("https://api.weekday.technology/adhoc/getSampleJdJSON",{
                    myHeaders
                },
            body)
    
            console.log(data);
            setPortalData(data?.data?.jdList)
    
            }
    
            
            getData()
        
    },[])

   

    return (
        <>
            <Navbar />
            <div className='grid-container'>
                {portalData?.map((_v)=>{
                    return <MyCard 
                    companyName = {_v.companyName}
                    jdLink = {_v.jdLink}
                    jdUid = {_v.jdUid}
                    jobRole = {_v.jobRole}
                    location = {_v.location}
                    logoUrl = {_v.logoUrl}
                    minExp = {_v.minExp}
                    jobDetails = {_v.jobDetailsFromCompany}
                    maxJdSalary = {_v.maxJdSalary}
                    />
                })}
            </div>
        </>
    )
}

export default Home;