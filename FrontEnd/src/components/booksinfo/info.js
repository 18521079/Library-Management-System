import React from 'react';


export default class BooksInfo extends React.Component {


	constructor(){
		super();
		this.state = {
            id:null,
        	book:null
		};
		
	}



render(){

let {book}=this.props;


return(

<div className="thisBlock halfBlock">


						<div className="row ml1">
                        <div className="col-lg-3 ml130 mt70">
                          <div className="d-flex position-relative float-left">
                            <h1 className="section-title-1">Book Info</h1>
                          </div>
                        </div>
                      </div>

					{/*<img style={{height:"300px", width:"280px"}} src="https://res.cloudinary.com/tech-stories/image/upload/v1565403761/Screen_Shot_2019-07-31_at_4.04.44_PM_yweslw.png"></img> */}

					<div className="col-md-4 col-lg-4">
                           {/* <div className="card_ card-info" style={{width: '18rem'}}>
                                <img src={img} className="card-img-top" alt="..." />
                                <div className="card-body">
                                <h5 className="card-title">{headerTitle}</h5>
                                <p className="card-text">{headerText}</p>
                                <Link
                                onClick={()=>value.handleDetail(id)}
                                 to="/details" className="btn btn-outline-primary text-newbook">More Infor...</Link>
                                </div>
                            </div>
                            */}

<div className="profile-card" style={{width: '280px', height:"330px"}}>
        <div className="profile-img">
          <img style={{width:'280px !important', height:'330px'}}src="https://res.cloudinary.com/tech-stories/image/upload/v1565403761/Screen_Shot_2019-07-31_at_4.04.44_PM_yweslw.png" />
        </div>
        <div className="profile-content">
          <h2 className="title">{book.name || '-'}
            <span style={{color:"rgb(168, 173, 173)"}}> Author: {book.author || '-'} </span>
			<span style={{color:"rgb(168, 173, 173)"}}>Publisher: {book.publisher || '-'}</span>
			<span style={{color:"rgb(168, 173, 173)"}}>Type: {book.type || '-'}</span>
			<span style={{color:"rgb(168, 173, 173)"}}>Prince Year: {book.printyear || '-'}</span>
			
          </h2>
        </div>
      </div>
                        </div>

								 
							  <div className="blockBody custom">
									<div className="infoDisplay">
										<div className='row ml1'>
											<label style={{fontSize:'20px', color:'#1E90FF'}}>Name</label>
										</div>
										<div className='row ml1'>
											<label >{book.name || '-'} </label>
										</div>
										
									</div>

									<div className="infoDisplay">
										<div className='row ml1'>
											<label style={{fontSize:'20px', color:'#1E90FF'}}>ID Book</label>
										</div>
										<div className='row ml1'>
											<label >{book.isbn || '-'} </label>
										</div>
									</div>

									<div className="infoDisplay">
										<div className='row ml1'>
											<label style={{fontSize:'20px', color:'#1E90FF'}}>Author</label>
										</div>
										<div className='row ml1'>
											<label >{book.author || '-'} </label>
										</div>
									</div>

									<div className="infoDisplay">
										<div className='row ml1'>
											<label style={{fontSize:'20px', color:'#1E90FF'}}>Publisher</label>
										</div>
										<div className='row ml1'>
											<label >{book.publisher || '-'} </label>
										</div>
									</div>
								

									<div className="infoDisplay">
										
										<div className='row ml1'>
											<label style={{fontSize:'20px', color:'#1E90FF'}}>Print Year</label>
										</div>
										<div className='row ml1'>
											<label >{book.printyear || '-'} </label>
										</div>
									</div>
										
									
									<div className="infoDisplay">
										<div className='row ml1'>
											<label style={{fontSize:'20px', color:'#1E90FF'}}>The number of Books</label>
										</div>
										<div className='row ml1'>
											<label >{book.totalcopies || '-'} </label>
										</div>
									</div>

									<div className="infoDisplay">
										<div className='row ml1'>
											<label style={{fontSize:'20px', color:'#1E90FF'}}>Available Books</label>
										</div>
										<div className='row ml1'>
											<label >{book.availablecopies || '-'} </label>
										</div>
									</div>

									<div className="infoDisplay">
										<div className='row ml1'>
											<label style={{fontSize:'20px', color:'#1E90FF'}}>Type</label>
										</div>
										<div className='row ml1'>
											<label >{book.type || '-'} </label>
										</div>
									</div>

									<div className="infoDisplay">
										<div className='row ml1'>
											<label style={{fontSize:'20px', color:'#1E90FF'}}>Price</label>
										</div>
										<div className='row ml1'>
											<label >{book.price || '-'} </label>
										</div>
									</div>

									<div className="infoDisplay">
										<div className='row ml1'>
											<label style={{fontSize:'20px', color:'#1E90FF'}}>Additionals</label>
										</div>
										<div className='row ml1'>
											<label >{book.additionals || '-'} </label>
										</div>
									</div>
									
									
				</div>
																	
														    
												
												
 </div>




	)




}










}//class closed 