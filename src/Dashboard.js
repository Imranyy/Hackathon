import React, { useState,useEffect } from 'react';
import Navbar from './components/Navbar';
import {Link} from "react-router-dom";
import Footer from './components/Footer';
import BarChart from './components/BarChart';
function Dashboard(props) {
    const [Data,setData]=useState([]);
    const [filteredData,setFilteredData]=useState(Data);
    // dashboard
    const [facilitySummary,setFacilitySummary]=useState([]);
    const [facilityOwner,setFacilityOwner]=useState([]);
    const [facilityType,setFacilityType]=useState([]);
    const [communityUnitsSummary,setCommunityUnitsSummary]=useState([]);
    const [recentChanges,setRecentChanges]=useState([]);
    const [facilityKephlevel,setFacilityKephLevel]=useState([]);
    const [filteredDropData,setFilteredDropData]=useState([]);
    const [searchFacilty,setSearchFacility]=useState('');
    const [searchBtn,setSearchBtn]=useState(
        <>
            <button className="btn btn-success" type="submit"><span class="material-symbols-outlined right" style={{color:"white"}}>search</span></button>
        </>
    );
    
    //get token
    //curl -X POST -d "grant_type=password&username=test@testmail.com&password=Test@1234&scope=read" -u"5O1KlpwBb96ANWe27ZQOpbWSF4DZDm4sOytwdzGv:PqV0dHbkjXAtJYhY9UOCgRVi5BzLhiDxGU91kbt5EoayQ5SYOoJBYRYAYlJl2RetUeDMpSvhe9DaQr0HKHan0B9ptVyoLvOqpekiOmEqUJ6HZKuIoma0pvqkkKDU9GPv" https://api.kmhfltest.health.go.ke/o/token/
     //get api data
    const getApiData=async()=>{
        try {
            const token=sessionStorage.getItem('token');
            const url='http://api.kmhfltest.health.go.ke/api/facilities/facilities/?format=json&page_size=300';
            const url3="http://api.kmhfltest.health.go.ke/api/facilities/facilities/536b8721-d814-431d-964f-01765e60028c/?format=json";
            const url2='https://api.kmhfltest.health.go.ke/api/facilities/facilities/?fields=id,code,official_name,facility_type_name,owner_name,county,sub_county,constituency_name,ward_name,updated,operation_status_name,sub_county_name,name,is_complete,in_complete_details,approved_national_level,has_edits,approved,rejected,keph_level&format=json&is_approved=true';
            const url1='https://api.kmhfltest.health.go.ke/api/common/filtering_summaries/?fields=county,facility_type,constituency,ward,operation_status,service_category,owner_type,owner,service,keph_level,sub_county&format=json';
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

    //filter dashboard data according to user drop down choose
     function getDashboardData(a){
            let value=a;
            let r=[];
            if(value==Data.county){
                r=Data.filter;
                r=Data.filter((d)=>{
                    return d.county.search(value)!==-1;
                })
                setFilteredData(r);
                setFacilityOwner(r);
                setFacilitySummary(r);
                setFacilityType(r);
                setCommunityUnitsSummary(r);
                setRecentChanges(r);
                setFacilityKephLevel(r);
            }else if(value==Data.sub_county_name){
                r=Data.filter;
                r=Data.filter((d)=>{
                    return d.sub_county_name.search(value)!==-1;
                })
                setFilteredData(r);
                setFacilityOwner(r);
                setFacilitySummary(r);
                setFacilityType(r);
                setCommunityUnitsSummary(r);
                setRecentChanges(r);
                setFacilityKephLevel(r);
            }else if(value==Data.constituency_name){
                r=Data.filter;
                r=Data.filter((d)=>{
                    return d.constituency_name.search(value)!==-1;
                })
                setFilteredData(r);
                setFacilityOwner(r);
                setFacilitySummary(r);
                setFacilityType(r);
                setCommunityUnitsSummary(r);
                setRecentChanges(r);
                setFacilityKephLevel(r);
            }else if(value==Data.ward_name){
                r=Data.filter;
                r=Data.filter((d)=>{
                    return d.ward_name.search(value)!==-1;
                })
               setFilteredData(r);
                setFacilityOwner(r);
                setFacilitySummary(r);
                setFacilityType(r);
                setCommunityUnitsSummary(r);
                setRecentChanges(r);
                setFacilityKephLevel(r);
            }
     }        
    //onChange function that will filtered the json data
    function handleSearch(){
        setSearchBtn(
            <>
                <button className="btn btn-info"><span class="material-symbols-outlined right" style={{color:"white"}}  onClick={dontShowCounty}>close</span></button>
            </>
        )
        showCounty();
        console.log(searchFacilty)
        let value = searchFacilty;
        let result = [];
        result = Data.filter;
        result = Data.filter((data) => {
        return data.county.search(value) !== -1; //filtered the county data
        });
        console.log(value)
        setFilteredDropData(result);
        // if(value==Data.county){
        //     }else if(value==Data.sub_county_name){
        //         result = Data.filter;
        //         result = Data.filter((data) => {
        //         return data.sub_county_name.search(value) !== -1; //filtered the county data
        //         });
        //         setFilteredDropData(result);
        //     }else if(value==Data.constituency_name){
        //         result = Data.filter;
        //         result = Data.filter((data) => {
        //         return data.constituency_name.search(value) !== -1; //filtered the county data
        //         });
        //         setFilteredDropData(result);
        //     }else if(value==Data.ward_name){
        //         result = Data.filter;
        //         result = Data.filter((data) => {
        //         return data.ward_name.search(value) !== -1; //filtered the county data
        //         });
        //         setFilteredDropData(result);
        //     }else if(value==Data.facility_type_name){
        //         result = Data.filter;
        //         result = Data.filter((data) => {
        //         return data.facility_type_name.search(value) !== -1; //filtered the county data
        //         });
        //         setFilteredDropData(result);
        //     }      
       
    }
    
    //onChange function that will filtered the subcounty data
    const handleSubCountyData=(e)=>{
        dontShowCountySelect();
        showSubCountySelect();
        let value = e.target.value;
        getDashboardData(value);
        localStorage.setItem('County',value);
        let result = [];
        result = Data.filter;
        result = Data.filter((data) => {
         return data.county.search(value) !==-1; //filtered the county data
        });

        setFilteredData(result);
        setFacilityOwner(result);
        setFacilitySummary(result);
        setFacilityType(result);
        setCommunityUnitsSummary(result);
        setRecentChanges(result);
        setFacilityKephLevel(result);
    }
    //onChange function that will filtered the constituency data
    const handleConstituencyData=(e)=>{
        showConstituencySelect();
        dontShowSubCountySelect();
        let value = e.target.value;
        getDashboardData(value);
        localStorage.setItem('Subcounty',value);
        let result = [];
        result = Data.filter;
        result = Data.filter((data) => {
            return  data.sub_county_name.search(value) !== -1;//filtered the constituency data
        });
        setFilteredData(result);
        setFacilityOwner(result);
        setFacilitySummary(result);
        setFacilityType(result);
        setCommunityUnitsSummary(result);
        setRecentChanges(result);
        setFacilityKephLevel(result);
    }
    //onChange function that will filtered the ward data
    const handleWardData=(e)=>{
        showWardSelect();
        dontShowConstituencySelect();
        let value = e.target.value;
        getDashboardData(value);
        localStorage.setItem("Constituency",value);
        let result = [];
        result = Data.filter;
        result = Data.filter((data) => {
        return  data.constituency_name.search(value) !== -1;//filtered the constituency data
        });
        setFilteredData(result);
        setFacilityOwner(result);
        setFacilitySummary(result);
        setFacilityType(result);
        setCommunityUnitsSummary(result);
        setRecentChanges(result);
        setFacilityKephLevel(result);
    }
    // //onChange function that will filtered the county data
    const handleStoreWard=(e)=>{
        const value = e.target.value;
        getDashboardData(value);
        dontShowWardSelect();
        localStorage.setItem("Ward",value);
        getDashboardData(value);
        let result = [];
        result = Data.filter;
        result = Data.filter((data) => {
        return  data.ward_name.search(value) !== -1;//filtered the constituency data
        });
        setFacilityOwner(result);
        setFacilitySummary(result);
        setFacilityType(result);
        setCommunityUnitsSummary(result);
        setRecentChanges(result);
        setFacilityKephLevel(result);
        change();
    }
   const change=()=>{
    const startChange=document.querySelector('.start');
    startChange.style.display="block";
    dontShowCountySelect()
   }
   const start=()=>{
    const startChange=document.querySelector('.start');
    startChange.style.display="none";
    showCountySelect();
   }
   
    //function to show the counties
    const showCounty=()=>{
        const show=document.querySelector('.showCounty');
        show.style.display="block";
    }
    const dontShowCounty=()=>{
        const show=document.querySelector('.showCounty');
        show.style.display="none";
        setSearchBtn(
        <>
            <button className="btn btn-success"><span class="material-symbols-outlined right" style={{color:"white"}}  onClick={handleSearch}>search</span></button>
        </>
        )
    }
    //function to show the subcounties select
    const showCountySelect=()=>{
        const show=document.querySelector('.county');
        show.style.display="block";
    }
    const dontShowCountySelect=()=>{
        const show=document.querySelector('.county');
        show.style.display="none";
    }
    const showSubCountySelect=()=>{
        localStorage.clear();
        const show=document.querySelector('.subcounty');
        show.style.display="block";
    }
    const dontShowSubCountySelect=()=>{
        const show=document.querySelector('.subcounty');
        show.style.display="none";
    }
    //function to show the constituieny select
    const showConstituencySelect=()=>{
        const show=document.querySelector('.constituency');
        show.style.display="block";
    }
    const dontShowConstituencySelect=()=>{
        const show=document.querySelector('.constituency');
        show.style.display="none";
    }
    //function to show the ward select
    const showWardSelect=()=>{
        const show=document.querySelector('.ward');
        show.style.display="block";
    }
    function dontShowWardSelect(){
        const show=document.querySelector('.ward');
        show.style.display="none";
    }
    
    return (
    <>
        <Navbar/>
        <div className='container' style={{display:"flex",marginTop:"20px"}}>
            <form onSubmit={handleSearch}>
            <input className="form-control me-2" type="text" onChange={(e)=>setSearchFacility(e.target.value)} placeholder="Search a facility/CHU" aria-label="Search"/>
            {searchBtn}
            </form>
        </div>
        <div className='showCounty container card' style={{display:'none', marginTop:"20px", border:'solid 1px gray',height:"280px",overflow:'scroll'}}>
                <div style={{color:"rgb(79, 30, 107)",fontWeight:"normal",display:"flex",marginLeft:"20px"}}>
                    <p>{localStorage.getItem('County')} County</p><span class="material-symbols-outlined">chevron_right</span> 
                    <p style={{marginLeft:"5px"}}>{localStorage.getItem('Subcounty')} Sub-county</p> <span class="material-symbols-outlined">chevron_right</span> 
                    <p style={{marginLeft:"5px"}}>{localStorage.getItem('Constituency')} Constituency</p><span class="material-symbols-outlined">chevron_right</span> 
                    <p style={{marginLeft:"5px"}}>{localStorage.getItem('Ward')} Ward</p>
                </div>
            {filteredDropData?filteredDropData.map((filtered)=>(
                <div key={filtered.id} >
                    <hr/>
                    <div style={{display:"flex"}}><span class="material-symbols-outlined">chevron_right</span>County</div>
                    <div style={{display:"flex",marginLeft:"50px"}}> <span class="material-symbols-outlined">expand_more</span>{filtered.county} </div>
                    <div style={{display:"flex"}}><span class="material-symbols-outlined">chevron_right</span>Sub-county</div>
                    <div style={{display:"flex",marginLeft:"50px"}}> <span class="material-symbols-outlined">expand_more</span>{filtered.sub_county_name} </div>
                    <div style={{display:"flex"}}><span class="material-symbols-outlined">chevron_right</span>Constituency</div>
                    <div style={{display:"flex",marginLeft:"50px"}}> <span class="material-symbols-outlined">expand_more</span>{filtered.constituency_name} </div>
                    <div style={{display:"flex"}}><span class="material-symbols-outlined">chevron_right</span>Facility Type</div>
                    <div key={filtered.id} style={{display:"flex",marginLeft:"50px"}}> <span class="material-symbols-outlined">expand_more</span>{filtered.facility_type_name} </div>
                </div>
            )):(<p style={{color:"red"}}>Record doesn't exist!</p>)
            }
        </div>
        <div className='body' style={{marginTop:"20px", marginLeft:"20px"}}>
            
            <div style={{display:"flex"}}><Link to="/" style={{color:'green'}}>Home</Link> <span class="material-symbols-outlined">chevron_right</span> <p>Dashboard</p></div>
        </div>

        <div className='row'>
            <div className='col'>
                <h2 style={{ marginLeft:"20px",}}>Overview</h2>
               <div style={{color:"rgb(79, 30, 107)",fontWeight:"normal",display:"flex",marginLeft:"20px",}}>
                    <p>{localStorage.getItem('County')} County</p><span class="material-symbols-outlined">chevron_right</span> 
                    <p style={{marginLeft:"5px"}}>{localStorage.getItem('Subcounty')} Sub-county</p> <span class="material-symbols-outlined">chevron_right</span> 
                    <p style={{marginLeft:"5px"}}>{localStorage.getItem('Constituency')} Constituency</p><span class="material-symbols-outlined">chevron_right</span> 
                    <p style={{marginLeft:"5px"}}>{localStorage.getItem('ward')} Ward</p>
               </div>
            </div>
            
            <div className='col-md-auto' style={{marginRight:"50px"}}>
                <p style={{fontWeight:"bolder",display:'flex',float:"right",marginRight:"390px",marginBottom:"-20px"}}>County:  <a href="#" style={{display:'none'}} className="start" onClick={start}>Change</a></p><br/>
                <form class="d-flex" style={{float:"right",width:"450px", height:"50px"}}>
                    {/* ward select */}
                    <select class="form-select form-select-sm ward" style={{display:"none"}} onChange={handleStoreWard} aria-label=".form-select-sm example">
                    <option style={{fontWeight:"bold"}} selected>Select ward</option><br/>
                        {filteredData&&filteredData.map((data)=>(
                            <>
                                <option style={{fontWeight:"bold"}} defaultValue={data.ward_name}>{data.ward_name}</option>
                            </>
                        ))}
                    </select>
                    {/* constituency select */}
                    <select class="form-select form-select-sm constituency" style={{display:"none"}} onChange={e=>handleWardData(e)} aria-label=".form-select-sm example">
                    <option style={{fontWeight:"bold"}} selected>Select constituency</option><br/>
                        {filteredData&&filteredData.map((data)=>(
                            <>
                                <option style={{fontWeight:"bold"}}  value={data.constituency_name}>{data.constituency_name}</option>
                            </>
                        ))}
                    </select>
                    {/* subcounty select */}
                    <select class="form-select form-select-sm subcounty" style={{display:"none"}}  onChange={e=>handleConstituencyData(e)}  aria-label=".form-select-sm example">
                    <option style={{fontWeight:"bold"}} selected>Select sub-county</option><br/>
                        {filteredData&&filteredData.map((filterdata)=>(
                            <>
                                <option style={{fontWeight:"bold"}} value={filterdata.sub_county_name}>{filterdata.sub_county_name}</option>
                            </>
                        ))}
                    </select>
                    {/* county select */}
                    <select class="form-select form-select-sm county"  onChange={e=>handleSubCountyData(e)}   aria-label=".form-select-sm example">
                    <option style={{fontWeight:"bold"}} selected>Select county</option><br/>
                        {Data&&Data.map((data)=>(
                            <>
                                <option style={{fontWeight:"bold"}}  value={data.county}>{data.county}</option>
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
                    <div><p style={{fontWeight:"bold"}}>METRIC</p></div>
                    <div style={{marginLeft:"200px"}}><p style={{fontWeight:"bold"}}>VALUE</p></div>
                </div>
                <hr className="dropdown-divider" style={{marginTop:"-15px"}}/>
                 {facilityOwner&&facilityOwner.map((data)=>(
                    <div key={data.id} style={{display:"flex", fontWeight:"bold"}}>
                    <div>
                        <ul style={{decoration:'none',marginLeft:"-30px"}}>
                            <li><div style={{display:'flex'}}>Private Practice    <div style={{marginLeft:"150px"}}>{data.value1}</div></div> </li>
                            <li><div style={{display:"flex"}}>Non-Governmental Organizations  <div style={{marginLeft:"10px"}}>{data.value2}</div></div></li>
                            <li><div style={{display:"flex"}}>Ministry of Health  <div style={{marginLeft:"140px"}}>{data.value3}</div></div></li>
                            <li><div style={{display:"flex"}}>Faith Based Organization <div style={{marginLeft:"80px"}}>{data.value4}</div></div></li>
                        </ul>
                        </div>
                 </div>
                 ))}
                </div><br/>

                {/* col2 */}
                <div class="col card" style={{minHeight:'18rem',marginRight:"20px"}}>
                <div class="card-header" style={{fontSize:'18px',fontWeight:"bolder",color:'rgb(79, 30, 107)',background:'white'}}>
                    FACILITY TYPES
                </div>
                <p>Download</p>
                <div style={{display:"flex"}}>
                    <div><p style={{fontWeight:"bold"}}>METRIC</p></div>
                    <div style={{marginLeft:"200px"}}><p style={{fontWeight:"bold"}}>VALUE</p></div>
                </div>
                <hr className="dropdown-divider" style={{marginTop:"-15px"}}/>
                <div style={{display:"flex",fontWeight:"bold"}}>
                    <div>
                        <ul style={{decoration:'none',marginLeft:"-30px"}}>
                            <li>MEDICAL CLINIC</li>
                            <li>DISPENSARY</li>
                            <li>HOSPITALS</li>
                            <li>MEDICAL CENTRE</li>
                            <li>HEALTH CENTRE</li>
                            <li>NURSING HOME</li>
                            <li>STAND ALONE</li>
                        </ul>
                        </div>
                        <div>
                        <ul style={{decoration:'none',marginLeft:"70px"}}>
                        {facilityType&&facilityType.map((data)=>(
                                <div key={data.id}>
                                    <li>{data.value5}</li>
                                    <li>{data.value1}</li>
                                    <li>{data.value2}</li>
                                    <li>{data.value4}</li>
                                    <li>{data.value1}</li>
                                    <li>{data.value2}</li>
                                    <li>{data.value3}</li>
                                </div>
                            ))}
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
                    <div><p style={{fontWeight:"bold"}}>METRIC</p></div>
                    <div style={{marginLeft:"200px"}}><p style={{fontWeight:"bold"}}>VALUE</p></div>
                </div>
                <hr className="dropdown-divider" style={{marginTop:"-15px"}}/>
                <div style={{display:"flex",fontWeight:"bold"}}>
                    <div>
                        <ul style={{decoration:'none',marginLeft:"-30px"}}>
                            <li>Total Facilities</li>
                            <li>Total approved facilities</li>
                            <li>Total rejected facilities</li>
                            <li>Total closed facilities</li>
                            <li>Total pending updates</li>
                        </ul>
                        </div>
                        <div>
                        <ul style={{decoration:'none',marginLeft:"30px"}}>
                        {facilitySummary&&facilitySummary.map((data)=>(
                                <div key={data.id}>
                                    <li>{data.value5}</li>
                                    <li>{data.value3}</li>
                                    <li>{data.value4}</li>
                                    <li>{data.value3}</li>
                                    <li>{data.value1}</li>
                                </div>
                            ))}
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
                COMMUNITY UNITS SUMMARY
                </div>
                <p>Download</p>
                <div style={{display:"flex"}}>
                    <div><p style={{fontWeight:"bold"}}>METRIC</p></div>
                    <div style={{marginLeft:"200px"}}><p style={{fontWeight:"bold"}}>VALUE</p></div>
                </div>
                <hr className="dropdown-divider" style={{marginTop:"-15px"}}/>
                <div style={{display:"flex",fontWeight:'bold'}}>
                    <div>
                        <ul style={{decoration:'none',marginLeft:"-30px"}}>
                            <li>Total community health units</li>
                            <li>Total CHUs rejected</li>
                            <li>New CHUs pending approval</li>
                            <li>Updated CHUs pending approval</li>
                        </ul>
                        </div>
                        <div>
                        <ul style={{decoration:'none',marginRight:"30px"}}>
                            {communityUnitsSummary&&communityUnitsSummary.map((data)=>(
                                <div key={data.id}>
                                    <li>{data.value5}</li>
                                    <li>{data.value2}</li>
                                    <li>{data.value2}</li>
                                    <li>{data.value3}</li>
                                </div>
                            ))}
                        </ul>
                    </div>
                 </div>
                </div>

                {/* col2 */}
                <div class="col card" style={{minHeight:'18rem',marginRight:"20px"}}>
                <div class="card-header" style={{fontSize:'18px',fontWeight:"bolder",color:'rgb(79, 30, 107)',background:'white'}}>
                RECENT CHANGES
                </div>
                <p>Download</p>
                <div style={{display:"flex"}}>
                    <div><p style={{fontWeight:"bold"}}>METRIC</p></div>
                    <div style={{marginLeft:"200px"}}><p style={{fontWeight:"bold"}}>VALUE</p></div>
                </div>
                <hr className="dropdown-divider" style={{marginTop:"-15px"}}/>
                <div style={{display:"flex",fontWeight:"bold"}}>
                    <div>
                        <ul style={{listStyle:'none',marginLeft:"-30px"}}>
                            <li>New facilities added</li>
                            <li>Facilities updated</li>
                            <li>New CHUs added</li>
                            <li>CHUs updated</li>
                        </ul>
                        </div>
                        <div>
                        <ul style={{listStyle:'none',marginLeft:"90px"}}>
                        {recentChanges&&recentChanges.map((data)=>(
                                <div key={data.id}>
                                    <li>{data.value5}</li>
                                    <li>{data.value1}</li>
                                    <li>{data.value2}</li>
                                    <li>{data.value3}</li>
                                </div>
                            ))}
                        </ul>
                    </div>
                 </div>
                </div>

                {/* col3 */}
                <div class="col card" style={{minHeight:'18rem'}}>
               <div class="card-header" style={{fontSize:'18px',fontWeight:"bolder",color:'rgb(79, 30, 107)',background:'white'}}>
               FACILITY KEPH LEVEL
                </div>
                <p>Download</p>
                <div style={{display:"flex",}}><div style={{borderBottom:"solid 2px #000"}}></div>
                    <div><p style={{fontWeight:"bold"}}>METRIC</p></div>
                    <div style={{marginLeft:"200px"}}><p style={{fontWeight:"bold"}}>VALUE</p></div>
                </div>
                <hr className="dropdown-divider" style={{marginTop:"-15px"}}/>
                <div style={{display:"flex",fontWeight:'bold'}}>
                    <div>
                        <ul style={{listStyle:'none',marginLeft:"-30px"}}>
                            <li>Level </li>
                            <li>Level </li>
                            <li>Level </li>
                            <li>Level </li>
                            <li>Level </li>
                        </ul>
                        </div>
                        <div>
                        <ul style={{listStyle:'none',marginLeft:"200px"}}>
                        {facilityKephlevel&&facilityKephlevel.map((data)=>(
                                <div key={data.id}>
                                    <li>{data.value5}</li>
                                    <li>{data.value1}</li>
                                    <li>{data.value2}</li>
                                    <li>{data.value3}</li>
                                    <li>{data.value4}</li>
                                </div>
                            ))}
                        </ul>
                    </div>
                 </div>
                </div>
            </div>
        </div>

        {/* row3 */}
        {/* <div class="container" style={{marginTop:"50px"}}>
            <div class="row">
                <div className='card' style={{background:"#f2f2f2"}}>
                    <div class="card-header" style={{fontSize:'18px',fontWeight:"bolder",color:'rgb(79, 30, 107)',background:'#f2f2f2'}}>
                    FACILITIES & CHUS BY COUNTY
                    </div><br/>
                    {filteredData&&filteredData.map((data)=>(
                        <div className='card' style={{height:'35rem',marginBottom:'20px'}}>
                        <BarChart props={data.value5} props2={data.value2}/>
                    </div>
                    ))}
                </div>
            </div>
        </div>     */}
                    
        {/* row4 */}
        {/* <div class="container" style={{marginTop:"50px"}}>
            <div class="row">
                col1
                <div class="col card" style={{background:"#f2f2f2",marginRight:"20px"}}>
                <div class="card-header" style={{fontSize:'18px',fontWeight:"bolder",color:'rgb(79, 30, 107)',background:'#f2f2f2'}}>
                    FACILITY OWNERS
                </div><br/>
                {facilityType&&facilityType.map((data)=>(
                        <div className='card' style={{height:'35rem',marginBottom:'20px'}}>
                        <BarChart props={data.value3} props2={data.value2}/>
                    </div>
                    ))}
                </div>

                col2
                <div class="col card" style={{background:'#f2f2f2',marginRight:"20px"}}>
                <div class="card-header" style={{fontSize:'18px',fontWeight:"bolder",color:'rgb(79, 30, 107)',background:'#f2f2f2'}}>
                    FACILITY TYPES
                </div><br/>
                {facilityType&&facilityType.map((data)=>(
                        <div className='card' style={{height:'35rem',marginBottom:'20px'}}>
                        <BarChart props={data.value4} props2={data.value2}/>
                    </div>
                    ))}
                </div>
            </div>
        </div> */}
       <Footer/>
    </>
    );
}

export default Dashboard;