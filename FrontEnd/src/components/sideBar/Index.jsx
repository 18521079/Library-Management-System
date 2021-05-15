import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import HomeIcon from '../common/images/home.png';
import StudentsIcon from '../common/images/students.png';
import BooksIcon from '../common/images/books.png';
import ReturnIcon from '../common/images/return.png';


export default class SideBar extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			activeState: window.location.pathname.substring(1),
			visi:false

		};
		if(window.location.pathname.substring(1) === ''){
			this.state = {
				activeState: 'home'
			};
		}

		if(window.location.pathname.includes('book')){
			this.state = {
				activeState: 'books'
			};
		}

	}

	setActive(state) {
		this.setState({activeState:state});
	}

	render(){
		let {visi}=this.state;
		return(
			<div >
				<div id="mySidenav" className='sidenav' onMouseEnter={()=>	this.setState({visi:true})} onMouseLeave={()=>this.setState({visi:false})}>
					<Link to="/home" className={this.state.activeState === 'home' || this.state.activeState === '' ? 'sideNavItem activeSideItem': 'sideNavItem'}
						   onClick={() => { this.setActive('home');}} draggable="false">
	
						<i style={{fontSize:"1.8em"}} className="fas fa-home" alt="Home" draggable="false" /> &nbsp; Home

						
						<br/><div className={visi?"visib":"invisib"}>&nbsp;</div>
					</Link>
					<Link to="/books" className={this.state.activeState === 'books' || this.state.activeState === '' ? 'sideNavItem activeSideItem': 'sideNavItem'}
						   onClick={() => { this.setActive('books');}} draggable="false">
						<i style={{fontSize:"1.8em"}} className="fas fa-book-open" alt="Home" draggable="false" /> &nbsp; Management Books
						<br/><div className={visi?"visib":"invisib"}>&nbsp;</div>
					</Link>
					<Link to="/return" className={this.state.activeState === 'return' || this.state.activeState === '' ? 'sideNavItem activeSideItem': 'sideNavItem'}
						   onClick={() => { this.setActive('return');}} draggable="false">
						<img src={ReturnIcon} alt="Return Book" draggable="false" />Return
						<br/><div className={visi?"visib":"invisib"}>&nbsp;</div>
					</Link>
					<Link to="/students" className={this.state.activeState === 'students' || this.state.activeState === '' ? 'sideNavItem activeSideItem': 'sideNavItem'}
						   onClick={() => { this.setActive('students');}} draggable="false">
						<img src={StudentsIcon} alt="Students" draggable="false" />Student
						<br/><div className={visi?"visib":"invisib"}> &nbsp;</div>
					</Link>
					
				</div>
			</div>
		)
	}
}
