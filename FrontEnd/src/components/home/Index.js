import React from 'react';
import List from "./List";
import './style.css'
import './style.scss'

export default class Home extends React.Component{

	

constructor(){
		super();
		this.state = {

			bookList:[],
			totalbookList:[],
			total:'',
			issued:'',
			students:'',
			avl:'',
			fetched:false,

		};
		
	}



fetchAllBooks=()=>{

}


fetchBooks=()=>{

fetch('https://stark-hamlet-65683.herokuapp.com/getissuereturn', {
      method: 'get',
      headers: {'Content-Type': 'application/json'}
  }).then(response=>response.json()).then(data=>{if(data)this.setState({fetched:true,bookList:data,issued:data.filter(function(x){return !x.return}).length})})




	}
countBooks=()=>{

fetch('https://stark-hamlet-65683.herokuapp.com/countbook', {
      method: 'get',
      headers: {'Content-Type': 'application/json'}
  }).then(response=>response.json()).then(data=>{if(data)this.setState({total:data[0].count})})




	}
	countavlBooks=()=>{

fetch('https://stark-hamlet-65683.herokuapp.com/countavlbook', {
      method: 'get',
      headers: {'Content-Type': 'application/json'}
  }).then(response=>response.json()).then(data=>{if(data)this.setState({avl:data[0].count})})




	}



	countStudents=()=>{

fetch('https://stark-hamlet-65683.herokuapp.com/countstudent', {
      method: 'get',
      headers: {'Content-Type': 'application/json'}
  }).then(response=>response.json()).then(data=>{if(data)this.setState({students:data[0].count})})




	}


	componentDidMount(){


	this.fetchBooks();
	this.countBooks();
	this.countavlBooks();
	this.countStudents();
}




	render(){



		return(
			<div className="pageView">

<div className="row mt5">
  {/* Earnings (Monthly) Card Example */}
  <div className="col-xl-3 col-md-6 mb-4">
    <div className="card border-left-primary shadow h-100 py-2">
      <div className="card-body">
        <div className="row no-gutters align-items-center">
          <div className="col mr-2">
            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
            Books</div>
            <div className="h5 mb-0 font-weight-bold text-gray-800">{this.state.total || 0}</div>
          </div>
          <div className="col-auto">
            <i style={{color:'#6699FF'}} className="fas fa-book-open fa-2x text-gray-300" />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Earnings (Monthly) Card Example */}
  <div className="col-xl-3 col-md-6 mb-4">
    <div className="card border-left-success shadow h-100 py-2">
      <div className="card-body">
        <div className="row no-gutters align-items-center">
          <div className="col mr-2">
            <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
            Issued</div>
            <div className="h5 mb-0 font-weight-bold text-gray-800">{this.state.issued || 0}</div>
          </div>
          <div className="col-auto">
            <i style={{color:'#1cc88a'}} className="far fa-id-card fa-2x text-gray-300" />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Earnings (Monthly) Card Example */}
  <div className="col-xl-3 col-md-6 mb-4">
    <div className="card border-left-info shadow h-100 py-2">
      <div className="card-body">
        <div className="row no-gutters align-items-center">
          <div className="col mr-2">
            <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Available
            </div>
            <div className="row no-gutters align-items-center">
              <div className="col-auto">
                <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">{this.state.avl || 0}</div>
              </div>
              <div className="col">
                <div className="progress progress-sm mr-2">
                  <div className="progress-bar bg-info" role="progressbar" style={{"width":"50%"}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-auto">
            <i style={{color:'#36b9cc'}} className="fas fa-clipboard-list fa-2x text-gray-300" />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Pending Requests Card Example */}
  <div className="col-xl-3 col-md-6 mb-4">
    <div className="card border-left-warning shadow h-100 py-2">
      <div className="card-body">
        <div className="row no-gutters align-items-center">
          <div className="col mr-2">
            <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
            Students</div>
            <div className="h5 mb-0 font-weight-bold text-gray-800">18</div>
          </div>
          <div className="col-auto">
            <i style={{color:'#f6c23e'}} className="fas fa-user-graduate fa-2x text-gray-300" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* Content Row */}


{/* Content Row */}
<div className="row">
 {/* Content Column */}
<div className="col-lg-6 mb-4">
  {/* Project Card Example */}
  <div className="card shadow mb-4">
    <div className="card-header py-3">
      <h6 className="m-0 font-weight-bold text-primary">Most popular</h6>
    </div>
    <div className="card-body">
      <h4 className="small font-weight-bold">DATA COMMUNICATIONS AND NETWORKS <span className="float-right">20 ISSUED</span></h4>
      <div className="progress mb-4">
        <div className="progress-bar bg-danger" role="progressbar" style={{"width":"20%"}} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} />
      </div>
      <h4 className="small font-weight-bold">Sales Tracking <span className="float-right">40 ISSUED</span></h4>
      <div className="progress mb-4">
        <div className="progress-bar bg-warning" role="progressbar" style={{"width":"40%"}} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} />
      </div>
      <h4 className="small font-weight-bold">Customer Database <span className="float-right">40 ISSUED</span></h4>
      <div className="progress mb-4">
        <div className="progress-bar" role="progressbar" style={{"width":"60%"}} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
      </div>
      <h4 className="small font-weight-bold">Payout Details <span className="float-right">40 ISSUED</span></h4>
      <div className="progress mb-4">
        <div className="progress-bar bg-info" role="progressbar" style={{"width":"80%"}} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
      </div>
      <h4 className="small font-weight-bold">Payout Details <span className="float-right">40 ISSUED</span></h4>
      <div className="progress mb-4">
        <div className="progress-bar bg-info" role="progressbar" style={{"width":"80%"}} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
      </div>
     
    </div>
  </div>
</div>

<div className="col-lg-6 mb-4">
  {/* Illustrations */}
  <div className="card shadow mb-4">
    <div className="card-header py-3">
      <h6 className="m-0 font-weight-bold text-primary">Library introduction</h6>
    </div>
    <div className="card-body">
      <div className="text-center">
        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{"width":"25rem", height:'185px'}} src="assets/img/1.png" alt="..." />
      </div>
      <p>Library is an application that provides users with access to books from wherever they are. Being a virtual library, users can borrow and read their favorite books using any device.</p>
    </div>
  </div>
</div>

</div>

      <div className="row">
                        <div className="col-lg-3 ml130 mt70">
                          <div className="d-flex position-relative float-left">
                            <h1 className="section-title">Currently Issued Books</h1>
                          </div>
                        </div>
                      </div>
			
			<List className="mb5" fetchBooks={this.fetchBooks} books={this.state.bookList} fetched={this.state.fetched} />
			
      {/*test*/ }
      <div className="row mt5">

      </div>
      <div className='row'>
        <div className='col'></div>
      <div className="col ">
      <ul class=" ml5 pagination">
        <li className="page-item"><a class="page-link" href="#">Previous</a></li>
        <li className="page-item"><a class="page-link" href="#">1</a></li>
        <li className="page-item"><a class="page-link" href="#">2</a></li>
        <li className="page-item"><a class="page-link" href="#">3</a></li>
        <li className="page-item"><a class="page-link" href="#">4</a></li>
        <li className="page-item"><a class="page-link" href="#">5</a></li>
        <li className="page-item"><a class="page-link" href="#">Next</a></li>
     </ul>
    </div>
    </div>
      
			</div>)
	}
}