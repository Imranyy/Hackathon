import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
function Login(props) {   
    const navigate=useNavigate();
    const [seepassword,setSeePassword]=useState(<input type="password" className='form-control me-2' onChange={(e) => setPassword(e.target.value)} placeholder='********' required />);
    const [error,setError]=useState('');
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [loginButton,setLoginButton]=useState(<button className='btn btn-success container'>Login</button>);
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const form=document.querySelector('.form');
        try {
            //const passCode=`${window.btoa(username)}:${window.btoa(password)}`;
            const passCode=`${window.btoa('5O1KlpwBb96ANWe27ZQOpbWSF4DZDm4sOytwdzGv:PqV0dHbkjXAtJYhY9UOCgRVi5BzLhiDxGU91kbt5EoayQ5SYOoJBYRYAYlJl2RetUeDMpSvhe9DaQr0HKHan0B9ptVyoLvOqpekiOmEqUJ6HZKuIoma0pvqkkKDU9GPv')}`;
            const  client_id="lhRuA5CuWRqB9diSH2xaLx44V4C5rnvlHk5ybOaE";
            const client_secret="LC4L2x8Ml2Ox5lgFC00sdkqHGUieMDcCLkxGOlIst8Z2tVO4V1D5FcGtYjmecjvG8V7mY5YA9Yi4XgBNliqOGJWwn8Af5s71DB0HjoFb1lYSFbFAYGInbuSYCE2OsJkU";
            setLoginButton(<button className='btn btn-dark container' disabled><i>Loading . . .</i></button>)
            const url='https://api.kmhfltest.health.go.ke/o/token/';
            const response=await fetch(url,{
                method:"POST",
                //grant_type=password&username=&password=&scope=read
                //grant_type=password&username=test@testmail.com&password=Test@1234&scope=read
                body: `grant_type=password&username=${username}&password=${password}&scope=read`,
                //body:`grant_type=client_credentials&client_id=${client_id}&client_secret=${client_secret}`,
                headers:{
                    "content-type":"application/x-www-form-urlencoded",
                    Authorization:`Basic ${passCode}`
                }
            })
            const parseRes=await response.json();
            console.log(parseRes);
            localStorage.setItem('token',parseRes.access_token);
            //redirect to dashboard
            //navigate('/dashboard');
            window.location.reload();
            setLoginButton(<button className='btn btn-success container'>Login</button>);
        } catch (error) {
            form.reset();
            console.log(error.message);
            //display error message to user
            setError(<div className='card' style={{backgroundColor:'pink', color:'black',fontWeight:'bold',paddingLeft:'10px',paddingTop:'10px',height:"3rem"}}>{error.message}</div>);
            //removes the error message after 5 secs
            setInterval(()=>{
                setError('');
            },5000)
            
        }
    }
    const seePassword=()=>{
        setSeePassword(<input type="text" className='form-control me-2' onChange={(e) => setPassword(e.target.value)} placeholder='********' required />);
        setInterval(()=>{
            setSeePassword(<input type="password" className='form-control me-2' onChange={(e)=>setPassword(e.target.value)} placeholder='********' required/>)
        },5000)
    }
    return (
        <>
         <div className='login'>
            <div className='login-form'>
              {error}
                <div style={{display:'flex'}}>
                    <img src="https://kmhflv3.vercel.app/MOH.png" width='75' height='70' alt='khmfl'/> 
                    <h1 style={{fontWeight:'bolder',marginTop:"13px"}}>KMHFL-VBeta</h1>
                </div><br/>
                <div style={{display:'flex',fontWeight:'bolder',fontSize:'19px'}}><Link to="/dashboard" style={{color:'green',textDecoration:'none'}}>&larr; Back Home</Link></div>
                <div className='card'>
                    <h3 align="center" style={{fontWeight:'bolder',marginTop:'10px'}}>LOG IN</h3>
                    <form onSubmit={handleSubmit} className="form" style={{paddingLeft:'20px',paddingBottom:"20px",paddingRight:'20px'}}>
                        <label>Username</label>
                        <input className="form-control me-2" type="email" onChange={(e)=>setUsername(e.target.value)} required placeholder="you@geemail.com"/><br/>
                        <label>Password</label> 
                        <div style={{display:'flex'}}>{seepassword} <button type='button' className='btn btn-dark' onClick={seePassword}><span class="material-symbols-outlined">visibility</span></button></div><br/>
                        {loginButton}   
                        <a style={{textDecoration:'none',float:'right',marginTop:'20px',color:'GrayText'}} href="http://admin.kmhfltest.health.go.ke/#/reset_pwd" target="_blank">Forgot password?</a>         
                    </form>
                </div>
            </div>
         </div>   
        </>
    );
}

export default Login;