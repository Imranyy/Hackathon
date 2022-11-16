import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
    const clear=()=>{
        sessionStorage.removeItem('token');
        localStorage.clear();
        window.location.reload();
    }
    return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <Link to="/" class="navbar-brand" href="#"><img width="50" src="https://kmhflv3.vercel.app/MOH.png" alt="."/> <strong>KMHFL</strong></Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <Link to="/" class="nav-link active" aria-current="page">Dashboard</Link>
                </li>
                <li class="nav-item">
                <Link to="/" class="nav-link active" aria-current="page">Facilities</Link>
                </li>
                <li class="nav-item">
                <Link to="/" class="nav-link active" aria-current="page">Community Unity</Link>
                </li>
                <li class="nav-item">
                <Link to="/" class="nav-link active" aria-current="page">Users</Link>
                </li>
                <li class="nav-item">
                <Link to="/map" class="nav-link active" aria-current="page">GIS</Link>
                </li>
                <li class="nav-item">
                <Link to="/" class="nav-link active" aria-current="page">System setup</Link>
                </li>
                
                <li class="nav-item dropdown" style={{marginLeft:"50px"}}>
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Reports
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="#">Dynamic Reports</a></li>
                    <li><a class="dropdown-item" href="#">Static Reports</a></li>
                </ul>
                </li>
                <li class="nav-item">
                <Link to="/" class="nav-link disabled" href="#" tabindex="-1" >Admin Offices</Link>
                </li>
                
            </ul>
                    <button className='btn btn-dark' onClick={clear}>Log Out</button>
            </div>
        </div>
        </nav>
    </>
    );
}

export default Navbar;