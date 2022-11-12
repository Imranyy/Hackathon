import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <div className='footer' style={{background:'black',bottom:'-10px',position:'relative',width:'100%'}}>
                <div style={{display:'flex',justifyContent:'center',marginTop:'20px',paddingTop:"20px",paddingBottom:"20px"}}>
                <p style={{color:"whitesmoke"}}>KMHFL V3 Beta</p>
                <a href='https://health.go.ke/'  rel="noreferrer" target='_blank' style={{marginLeft:"20px"}}>Ministry of Health</a>
                <a href='https://healthit.uonbi.ac.ke/' rel="noreferrer" target='_blank' style={{marginLeft:"20px"}}>USAID HealthIT</a>
                <a href='http://kmhfl.health.go.ke/' rel="noreferrer" target='_blank' style={{marginLeft:"20px"}}>KMHFL v2</a>
                </div>
            </div>
    );
}

export default Footer;