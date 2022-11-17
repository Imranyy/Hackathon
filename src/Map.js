import React, { useState,useEffect } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function Map(props) {    
    const [data,setData]=useState([]);
    const[mapIframe,setMapIframe]=useState('');
    const [locationInput,setLocationInput]=useState('');
    const handleSearch=()=>{
        const result=`https://maps.google.com/maps?q=${locationInput}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
        setMapIframe(result);
    }
    const[lat_long,setLat_long]=useState('');
    const handleSelect=(e)=>{
        let value=e.target.value;
        let _result=[];
        _result=data.filter;
        _result=data.filter((data)=>{
            return data.ward_name[0].search(value)!==-1;
        });
        _result.map((lat_long)=>{
            return setLat_long(`${lat_long.lat_long[0]},${lat_long.lat_long[1]}`);
        })
        console.log(lat_long);
        const result=`https://maps.google.com/maps?q=${lat_long}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
        setMapIframe(result);
    }
    //download gmap
    const downloadGmap=()=>{
        const map=document.querySelector('.gmap');
        var a =document.body.appendChild(document.createElement('a'));
        a.download="map.html";
        a.href="data:text/html,"+map.innerHTML;
        a.click();
    }
    //print gmap
    const printGmap=()=>{
        const map=document.querySelector('.gmap').innerHTML;
            var a = window.open('', '', 'height=500, width=600');
            a.document.write('<html>');
            a.document.write(`<body ><iframe className='gmap' width="600" height="500" id="gmap_canvas" src=${mapIframe} frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>`);
            a.document.write(map);
            a.document.write('</body></html>');
            a.document.close();
        a.print();
    }
    //get facility to display on select option tag
    const getApiData=async()=>{
        try {
            const token=sessionStorage.getItem('token');
            const url='http://api.kmhfltest.health.go.ke/api/facilities/facilities/?format=json&page_size=300';
            const response=await fetch(url,{
                method:'Get',
                headers:{
                    authorization:`bearer ${token}`,
                }
            }
        )
            const parseRes=await response.json();
            setData(parseRes.results);
            console.log(parseRes.results);
        } catch (error) {
            console.log("Error: ",error.message)
        }
    }
    useEffect(()=>{
        getApiData();
    },[]);
    const [toggleBtn,setToggleBtn]=useState(
        <>
            <button className='btn btn-info' style={{marginTop:"20px",marginLeft:'10px'}} onClick={change}>Toggle Input</button>
        </>
    );
    
   function change(){
        document.querySelector('.select').style.display='none'
        document.querySelector('.input').style.display='block'
        setToggleBtn(
            <>
                <button className='btn btn-info' style={{marginTop:"20px",marginLeft:'25px'}} onClick={change1}>Toggle Input</button>
            </>
        );
    }
    function change1(){
            document.querySelector('.select').style.display='block'
            document.querySelector('.input').style.display='none'
            setToggleBtn(
                <>
                    <button className='btn btn-info' style={{marginTop:"20px",marginLeft:'10px'}} onClick={change}>Toggle Input</button>
                </>
            );
    }
    // data.map((data)=>{
    //     console.log(data.lat_long)
    // })
    return (
        <>
        <Navbar/>
            <div className='row'>
                <div className='col-4' style={{background:'whitesmoke',height:'104vh',marginBottom:"-30px",boxShadow:'0 2px 4px 0 rgba(0,0,0,.2)'}}>
                    <div className='input' style={{display:'none'}}>
                        <div className='container' style={{display:"flex",marginTop:"20px"}}>
                            <input className="form-control me-2" type="text" onChange={(e)=>setLocationInput(e.target.value)} placeholder="Search Location" aria-label="Search"/>
                            <button className="btn btn-success" onClick={handleSearch}><span class="material-symbols-outlined">search</span></button>
                        </div>
                    </div>
                        <div className='select'>
                            <select class="form-select form-select-md" style={{marginTop:"20px",marginLeft:'10px'}} onChange={(e)=>handleSelect(e)} aria-label=".form-select-sm example">
                                <option style={{fontWeight:"bold"}} selected>Select Facility</option><br/>
                                    {data&&data.map((data)=>(
                                        <>
                                            <option style={{fontWeight:"bold"}} value={data.ward_name}>{data.county}&rarr; {data.facility_type_name}</option>
                                        </>
                                    ))}
                            </select>
                        </div>
                        {toggleBtn}
                </div>
                <div className='col'>
                    <h3 style={{marginLeft:'250px',marginTop:"20px",color:"grey"}}>Find Facility Location
                    <img src='https://cdn.vox-cdn.com/thumbor/x6e1SCOtGJc6wG4Xk9tkVJZqyws=/0x0:1280x800/1400x933/filters:focal(538x298:742x502):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/66260585/googlemaps.5.png' width='70' alt='KMHFL'/>
                    </h3><hr/>
                    {/* map iframe */}
                    <div class="mapouter" style={{position:'relative',textAlign:'right',height:'500px',width:'600px',marginLeft:'100px'}}>
                        <div class="gmap_canvas" style={{overflow:'hidden',background:'none!important',height:'500px',width:'600px'}}>
                            <iframe className='gmap' width="600" height="500" id="gmap_canvas" src={mapIframe} frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                        </div>
                    </div>
                    <div style={{display:'flex',marginTop:'20px'}}>
                        <button className="btn btn-success" onClick={downloadGmap}>Download Map <span class="material-symbols-outlined">download</span></button>
                        <button className="btn btn-success" onClick={printGmap} style={{marginLeft:"30px"}}>Print Map <span class="material-symbols-outlined">print</span></button>
                    </div>
                </div>
            </div>
        <Footer/>
        </>
    );
}

export default Map;