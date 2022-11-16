import React, { useState } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function Map(props) {
    const[mapIframe,setMapIframe]=useState('');
    const [locationInput,setLocationInput]=useState('');
    const handleSearch=(e)=>{
        const result=`https://maps.google.com/maps?q=${locationInput}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
        setMapIframe(result);
    }
    //download gmap
    const downloadGmap=()=>{
        const map=document.querySelector('.gmap');
        map.save();
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
    return (
        <>
        <Navbar/>
            <div className='row'>
                <div className='col-4' style={{background:'whitesmoke',height:'115vh',marginBottom:"-30px",boxShadow:'0 2px 4px 0 rgba(0,0,0,.2)'}}>
                    <div className='container' style={{display:"flex",marginTop:"20px"}}>
                        <input className="form-control me-2" type="text" onChange={(e)=>setLocationInput(e.target.value)} placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-success" onClick={handleSearch}><span class="material-symbols-outlined">search</span></button>
                    </div>
                </div>
                <div className='col'>
                    <h3 style={{marginLeft:'250px',marginTop:"20px",color:"grey"}}>Find Facility Location
                    <img src='https://cdn.vox-cdn.com/thumbor/x6e1SCOtGJc6wG4Xk9tkVJZqyws=/0x0:1280x800/1400x933/filters:focal(538x298:742x502):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/66260585/googlemaps.5.png' width='70' alt='KMHFL'/>
                    </h3><hr/>
                    {/* map iframe */}
                    <div class="mapouter" style={{position:'relative',textAlign:'right',height:'500px',width:'600px',marginLeft:'100px'}}>
                        <div class="gmap_canvas" style={{overflow:'hidden',background:'none!important',height:'500px',width:'600px'}}>
                            <iframe className='gmap' width="600" height="500" id="gmap_canvas" src={mapIframe} frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
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