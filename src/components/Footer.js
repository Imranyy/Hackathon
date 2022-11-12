import React from 'react';
import { Link } from 'react-router-dom';
import coffee from '../media/beverage.png';

function Footer(props) {
    const buyMe=()=>{
    const show=document.querySelector('.show');
        show.style.opacity='1';
    }    
    const leaveBuyMe=()=>{
    const show=document.querySelector('.show');
        show.style.opacity='0';
    }    
    return (
        <div className='footer' style={{background:'#eee',bottom:'-10px',position:'relative',width:'100%'}}>
            <div className='grid-footer' style={{marginLeft:'5%'}}><br/>
                <div >
                    <h3 style={{color:'black',fontFamily:'monospace'}}><u>Stay In touch</u></h3>
                    <ul style={{fontFamily:'monospace'}}>
                        <li>Send me an <a href='mailto:imranmat254@gmail.com' target='_blank' rel="noreferrer">email</a>.</li>
                        <li>Lets Chat on <a href='https://wa.me/+254754423664' style={{color:'green'}}  rel="noreferrer" target='_blank'>Whatsapp</a>.</li>
                        <li>Follow me on <a href='https://instagram.com/imrany00' style={{color:'red'}} rel="noreferrer" target='_blank'>Instagram</a>.</li>
                        <li>Follow me on <a href='https://twitter.com/imran_matano' style={{color:'purple'}} rel="noreferrer" target='_blank'>Twitter</a>.</li>
                    </ul>
                </div>
                <Link to='/support' style={{display:'flex',marginTop:'-13px',marginBottom:'10px'}}><div className='buy-me' onMouseOver={buyMe} onMouseLeave={leaveBuyMe} style={{background:'rgb(9, 78, 78)',width:'50px',paddingTop:'4px',paddingLeft:'5px',height:'50px',borderRadius:'200px'}}><img alt='BuyMeCoffee' width='40px' height='40px' src={coffee}/></div> <div className='show' style={{opacity:'0',marginTop:'10px',marginLeft:'10px'}}>Buy me coffee</div></Link>
                <p style={{fontFamily:'monospace'}}>Call 0754423664</p>
                <br/>
                <div style={{display:'flex',justifyContent:'center'}}>
                <a href='mailto:imranmat254@gmail.com' target='_blank' rel="noreferrer"><span class="material-symbols-outlined">mail</span></a>
                <a href='https://wa.me/+254754423664'  rel="noreferrer" target='_blank'><span style={{marginLeft:'50px'}} class="material-symbols-outlined">chat</span></a>
                <a href='https://instagram.com/imrany00' rel="noreferrer" target='_blank'><span style={{marginLeft:'50px'}} class="material-symbols-outlined">recommend</span></a>
                <a href='https://twitter.com/imran_matano' rel="noreferrer" target='_blank'><span style={{marginLeft:'50px'}} class="material-symbols-outlined">forum</span></a>
                </div><br/>
            </div>
        </div>
    );
}

export default Footer;