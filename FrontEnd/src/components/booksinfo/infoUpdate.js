import React from 'react';
import './style.css'

export default class BooksUpdateInfo extends React.Component {


	constructor(){
		super();
		this.state = {
            id:null,
        	book:null,
			isDisplayForm : false
		};
		
	}

	handleClick=()=>{
		this.setState({isDisplayForm: !this.state.isDisplayForm})

	}

render(){

let {book}=this.props;
var elmDispayform= this.state.isDisplayForm ? <img style={{marginLeft:"35px", marginTop:"-20px", marginBottom:"20px", width:"400px"}} src={"/assets/img/"+`${book.id}`+".jpg"} />: '';


return(
	
	

<div className="thisBlock halfBlock">


						<div className="row ml1">
                        <div className="col-lg-3 ml130 mt70">
                          <div className="d-flex position-relative float-left">
                            <h1 className="section-title-1">Book Info </h1>  
                          </div>
                        </div>
						<div className="col">
						
						</div>
						</div>
						

					<div className="col-md-4 col-lg-4">
                           

						
                        </div>
						
						
							  <div className="blockBody custom">
									<div className="infoDisplay">
										<div className='row ml1'>
											<label style={{fontSize:'20px', color:'#1E90FF'}}>Name</label>
										</div>
										
                                            <div className="form-group">
                                    <input style={{marginBottom:"-15px"}} placeholder={book.name || '-'} type="text" className="form-control" name='publishingYear'  onChange={this.onChange}/>   
                                </div>
										
										
									</div>

									<div className="infoDisplay">
										<div className='row ml1'>
											<label style={{fontSize:'20px', color:'#1E90FF'}}>ID Book</label>
										</div>
										<div className='row ml1'>
										
                                            <div className="form-group">
                                    <input style={{marginBottom:"-15px"}} placeholder={book.isbn || '-'} type="text" className="form-control" name='publishingYear'  onChange={this.onChange}/>   
                                </div>
										</div>
									</div>

									<div className="infoDisplay">
										<div className='row ml1'>
											<label style={{fontSize:'20px', color:'#1E90FF'}}>Author</label>
                                            <select className="form-control"  onChange={this.updateInfo} name="author" value={this.state.author} placeholder={book.author || '-'} >
													<option value={book.author || '-'}>{book.author || '-'}</option>
													<option value={"Raoul-Gabriel"}>Raoul-Gabriel</option>
													<option value={"Macmillan"}>Macmillan</option>
													<option value={"SEDRA SMITH"}>SEDRA SMITH</option>
													<option value={"Christian Posta"}>Christian Posta</option>
													<option value={"Wiley"}>Wiley</option>
													<option value={"Kodansha"}>Kodansha</option>
												</select>
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
											<label style={{fontSize:'20px', color:'#1E90FF'}}>Edition</label>
										</div>
										<div className='row ml1'>
											<label >{book.edition || '-'} </label>
										</div>
									</div>

                                    <div className="infoDisplay">
										<div className='row ml1'>
											<label style={{fontSize:'20px', color:'#1E90FF'}}>Quantily</label>
										</div>
										<div className='row ml1'>
											<label >{book.totalcopies || '-'} </label>
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