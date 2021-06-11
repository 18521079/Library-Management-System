import React, {useState } from 'react';
import './style.css'
import { toast } from 'react-toastify';	
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import TextField from '@material-ui/core/TextField';
import { Multiselect } from 'multiselect-react-dropdown';


export default class Filters extends React.Component {

/*eslint-disable no-unused-expressions */
	constructor(){
		super();
		this.state = {
			bookList:[],
			search:'',
			date: new Date(),
			options: [{name: 'Raoul-Gabriel Urma', id: 1},
			{name: 'SEDRA SMITH', id: 2},
			{name: 'Benjamin Evans', id: 3},
			{name: 'Arun Gupta', id: 4},
			{name: 'Christian Posta', id: 5}
		]

		};
		
		
	}


	
	



	updateInfo = (event) =>{
		let fieldName = event.target.name;
		let fieldValue = event.target.value;
		if(fieldName === 'bookname') {
			this.setState({bookname: fieldValue});
		}
		else if(fieldName === 'author'){
			this.setState({author:fieldValue});
		}
		else if(fieldName === 'isbn'){
			this.setState({isbn:fieldValue});
			
		}else if(fieldName === 'publisher'){
			this.setState({publisher:fieldValue});
			
		}else if(fieldName === 'copyrightyear'){
			this.setState({copyrightyear:fieldValue});
			
		}else if(fieldName === 'edition'){
			this.setState({edition:fieldValue});
			
		}else if(fieldName === 'printyear'){
			this.setState({printyear:fieldValue});
			
		}else if(fieldName === 'stackno'){
			this.setState({stackno:fieldValue});
			
		}else if(fieldName === 'volume'){
			this.setState({volume:fieldValue});
			
		}else if(fieldName === 'accessionno'){
			this.setState({accessionno:fieldValue});
			
		}else if(fieldName === 'pages'){
			this.setState({pages:fieldValue});
			
		}else if(fieldName === 'totalcopies'){
			this.setState({totalcopies:fieldValue});
			
		}else if(fieldName === 'availablecopies'){
			this.setState({availablecopies:fieldValue});
			
		}else if(fieldName === 'type'){
			this.setState({type:fieldValue});
			
		}else if(fieldName === 'price'){
			this.setState({price:fieldValue});
			
		}else if(fieldName === 'additionals'){
			this.setState({additionals:fieldValue});
			
		}
		else if(fieldName === 'search'){
			this.setState({searchDevice:fieldValue});
			this.props.searchbook(fieldValue);
			
		}

	
         
	};


	add=(e)=>{

		let {bookname,isbn,author,publisher,copyrightyear,edition,printyear,stackno,volume,accessionno,pages,totalcopies,type,price,additionals}=this.state;
		this.props.addBook(bookname,isbn,author,publisher,copyrightyear,edition,printyear,stackno,volume,accessionno,pages,totalcopies,totalcopies,type,price,additionals);
		Filters.hideModal();

		this.props.fetchBooks();
		this.setState({bookname:'',isbn:'',author:'',publisher:'',copyrightyear:'',edition:'',printyear:'',stackno:'',volume:'',accessionno:'',pages:'',totalcopies:'',availablecopies:'',type:'',price:'',additionals:''})

	}

	static showModal(){
		document.getElementById("addBook").showModal();
	}
	static hideModal(){
		document.getElementById("addBook").close();
	}
	
