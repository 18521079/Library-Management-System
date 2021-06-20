import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'

export class parameters extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div className="pageView">
                <div style={{marginTop:"50px"}} className="d-flex position-relative float-left">
                            <h1 className="section-title-info">Default parameters</h1>
            
										
                          </div>
                          <div className="row">
                              <div className="col-2">
                          <div  style={{marginTop:"120px"}}>
                          <label style={{fontSize:'20px', color:'#1E90FF', marginLeft:"-270px"}}>Max borrow time</label>
										<div style={{ marginLeft:"-270px"}}>
											<input style={{ marginLeft:"-370px"}} style={{width:"340px"}}  placeholder="15" type="text" className="form-control" name='publishingYear'  onChange={this.onChange}/>
                                            </div>
                                            <label style={{fontSize:'20px', color:'#1E90FF', marginLeft:"-270px", marginTop:"10px"}}>Fine for one date</label>
										
                                            <div style={{ marginLeft:"-270px"}}>
											<input style={{ marginLeft:"-370px"}} style={{width:"340px"}}  placeholder="0.1$" type="text" className="form-control" name='publishingYear'  onChange={this.onChange}/>
                                            </div>

                                            <label style={{fontSize:'20px', color:'#1E90FF', marginLeft:"-270px", marginTop:"10px"}}>Max borrow books</label>
										
                                        <div style={{ marginLeft:"-270px"}}>
                                        <input style={{ marginLeft:"-370px"}} style={{width:"340px"}}  placeholder="3" type="text" className="form-control" name='publishingYear'  onChange={this.onChange}/>
                                        </div>

                                        <label style={{fontSize:'20px', color:'#1E90FF', marginLeft:"-270px", marginTop:"10px"}}>Max Reader Ages</label>
										
                                        <div style={{ marginLeft:"-270px"}}>
                                        <input style={{ marginLeft:"-370px"}} style={{width:"340px"}}  placeholder="18" type="text" className="form-control" name='publishingYear'  onChange={this.onChange}/>
                                        </div>

                                        <label style={{fontSize:'20px', color:'#1E90FF', marginLeft:"-270px", marginTop:"10px"}}>Min Reader Ages</label>
										
                                        <div style={{ marginLeft:"-270px"}}>
                                        <input style={{ marginLeft:"-370px"}} style={{width:"340px"}}  placeholder="55" type="text" className="form-control" name='publishingYear'  onChange={this.onChange}/>
                                        </div>
                            </div>
                            </div>

                            <div className="col-4">
                             <img src="assets/img/imgbook.png"></img>
                            </div>
                           </div>
               
            </div>
        )
    }
}

export default parameters
