import React, { useState,useEffect } from 'react';
import Navbar from './components/Navbar';
import {Link} from "react-router-dom";
import Footer from './components/Footer';
function Dashboard(props) {
    const [Data,setData]=useState([]);
    const [filteredData,setFilteredData]=useState(Data);
    //get token
    //curl -X POST -d "grant_type=password&username=<user_email>&password=<user_password>&scope=read" -u"5O1KlpwBb96ANWe27ZQOpbWSF4DZDm4sOytwdzGv:PqV0dHbkjXAtJYhY9UOCgRVi5BzLhiDxGU91kbt5EoayQ5SYOoJBYRYAYlJl2RetUeDMpSvhe9DaQr0HKHan0B9ptVyoLvOqpekiOmEqUJ6HZKuIoma0pvqkkKDU9GPv" http://api.kmhfl.health.go.ke/o/token/

     //get api data
    const getApiData=async()=>{
        try {
            const token="Qmm5CzcQX2OKrzYfRFPVpa6eKKi7DM";
            const url='http://api.kmhfltest.health.go.ke/api/facilities/facilities/?format=json';
            const response=await fetch(url,{
                method:'Get',
                headers:{
                    authorization:`bearer ${token}`,
                }
            }
        )
            const parseRes=await response.json();
            setData(parseRes.results);
            setFilteredData(parseRes.results)
            console.log(parseRes.results)
        } catch (error) {
            console.log("Error: ",error.message)
        }
    }
    useEffect(()=>{
        getApiData();
    },[])
    //onChange function that will filtered the json data
    const handleSearch=(e)=>{
        let value = e.target.value;
        let result = [];
        result = Data.filter;
        result = Data.filter((data) => {
            return data.sub_county_name.search(value) != -1;
        });
        setFilteredData(result);
    }
    //function to show the counties
    const showCounty=()=>{
        const show=document.querySelector('.showCounty');
        show.style.display="block";
    }
    const dontShowCounty=()=>{
        const show=document.querySelector('.showCounty');
        show.style.display="none";
    }
    //show subcounties
    const showSub=()=>{

    }
    return (
    <>
        <Navbar/>
        <div style={{display:"flex",marginTop:"50px"}}>
            <input className="form-control me-2" type="text" onFocus={showCounty} onChange={(e)=>handleSearch(e)} placeholder="Search a facility/CHU" aria-label="Search"/>
            <span class="material-symbols-outlined right"  onClick={dontShowCounty}>close</span>
        </div>
        <div className='showCounty' style={{display:'none'}}>
        <p>sub_county</p>
            {filteredData&&filteredData.map((filtered)=>(
                <div key={filtered.id}>
                    <p>{filtered.sub_county_name}</p>
                </div>
            ))}
        </div>
        <div className='body' style={{marginTop:"20px", marginLeft:"20px"}}>
            
            <div style={{display:"flex"}}><Link to="/" style={{color:'green'}}>Home</Link> <span class="material-symbols-outlined">chevron_right</span> <p>Dashboard</p></div>
        </div>

        <div className='row'>
            <h2 className='col' style={{ marginLeft:"20px"}}>Overview</h2><br/>
            
            <div className='col' style={{marginRight:"50px"}}>
                <p style={{fontWeight:"bolder",float:"right",marginRight:"440px",marginBottom:"-20px"}}>County:</p><br/>
                <form class="d-flex" style={{float:"right",width:"500px", height:"50px"}}>

                    {/* ward select */}
                    <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                    <option style={{fontWeight:"bold"}} selected>Select your county</option><br/>
                        {Data&&Data.map((data)=>(
                            <>
                                <option style={{fontWeight:"bold"}} onClick={showSub} value={data.county}>{data.county}</option>
                            </>
                        ))}
                    </select>
                    {/* constituency select */}
                    <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                    <option style={{fontWeight:"bold"}} selected>Select your county</option><br/>
                        {Data&&Data.map((data)=>(
                            <>
                                <option style={{fontWeight:"bold"}} onClick={showSub} value={data.county}>{data.county}</option>
                            </>
                        ))}
                    </select>

                    {/* subcounty select */}
                    <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                    <option style={{fontWeight:"bold"}} selected>Select your county</option><br/>
                        {Data&&Data.map((data)=>(
                            <>
                                <option style={{fontWeight:"bold"}} onClick={showSub} value={data.county}>{data.county}</option>
                            </>
                        ))}
                    </select>

                    {/* county select */}
                    <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                    <option style={{fontWeight:"bold"}} selected>Select your county</option><br/>
                        {Data&&Data.map((data)=>(
                            <>
                                <option style={{fontWeight:"bold"}} onClick={showSub} value={data.county}>{data.county}</option>
                            </>
                        ))}
                    </select>
                </form>
            </div>
        </div>
        {/* table */}
        <div class="container" style={{marginTop:"50px"}}>
            <div class="row">
                {/* col1 */}
                <div class="col card" style={{minHeight:'18rem',marginRight:"20px"}}>
                <div class="card-header" style={{fontSize:'18px',fontWeight:"bolder",color:'rgb(79, 30, 107)',background:'white'}}>
                    FACILITY OWNERS
                </div>
                <p>Download</p>
                <div style={{display:"flex"}}>
                    <div><p>METRIC</p></div>
                    <div style={{marginLeft:"200px"}}><p>VALUE</p></div>
                </div>
                <hr className="dropdown-divider" style={{marginTop:"-15px"}}/>
                 <div style={{display:"flex"}}>
                    <div>
                        <ul style={{decoration:'none'}}>
                            <li>Total Facilities</li>
                            <li>Total approved facilities</li>
                            <li>Total rejected facilities</li>
                            <li>Total closed facilities</li>
                            <li>Total pending updates</li>
                        </ul>
                        </div>
                        <div>
                        <ul style={{decoration:'none'}}>
                            <li>Total Facilities</li>
                            <li>Total approved facilities</li>
                            <li>Total rejected facilities</li>
                            <li>Total closed facilities</li>
                            <li>Total pending updates</li>
                        </ul>
                    </div>
                 </div>
                </div><br/>

                {/* col2 */}
                <div class="col card" style={{minHeight:'18rem',marginRight:"20px"}}>
                <div class="card-header" style={{fontSize:'18px',fontWeight:"bolder",color:'rgb(79, 30, 107)',background:'white'}}>
                    FACILITY TYPES
                </div>
                <p>Download</p>
                <div style={{display:"flex"}}>
                    <div><p>METRIC</p></div>
                    <div style={{marginLeft:"200px"}}><p>VALUE</p></div>
                </div>
                <hr className="dropdown-divider" style={{marginTop:"-15px"}}/>
                <div style={{display:"flex"}}>
                    <div>
                        <ul style={{decoration:'none'}}>
                            <li>Total Facilities</li>
                            <li>Total approved facilities</li>
                            <li>Total rejected facilities</li>
                            <li>Total closed facilities</li>
                            <li>Total pending updates</li>
                        </ul>
                        </div>
                        <div>
                        <ul style={{decoration:'none'}}>
                            <li>Total Facilities</li>
                            <li>Total approved facilities</li>
                            <li>Total rejected facilities</li>
                            <li>Total closed facilities</li>
                            <li>Total pending updates</li>
                        </ul>
                    </div>
                 </div>
                </div>

                {/* col3 */}
                <div class="col card" style={{minHeight:'18rem'}}>
               <div class="card-header" style={{fontSize:'18px',fontWeight:"bolder",color:'rgb(79, 30, 107)',background:'white'}}>
                    FACLITIES SUMMARY
                </div>
                <p>Download</p>
                <div style={{display:"flex",}}><div style={{borderBottom:"solid 2px #000"}}></div>
                    <div><p>METRIC</p></div>
                    <div style={{marginLeft:"200px"}}><p>VALUE</p></div>
                </div>
                <hr className="dropdown-divider" style={{marginTop:"-15px"}}/>
                <div style={{display:"flex"}}>
                    <div>
                        <ul style={{decoration:'none'}}>
                            <li>Total Facilities</li>
                            <li>Total approved facilities</li>
                            <li>Total rejected facilities</li>
                            <li>Total closed facilities</li>
                            <li>Total pending updates</li>
                        </ul>
                        </div>
                        <div>
                        <ul style={{decoration:'none'}}>
                            <li>Total Facilities</li>
                            <li>Total approved facilities</li>
                            <li>Total rejected facilities</li>
                            <li>Total closed facilities</li>
                            <li>Total pending updates</li>
                        </ul>
                    </div>
                 </div>
                </div>
            </div>
        </div>

        {/* table2 */}
        <div class="container" style={{marginTop:"50px"}}>
            <div class="row">
                {/* col1 */}
                <div class="col card" style={{minHeight:'18rem',marginRight:"20px"}}>
                <div class="card-header" style={{fontSize:'18px',fontWeight:"bolder",color:'rgb(79, 30, 107)',background:'white'}}>
                    FACILITY OWNERS
                </div>
                <p>Download</p>
                <div style={{display:"flex"}}>
                    <div><p>METRIC</p></div>
                    <div style={{marginLeft:"200px"}}><p>VALUE</p></div>
                </div>
                <hr className="dropdown-divider" style={{marginTop:"-15px"}}/>
                <div style={{display:"flex"}}>
                    <div>
                        <ul style={{decoration:'none'}}>
                            <li>Total Facilities</li>
                            <li>Total approved facilities</li>
                            <li>Total rejected facilities</li>
                            <li>Total closed facilities</li>
                            <li>Total pending updates</li>
                        </ul>
                        </div>
                        <div>
                        <ul style={{decoration:'none'}}>
                            <li>Total Facilities</li>
                            <li>Total approved facilities</li>
                            <li>Total rejected facilities</li>
                            <li>Total closed facilities</li>
                            <li>Total pending updates</li>
                        </ul>
                    </div>
                 </div>
                </div>

                {/* col2 */}
                <div class="col card" style={{minHeight:'18rem',marginRight:"20px"}}>
                <div class="card-header" style={{fontSize:'18px',fontWeight:"bolder",color:'rgb(79, 30, 107)',background:'white'}}>
                    FACILITY TYPES
                </div>
                <p>Download</p>
                <div style={{display:"flex"}}>
                    <div><p>METRIC</p></div>
                    <div style={{marginLeft:"200px"}}><p>VALUE</p></div>
                </div>
                <hr className="dropdown-divider" style={{marginTop:"-15px"}}/>
                <div style={{display:"flex"}}>
                    <div>
                        <ul style={{listStyle:'none'}}>
                            <li>Total Facilities</li>
                            <li>Total approved facilities</li>
                            <li>Total rejected facilities</li>
                            <li>Total closed facilities</li>
                            <li>Total pending updates</li>
                        </ul>
                        </div>
                        <div>
                        <ul style={{listStyle:'none'}}>
                            <li>Total Facilities</li>
                            <li>Total approved facilities</li>
                            <li>Total rejected facilities</li>
                            <li>Total closed facilities</li>
                            <li>Total pending updates</li>
                        </ul>
                    </div>
                 </div>
                </div>

                {/* col3 */}
                <div class="col card" style={{minHeight:'18rem'}}>
               <div class="card-header" style={{fontSize:'18px',fontWeight:"bolder",color:'rgb(79, 30, 107)',background:'white'}}>
                    FACLITIES SUMMARY
                </div>
                <p>Download</p>
                <div style={{display:"flex",}}><div style={{borderBottom:"solid 2px #000"}}></div>
                    <div><p>METRIC</p></div>
                    <div style={{marginLeft:"200px"}}><p>VALUE</p></div>
                </div>
                <hr className="dropdown-divider" style={{marginTop:"-15px"}}/>
                <div style={{display:"flex"}}>
                    <div>
                        <ul style={{listStyle:'none'}}>
                            <li>Total Facilities</li>
                            <li>Total approved facilities</li>
                            <li>Total rejected facilities</li>
                            <li>Total closed facilities</li>
                            <li>Total pending updates</li>
                        </ul>
                        </div>
                        <div>
                        <ul style={{listStyle:'none'}}>
                            <li>Total Facilities</li>
                            <li>Total approved facilities</li>
                            <li>Total rejected facilities</li>
                            <li>Total closed facilities</li>
                            <li>Total pending updates</li>
                        </ul>
                    </div>
                 </div>
                </div>
            </div>
        </div>

        {/* row3 */}
        <div class="container" style={{marginTop:"50px"}}>
            <div class="row">
                <div className='card' style={{background:"#f2f2f2"}}>
                    <div class="card-header" style={{fontSize:'18px',fontWeight:"bolder",color:'rgb(79, 30, 107)',background:'#f2f2f2'}}>
                        FACLITIES & CHUS BY COUNTY
                    </div><br/>
                    <div className='card' style={{height:'18rem',marginBottom:'20px'}}>
                        
                    </div>
                </div>
            </div>
        </div>    
                    
        {/* row4 */}
        <div class="container" style={{marginTop:"50px"}}>
            <div class="row">
                {/* col1 */}
                <div class="col card" style={{background:"#f2f2f2",marginRight:"20px"}}>
                <div class="card-header" style={{fontSize:'18px',fontWeight:"bolder",color:'rgb(79, 30, 107)',background:'#f2f2f2'}}>
                    FACILITY OWNERS
                </div><br/>
                    <div className='card' style={{height:'18rem',marginBottom:'20px'}}>
                        
                        
                    </div>
                </div>

                {/* col2 */}
                <div class="col card" style={{background:'#f2f2f2',marginRight:"20px"}}>
                <div class="card-header" style={{fontSize:'18px',fontWeight:"bolder",color:'rgb(79, 30, 107)',background:'#f2f2f2'}}>
                    FACILITY TYPES
                </div><br/>
                    <div className='card' style={{height:'18rem',marginBottom:'20px'}}>
                        
                        
                    </div>
                </div>
            </div>
        </div>
       <Footer/>
    </>
    );
}

export default Dashboard;