import React from 'react'
import * as Icon from 'react-feather'
import ReactWOW from 'react-wow'


export default function AddplaceoneContent() {
    return (
        <React.Fragment>
            <section className="features-area ptb-80 bg-f9f6f6" style={{paddingTop: 100, paddingBottom:0}}>
                <div className="container">
                    
                    <div className="section-title" style={{marginBottom: 30}}>
                        
                        <h2>Add or Edit your projects</h2>
                        <p> Add your new projects or edit your existing projects.</p>
                    </div>
                    
                    <div className="mb-4 d-flex justify-content-end ">
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-secondary" type="submit">Search</button>
                        </form>
                    </div>
                    
                    <div className="row">
                        <div className="col-lg-3 col-md-4">
                            <div >
                                <img src="https://storage.googleapis.com/derndoostorage/images/thumbnails/thumbnail1.jpg" alt="t1" class="img-thumbnail"/>

                                <h3>The Monument Thonglor</h3>
                                <p>โครงการใหม่ ใจกลางกรุง</p>
                                
                            </div>
                        </div>
                        
                        <div className="col-lg-9 col-md-8 overflow-auto" style={{height: '20%'}}>
                            <div className="row overflow-auto" > 
                                <div className="col-lg-4 col-md-6 ">
                                    <div className="single-features-rooms">
                                        <div className="thumbs">
                                            <img src="https://storage.googleapis.com/derndoostorage/images/thumbnails/thumb1.jpg" alt="t2" class="thumbs"/>
                                        </div>

                                        <h3>Lobby</h3>
                                        <button type="button" class="btn btn-secondary-guide-prerecord" ><Icon.Trash /></button>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="single-features-rooms">
                                        <div className="thumbs">
                                            <img src="https://storage.googleapis.com/derndoostorage/images/thumbnails/thumb2.jpg" alt="t2" class="thumbs"/>
                                        </div>

                                        <h3>Entry</h3>                                    
                                        <button type="button" class="btn btn-secondary-guide-prerecord" > <Icon.Trash /></button>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="single-features-rooms">
                                        <div className="thumbs">
                                            <img src="https://storage.googleapis.com/derndoostorage/images/thumbnails/thumb3.jpg" alt="t2" class="thumbs"/>
                                        </div>
                                        <h3>Room1</h3>                                  
                                        <button type="button" class="btn btn-secondary-guide-prerecord" > <Icon.Trash /></button>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="single-features-rooms">
                                        <div className="thumbs">
                                            <img src="https://storage.googleapis.com/derndoostorage/images/thumbnails/thumb1.jpg" alt="t2" class="thumbs"/>
                                        </div>

                                        <h3>Sport Club</h3>
                                        <button type="button" class="btn btn-secondary-guide-prerecord" > <Icon.Trash /></button>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="single-features-rooms">
                                        <div className="thumbs">
                                            <img src="https://storage.googleapis.com/derndoostorage/images/thumbnails/thumb2.jpg" alt="t2" class="thumbs"/>
                                        </div>

                                        <h3>Living Room</h3>
                                        <button type="button" class="btn btn-secondary-guide-prerecord" > <Icon.Trash /></button>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="single-features-rooms">
                                        <div className="thumbs">
                                            <img src="https://storage.googleapis.com/derndoostorage/images/thumbnails/thumb3.jpg" alt="t2" class="thumbs"/>
                                        </div>

                                        <h3>Living Room</h3>
                                        <button type="button" class="btn btn-secondary-guide-prerecord" > <Icon.Trash /></button>
                                    </div>
                                </div> 

                                <div className="col-lg-4 col-md-6 ">
                                    <div className="single-features-rooms">
                                        <div className="thumbs">
                                            <img src="https://storage.googleapis.com/derndoostorage/images/thumbnails/thumb1.jpg" alt="t2" class="thumbs"/>
                                        </div>

                                        <h3>Lobby</h3>
                                        <button type="button" class="btn btn-secondary-guide-prerecord" > <Icon.Trash /></button>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="single-features-rooms">
                                        <div className="thumbs">
                                            <img src="https://storage.googleapis.com/derndoostorage/images/thumbnails/thumb2.jpg" alt="t2" class="thumbs"/>
                                        </div>

                                        <h3>Entry</h3>                                    
                                        <button type="button" class="btn btn-secondary-guide-prerecord" > <Icon.Trash /></button>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="single-features-rooms">
                                        <div className="thumbs">
                                            <img src="https://storage.googleapis.com/derndoostorage/images/thumbnails/thumb3.jpg" alt="t2" class="thumbs"/>
                                        </div>
                                        <h3>Room1</h3>                                  
                                        <button type="button" class="btn btn-secondary-guide-prerecord" > <Icon.Trash /></button>
                                    </div>
                                </div>       
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            
            {/* <!-- End Features Area --> */}

            
        </React.Fragment>
    )
}
