import React, { useState,useEffect } from 'react';
import Navbar from './components/Navbar';
import {Link} from "react-router-dom";
function Dashboard(props) {
    const [Data,setData]=useState('');
    //get token
    //curl -X POST -d "grant_type=password&username=<user_email>&password=<user_password>&scope=read" -u"5O1KlpwBb96ANWe27ZQOpbWSF4DZDm4sOytwdzGv:PqV0dHbkjXAtJYhY9UOCgRVi5BzLhiDxGU91kbt5EoayQ5SYOoJBYRYAYlJl2RetUeDMpSvhe9DaQr0HKHan0B9ptVyoLvOqpekiOmEqUJ6HZKuIoma0pvqkkKDU9GPv" http://api.kmhfl.health.go.ke/o/token/

    // const getToken=async()=>{
    //     const token='';
    //     try{
    //         const url="";
    //         fetch(url,{
    //             method:"POST",

    //         },
    //         headers:{
    //             "authorization":`Bearer ${token}`
    //         }
    //         )
    //     } catch (err){
    //         console.log(err.message);
    //     }
    // }
     //get api data
    const getApiData=async()=>{
        try {
            const url1='http://api.kmhfltest.health.go.ke/api/facilities/facilities/?format=json';
            const url="http://localhost:5000/county";
            const response=await fetch(url,{
                method:'Get'
            }
        )
            const parseRes=await response.json();
            setData(parseRes);
        } catch (error) {
            console.log("Error: ",error.message)
        }
    }
    useEffect(()=>{
        getApiData();
    },[])
    return (
    <>
        <Navbar/>
        <div className='body' style={{marginTop:"20px", marginLeft:"20px"}}>
            
            <div style={{display:"flex"}}><Link to="/" style={{color:'green'}}>Home</Link> <span class="material-symbols-outlined">chevron_right</span> <p>Dashboard</p></div>
        </div>

        <div style={{display:'flex'}}>
            <h2 style={{ marginLeft:"20px"}}>Overview</h2>
            <div style={{display:"inline-block",flexGrow:"1",marginRight:"10px"}}>
            <form class="d-flex" style={{float:"right",width:"500px", height:"50px"}}>
                <p style={{fontWeight:"large",marginTop:"10px",marginLeft:"10px"}}>County:</p><br/>

                <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        County
                    </a>
                    <ul class="dropdown-menu">
                    {Data&&Data.map((data)=>(
                        <div key={data.key}>
                            <li>
                            <a class="dropdown-item" href="#">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {data.name}
                                </a>
                                <ul class="dropdown-menu">
                                <a class="dropdown-item" href="#">hy</a>
                                </ul>
                            </a>
                            </li>
                        </div>
                    ))}
                    </ul>
                    </li>
                </ul>
               

            </form>
        </div>
    </div>
        {/* table */}
        <div class="container" style={{marginTop:"50px"}}>
            <div class="row">
                <div class="col card" style={{height:'18rem'}}>
                <div class="card-header" style={{color:'rgb(79, 30, 107)'}}>
                    FACILITY OWNERS
                </div>
                <p>Download</p>
                <div style={{display:"flex"}}>
                    <div><p>METRIC</p></div>
                    <div style={{marginLeft:"200px"}}><p>VALUE</p></div>
                </div>
                <hr className="dropdown-divider"/>

                </div>
                <div class="col card" style={{height:'18rem'}}>
                <div class="card-header" style={{color:'rgb(79, 30, 107)'}}>
                    FACILITY TYPES
                </div>
                <p>Download</p>
                <div style={{display:"flex"}}>
                    <div><p>METRIC</p></div>
                    <div style={{marginLeft:"200px"}}><p>VALUE</p></div>
                </div>

                </div>
                <div class="col card" style={{height:'18rem'}}>
               <div class="card-header" style={{color:'rgb(79, 30, 107)'}}>
                    FACLITIES SUMMARY
                </div>
                <p>Download</p>
                <div style={{display:"flex",}}><div style={{borderBottom:"solid 2px #000"}}></div>
                    <div><p>METRIC</p></div>
                    <div style={{marginLeft:"200px"}}><p>VALUE</p></div>
                </div>

                </div>
            </div>
        </div>
       
    </>
    );
}

export default Dashboard;