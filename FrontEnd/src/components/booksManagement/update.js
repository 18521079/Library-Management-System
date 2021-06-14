import React from 'react';


export default class BookUpdate extends React.Component {


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

					

					<div className="col-md-4 col-lg-4">
 					
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