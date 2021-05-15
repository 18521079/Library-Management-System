import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import logoGrey from '../common/images/logo1.png';
import logOut from '../common/images/logout.png';

export default class NavBar extends React.Component{
    render(){

        return(
	        <div id="navBar">
		        <ul style={{height:'100%'}}>
			        <li className="logo" style={{margin:'0px 0px 0px 0px',padding:'0px 0px 0px 0px'}}>
				        <Link to="/" draggable="false" >
					        <img className="navIcon" src={logoGrey} alt="logo" draggable="false" style={{height:'45px', width:'180px',marginTop:'2px',marginLeft:'3px'}} />
				        </Link>
			        </li>
			        <li className="navItem logout" style={{marginTop:'10px'}} >
					<a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						<span className="mr-2 d-none d-lg-inline text-gray-600 small">Khánh Ly</span>
						<img style={{width:'35px', height:'35px'}}className="img-profile rounded-circle" src="assets/img/avata.jpg" />
					</a>
			        </li>

					<li>
					<form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search ml7 mt1">
						<div className="input-group">
							<input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
							<div className="input-group-append">
							<button className="btn btn-primary" type="button">
								<i className="fas fa-search fa-sm" />
							</button>
							</div>
						</div>
					</form>
					</li>

					<li className="nav-Item">
  <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
    <i className="fas fa-fw fa-cog" />
    <span>Components</span>
  </a>
  <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
    <div className="bg-white py-2 collapse-inner rounded">
      <h6 className="collapse-header">Custom Components:</h6>
      <a className="collapse-item" href="buttons.html">Buttons</a>
      <a className="collapse-item" href="cards.html">Cards</a>
    </div>
  </div>
</li>
		        </ul>
	        </div>
        )
    }
}