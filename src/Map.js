import React from 'react';
import Navbar from './components/Navbar';

function Map(props) {
    const handleSearch=(e)=>{

    }
    return (
        <>
        <Navbar/>
            <div className='row'>
                <div className='col' style={{background:'blue',height:'88vh',boxShadow:'0 2px 4px 0 rgba(0,0,0,.2)'}}>
                    <div className='container' style={{display:"flex",marginTop:"20px"}}>
                        <input className="form-control me-2" type="text" onChange={(e)=>handleSearch(e)} placeholder="Search a facility/CHU" aria-label="Search"/>
                    </div>
                </div>
                <div className='col'>

                </div>
            </div>
            
        </>
    );
}

export default Map;