	static preventHide(e){
		e.stopPropagation();
	}


        
	render(){
		
let cList,uList,aList;
let wid='20vw';

		

		return(
			<div className="pageRow filters">
				<div className="thisBlock">
					<div className="blockTitle">
                        
                    <div className="row">
                        <div className="col-lg-3 ml130 mt70">
                          <div className="d-flex position-relative float-left">
                            <h1 className="section-title_4">Book List</h1>
                          </div>
                        </div>
                      </div>

                    {/*this is button add books*/}
					  <div className="row">
						  <div className='col-6'>

					  <div className="text-center ml-288"><button onClick={Filters.showModal} style={{fontSize:'1.1em'}} className="btn  btn_normal mr5 mb3 mt3" >
                                                <i className="fas fa-plus-circle"></i>  &nbsp; &nbsp; Add books
                                </button></div>
								</div>

								{/*this is search*/}	
								<div className="input-group rounded col">
									<input value={this.state.searchDevice}  type="search" className="form-control rounded" placeholder="Search by Book Info" autoComplete="off" name="search" onChange={this.updateInfo}  aria-label="Search"
										aria-describedby="search-addon" />
								
										<i style={{fontSize:'1.5em'}} className="fas fa-search"></i>
							
								</div>	

					  </div>



									<dialog id="addBook" className="dialogBox" onClick={Filters.hideModal} style={{width:'70vw'}}>
										<div style={{background:'#282829'}} className="dialogTitle" onClick={Filters.preventHide}>
											Add New Book
                                            
											<button onClick={Filters.hideModal}>X</button>
										</div>
										<div style={{background:'white'}} className="dialogBody" onClick={Filters.preventHide} >

										<div style={{width:wid}}>
												<label> <i class="far fa-calendar-alt"></i> Add date </label>
												<DatePicker className="form-group form-control boder-color "
													selected={this.state.date}
													onChange={this.onChangeDate}
													/>
											</div>
											
											<div style={{width:wid}}>
												<label >Image</label>
												<label htmlFor="file" className="shareOption">
													 <input  id="file" class="form-control" type="file" id="formFileMultiple"  accept=".png,.jpeg,.jpg" multiple />
													
												</label>
											</div>

											<div style={{width:wid}}>
												<label>Name *</label>
											{/*	<div className="form-outline">
												<input onChange={this.updateInfo} name="bookname" value={this.state.bookname} type="text" id="form1" className="form-control"/>
												</div>
												{/*<div className="form-outline">
													<input onChange={this.updateInfo} name="bookname" value={this.state.bookname} type="text" id="form1" className="form-control" />
												
												</div> */}

								<div className="form-outline">
													<input onChange={this.updateInfo} name="bookname" value={this.state.bookname} type="text" id="form1" className="form-control" />
												
												</div> 
									
									
											</div>

											<div style={{width:wid}}>
												<label >ID</label>

												<div className="form-outline">
												<input onChange={this.updateInfo} name="isbn" value={this.state.isbn} type="text" id="form1" className="form-control"/>
												</div>

											</div>


											<div style={{width:wid}}>
												<label>Author *</label>

												{/*<div className="form-outline">
												<input onChange={this.updateInfo} name="author" value={this.state.author} type="text" id="form1" className="form-control"/>
												</div>
											*/}
											
											<Multiselect
												options={this.state.options} // Options to display in the dropdown
												selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
												onSelect={this.onSelect} // Function will trigger on select event
												onRemove={this.onRemove} // Function will trigger on remove event
												displayValue="name" // Property name to display in the dropdown options
												showCheckbox="bool"
												hidePlaceholder="bool"
												/>


											</div>
											<div style={{width:wid}}>
												<label>Publisher</label>

												{/*<div className="form-outline">
												<input onChange={this.updateInfo} name="publisher" value={this.state.publisher} type="text" id="form1" className="form-control"/>
												</div>
										*/}

<div className="form-group">
									  <select name='publisher' value={this.state.publisher} onClick= {this.onClick} className="form-control" required="required"  placeholder="Category" >
                                        <option value={1}>Hachette Livre</option>
                                        <option value={0}>HarperCollins</option>
                                        <option value={2}>Macmillan</option>
										<option value={3}>Pearson</option>
										<option value={4}>Scholastic</option>
										<option value={5}>Wiley</option>
										<option value={6}>Kodansha</option>
                                      </select>
									</div>

											</div>
											
											<div style={{width:wid}}>
												<label>Print Year</label>

												<div className="form-outline">
												<input onChange={this.updateInfo} name="printyear" value={this.state.printyear} type="text" id="form1" className="form-control"/>
												
												</div>

											</div>
											
											<div style={{width:wid}}>
												<label>Volume</label>

												<div className="form-outline">
												<input onChange={this.updateInfo} name="volume" value={this.state.volume} type="text" id="form1" className="form-control"/>
												</div>

											</div>
											
											
											<div style={{width:wid}}>
												<label>Quantily*</label>

												<div className="form-outline">
												<input onChange={this.updateInfo} name="totalcopies" value={this.state.totalcopies} type="text" id="form1" className="form-control"/>
												</div>
											</div>
											
											<div style={{width:wid}}>
												<label>Type</label>

												{/*<div className="form-outline">
												<input onChange={this.updateInfo} name="type" value={this.state.type} type="text" id="form1" className="form-control"/>
												</div>
											*/}
 									<div className="form-group">
									  <select name='publisher' value={this.state.publisher} onClick= {this.onClick} className="form-control" required="required"  placeholder="Category" >
                                        <option value={1}>Programming</option>
                                        <option value={0}>Mathematics</option>
                                        <option value={2}>Supporting Fields</option>
										<option value={3}>Operating System</option>
										<option value={4}>Computer Science</option>
										<option value={5}>Operating System</option>
										<option value={6}>Miscellaneous</option>
                                      </select>
									</div>


											</div>
											<div style={{width:wid}}>
												<label>Price</label>

												<div className="form-outline">
												<input onChange={this.updateInfo} name="price" value={this.state.price} type="text" id="form1" className="form-control"/>
												</div>

											</div>
											<div style={{width:wid}}>
												<label>Additionals</label>

												<div className="form-outline">
												<input onChange={this.updateInfo} name="additionals" value={this.state.additionals} type="text" id="form1" className="form-control"/>
												</div>

											</div>
											
										
											
										
										
											{/* <button onClick={this.add} disabled={!this.state.bookname || !this.state.author||!this.state.totalcopies}>Add</button> */}
											<button style={{fontSize:"19px"}} className="btn  btn_normal ml618 mr5 mt1 mb2" onClick={this.add} disabled={!this.state.bookname || !this.state.author||!this.state.totalcopies}>
                                       			 <i className="fa fa-plus"></i>  &nbsp;  &nbsp;&nbsp; &nbsp; &nbsp; Add
                                    		</button>
											{/*<button onClick={Filters.hideModal}>Cancel</button> */}
											
											<button  style={{fontSize:"19px"}} className="btn btndefaul ml25 mt1 mb2">
												<i className="fas fa-times-circle mr-2"></i> &nbsp;Cancel
											</button>

											</div>
                                
										
									</dialog>

					</div>
					</div>
			</div>
		)
	}
}